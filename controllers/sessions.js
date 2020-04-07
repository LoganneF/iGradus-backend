const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user.js");

router.get("/new", (req, res) => {
  res.render("sessions/new.ejs");
});

router.post("/", (req, res) => {
  console.log("received login request")
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (foundUser && bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;
      res.status(200).send(req.session.currentUser)
    } else {
      res.status(404).send("invalid login")
    }
  });
});

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;