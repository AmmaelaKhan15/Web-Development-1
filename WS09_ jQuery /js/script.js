//Variables used throughout the weather app. 
let tempChart = null; // Global chart reference
let chartData = {}; // Store data and labels for reuse
let city = "";

//checking which language the page uses. 
const language = document.documentElement.lang === "en" ? "en" : "fi";

//Get the city coordinates and weather forcast using Axios

async function getForecast(city, apiKey) {

    //find the city's location

    const locations = await axios.get(
        "https://api.openweathermap.org/geo/1.0/direct", 
        {
            params: {
                q: city,
                limit: 1,
                appid: apiKey
            }
        }
    );
    
    //check whether the city exists

    const place = locations.data[0];

    if(!place) {
        return [];
    }   

    // Get the weather forecast using the city's coordinates

    const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
        params: {
            lat: place.lat,
            lon: place.lon,
            units: "metric",
            appid: apiKey
        }
    }
);
    //return the forecast data
    return response.data.list;
}

// get the weather data and display it on the chart
async function haeSaa() {
  
  // get the city and API key entered by the user
  city = document.getElementById("kaupunki").value.trim();
  const apiKey = document.getElementById("apiKey").value.trim();
  // check that both fields have been filled in
  if (city === ""|| apiKey === "") {
    alert("Please enter both a city and an API key.");
    return;
  }

  // save the last searched city (extra feature)
  localStorage.setItem("lastCity", city);


  try {
    //get the weather forcast for the selected city
    const forecast = await getForecast(city, apiKey);

    // check whether the city was found 
    if(forecast.length === 0) {
        alert("City not found. Please try another city.");
        return;
    }
    
    // extract the forecast dates and temps
    const labels = forecast.map((item)=> {
        return item.dt_txt.slice(0,16);
    });

    const temperatures = forecast.map((item)=> {
        return item.main.temp;
    })

    // store the data so the chart can be updated later
    chartData = { labels, temperatures };

    // draw the forecast as a line chart. 
    piirraKaavio(labels, temperatures, city, "line");

  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Could not fetch weather data. Check the city name or API key.");
  }
}
// create and display the weather chart
function piirraKaavio(labels, data, city, type) {
  const ctx = document.getElementById("tempChart").getContext("2d");

  // Destroy the previous chart before creating a new one.
  if (tempChart) {
    tempChart.destroy();
  }

  // Create a new chart.
tempChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: `${language === "en" ? "Temperature" : "Lämpötila"} (${city}) °C`,
          data: data,
          borderWidth: 2,
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

// update the chart when the user changes the chart type
function paivitaKaavio() {
    // check the forecast data is available
    if(!chartData.labels || !chartData.temperatures){
        return;
    }
  // Get the selected chart type.
  const type = document.getElementById("chartType").value;
  // Redraw the chart using the selected type.
  piirraKaavio(chartData.labels, chartData.temperatures, city, type);
}
// load the last searched city from the localStorage
const savedCity= localStorage.getItem("lastCity");
if(savedCity) {
    document.getElementById("kaupunki").value = savedCity;
}
//listen for clicks on the search button
document.querySelector("#haeSaaPainike")
    .addEventListener("click", haeSaa);

// listen for changes to the chart selector 
document.querySelector("#chartType")
    .addEventListener("change", paivitaKaavio);

// JQuery Bonus - adding a fun message when the the weather button in clicked 
$("#haeSaaPainike").click(function() {
    $("#saaYllatys").stop(true, true).fadeIn(500).delay(1500).fadeOut(500);
});