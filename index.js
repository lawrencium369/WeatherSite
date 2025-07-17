const myForm = document.querySelector('#my-form');
const cityName = document.querySelector('#cityName');
const msg = document.querySelector('#msg');
const inputField = document.querySelector('#cityName');

myForm.addEventListener('submit',function(e){
    e.preventDefault();

    if(cityName.value === ''){
        inputField.style.backgroundColor = 'red';
        setTimeout(()=> inputField.style.backgroundColor = '#dee3dd', 2000);
    } else {
        inputField.value = '';
    }
});