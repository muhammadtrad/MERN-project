const express = require("express");
const router = express.Router();
//const bcrypt = require('bcryptjs');
const User = require('../../models/User');
//const jwt = require('jsonwebtoken');


// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');


router.get("/test", (req, res) => res.json({ msg: "This is the users" }));
// users.js

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if(user){
      return res.status(400).json({email: "A user is already registered with that email"});
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password
      });
      newUser.save().then(user => res.send(user)).catch(err => res.send(err));
    }
  })
})


module.exports = router;

