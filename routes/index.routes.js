const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* if login is sucessfull, sends us to the profile page */

router.get("/profile", (req, res, next) => {
  res.render("profile.hbs")
})
 



module.exports = router;
