function createTotalAmounts(classNameOfProducts, selectedTableCell, label) {
    //variabelen maken voor tabel amount
    const productData = document.getElementsByClassName(classNameOfProducts);
    const AllNutrients = [];

    //forloop om door productData heen te loopen
    for (let i = 0; i < productData.length; i++) {
        AllNutrients.push(productData[i].innerText);
    }

    //van string naar number
    const AllNutrientsToNum = AllNutrients.map(str => {
        return Number(str);
    });

    //variabelen voor aanspreken van values
    const initialValue = 0;
    const sumOfAllNutrients = AllNutrientsToNum.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
    );

    //let variabele voor totalNutrients omdat het geen constant is en veranderd wordt.
    let totalNutrients = document.getElementById(selectedTableCell);

    //innerHTML voor alle nutrienten
    totalNutrients.innerHTML = `${Math.round(sumOfAllNutrients * 100) / 100} ${label}`;
}

export default createTotalAmounts;