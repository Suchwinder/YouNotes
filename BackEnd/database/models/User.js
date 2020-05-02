const Sequelize = require('sequelize');
/**
 * Need our database connection via sequelize to define models
 */
import db from '../index';

/**
 * Creating a User table with sequlize models, via the define approach
 * more info: https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 */
const User = db.define('user', {
    //attributes
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },

    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull:false
    },

    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: Sequelize.STRING
    }
})

module.exports = User;
