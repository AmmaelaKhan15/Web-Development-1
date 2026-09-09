//Exercise 1
console.log("Hello World!");
alert("Hello World!");

//Exercise 2
const userName= "Ammaela";
const favoriteAnimal= "cat";
const age= 20;

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);
console.log("My age is " + age);

console.log("Hey, I'm " + userName + "! my favorite animal is " + favoriteAnimal + ". I'm " + age + " years old!");

//Exercise 3
const visitorName = prompt("What is your name?");
const visitorFavoriteAnimal= prompt("What is favorite your animal?");

console.log(visitorName);
console.log(visitorFavoriteAnimal);


alert("Welcome to this page!");

console.log("Hey, "+ visitorName + "! Your favorite animal is "+ visitorFavoriteAnimal);


//Exercise 4
const UserAge = Number(prompt("What is your age?"));

if (UserAge >= 18){

    console.log("You are an adult.")
} else {
    console.log("You are under 18.")
}

//Exercise 5
function greetUser(name) { console.log("Hello " + name + "!"); }
greetUser("Maya");

//Bonus
const button = document.getElementById("btn");

button.addEventListener ("click" , function() {
    console.log("Thank you for clikcing the button! Hope you have a great day!")
});