import axios from "axios";
import createFeaturedRecipeCard from "./createRecipeCardHeader";

export default async function fetchFeaturedRecipeData(searchQuery) {

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
                q: searchQuery
            }
        })

        //response for featured recipes in Header
        const featuredRecipeHits = response.data.hits;
        createFeaturedRecipeCard(featuredRecipeHits.slice(0, 3));

    } catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerContent = 'page not found';
        } else if (e.response.status === 500) {
            error.innerContent = 'internal server error';
        }
    }
}