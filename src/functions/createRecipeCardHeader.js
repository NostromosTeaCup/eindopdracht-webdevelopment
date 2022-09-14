export default function createFeaturedRecipeCard(recipeArray) {
    //connecting with HTML div
    const recipeList = document.getElementById('featuredRecipesCardsList');
    //image for the time-icon
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");


    recipeArray.map((item) => {
        //making the cards for the recipes
        recipeList.innerHTML += `
    <li class="featured-recipe-cards__result-item">
    <img class="featured-recipe-cards__result-image" src="${item.recipe.image}" alt="${item.recipe.label}">
    <div class="featured-recipe-card__result">
    <p class="recipe-label">${item.recipe.label}</p>
    <div class="recipe-cards__text">
    <p><strong>${Math.round(item.recipe.calories)}</strong> Calories | <strong>${item.recipe.ingredientLines.length} </strong> Ingredients</p>
    <p><img class="time-icon" src="${timeImage.src}" alt="Time Icon">
    <strong>${item.recipe.totalTime}</strong> min.</p>
</div>
 </div></li>
    `
    })
}
