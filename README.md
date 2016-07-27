# dre-backend-nodejs
NodeJS version of the DRE backend

## Install the app

Run this :

```
docker-compose build
```

## Run the app

First run this command :

```
docker-compose up -d mongo
```

Then run this :

```
docker-compose run --service-ports --rm app nodemon --watch "/var/www/html" /var/www/html/src/app.js
```
