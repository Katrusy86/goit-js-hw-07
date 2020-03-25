'use strict'

const inputField = document.querySelector('#validation-input');

inputField.addEventListener("focus", (event) => {
    event.preventDefault();
    console.log(inputField.value.length)
    if(inputField.getAttribute('data-length') > inputField.value.length ){
        inputField.classList.add('.valid');
        inputField.classList.remove('.invalid');
    } else {
    inputField.classList.add('.invalid');
    inputField.classList.remove('.valid');
    }
});
