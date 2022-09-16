import axios from "axios"

const fetchCalculatorData = async (ingredient) => {

    //declaring values for API
    const URI = "https://api.edmam.com";
    const ENDPOINT = "/api/food-database/v2/parser";
    const APP_KEY = "aa2d4f2d20722dc95735c1f9ffff4073";
    const APP_ID = "0aa47492";


    //fetch data from Food Database API
    try {
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                ingr: ingredient
            }
        })

        //place element js here

    } catch (e) {
        console.error(e);
    }
};

//export?