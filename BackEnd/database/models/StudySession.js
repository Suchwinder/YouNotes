const Sequelize = require('sequelize');
import db from '../index';

const StudySession = db.define ('studySession', {
    id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	videoUrl: {
		type: Sequelize.STRING,
		allowNull: false
	},

    studySessionName: {
        type: Sequelize.STRING,
        allowNull: false
	},
	
	studySessionDescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    studySessionSubject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    studySessionDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = StudySession;
