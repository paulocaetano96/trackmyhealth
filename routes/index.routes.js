const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* login route */
router.get("/login", (req, res, next) => {
  res.render("auth/login.hbs");
});

/* sign up route */
router.get("/signup", (req, res, next) => {
  res.render("auth/signup.hbs");
});




module.exports = router;
