# Track my health

<br>

## User Stories:

- **404** - As a user, I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user, I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **Sign up** - As a user, I want to sign up.
- **Login** - As a user, I want to be able to log in.
- **Logout** - As a user, I want to be able to log out.
- **Profile** - As a user I want to be able to display my recipes and my information.
- **Edit Profile** - As a user, I want to be able to edit my profile.
- **Delete Profile** - As a user, I want to be able to delete my account.
- **Recipes** - As a user, I want to be able to see all the recipes and comments.
- **New Recipe** - As a user, I want to be able to create a new recipe.
- **Edit Recipe** - As a user, I want to be able to edit recipes.
- **Delete Recipe** - As a user, I want to be able to delete recipes.
- **Comments** - As a user, I want to be able to leave comments on other recipes and receive comments on my recipes.
<!-- - **Search** - As a user, I want to be able to search for other profiles based on the filters I use.
- **Search Result** - As a user, I want to be able to see the list of profiles filtered by my preferences. -->

<br>

## Server Routes (Back-end):

| **Method** | **Route**                           | **Description**                                                            | Request - Body                                           |
| ---------- | ----------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------- |
| `GET`      | `/`                                 | Main page route. Renders home `index` view.                                |                                                          |
| `GET`      | `/login`                            | Renders `login` form view.                                                 |                                                          |
| `POST`     | `/login`                            | Sends Login form data to the server.                                       | { email, password }                                      |
| `GET`      | `/signup`                           | Renders `signup` form view.                                                |                                                          |
| `POST`     | `/signup`                           | Sends Sign Up info to the server and creates user in the DB.               | { email, password }                                      |
| `GET`      | `/private/profile`                  | Private route. Renders `profile` form view.                                |                                                          |
| `POST`     | `/private/edit-profile`             | Private route. Sends edit-profile info to server and updates user in DB.   | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`                | Private route. Render the `favorites` recipies.                            |                                                          |
| `POST`     | `/private/favorites`                | Private route. Adds a new favorite recipe for the current user.            | { recipename, cuisine, country, }                        |
| `POST`     | `/private/favoriteRecipe/:recipeId` | Private route. Deletes the existing favorite recipe from the current user. |                                                          |
| `POST`     | `/private/mealplan/:mealplanId`     | Private route. Deletes the existing meal plan from the current user.       |                                                          |
| `GET`      | `/mealplans`                        | Renders `meal-plan` view.                                                  |                                                          |
| `GET`      | `/mealplan/details/:id`             | Renders `meal-plan` view for the particular restaurant.                    |
| `GET`      | `/recipes`                          | Renders `recipe-list` view.                                                |                                                          |
| `GET`      | `/recipe/details/:id`               | Renders `recipe-details` view for the particular restaurant.               |                                                          |

## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  mealplan: [mealplanId],
  recipes: [recipeId],
  favMealplan: [favMealplanId],
  favRecipe: [favRecipeId],
  country: String,
}
```

Meal plan model

```javascript
{
  name: String,
  vegetarian: String,
  recipeId: [arrayIds],
  days: number,
  country: String,

}
```

Recipe model

```javascript
{
  name: String,
  imageUrl: String,
  style: String,
  origin: String,
  quantity: String,
  calories: number,
  brand: String,
  mealplanId: [arrayIds]
}
```

Review model (bonus)

```javascript
{
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}
```

<br>

## API's

EDAMAM - Food Database API

<br>

## Packages

ironlauncher
axios
bcryptjs
express-session
connect-mongo
toastify
cloudinary
multer
multer-storage-cloudinary

<br>

## Backlog

https://trello.com/w/foodstuffapp
<br>

## Links

[Repository](https://github.com/paulocaetano96/Trackmyhealth)

[Deploy](https://trackmyhealth.cyclic.app)

### Slides

[The url to your presentation slides](https://www.canva.com/)

[Slides Link]()

### Contributors

⚒️ Paulo Caetano - [`GitHub`](https://github.com/paulocaetano96) - [`LinkedIn`](https://www.linkedin.com/in/paulocaetano-dev/)

🗿 Eveline Coenegrachts - [`GitHub`](https://github.com/pveg) - [`LinkedIn`](https://www.linkedin.com/in/eveline-coenegrachts/)
