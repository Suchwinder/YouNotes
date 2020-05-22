const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware');

const { StudySession } = require("../database/models");

// Get all the sessions a user has
const getStudySessionsUser = (req, res) => {
    const user_email = req.user.email;
    StudySession.findAll({
        where: {
            userEmail: user_email
        }
    }).then(response => res.status(200).json({
        message: "Fetches Sessions",
        data: response
    }))
    .catch(error => res.status(400).json({error: "Couldn't Access Sessions"}))
}

// Add a new study session
const createStudySession = async (req, res, next) => {
    const data = await StudySession.findAll({
        where: {
            videoUrl: req.body.videoUrl,
            studySessionName: req.body.studySessionName,
            studySessionDescription: req.body.studySessionDescription,
            studySessionSubject: req.body.studySessionSubject,
        }
    });
    if(data.length>0) {
        return res.status(400).json({error: "This session already exists"});
    }
    StudySession.create(req.body)
    .then((newStudySession)=>res.status(201).json({message: "Created Session"}))
    .catch(error=>res.status(400).json({error: "Couldn't Create New Session"}));
};

// Delete a session, which should cascase and delete other ones as well
const deleteStudySession = (req, res, next) => {
    StudySession.destroy(
        {where: {id: req.body.id}})
    .then(() => res.status(200).json({message: "Successfully deleted session"}))
    .catch(()=>res.status(400).json({error: "Couldn't Delete Session"}));
}

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
router.get('/getSessions', isAuthenticated, getStudySessionsUser);

router.post('/createSession', isAuthenticated, createStudySession);

router.delete('/deleteSession', isAuthenticated, deleteStudySession);

module.exports = router;
