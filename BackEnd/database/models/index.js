const Sequelize = require('sequelize');

/**
 * Need these imports to start creating associations 
 * more info: https://sequelize.org/master/manual/assocs.html
 */
const User = require('./User');
const Note = require('./Note');
const StudySession = require('./StudySession');

// Associations
User.hasMany(StudySession);
StudySession.belongsTo(User);

/**
 * So to delete all notes in the notes table associate with a sesssion, once a session is deleted you need to
 * do a cascading effect where the each note will be selected based on the sessionId and destroy each instance
 * more info: https://sequelize.org/master/class/lib/associations/base.js~Association.html
 * more info: https://sequelize.org/master/manual/hooks.html
 */
StudySession.hasMany(Note, { onDelete: 'CASCADE', hooks: true });
Note.belongsTo(StudySession);

// Exporting models to be used in routes
module.exports = {
    User,
    Note,
    StudySession
}
