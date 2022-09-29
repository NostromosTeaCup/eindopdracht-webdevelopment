import axios from "axios";
import {
    createRecipeBrowserTab,
    createRecipeTitle,
    createRecipeImage,
    createRecipeIngredientsList,
    createRecipeNutrients, createRecipeHealthLabels
} from "./createRecipePageCard";

//loading requested content
document.addEventListener("DOMContentLoaded", (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");
    event.preventDefault();


    //fetch recipe DATA from Edamam API
    const fetchDataRecipe = async () => {
        //if fetching is succesfull...
        try {

            //declare input values for Recipe Search API
            const URI = "https://api.edamam.com";
            const endpoint = "/api/recipes/v2/";
            const API_ID = "#";
            const API_KEY = "#";

            //fetch data from API
            const response = await axios.get(`${URI}${endpoint}${id}`, {
                params: {
                    type: "public",
                    app_key: API_KEY,
                    app_id: API_ID,
                }
            });

// fetching variables from fetchRecipePageCard.js
            const selectedRecipe = response.data.recipe;
            createRecipeBrowserTab(selectedRecipe);
            createRecipeTitle(selectedRecipe);
            createRecipeImage(selectedRecipe);
            createRecipeIngredientsList(selectedRecipe);
            createRecipeNutrients(selectedRecipe);
            createRecipeHealthLabels(selectedRecipe);

//catch error message and show them in UI
        } catch (err) {
            const error = document.getElementById("error-message")

            if (e.response.status === 404) {
                error.innerContent = 'page not found';
            } else if (e.response.status === 500) {
                error.innerContent = 'internal server error';
            }
        }
    };
    fetchDataRecipe();
});