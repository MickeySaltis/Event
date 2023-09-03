FROM python:3-alpine

RUN pip install --upgrade pip
RUN python -m pip install Django
RUN pip install pipreqs

WORKDIR /backend

RUN pipreqs /backend


