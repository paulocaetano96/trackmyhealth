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
 

//-------------- log out ---------------------------------------
/* when the user is over, we log out */
router.get("/logout", (req, res, next) => {
   res.clearCookie('nToken');
   
  res.render('auth/logout');
  
});


module.exports = router;
