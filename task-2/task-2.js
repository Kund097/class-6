/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
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
    $label.textContent = `Familiar #${counterFamily + 1}`;

    let $input = document.createElement("input");
    $input.type = "number";
    $input.className = "element-family annual-salary";
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
