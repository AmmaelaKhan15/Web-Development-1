// Task 1

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click" , function(){
    animalTable.hidden = !animalTable.hidden;
    console.log("Button Pressed");
}); 

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent= "Updated heading!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function(){
    taskOneHeading.classList.toggle("highlight");
});

const changeTextButton = document.querySelector("#changeTextButton");

const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function() {
    animalText.textContent = "Penguins are the cutest animals.";
});

//Task 1_Bonus Tasks

const addSentenceButton = document.querySelector("#addSentenceButton");

addSentenceButton.addEventListener("click", function(){
    animalText.textContent += "They live in very very cold places like, Antarctica!";
});


const ChangeBackgroundButton = document.querySelector("#ChangeBackgroundButton");

ChangeBackgroundButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});

// Task 2

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

const animalDescription = document.createElement("p");
animalDescription.textContent = "Pandas eat a lot of bamboos!";

const animalImage = document.createElement("img");
animalImage.src = "images/panda.png";
animalImage.alt = "Panda Picture";

animalContent.append(animalHeading, animalDescription, animalImage);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function() {
    animalContent.hidden = true; 
});

showAnimalButton.addEventListener("click", function() {
    animalContent.hidden = false;
});

//Task 3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImageTask3 = document.querySelector("#animalImage");
const animalDescriptionTask3 = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function(){
    const selectedAnimal = animalSelect.value;
    
    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImageTask3.src = "images/elephant.png";
        animalDescriptionTask3.textContent = "Elephants do not like to eat peanuts.";
    }

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImageTask3.src = "images/tiger.png";
        animalDescriptionTask3.textContent = "Tigers don't like eating boiled vegetables!";
    }

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImageTask3.src = "images/penguin.png";
        animalDescriptionTask3.textContent = "Penguin like eating and catching fish!";
    }

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImageTask3.src = "images/panda.png";
        animalDescriptionTask3.textContent = "Panda's are very lazy and have strong teeth!";
    }

});

animalImageTask3.addEventListener("mouseenter", function(){
    animalImageTask3.classList.add("image-highlight");
});

animalImageTask3.addEventListener("mouseleave", function(){
    animalImageTask3.classList.remove("image-highlight");
});

//Task 4

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener("submit", function(event){
    event.preventDefault();

    const animalInput = document.querySelector("#observationAnimal");
    const locationInput = document.querySelector("#observationLocation");
    const dateInput = document.querySelector("#observationDate");


    if(animalInput.value === "" || locationInput.value === "" || dateInput.value === ""){
        alert("Please fill in all the fields.");
        return;
    }

    const animalTableBody = document.querySelector("#observationTableBody");

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animalInput.value;

    const locationCell = document.createElement("td");
    locationCell.textContent = locationInput.value;

    const dateCell = document.createElement("td");
    dateCell.textContent = dateInput.value;

//Task 4_Bonus task

    const removeCell = document.createElement ("td");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click" , function(){
        newRow.remove ();
    });

    removeCell.append(removeButton);

    newRow.append(animalCell,locationCell, dateCell, removeCell);

    animalTableBody.append(newRow);
});

//Bonus Tasks

const moveImageButton = document.querySelector("#moveImageButton");

moveImageButton.addEventListener("click", function () {
    animalImageTask3.classList.add("image-move");
});

const fadeImageButton = document.querySelector("#fadeImageButton");

fadeImageButton.addEventListener("click", function(){
    animalImageTask3.classList.add("image-fade");
});

const removeImageButton = document.querySelector("#removeImageButton");

removeImageButton.addEventListener("click", function(){
    animalImageTask3.remove();
});

const listItems = document.querySelectorAll("li");

listItems.forEach(function(item){
    console.log(item.textContent);
});