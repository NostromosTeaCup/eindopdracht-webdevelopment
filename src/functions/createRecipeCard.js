export default function createRecipeCard(recipeArray) {
    //connecting with HTML div
    const recipeList = document.getElementById('recipeCardsList');
    //image for the time-icon
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");


    recipeArray.map((item) => {
        //make variable for recipe link to recipe-page.html
        const id = item.recipe.uri.split('_')[1];
        //making the cards for the recipes
        recipeList.innerHTML += `
    <li class="recipe-cards__result-item">
        <a href="/recipe-page.html?id=${id}" target="_blank">
    <img class="recipe-cards__result-image" src="${item.recipe.image}" alt="${item.recipe.label}">
    <div class="recipe-card__result">
    <p class="recipe-label">${item.recipe.label}</p>
    <div class="recipe-cards__text">
    <p><strong>${Math.round(item.recipe.calories)}</strong> Calories | <strong>${item.recipe.ingredientLines.length} </strong> Ingredients</p>
    <p><img class="time-icon" src="${timeImage.src}" alt="Time Icon">
    <strong>${item.recipe.totalTime}</strong> min.</p>
</div>
 </div>
 </a></li>
    `
    })
}
