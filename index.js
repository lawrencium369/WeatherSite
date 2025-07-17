console.log(window);
// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = 'last item';
// ul.children[1].innerHTML = '<h1>kaBoom</h1>';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (event)=>{
//     event.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
//     e.preventDefault();
    
//     if(nameInput.value === '' || emailInput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'fill all the fields please';

//         setTimeout(() => msg.remove(), 2000);
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         //clear fields
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }

const myForm = document.querySelector('#my-form');
const cityName = document.querySelector('#cityName');
const msg = document.querySelector('#msg');
const inputField = document.querySelector('#cityName');

myForm.addEventListener('submit',function(e){
    e.preventDefault();

    if(cityName.value === ''){
        inputField.style.backgroundColor = 'red';
        setTimeout(()=> inputField.style.backgroundColor = '#dee3dd', 2000);
    }
});