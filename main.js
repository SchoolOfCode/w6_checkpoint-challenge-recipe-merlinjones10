const YOUR_APP_ID = "602bba76";
const YOUR_APP_KEY = "fe81edebaa638ed7c2cc3086460ee681";

const recipeLink0 = document.querySelector("#recipe-linkl");
const recipeLink1 = document.querySelector("#recipe-link2");
const recipeLink2 = document.querySelector("#recipe-link3");
const recipeLink3 = document.querySelector("#recipe-link4");
const recipeLink4 = document.querySelector("#recipe-link5");
const recipeLink5 = document.querySelector("#recipe-link6");

const article0 = document.querySelector("#article1");
const article1 = document.querySelector("#article2");
const article2 = document.querySelector("#article3");
const article3 = document.querySelector("#article4");
const article4 = document.querySelector("#article5");

const recipeTitle0 = document.querySelector("#recipeTitle1");
const recipeTitle1 = document.querySelector("#recipeTitle2");
const recipeTitle2 = document.querySelector("#recipeTitle3");
const recipeTitle3 = document.querySelector("#recipeTitle4");
const recipeTitle4 = document.querySelector("#recipeTitle5");
const recipeTitle5 = document.querySelector("#recipeTitle6");

const img0 = document.querySelector("#img1");
const img1 = document.querySelector("#img2");
const img2 = document.querySelector("#img3");
const img3 = document.querySelector("#img4");
const img4 = document.querySelector("#img5");
const img5 = document.querySelector("#img6");

const results = document.querySelector("#results");

let recipes = [recipeLink0, recipeLink1, recipeLink2, recipeLink3, recipeLink4, recipeLink5];
let articles = [article0, article1, article2, article3, article4];
let foodToSearch = null;
let images = [img0, img1, img2, img3, img4, img5];
let cardTitles = [
  recipeTitle0,
  recipeTitle1,
  recipeTitle2,
  recipeTitle3,
  recipeTitle4,
  recipeTitle5,
];

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleCocktailClick() {
  fetchCocktail(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  results.innerHTML = `Showing results for: ${food}`;
  let requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const response = await fetch(requestUrl);
  const data = await response.json();

  for (i = 0; i < recipes.length; i++) {
    recipes[i].innerHTML = data.hits[i].recipe.label;
    recipes[i].href = data.hits[i].recipe.url;
    images[i].src = data.hits[i].recipe.image;
  }
  console.log(data);
}

async function fetchCocktail(food) {
  results.innerHTML = `Showing results for: ${food}`;
  let requestUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${food}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data);

  for (i = 0; i < recipes.length; i++) {
    recipes[i].innerHTML = data.drinks[i].strDrink;
    recipes[i].href = `https://www.thecocktaildb.com/drink/${data.drinks[i].idDrink}`;
    images[i].src = data.drinks[i].strDrinkThumb;
  }
}

// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// Add an option to give cocktail by ingredient
//Add cocktail button next to the food button and use the same search breakAfter:
// call a cocktail function instead when that button is pressed
//use handlefoodchange
