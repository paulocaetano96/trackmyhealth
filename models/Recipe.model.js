const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: String,
  ingredients: [String],
  day: String,
  instructions: String,
});

module.exports = model("Recipe", recipeSchema);
