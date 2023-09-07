# Variables Fixe
DOCKER = docker 
DOCKER_COMPOSE = docker-compose
DJANGO_ADMIN = django-admin
EXEC = ${DOCKER} exec -w /backend ${CONTAINER_DJANGO}
PIP = ${EXEC} pip
PYTHON = ${EXEC} python
MANAGE = ${PYTHON} manage.py

# Variables Modulable
BACKEND = python
FRONTEND = nodejs


## —— 🐳 Docker ——

### -- New -- ###
new-project:
	$(DOCKER_COMPOSE) -f docker-compose-new.yml up --build

go-python:
	$(DOCKER) exec -it python sh	

go-nodejs:
	$(DOCKER) exec -it nodejs sh

### -- Dev -- ##
build-dc-dev: 
	$(DOCKER_COMPOSE) -f docker-compose-dev.yml build

exec-dc-dev: 
	$(DOCKER_COMPOSE) -f docker-compose-dev.yml up

stop-dc-dev: 
	$(DOCKER_COMPOSE) -f docker-compose-dev.yml down

be-dc-dev: 	
	$(DOCKER_COMPOSE) -f docker-compose-dev.yml up --build

### -- Prod -- ##
be-dc-prod: 
	$(DOCKER_COMPOSE) -f docker-compose-prod.yml up --build

### -- Autres -- ##
stopAll: ## Arrêter tous les containers en cours
	$(DOCKER) stop $$(docker ps -a -q)

removeAll: ## Supprimer tous les containers
	$(DOCKER) rm $$(docker ps -a -q)

pruneAll: ## Supprimer toutes les images
	$(DOCKER) system prune -a --volumes


## —— 🔥 App ——

### -- Backend -- ##

# NEW
new-requirements:
	$(DOCKER) exec -w /backend python touch requirements.txt

up-requirements:
	$(DOCKER) exec -w /backend python pip freeze > ./backend/requirements.txt

new-django:
	$(DOCKER) exec -w /backend python django-admin startproject server

python.manage.py.runserver:
	$(DOCKER) exec -w /backend/backend python python manage.py runserver

# DEV
sh-backend:
	$(DOCKER) exec -it backend sh

### -- Frontend -- ##

# NEW
new-react:
	$(DOCKER) exec -w /frontend nodejs npx create-react-app frontend

npm.start:
	$(DOCKER) exec -w /frontend/frontend nodejs npm start

#DEV
sh-nginx:
	$(DOCKER) exec -it nginx sh


## —— 🛠️  Others ——
chown: ## Chown
	sudo chown -R $$USER ./
	
help: ## Liste des commandes / List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'