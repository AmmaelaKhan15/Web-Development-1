// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";

    animalName.classList.remove("invalid");
    animalSpecies.classList.remove("invalid");
    careNote.classList.remove("invalid");

    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.

    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    // TODO: Validate and show errors / Validoi ja näytä virheet.

    let isValid = true;

    if (name == "") {
        nameError.textContent = "Please enter the animal's name.";
        animalName.classList.add("invalid");
        isValid = false;
    }

    if (species === ""){
        speciesError.textContent = "Please enter the animal's species.";
        animalSpecies.classList.add("invalid");
        isValid = false;
    }

    if (note.length === 0 || note.length > 150) {
        noteError.textContent = "Care note must be between 1 and 150 characters.";
        careNote.classList.add("invalid");
        isValid = false;
    }

    // TODO: If valid, show the result / Näytä hyväksytty tulos.

    if (!isValid){
        formResult.textContent = "Please correct the errors above.";
        return;
    }

    formResult.textContent = `Animal added: ${name} / ${species} / ${note}`;

    // TODO: Create { name, species, note } and save it as JSON.
    // TODO: Luo { name, species, note } ja tallenna se JSON-tekstinä.

    const animal = {
        name: name, 
        species: species,
        note: note
    }

    localStorage.setItem("ws05Animal", JSON.stringify(animal));

    let animals = JSON.parse(localStorage.getItem("ws05Animals")) || [];

    animals.push(animal);

    localStorage.setItem("ws05Animals", JSON.stringify(animals));

    displayAnimals();
});

// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().

    const animal = animalType.value;
    const years = Number(yearsInput.value);

    // TODO: Calculate the price and apply discounts.

    if (!Number.isInteger(years) || years <= 0) {
        cost.textContent = "Please enter a positive whole number of years.";
        discountMessage.textContent = "";
        return;
    }

    const annualFee = Number(animal);

    let total = annualFee * years;
    let discount = 0;

    if (years > 2) {
        discount = total * 0.20;
        total = total - discount; 
    }

    if (years >= 5) {
        total = total - 5;
        discount = discount + 5;
    }

    // TODO: Show the result / Näytä tulos.

    cost.textContent = `Total: €${total.toFixed(2)}`;

    if (discount > 0){
        discountMessage.textContent = 
            `You saved €${discount.toFixed(2)}!`;
    } else {
        discountMessage.textContent = "No discount applied.";
    }

});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");
const animalList = document.getElementById("animalList");

function displayAnimals() {
    const animals = JSON.parse(localStorage.getItem("ws05Animals")) || [];

    animalList.textContent = "";
    animals.forEach(function (animal, index) {
        const item = document.createElement("p");
        item.textContent = `${index + 1}. ${animal.name} - ${animal.species} - ${animal.note}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            animals.splice(index, 1);
            localStorage.setItem("ws05Animals", JSON.stringify(animals));
            displayAnimals();
        });

        item.appendChild(deleteButton);
        animalList.appendChild(item);
    });
}

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    // TODO: Display name, species and note with textContent.
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.

    const savedData = localStorage.getItem("ws05Animal");

    if (savedData === null){
        savedAnimal.textContent = "No saved animal yet";
        return;
    }

    const animal = JSON.parse(savedData);

    savedAnimal.textContent = `Name: ${animal.name} | Species: ${animal.species} | Care note: ${animal.note}`;

}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {

    // TODO: Remove ws05Animal and update the displayed result.
    // TODO: Poista ws05Animal ja päivitä sivulla näkyvä tulos.

    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "Saved animal cleared.";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
// TODO: Kutsu loadAnimal() tässä, jotta tiedot palautuvat sivun avautuessa.

loadAnimal();
displayAnimals();
