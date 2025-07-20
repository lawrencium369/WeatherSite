const myForm = document.querySelector('#my-form');
const Display = document.querySelector('.Display');
const cityInput = document.querySelector('#cityName');
const api_key = "d6ddc59f0b2555f271326ca7a6fd3f4e";

myForm.addEventListener('submit', async event => {
    event.preventDefault();

    if(cityInput.value === ''){
        cityInput.style.backgroundColor = "red";
        setTimeout(()=>cityInput.style.backgroundColor = "#dee3dd", 1000);
    }

    const city = cityInput.value;
    cityInput.value = '';

    if(city){
        try{
          const weatherData = await getWeatherData(city);
          showData(weatherData);
        }
        catch(error){
          console.error(error);
        }
        
    }
});

async function getWeatherData(city){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const response = await fetch(apiUrl);

  if(!response.ok){
    throw new Error("weather data not found");
  }
  return response.json();
}

function showData(data){
  const {name: city,
         main: {temp, humidity}, 
         weather: [{description, id}] } = data;
  
  Display.textContent = "";
  Display.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const showDescription = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `temperature: ${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}`;
  showDescription.textContent = description;

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  showDescription.classList.add("Description");

  Display.appendChild(cityDisplay);
  Display.appendChild(tempDisplay);
  Display.appendChild(humidityDisplay);
  Display.appendChild(showDescription);
}
