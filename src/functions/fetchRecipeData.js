import axios from "axios";
import createRecipeCard from "./createRecipeCard";

// Fetching data from edamam API
export default async function fetchRecipeData(searchQuery, mealType) {

    //if fetching is succesfull
    try {

        //declare input values for Recipe Search API
        const URI = "https://api.edamam.com";
        const ENDPOINT = "/api/recipes/v2";
        const API_ID = "#";
        const API_KEY = "#";

        //fetch data from api
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: searchQuery,
                mealType: mealType
            }
        })

        //store recipe key in variable
        const arrayOfRecipes = response.data.hits

        createRecipeCard(arrayOfRecipes);

        //catch error message and show them in UI
    } catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerContent = 'page not found';
        } else if (e.response.status === 500) {
            error.innerContent = 'internal server error';
        }
    }
}