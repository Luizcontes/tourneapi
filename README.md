# Bands Tours API

For testing purposes I created a simples API to get fake data from bandas and concerts, although we need information about the bandas, the events and the places, in this first stage I created the database but the API just has the features of creating and retrieving information from the bands, it is necessary to evaluate this first sprint to figure out if makes sense to keep improving this first delivery


## Reflection

The idea is to create a whole application to suggest enterteiment options based in the user`s preferences and geolocation, as a student project we decided to start building small blocks while the challenge step by step gets improved but at the same time more challenging

## First Database Schema Diagram

![Screenshot from 2022-07-28 02-46-09](https://user-images.githubusercontent.com/70711596/181404666-0479a9b9-2195-464e-8a22-ffa67146f5af.png)

## Tecnologies used:

DATABASE: MySQL provided by a Heroku`s partner JawsDB

BACK-END - NodeJs using the following packages:
ExpressJs for the server along with some packages such as:
-Nodemon
-Http-status-code
-Dot-env
-Mysql2
-Swagger-ui-express
-Swagger-JsDocs
-Yamljs

## Project`s Preview

![preview](https://user-images.githubusercontent.com/70711596/181404618-e7f93297-a550-456f-9202-24d25a5eeb2d.gif)


## Features to be implemented:

-Create others routers to populate the tables necessary for the first stage of the application
-Implement some unit tests
-Created a basic front-end to start to interact with the application


## Installation

Clone down this repository. You will need `node`, `npm` or `yarn` installed globally on your machine.

```bash
yarn
yarn start
```

or

```bash
npm install
npm run start
```

The server should start at:

`localhost:8081` 

## About request to the API

You can use the implemented swagger page accessing the endpoint /api-docs
or use the application you most like to use.