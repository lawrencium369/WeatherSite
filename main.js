const myForm = document.querySelector('#my-form');
const cityName = document.querySelector('#cityName');
const msg = document.querySelector('#msg');
const inputField = document.querySelector('#cityName');

let cities = ['rabat', 'fes'];

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
