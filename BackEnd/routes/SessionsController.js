const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware');

const { User, StudySession, Note } = require("../database/models");

// Get all the sessions a user has
const getStudySessionsUser = (req, res) => {
    const user_email = req.user.email;
    StudySession.findAll({
        where: {
            userEmail: user_email
        }
    }).then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({error: "Couldn't Access Sessions"}))
}

// Add a new study session
const addStudySession = (req, res, next) => {
    StudySession.create(req.body)
    .then((newStudySession)=>res.status(201).json(newStudySession))
    .catch(error=>res.status(400).json({error: "Couldn't Create New Session"}));
};

// Delete a session, which should cascase and delete other ones as well
const deleteStudySession = (req, res, next) => {
    StudySession.destroy(
        {where: {id: req.body.id}})
    .then((response) => res.sendStatus(204))
    .catch(error=>res.status(400).json({error: "Couldn't Delete Session"}));
}

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
router.get('/sessions', isAuthenticated, getStudySessionsUser)

module.exports = router;
