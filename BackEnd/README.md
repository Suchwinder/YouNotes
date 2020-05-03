To install dependencies
```
npm install
```
To run the server locally type, and this should create database
```
node app.js
```
Note once app is closed and you want to restart the node server you should delete the database created

For users notice in .config file we have `process.env.DB_NAME` this is for good practice 
in order to keep private info about our environment. In order to access this please
createa a .env file in the root directory of the BackEnd folder and include 
```
DB_NAME: <substitute with name of db>
```
This will then allow you to create the named database locally.
