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

// Using the various middleware, and other imports
app.use(logger('dev'));


app.listen(process.env.PORT||3000); 
