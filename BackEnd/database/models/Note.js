const Sequelize = require('sequelize');
import db from require('../index');

const Note = db.define('note', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    videoTimestamp: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    noteRecord: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Note;
