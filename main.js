const YOUR_APP_ID = "602bba76";
const YOUR_APP_KEY = "fe81edebaa638ed7c2cc3086460ee681";
const recipeLabel0 = document.querySelector("#recipe-label");
const recipeLabel1 = document.querySelector("#recipe-label2");
const recipeLabel2 = document.querySelector("#recipe-label3");
const recipeLabel3 = document.querySelector("#recipe-label4");
const recipeLabel4 = document.querySelector("#recipe-label5");

const listItem0 = document.querySelector("#li1");
const listItem1 = document.querySelector("#li2");
const listItem2 = document.querySelector("#li3");
const listItem3 = document.querySelector("#li4");
const listItem4 = document.querySelector("#li5");

let recipes = [recipeLabel0, recipeLabel1, recipeLabel2, recipeLabel3, recipeLabel4];
let listItems = [listItem0, listItem1, listItem2, listItem3, listItem4];
let foodToSearch = null;

// listItem1.style.listStyleImage =
//   "url('https://www.edamam.com/web-img/53c/53ca837dcd939671920e6ab70ad723a6.jpg')";

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

let images = [];
async function fetchRecipe(food) {
  //--- write your code below ---
  let requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data);
  let sampleImage =
    "url('https://www.edamam.com/web-img/16c/16c9f7a2bcf8a7643ada8729cd693c9d.jpg')";

  for (i = 0; i < 5; i++) {
    recipes[i].innerHTML = data.hits[i].recipe.url;
    recipes[i].href = data.hits[i].recipe.url;
    images.push(data.hits[i].recipe.image);
    listItems[i].style.listStyleImage = `url("${images[i]}")`;
  }
  images = [];

  // listItems.forEach((element) => {
  //   element.style.listStyleImage = sampleImage;
  // });
  //--- write your code above ---
}

//Codes
// 602bba76
// fe81edebaa638ed7c2cc3086460ee681
//sample image url : "https://www.edamam.com/web-img/16c/16c9f7a2bcf8a7643ada8729cd693c9d.jpg"
