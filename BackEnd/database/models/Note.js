const Sequelize = require('sequelize');
const db = require('../index');

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
