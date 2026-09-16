//Exercise 1
function showTable(){
    const animal = "Animal";
    const habitat = "Habitat";
    const diet = "Diet";

    const animal1 = "Tiger";
    const habitat1 = "Forest";
    const diet1 = "Carnivore";


    const animal2 = "Elephant";
    const habitat2 = "Savanna";
    const diet2 = "Herbivore";

    const table = `<table> 
                        <tr>
                            <td> ${animal} </td>
                            <td>  ${habitat} </td>
                            <td> ${diet} </td>
                        </tr>
                
                        <tr>
                            <td> ${animal1} </td>
                            <td>  ${habitat1} </td>
                            <td> ${diet1} </td>
                        </tr>

                        <tr>
                            <td> ${animal2} </td>
                            <td>  ${habitat2} </td>
                            <td> ${diet2} </td>
                        </tr>
                    </table>`;

    document.querySelector("#tableContainer").innerHTML = table;
}

//Exercise 2
const exercise2 = document.querySelector("#exercise2")

exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const exercise1 = document.querySelector("#exercise1")

exercise1.addEventListener("click", function() {
    exercise1.innerHTML = "Bye bye mouse!";
    exercise1.style.color = "red";
});

//Exercise 3
const feedback = document.querySelector("#feedback");

const status = document.querySelector("#status");

feedback.addEventListener("focus", function() {

    status.innerHTML = "You are typing!";

});

feedback.addEventListener("blur", function(){
    status.innerHTML = "";
})

const charcount = document.querySelector("#charcount");

const preview = document.querySelector("#preview");

feedback.addEventListener("input", function(){
    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value;
})

//Exercise 4
const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(feedback.value.length <10 || feedback.value.length >200){
        status.innerHTML = "Feedback must be between 10 and 200 characters.";
    }
    else {
        feedback.value = "";
        status.innerHTML = "Thank you for your feedback :)";
    }

});

//Exercise 5
let keyCount = 0;

document.addEventListener("keydown", function(event){
    const keyinfo = document.querySelector("#keyinfo");
    console.log(event);
    keyinfo.innerHTML = "Key: " + event.key + " | Code: " + event.code;
    keybox.innerHTML = event.key;

    //Bonus task #3
    keyinfo.innerHTML += "| Shift: " + event.shiftKey + " | Ctrl: " + event.ctrlKey + " | Alt: " + event.altKey;

    // Bonus task #1
    if(event.key === "a"){
        document.body.style.backgroundColor = "pink";
    }

    else if(event.key === "b"){
        document.body.style.backgroundColor = "lightblue";
    }

    else if(event.key === "c"){
        document.body.style.backgroundColor = "yellow";
    }

    else if(event.key === "d"){
        document.body.style.backgroundColor = "green";
    }

    else if(event.key === "e"){
        document.body.style.backgroundColor = "orange";
    }

    else if(event.key === "f"){
        document.body.style.backgroundColor = "red";
    }

    else if(event.key === "g"){
        document.body.style.backgroundColor = "gray";
    }

    else if(event.key === "h"){
        document.body.style.backgroundColor = "purple";
    }

    else if(event.key === "i"){
        document.body.style.backgroundColor = "darkblue";
    }

    else if(event.key === "j"){
        document.body.style.backgroundColor = "lightpurple";
    }

    else if(event.key === "k"){
        document.body.style.backgroundColor = "brown";
    }

    else if(event.key === "l"){
        document.body.style.backgroundColor = "pink";
    }

    else if(event.key === "m"){
        document.body.style.backgroundColor = "lightpink";
    }

    else if(event.key === "n"){
        document.body.style.backgroundColor = "violet";
    }

    else if(event.key === "o"){
        document.body.style.backgroundColor = "orange";
    }

    else if(event.key === "p"){
        document.body.style.backgroundColor = "red";
    }
    
    else if(event.key === "q"){
        document.body.style.backgroundColor = "blue";
    }
    
    else if(event.key === "r"){
        document.body.style.backgroundColor = "black";
    }

    else if(event.key === "s"){
        document.body.style.backgroundColor = "yellow";
    }

    else if(event.key === "t"){
        document.body.style.backgroundColor = "green";
    }

    else if(event.key === "u"){
        document.body.style.backgroundColor = "darkgreen";
    }

    else if(event.key === "v"){
        document.body.style.backgroundColor = "pink";
    }

    else if(event.key === "w"){
        document.body.style.backgroundColor = "blue";
    }

    else if(event.key === "x"){
        document.body.style.backgroundColor = "yellow";
    }

    else if(event.key === "y"){
        document.body.style.backgroundColor = "red";
    }

    else if(event.key === "z"){
        document.body.style.backgroundColor = "gray";
    }

    //Bonus task #2
    keyCount++;
    document.querySelector("#counter").innerHTML = "Key presses: " + keyCount;

});

//Bonus Location task
// I made the url a comment just becaause it kept turning the whole page into google maps. 

navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
       // const url = `https://www.google.com/maps?q=${lat},${lon}`;
       // window.location.href = url;
    }
);


