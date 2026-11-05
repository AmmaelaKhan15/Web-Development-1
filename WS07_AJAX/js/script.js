/* Exercise 1 */
var text = '{"employees" : ['+
'{"firstName":"John" , "lastName":"Doe"},'+
'{"firstName":"Anna" , "lastName":"Smith"},'+
'{"firstName":"Peter" , "lastName":"Jones"}]}';

function showNames(){
    const employees = JSON.parse(text).employees;
    const output = document.getElementById('jsondata');
    
        output.innerHTML = '';

        for (let i = 0; i < employees.length; i++){
            output.innerHTML += employees[i].firstName + ' ' +
                employees[i].lastName + '<br>';
        }
}

function showDetails(){
    const employees = JSON.parse(text).employees;
    const output = document.getElementById('jsondata');

        output.innerHTML = '';

        for(let i = 0; i < employees.length; i++) {
            output.innerHTML +=
            '<p>First name: ' + employees[i].firstName +
            '<br>Last name: ' + employees[i].lastName +
            '</p>';
        }
}

/* Exercise 2 */

function loadRawData() {
    
    const output = document.getElementById('rawdata');

    fetch('https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750')
    .then(response => response.text())
    .then(data => {
        output.textContent = data;
    })
    .catch(error => {
        output.textContent = 'Error loading data: ' + error;
    });
}

function loadParsedData(){
    const output = document.getElementById('rawdata');

    fetch('https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750')
    .then(response => response.json())
    .then(data => {
        let table = '<table>';

        table += '<tr>';
        table += '<th>Title</th>';
        table += '<th>Year</th>';
        table += '<th>Type</th>';
        table += '<th>Poster</th>';
        table += '</tr>';

        for (let i=0; i <data.Search.length; i++){
            table += '<tr>';
            table += '<td>' + data.Search[i].Title +'</td>';
            table += '<td>' + data.Search[i].Year +'</td>';
            table += '<td>' + data.Search[i].Type +'</td>';
            table += '<td><img src="' + data.Search[i].Poster + '"width="100"></td>';
            table += '</tr>';
        }

        table += '</table>';

        output.innerHTML = table;
    })

    .catch(error => {
        output.textContent = 'Error loading data: ' + error.message;
    });
}

/* Exercise 3 */

function fetchWeather(){
    const city = document.getElementById('city').value;
    const apiKey = '3ca3661fbb66dfc3df1b40c23ea3cc17';

    const url = 'https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&units=metric&appid=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('weatherdata');

        output.innerHTML =
        '<h3> Weather in ' + data.name + '</h3>' +
        '<p> Temperature: ' + data.main.temp + '°C </p>' +
        '<p> Cloud cover: ' + data.clouds.all + '% </p>' +
        '<p> Humidity: ' + data.main.humidity + '% </p>' ;
    })

    .catch(error => {
        document.getElementById('weatherdata').textContent = 
        'Error loading weather data: ' + error ;
    });
}

function searchWeather(){
    const city = document.getElementById('citysearch').value;

    if(city.trim() === ''){
        alert('Please enter a city name!');
        return;
    }

    const apiKey = '3ca3661fbb66dfc3df1b40c23ea3cc17';

    const url = 'https://api.openweathermap.org/data/2.5/weather?q='
    + encodeURIComponent(city) + '&units=metric&appid=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('weatherdata');

        if(data.cod !== 200){
            output.textContent = 'City not found. Please try again.';
            return;
        }

        output.innerHTML =
        '<h3> Weather in ' + data.name + '</h3>' +
        '<p> Temperature: ' + data.main.temp + '°C </p>' +
        '<p> Cloud cover: ' + data.clouds.all + '% </p>' +
        '<p> Humidity: ' + data.main.humidity + '% </p>' ;
    })

    .catch(error => {
        document.getElementById('weatherdata').textContent = 
        'Error loading weather data: ' + error.message;
    });
}



