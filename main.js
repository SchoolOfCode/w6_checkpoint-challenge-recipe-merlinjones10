const YOUR_APP_ID = "602bba76";
const YOUR_APP_KEY = "fe81edebaa638ed7c2cc3086460ee681";
const recipeLabel0 = document.querySelector("#recipe-label");
const recipeLabel1 = document.querySelector("#recipe-label2");
const recipeLabel2 = document.querySelector("#recipe-label3");
const recipeLabel3 = document.querySelector("#recipe-label4");
const recipeLabel4 = document.querySelector("#recipe-label5");

let recipes = [recipeLabel0, recipeLabel1, recipeLabel2, recipeLabel3, recipeLabel4];

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  let requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data.hits[0].recipe);

  for (i = 0; i < 5; i++) {
    recipes[i].innerHTML = data.hits[i].recipe.url;
    recipes[i].href = data.hits[i].recipe.url;
  }

  //--- write your code above ---
}

//Codes
// 602bba76
// fe81edebaa638ed7c2cc3086460ee681
