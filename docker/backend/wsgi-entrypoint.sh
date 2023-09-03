#!/bin/sh
until cd /app/backend/server
do
    echo "En attente du volume du serveur..."
done

until ./manage.py migrate
do
    echo "En attendant que la base de données soit prête..."
    sleep 2
done

./manage.py collectstatic --noinput

gunicorn server.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4

#####################################################################################
# Options pour DEBUG le serveur Django
# Commandes optionnelles à remplacer par la commande abouve gunicorn

# Option 1:
# run gunicorn with debug log level
# gunicorn server.wsgi --bind 0.0.0.0:8000 --workers 1 --threads 1 --log-level debug

# Option 2:
# run development server
# DEBUG=True ./manage.py runserver 0.0.0.0:8000

# Ajouter des droits d'exécution (script)
# chmod +x docker/backend/wsgi-entrypoint.sh