// const router = require('express').Router();
// let User = require('../models/user.model');

import express from 'express'
import User from '../models/user.js'

const router = express.Router()

router.route('/').get((req, res) => {
  User.find() // get all the users from the MongoDB Atlas database
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


export default router