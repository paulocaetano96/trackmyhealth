const express = require('express');
const router = express.Router();
const axios = require('axios');



/* Sends us from profile page to my-recipes page */
router.get('/my-recipes', async (req,res,next) => {
  try {
    let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=aec1e99b&app_key=09ad4047d6477e600633dadb368f19eb&ingr=4-10&diet=balanced&cuisineType=Mediterranean&mealType=Lunch&dishType=Main%20course&time=5-30&imageSize=REGULAR&random=true`)

    let data = response.data.hits;
    console.log(data.ingredients);

    res.render('recipes/my-recipes.hbs',{data:data});
    
  }
  catch (err) {
    console.log(err);
    next(err);
    
    
  }})

/* Sends us from profile page to my-mealplan page */
router.get("/my-mealplan", (req, res, next) => {
  res.render("mealplan/my-mealplan.hbs")
})

/* Sends us to the edit-profile page*/
router.get("/edit-profile", (req, res, next) => {
  res.render("profile/edit-profile.hbs")
})

/* Sends us to the favorites page*/
router.get("/favorites", (req, res, next) => {
  res.render("favorites/favorites.hbs")
})



module.exports = router;
