'use strict'

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

function nameInp(event) {

    if (event.target.value === ''){
        span.textContent = 'незнакомец'
    } else {
    span.textContent = event.target.value;
    }
}
        
input.addEventListener('input', nameInp)