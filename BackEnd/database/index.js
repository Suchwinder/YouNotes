// Here we will instatiate a sequalize connection to our database

/**
 * Getting private hidden dbname for this app
 */
const { dbname, pass } = require('../config')

/**
 * This is to import the sequalize ORM, sequalize lets us write queries is JS sysntax
 * more info: https://sequelize.org/
 * for setup info: https://sequelize.org/master/manual/getting-started.html
 */
const { Sequelize } = require('sequelize');
const db = new Sequelize(`postgres://postgres:${pass}@localhost:5432/${dbname}`); // connecting to db using SEQUALIZE object instantiation

// Export our instance of Sequelize, which will be ued in our models to set up the tables in our db
module.exports = db;
