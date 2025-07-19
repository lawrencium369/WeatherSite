const myForm = document.querySelector('#my-form');
const cityName = document.querySelector('#cityName');
const msg = document.querySelector('#msg');
const inputField = document.querySelector('#cityName');
const api_key = "d6ddc59f0b2555f271326ca7a6fd3f4e";

myForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (cityName.value === '') {
    inputField.style.backgroundColor = 'red';
    setTimeout(() => inputField.style.backgroundColor = '#dee3dd', 2000);
  } else {
    const enteredCity = inputField.value.toLowerCase();
    if (cities.includes(enteredCity)) {
      localStorage.setItem('selectedCity', enteredCity); // Store in localStorage
      window.location.href = 'city.html'; // Navigate
    } else {
      msg.textContent = 'City not recognized.';
      setTimeout(() => msg.textContent = '', 2000);
    }
  }

  inputField.value = '';
});

async function getWeatherData(city){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const response = await fetch(apiUrl);

  if(!response.ok){
    throw new Error("weather data not found");
  }
  return response.json();
}

