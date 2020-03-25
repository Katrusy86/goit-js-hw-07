'use strict'


let counterValue = 0

const myCounterValue = document.querySelector('#value');
const counterMinBtn = document.querySelector('button[data-action="decrement"]')
const counterPlusBtn = document.querySelector('button[data-action="increment"]')

function decrement (){
    counterValue -= 1;
    myCounterValue.textContent = counterValue;
}

function increment (){
    counterValue += 1;
    myCounterValue.textContent = counterValue;
}

counterMinBtn.addEventListener('click', decrement)
counterPlusBtn.addEventListener('click', increment)