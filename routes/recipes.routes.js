const express = require("express");
const router = express.Router();
const axios = require("axios");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");


//we create a recipe-edit hbs page */
router.get("/my-mealplan/edit/:id", async (req, res) => {
    res.render('/views/mealplan/edit-mealplan.hbs')
})


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
  router.post('/my-recipes/edit/:id', (req, res) => {
    const recipesId = req.params.id;
    const recipesInfo = req.body;
   
    editRecipes = (recipesId, recipesInfo) => {
        this.response.put(`/my-mealplan/${recipesId}`, recipesInfo);

      }
    Recipe
      .editRecipes(recipesId, recipesInfo)
      .then((response) => {
        res.json(response.data);
        // res.redirect('/profile/my-mealplan'); // <== leave this line commented for now
      })
      .catch((error) => console.log(error));
  });







module.exports = router;
