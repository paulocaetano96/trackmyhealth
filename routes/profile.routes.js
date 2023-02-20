const express = require('express');
const router = express.Router();


/* if login is sucessfull, sends us to the profile page */

router.get("/profile", (req, res, next) => {
  res.render("profile.hbs")
})


/* Sends us from profile page to my-recipes page */
router.get("/my-recipes", (req, res, next) => {
  res.render("recipes/my-recipes.hbs")
})

/* Sends us from profile page to my-mealplan page */
router.get("/my-mealplan", (req, res, next) => {
  res.render("mealplan/my-mealplan.hbs")
})



module.exports = router;
