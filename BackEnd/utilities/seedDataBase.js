/**
 * This file is designed to populate our local database with a user and sessions in order 
 * for testing purposes, there are many ways to do it, this is perhaps the easier approach
 */

/**
 * Need to get the models to create the data
 * Note when requiring it the file path can be ../database/models/index or
 * just ../database/models/ because index is chosen by default
 */
const { User, Note, StudySession } = require('../database/models/')

/**
 * Make function asynchronous to let data be created whenever, but also use await to ensure 
 * asynchornous creation occur one after the other (aka synchronously), i think
 */
const seedDatabase = async () => {
    console.log("running seed");
    const tempU = await User.create({
        firstName: "John",
        lastName: "Smith",
        username: "tubetext",
        email: "admin@tubetext.com",
        password: "1234"
    });

    const tempS = await StudySession.create({
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        studySessionName: "Session 1",
        studySessionDescription: "Intro to Derivatives",
        studySessionSubject: "Calculus I",
        studySessionDate: new Date()
    });

    const tempN = await Note.create({
        videoTimestamp: 69.420,
        noteRecord: "I don't care"
    });

    tempS.setUser(tempU);
    tempN.setStudySession(1);
}

module.exports = seedDatabase
