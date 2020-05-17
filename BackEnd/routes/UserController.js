// Here we will create all of the necessary routes for user
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { isAuthenticated } = require('../middleware');

const { User, StudySession, Note } = require("../database/models");

// Helper functions to perform queries using sequelize
const createUser = async (req, res) => { 
  try {
    console.log("the pass is", req.body)
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    console.log('User created: ', user);
    // req.session.id = user.id;
    req.session.user_id = user.email;
    return res.status(200).json({message: 'User Successfully Created'});
  } catch(error) {
    console.log(error);
    return res.status(400).json({error: error.message})
  }
}

const getUser = async (req, res) => {
  try {
    if(req.user){
      return res.status(400).json({error: 'User already logged in'});
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.findOne(req.body);
    if(user) {
      // req.session.id = user.id;
      req.session.user_id = user.email;
      return res.status(200).json({message: 'User logged in'});
    } else {
      throw Error("User doesn't exist");
    }
  } catch(error) {
    return res.status(400).json({error: error.message})
  }
}

const getSession = (req, res) => {
  return res.send('blech')
}

// Create a user
router.post('/signup', createUser);

router.post('/login', getUser);

router.get('/sessions', isAuthenticated, getSession);

module.exports = router;
