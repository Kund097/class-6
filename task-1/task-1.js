/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $enterFamilyGroupButton = document.querySelector("#enter-family-group");

$enterFamilyGroupButton.onclick = function (event) {
    verifiedElements();
    const elements = createElements(getFamilyQuantity());
    insertElements(elements);

    event.preventDefault();
};

const $clearNodesButton = document.querySelector("#clear-nodes");
$clearNodesButton.onclick = verifiedElements;

function getFamilyQuantity() {
    return Number(document.querySelector("#quantity-family-group").value);
}

function createElements(quantity) {
    const elements = [];

    for (let i = 0; i < quantity; i++) {
        let $label = document.createElement("label");
        $label.textContent = `Familiar #${i + 1}`;
        $label.className = "family-element";

        let $input = document.createElement("input");
        $input.type = "number";
        $input.className = "family-element age";

        let $br = document.createElement("br");
        $br.className = "family-element";

        elements.push($br);
        elements.push($label);
        elements.push($input);
    }

    return elements;
}

function insertElements(elements) {
    let $familyGroup = document.querySelector("#family-group");

    for (let i = 0; i < elements.length; i++) {
        $familyGroup.appendChild(elements[i]);
    }
}

function verifiedElements() {
    let $familyElements = document.querySelectorAll(".family-element");
    if ($familyElements.length !== 0) {
        clearElements($familyElements);
    }
}

function clearElements(elements) {
    document.querySelector("#oldest-person").textContent = "";
    document.querySelector("#youngest-person").textContent = "";
    document.querySelector("#family-average-age").textContent = "";
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

const $calculateFamilyGroupButton = document.querySelector(
    "#calculate-family-group"
);

//calculos

$calculateFamilyGroupButton.onclick = function (event) {
    if (!verifiedInputs()) {
        const ages = getFamilyGroupAges();

        let oldestAge = calculateOldestPerson(ages);
        let youngestAge = calculateYoungestPerson(ages);
        let averageAge = calculateAverageAges(ages);

        insertOldestPerson(oldestAge);
        insertYoungestAge(youngestAge);
        insertAverageAge(averageAge);
    }

    event.preventDefault();
};

function getFamilyGroupAges() {
    const ages = [];
    const $familyGroupAges = document.querySelectorAll(".age");
    for (let i = 0; i < $familyGroupAges.length; i++) {
        ages.push(Number($familyGroupAges[i].value));
    }

    return ages;
}

function calculateOldestPerson(ages) {
    let oldestPerson = ages[0];

    for (let i = 0; i < ages.length; i++) {
        oldestPerson = oldestPerson > ages[i] ? oldestPerson : ages[i];
    }

    return oldestPerson;
}

function calculateYoungestPerson(ages) {
    let youngestPerson = ages[0];

    for (let i = 0; i < ages.length; i++) {
        youngestPerson = youngestPerson < ages[i] ? youngestPerson : ages[i];
    }

    return youngestPerson;
}

function calculateAverageAges(ages) {
    let accumulator = 0;
    for (let i = 0; i < ages.length; i++) {
        accumulator += ages[i];
    }

    return accumulator / ages.length;
}

//resultados

function insertOldestPerson(oldestAge) {

    document.querySelector("#oldest-person").textContent = `Mayor edad: ${oldestAge}`;
}

function insertYoungestAge(youngestAge) {

    document.querySelector("#youngest-person").textContent = `Menor edad: ${youngestAge}`;
}

function insertAverageAge(averageAge) {

    document.querySelector("#youngest-person").textContent = `Promedio familiar edad: ${averageAge}`;
}

function verifiedInputs() {
    return getFamilyQuantity() === 0 || getFamilyGroupAges()[0] === 0;
}
