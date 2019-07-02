1.- crear proyecto <br/>
```$ docker-compose run web django-admin.py startproject comuniTree .```

2.- configurar base de datos con las credenciales que corresponden en *./comuniTree/settings.py* <br/>
  -> ENGINE: django.db.backends.postgresql <br/>
  -> NAME: postgres <br/>
  -> USER: postgres <br/>
  -> HOST: db <br/>
  -> PORT: 5432 <br/>

3.- correr servicio web<br/>
```$ docker-compose up -d```

4.- migraciones<br/>
```$ docker run web python manage.py migrate```

5.- acceder a localhost:8080/admin
