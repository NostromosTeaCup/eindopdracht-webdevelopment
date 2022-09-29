import axios from "axios"
import createTotalAmounts from "./createCalculatorTotalAmounts";

async function fetchCalculatorData (ingredient) {
    try {

        //declare input values for API
        const URI = "https://api.edamam.com";
        const ENDPOINT = "/api/food-database/v2/parser";
        const API_ID = "0aa47492";
        const API_KEY = "aa2d4f2d20722dc95735c1f9ffff4073";

        //fetch data from API
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                app_id: API_ID,
                app_key: API_KEY,
                ingr: ingredient,
            }
        })

        //declareren van variabelen voor tabel
        const data = response.data;
        const selectedProduct = data.parsed[0].food;
        const nameOfProduct = selectedProduct.label;
        const nutrients = selectedProduct.nutrients;
        const calories = nutrients.ENERC_KCAL;
        const fat = nutrients.FAT;
        const carbs = nutrients.CHOCDF;
        const weight = data.hints[0].measures[0].weight;

        //html aanroepen
        const productCalorie = document.getElementById("createProductCalorie");
        productCalorie.replaceChildren();

        //innerHTML voor eerste gedeelte calculator
        productCalorie.innerHTML += `
                <td>${nameOfProduct}</td>
                <td>${weight}</td>
                <td>gram</td>
        `;

        //declareren van Amount formulier
        const searchQueryAmount = document.getElementById("createAmountInput");
        const submitForm = document.getElementById("calculatorAddAmount");


        //eventlistener plaatsen voor button
        submitForm.addEventListener("submit",(e) => {
            e.preventDefault();

            //total sommen tabel amount in variabelen
            const totalCalories = Math.round(searchQueryAmount.value * calories * 100) / 100;  ;
            const totalFat = Math.round(searchQueryAmount.value * fat * 100) / 100 ;
            const totalCarbs = Math.round(searchQueryAmount.value * carbs * 100) / 100;


            //data injecteren voor amount tabel
            const calorieCalculator = document.getElementById("calculatorAddedCalorieData");
            const row = calorieCalculator.insertRow(1);
            row.className = "calculator-fetched-data";
            const cellName = row.insertCell(0);
            const cellCalories = row.insertCell(1);
            const cellFat = row.insertCell(2);
            const cellCarbs = row.insertCell(3);
            cellName.innerHTML = nameOfProduct;
            cellCalories.innerHTML = totalCalories;
            cellCalories.className = "calculator-data__calories";
            cellFat.innerHTML = totalFat;
            cellFat.className = "calculator-data__fat"
            cellCarbs.innerHTML = totalCarbs;
            cellCarbs.className = "calculator-data__carbs"


            //aanroepen params van createTotalAmounts
            createTotalAmounts("calculator-data__calories", "calculator__total-of-calories", "kCal");
            createTotalAmounts("calculator-data__fat", "calculator__total-of-fat", "g");
            createTotalAmounts("calculator-data__carbs", "calculator__total-of-carbs", "g");
        })

        //error message voor in UI
    } catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerContent = 'page not found';
        } else if (e.response.status === 500) {
            error.innerContent = 'internal server error';
        }
    }
}

export default fetchCalculatorData