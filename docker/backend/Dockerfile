FROM python:3-alpine

# Créer un dossier /app & Ajouter le fichier requirements.txt de backend dans le dossier /app/backend
WORKDIR /app
ADD ./backend/requirements.txt /app/backend/

# Installer les packages nécessaire
RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

# Copier le code source
ADD ./docker /app/docker
ADD ./backend /app/backend