### Notes:

To test the database:
in the database folder the logging is reported, so each request will show the sample SQL query of it as well, if you wish to remove logging comment out `logging:false` in ./database/index.js.
In addition db sync force has been removed so now you will not lose local database contents upon restart of server. So to delete data you will manually ahve to delete it:

#### Some short cuts:
```
truncate "studySessions" cascade 
```
in order to delete both the session and all notes associated with the session

To install dependencies
```
npm install
```
To run the server locally type, and this should create database
```
node app.js
```
Note once app is closed and you want to restart, the node server will recreate the tables because forced sync is on

For users notice in .config file we have `process.env.DB_NAME` this is for good practice 
in order to keep private info about our environment. In order to access this please
createa a .env file in the root directory of the BackEnd folder and include 
```
DB_NAME: <substitute with name of db>
```
This will then allow you to create the named database locally.
