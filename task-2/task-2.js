/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
*/

let counterFamily = 0;
document.querySelector("#add-family").onclick = function (event) {
    
    let elementsFamily = createElementsFamily();
    insertElementsFamily(elementsFamily);
    counterFamily++;
    event.preventDefault();
};

function createElementsFamily() {
    let $br = document.createElement("br");
    $br.className = "element-family";

    let $label = document.createElement("label");
    $label.className = "element-family";
    $label.textContent = `Salario mensual #${counterFamily + 1}`;

    let $input = document.createElement("input");
    $input.type = "number";
    $input.className = "element-family monthly-salary";
    return [$br, $label, $input];
}

function insertElementsFamily(elementsFamily) {
    $divGroupFamily = document.querySelector("#group-family");

    for (let i = 0; i < elementsFamily.length; i++) {
        $divGroupFamily.appendChild(elementsFamily[i]);
    }
}

function removeElementsFamily(elementsFamily) {
    for (let i = 0; i < 3; i++) {
        elementsFamily[elementsFamily.length - 1 - i].remove();
    }
}

function getElementsFamily() {
    return document.querySelectorAll(".element-family");
}

document.querySelector("#remove-family").onclick = function (event) {
    let $elementsFamily = getElementsFamily();

    if ($elementsFamily.length !== 0) {
        removeElementsFamily($elementsFamily);
        counterFamily--;
    }

    event.preventDefault();
};

// calculos
/**
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
 */
document.querySelector("#calculate-salary").onclick = function (event) {

    let monthlySalary = getMonthlySalary();
    if (monthlySalary.length !== 0) {
        let highterAnnualSalary = calculateHighterAnnualSalary(monthlySalary);
        let lowestAnnualSalary = calculateLowestAnnualSalary(monthlySalary);
        let averageAnnualSalary = calculateAverageAnnualSalary(monthlySalary);
        let averageMonthlySalary =  calculateAverageMonthlySalary(monthlySalary);
        printHighterAnnualSalary(highterAnnualSalary);
        printLowestAnnualSalary(lowestAnnualSalary);
        printAverageAnnualSalary(averageAnnualSalary);
        printAverageMonthlySalary(averageMonthlySalary);
    }
   

    event.preventDefault();
};

function getMonthlySalary() {
    const monthlySalary = [];
    let $monthlySalary = document.querySelectorAll(".monthly-salary");

    for (let i = 0; i < $monthlySalary.length; i++) {
        if (Number($monthlySalary[i].value) !== 0) {
            monthlySalary.push(Number($monthlySalary[i].value));
        }
    }
    return monthlySalary;
}

function calculateHighterAnnualSalary(monthlySalary) {
    const MONTHS_OF_YEAR = 12;
    let highter = monthlySalary[0];

    for (let i = 0; i < monthlySalary.length; i++) {
        highter = highter > monthlySalary[i] ? highter : monthlySalary[i];
    }
    return highter * MONTHS_OF_YEAR;
}

function calculateLowestAnnualSalary(monthlySalary) {
    const MONTHS_OF_YEAR = 12;
    let lowest = monthlySalary[0];

    for (let i = 0; i < monthlySalary.length; i++) {
        lowest = lowest < monthlySalary[i] ? lowest : monthlySalary[i];
    }
    return lowest * MONTHS_OF_YEAR;
}

function calculateAverageAnnualSalary(monthlySalary) {
    const MONTHS_OF_YEAR = 12;
    let accumulator = 0;

    for (let i = 0; i < monthlySalary.length; i++) {

        accumulator += monthlySalary[i];

    }

    return (accumulator / monthlySalary.length) * MONTHS_OF_YEAR;

}

function calculateAverageMonthlySalary(monthlySalary){
    let accumulator = 0;

    for (let i = 0; i < monthlySalary.length; i++) {

        accumulator += monthlySalary[i];

    }
    return accumulator / monthlySalary.length;
}

function printHighterAnnualSalary(highterAnnualSalary) {

    document.querySelector("#highter-annual-salary").textContent = `El salaro anual más alto: ${highterAnnualSalary}, `;

}

function printLowestAnnualSalary(lowestAnnualSalary) {

    document.querySelector("#lowest-annual-salary").textContent = `El salario anual más bajo: ${lowestAnnualSalary}, `;
}

function printAverageAnnualSalary(averageAnnualSalary) {

    document.querySelector("#average-annual-salary").textContent = `El salario anual promedio: ${averageAnnualSalary.toFixed(2)}, `;
}

function printAverageMonthlySalary(averageMonthlySalary) {

    document.querySelector("#average-monthly-salary").textContent = `El salaro mensual promedio: ${averageMonthlySalary.toFixed(2)}`;
}