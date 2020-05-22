const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware');

const { Note } = require("../database/models");

//  Get note by Id
function getNote(req, res, next) {
    Note.findByPk(req.params.id)
        .then(note => res.json(note))
        .catch(err => next(err));
};

//	SELECT * FROM notes WHERE "studySessionId" = ;
function getAllNotesOfSession(req, res, next) {
	Note.findAll({ 
		where: {
			studySessionId: req.params.id
		}
	})
		.then(found => res.json(found))
		.catch(err=>next(err));
};

function addNote(req, res, next) {
    Note.create(req.body)
    .then((newNote)=>res.status(201).json(newNote))
    .catch(err=>next(err));
};

function deleteNote(req, res, next){
    Note.destroy(
        {where: {id: req.params.id}}
    )
    .then((response) => res.sendStatus(204))
    .catch((err) => next(err));

};

/******************* Edit Function *********************/
function editNote(req, res, next) {
    Note.update(
        {noteRecord: req.param('noteRecord')},
        {where: {id: req.params.id}}
    )
    .then((response) => res.sendStatus(200))
    .catch((err) => next(err));   
};

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
router.get('/study_session/:id', isAuthenticated, getAllNotesOfSession);

router.get('/:id', isAuthenticated, getNote);

router.post('/add', isAuthenticated, addNote);

router.delete('/delete/:id', isAuthenticated, deleteNote);

router.put('/edit/:id', isAuthenticated, editNote);


module.exports = router;
