# docker-checkpoint
create a fullstack web app, with CRUD functionality, that is deployable in docker
> we are going to re make IMDB, yet again

## to run the app:
```
$ docker-compose up -d
```

## 1. making the front end

- make a new directory and in that directory create a react app
```
$ npx create-react-app client
```
- make a dockerfile for the client app (./docker-checkpoint/client/Dockerfile)
## 2. making the backend
- in the root make a new dir for the server
- cd into that dir and make it an node js project so we can use express
```
$ npm init
```
- create a simple ReST API with express

- install knex into your project, create your initial migrations, and seed data

- make your migrations happen via docker on start up