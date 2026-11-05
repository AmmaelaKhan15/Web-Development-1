// Store your OpenWeatherMap API key.
const apiKey = '3ca3661fbb66dfc3df1b40c23ea3cc17';

// Find the HTML element where we display the weather data.
const weatherdata = document.querySelector("#weatherdata");

// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
document.querySelector("#fetchWeather").addEventListener("click", async function(){


     // Display a loading message.
     weatherdata.textContent= "Loading the weather data...";
   

    // Try to fetch and process the weather data.
     try {
        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
        const city = document.getElementById("city").value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&appid=${apiKey}`);

        // Check whether the API returned a successful HTTP status.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
         // Create an error and jump to the catch block.
        

        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        const xml= new DOMParser().parseFromString(xmlText, "application/xml");

        const temperatureElement = xml.querySelector("temperature");
        const temperature = temperatureElement.getAttribute("value");

        const cloudsElement = xml.querySelector("clouds");
        const clouds = cloudsElement.getAttribute("value");

        const humidityElement = xml.querySelector("humidity");
        const  humidity =  humidityElement.getAttribute("value");


        weatherdata.innerHTML=
            `Current temperature in ${city}: ${temperature} °C <br>` +
            `Cloud cover: ${clouds} % <br>` +
            `Humidity: ${humidity} %`;
        // Display the XML as plain text on the page.

    // Handle errors from the request or the code above.
    } catch (error) {

        // Choose an error message in the page's language.
        const message = `Error fetching weather data: ${error.message}`;
        console.error(message);

        // Display the message and details of the error.
        weatherdata.textContent = `Error: ${error.message}`;
    }
});

function searchWeather() {

    // Get the city name entered by the user.
    const city = document.getElementById("citysearch").value;
    
    // Check if the search field is empty.
    if(city.trim() === '') {
        alert('Please enter a city name!');
        return;
    }
    
    // Create the API URL using the searched city.
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&mode=xml&appid=${apiKey}`;
    
    // Display a loading message while fetching data.
    weatherdata.textContent = "Loading the weather data...";
    
    // Fetch weather data from the OpenWeatherMap API.
    fetch(url)
    .then(response => response.text())
    .then (xmlText => {

        // Convert the XML response into a readable document.
        const xml = new DOMParser().parseFromString(xmlText, "application/xml");
        
        // Get the temperature from the XML.
        const temperatureElement = xml.querySelector("temperature");
        const temperature = temperatureElement.getAttribute("value");
        
        // Get the clouds coverage from the XML.
        const cloudsElement = xml.querySelector("clouds");
        const clouds = cloudsElement.getAttribute("value");
        
        // Get the humidity from the XML.
        const humidityElement = xml.querySelector("humidity");
        const humidity =  humidityElement.getAttribute("value");
 
        // Display the weather information on the webpage.
        weatherdata.innerHTML=
        `Current temperature in ${city}: ${temperature} °C <br>` +
        `Cloud cover: ${clouds} % <br>` +
        `Humidity: ${humidity} %`;
    })
    
    // Handle errors if the request fails.
    .catch(error => {
        console.error("Error fetching weather data:", error);
        weatherdata.textContent = `Error: ${error.message}`;
    });
}