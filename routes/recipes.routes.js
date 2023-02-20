const express = require("express");
const router = express.Router();
const axios = require("axios");

const myAppId = process.env.APP_ID;
const myAppKey = process.env.APP_KEY;

router.get("/test", async (req, res, next) => {
  try {
    let response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=${myAppId}&app_key=${myAppKey}&ingr=4-10&diet=balanced&cuisineType=Mediterranean&mealType=Lunch&dishType=Main%20course&time=5-30&imageSize=REGULAR&random=true`
    );

    let data = response.data.hits;
    /* console.log(data.hits.recipe); */
    res.render("recipes/my-recipes.hbs", { data: data });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
