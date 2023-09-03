#!/bin/bash

if ! [ -x "$(command -v docker-compose)" ]; then
  echo "Erreur : docker-compose n'est pas installé." >&2
  exit 1
fi

domains=(--le-domaine.com-- --le-domaine.com--)
rsa_key_size=4096
data_path="./docker/nginx/certbot"
email="" # Adding a valid address is strongly recommended
staging=1 # Mettez 1 si vous testez votre configuration pour éviter d'atteindre les limites de requêtes.

if [ -d "$data_path" ]; then
  read -p "Données existantes trouvées pour $domains. Poursuivre et remplacer le certificat existant ? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi
fi


if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "### Téléchargement des paramètres TLS recommandés ..."
  mkdir -p "$data_path/conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
  echo
fi

echo "### Création d'un certificat fictif pour $domains ..."
path="/etc/letsencrypt/live/$domains"
mkdir -p "$data_path/conf/live/$domains"
docker-compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:1024 -days 1\
    -keyout '$path/privkey.pem' \
    -out '$path/fullchain.pem' \
    -subj '/CN=localhost'" certbot
echo


echo "### Démarrage de nginx ..."
docker-compose up --force-recreate -d nginx
echo

echo "### Suppression du certificat fictif pour $domains ..."
docker-compose run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/$domains && \
  rm -Rf /etc/letsencrypt/archive/$domains && \
  rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot
echo


echo "### Demande de certificat Let's Encrypt pour $domains ..."
# Joindre $domaines à -d args
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Sélectionnez l'adresse électronique appropriée
case "$email" in
  "") email_arg="--enregistrer-sans-sécurité-sans-email" ;;
  *) email_arg="--email $email" ;;
esac

# Activer le mode staging si nécessaire
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal" certbot
echo

echo "### Rechargement de nginx ..."
docker-compose exec nginx nginx -s reload