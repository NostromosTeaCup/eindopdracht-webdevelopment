//creating variable for title in tab
export const createRecipeBrowserTab = (selectedRecipe) => {
    const recipeBrowserTab = document.getElementById("recipePageBrowserTab");
    const tabTitle = selectedRecipe.label;


    recipeBrowserTab.innerHTML = `
    The Clueless Cook - ${tabTitle}
    `;
}

//creating recipe title
export const createRecipeTitle = (selectedRecipe) => {
    const recipeTitleCard = document.getElementById("recipeTitleCard");
    const recipeTitle = selectedRecipe.label;
    const timeIcon = new Image();
    timeIcon.src = require("../assets/icons/time.png");
    const cookingTime = selectedRecipe.totalTime;

    recipeTitleCard.innerHTML += `
    <div class="recipe-title">
    <h3>${recipeTitle}</h3>
    <p><img class="recipe-page__time-icon" src="${timeIcon.src}" alt="Time Icon"> ${cookingTime} min.</p>
    </div>
    `;
}

//fetching image for recipe
export const createRecipeImage = (selectedRecipe) => {
    const recipeImageCard = document.getElementById("recipeImage");
    const recipeImage = selectedRecipe.image;

    recipeImageCard.innerHTML = `
        <img class="recipe-image" src="${recipeImage}" alt="Recipe Image">
    `;
}

//fetching ingredients from API for recipe list
export const createRecipeIngredientsList = (selectedRecipe) => {
    const ingredients = selectedRecipe.ingredientLines;

    ingredients.map((ingredient) => {
        const recipeIngredientList = document.getElementById("ingredientsList");

        recipeIngredientList.innerHTML += `
        <li><span>${ingredient}</span></li>
        `;
    })
}

//fetching neccesary nutrients for tabel
export const createRecipeNutrients = (selectedRecipe) => {
    const recipeNutrientsResults = document.getElementById("nutrientsResults");
    const recipeNutrients = selectedRecipe.totalNutrients;
    const caloriesQuantity = Math.round(recipeNutrients.ENERC_KCAL.quantity);
    const fatQuantity = Math.round(recipeNutrients.FAT.quantity);
    const carbsQuantity = Math.round(recipeNutrients.CHOCDF.quantity);
    const sugarQuantity = Math.round(recipeNutrients.SUGAR.quantity);
    const proteinQuantity = Math.round(recipeNutrients.PROCNT.quantity);
    const sodiumQuantity = Math.round(recipeNutrients.NA.quantity);

    recipeNutrientsResults.innerHTML += `
    <tr>
       <td>${caloriesQuantity}</td>
       <td>${recipeNutrients.ENERC_KCAL.unit}</td>
    </tr>
    <tr>
        <td>${fatQuantity}</td>
        <td>${recipeNutrients.FAT.unit}</td>
    </tr>
    <tr>
        <td>${carbsQuantity}</td>
        <td>${recipeNutrients.CHOCDF.unit}</td>
    </tr>
    <tr>
        <td>${sugarQuantity}</td>
        <td>${recipeNutrients.SUGAR.unit}</td>
    </tr>
    <tr>
        <td>${proteinQuantity}</td>
        <td>${recipeNutrients.PROCNT.unit}</td>
    </tr>
    <tr>
        <td>${sodiumQuantity}</td>
        <td>${recipeNutrients.NA.unit}</td>
    </tr>
    `;
}

//fetching health labels as assigned by API
export const createRecipeHealthLabels = (selectedRecipe) => {
    const recipeHealthLabels = selectedRecipe.healthLabels;

    recipeHealthLabels.map((healthLabel) => {
        const recipeHealthLabelsCard = document.getElementById("recipeHealthLabelList");

        recipeHealthLabelsCard.innerHTML = `
        <li class="health-labels">${healthLabel}</li>
        `
    })
}