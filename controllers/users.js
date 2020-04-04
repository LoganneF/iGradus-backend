const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundUsers)
  })
})

router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
  });
});

module.exports = router;