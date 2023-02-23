const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/User.model");
const Recipe = require("../models/Recipe.model");

//to safeguard api info, app-id and app-key, on the env file
const myAppId = process.env.APP_ID;
const myAppKey = process.env.APP_KEY;

/* Sends us from profile page to my-recipes page AND gets the info from the API on cards*/
router.get("/my-recipes", async (req, res, next) => {
  try {
    let response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=${myAppId}&app_key=${myAppKey}&ingr=4-10&diet=balanced&cuisineType=Mediterranean&mealType=Lunch&dishType=Main%20course&time=5-30&imageSize=REGULAR&random=true`
    );

    let data = response.data.hits;
    /* console.log(response.data.hits); */

    res.render("recipes/my-recipes.hbs", { data: data });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/my-recipes", async (req, res) => {
  const { recipeName, ingredients, day, instructions } = req.body;
  console.log(req.body);
  const { _id } = req.session.currentUser;

  try {
    //Create the recipe
    let newRecipe = await Recipe.create({ name: recipeName, ingredients, day, instructions });

    //Add the recipe to the user
    const user = await User.findByIdAndUpdate(
      _id,
      { $push: { recipes: newRecipe._id } },
      { new: true }
    );
    console.log("user:", user);
    res.redirect("/profile/my-recipes");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

/* Sends us from profile page to my-mealplan page */
router.get("/my-mealplan", async (req, res, next) => {
  try {
    const { _id } = req.session.currentUser;

    let user = await User.findById(_id).populate('recipes')

    res.render("mealplan/my-mealplan.hbs", user);
  } catch (error) {
    console.log(error);
    next(error) 
  }

});


/* --------------------  Sends us to the favorites page .------------------*/
router.get("/favorites", (req, res, next) => {
  res.render("favorites/favorites.hbs");
});


/* ------------------------- Sends us to the my-profile-display page -----------------------------*/
router.get("/edit-profile", async (req, res, next) => {
  try {
    // Retrieve the user from the database using the user ID
    const { _id } = req.session.currentUser;

    const user = await User.findById(_id);
    console.log(user);

    // Pass the user object to the view
    res.render("profile/edit-profile",  user );

  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* router.post("/edit-profile/:id", fileUploader.single('poster'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, description, currentImage } = req.body;
    console.log(username);
    console.log(req.body);
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    let updatedUser = await User.findByIdAndUpdate(
      id,
      { username, description, imageUrl },
      { new: true }
    );

    req.session.currentUser = updatedUser;

    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

//---------------------------------------------------------------------------------------------
router.post("/edit-profile/:id", async (req, res, next) => {
  try {
    // Retrieve the new user data from the form submission
    const userId = req.params.id;
    const { username, email, password } = req.body;
    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, password },
      { new: true } // Return the updated user object
    );
    console.log(updatedUser);

    // Redirect the user to the profile page
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    next(error);
  }
});






/* 
router.post("/edit-profile/:id", fileUploader.single('poster'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, description, currentImage } = req.body;
    console.log(username);
    console.log(req.body);
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    let updatedUser = await User.findByIdAndUpdate(
      id,
      { username, description, imageUrl },
      { new: true }
    );

    req.session.currentUser = updatedUser;

    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */











module.exports = router;
