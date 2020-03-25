'use strict'

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener('input',handleInput)

function handleInput(event){
    if (event.target.value === ''){
        span.textContent = 'незнакомец'
    } else {
    span.textContent = event.target.value;
    }
}
