FROM python:3.6-alpine

ENV PYTHONBUFFERED 1

RUN apk update

RUN apk add build-base

RUN apk add jpeg-dev

RUN apk add zlib-dev

ENV LIBRARY_PATH=/lib:/usr/lib

RUN mkdir /code

WORKDIR /code

COPY requeriments.txt /code/

RUN pip install -r requeriments.txt

COPY . /code/

EXPOSE 8080

CMD python manage.py runserver 0:$PORT
