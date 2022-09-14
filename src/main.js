import fetchRecipeData from "./functions/fetchRecipeData";
import fetchFeaturedRecipeData from "./functions/fetchRecipeDataHeader";

//Reference to form submit
const submitForm = document.getElementById('onSubmit');

//reference to input fields
const ingredients = document.getElementById('ingredients');
const mealType = document.getElementById('mealType');
const cuisine = document.getElementById('cuisine');
const diet = document.getElementById('diet');
const time = document.getElementById('time')

//send form with data
submitForm.addEventListener('submit', (e) => {
        //prevent form from auto-submitting
        e.preventDefault(); //essentieel

        //execute function to fetch data and parse our values as arguements;
        fetchRecipeData(
            ingredients.value,
            mealType.value,
            cuisine.value,
            diet.value,
            time.value,
        );
    }
);

fetchFeaturedRecipeData('mashed potatoes')
