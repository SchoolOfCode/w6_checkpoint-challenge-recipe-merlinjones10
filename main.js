const YOUR_APP_ID = "602bba76";
const YOUR_APP_KEY = "fe81edebaa638ed7c2cc3086460ee681";
const recipeLabel = document.querySelector("#recipe-label");
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
  console.log(data.hits[0].recipe.url);
  recipeLabel.innerHTML = data.hits[0].recipe.url;
  recipeLabel.href = data.hits[0].recipe.url;
  //--- write your code above ---
}

fetchRecipe();

//Codes
// 602bba76
// fe81edebaa638ed7c2cc3086460ee681
