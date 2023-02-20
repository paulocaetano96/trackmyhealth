const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/test", async (req, res, next) => {
  try {
    let response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=aec1e99b&app_key=09ad4047d6477e600633dadb368f19eb&ingr=4-10&diet=balanced&cuisineType=Mediterranean&mealType=Lunch&dishType=Main%20course&time=5-30&imageSize=REGULAR&random=true`
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
