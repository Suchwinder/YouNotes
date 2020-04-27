/* Need to import express*/
const express = require("express");
/* Instantiate Express Application */
const app = express();
/**
 * path module lets you interact with file systems in 
 * different ways
 * more info: https://nodejs.dev/the-nodejs-path-module
 */
const path = require('path');
/**
 * Gives detail logs of requests made
 * more info: https://github.com/expressjs/morgan
 */
const logger = require('morgan');

/**
 * Additional security
 * more info: https://helmetjs.github.io/
 */
const helmet = require('helmet');

/**
 * Used to decrease size of request body for better performance
 * more info: https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression
 */
const compression = require('compression');

/**
 * Used in order for react app thats on port 3000 to make requests to our backend thats on port 3001
 * more info: https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/
 * or: https://www.npmjs.com/package/cors
 */
const cors = require('cors');

/**
 * Need to set up database with sequalize
 */
const db = require('./database')

/**
 * function to create local database
 */
const createLocalDatabase = require('./utilities/createLocalDatabase');
// to set up database
createLocalDatabase();

// Using the various middleware, and other imports
app.use(logger('dev')); // for logging requests
app.use(helmet()); // for addidtional security in headers
app.use(express.json()); // take incoming requests as a json (easier to parse), based on bodyParser middleware: https://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })); // takes URL encoded links and parses them I think, based on bodyParser middleware: https://expressjs.com/en/api.html#express.urlencoded
app.use(compression()); // reduce request body size, more info refer to above link when imported
// Will be used later when our app is built and need to use 
// static files like css, js, and images etc. : https://expressjs.com/en/starter/static-files.html
// app.use(express.static("../FrontEnd/build")); // 
app.use(cors());

//need a port to listen to, front end is 3000 so I will use 3001
port = process.env.PORT||3001;
app.listen(port, ()=> console.log(`Listening on port: ${port}`)); 
