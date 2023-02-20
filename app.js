// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const axios = require('axios');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "trackmyhealth";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

//handling the profile routes
const profileRoutes = require("./routes/profile.routes");
app.use("/profile", profileRoutes);

//handling all the sign up/ login routes
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

//handling all the recipe routes
const recipeRoutes = require("./routes/recipes.routes");
app.use("/recipes", recipeRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
