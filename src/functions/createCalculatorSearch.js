import fetchCalculatorData from "./fetchCalculatorData";


//aanroepen form van eerste gedeelte calculator
const submitProductCalorieData = () => {
    const searchQueryCalculator = document.getElementById("searchQueryCalculator");
    const submitForm = document.getElementById("calculatorSubmit");


    //eventlistener voor calculator submit button
    submitForm.addEventListener("submit",(e) => {
        e.preventDefault();
        fetchCalculatorData(searchQueryCalculator.value)
    })
}

export default submitProductCalorieData;
