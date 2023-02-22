const express = require("express");
const router = express.Router();
const axios = require("axios");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const mongoose = require("mongoose");



//we create a recipe-edit hbs page */
router.get("/my-mealplan/edit/:id", async (req, res) => {
    res.render('/views/mealplan/edit-mealplan.hbs')
})

//to delete a recipe that we have on our mealplan
router.post('/my-recipes/delete/:id', async (req,res,next) => {
    try {
        
        let id = req.params.id;

        await  Recipe.findByIdAndDelete(id)

        res.redirect('/profile/my-mealplan')
        

    } catch (error) {
        console.log(error);
        next(error);
        
    }
})

/* to edit a recipe from the mealplan */
    // Render a form to edit a recipe
router.get('/my-recipes/edit/:id', async (req, res, next) => {
    try {

      const { _id } = req.session.currentUser;
  
      let user = await User.findById(_id).populate('recipes')
      res.render('mealplan/edit-mealplan.hbs', user)

    } catch (error) {
        console.log(error);
        next(error) 
    }

    /* res.send(`Here we'll render the form to update the recipes with ID ${req.params.id}`); */

  });


  // Submit info to edit a character with a matching id.
  router.post("/my-recipes/edit/:id", async (req, res, next) => {
    const { id } = req.params;
  
    const { name, ingredients, day } = req.body;
  
    try {
      const recipe = await Recipe.findByIdAndUpdate(id, {
        name,
        ingredients,
        day,
      });
  
      console.log("_______________", recipe);
  
      res.redirect("/profile/my-mealplan");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });










module.exports = router;
