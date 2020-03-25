'use strict'


let counterValue = 0

const myCounterValue = document.querySelector('#value');
const counterMinBtn = document.querySelector('button[data-action="decrement"]')
const counterPlusBtn = document.querySelector('button[data-action="increment"]')

counterMinBtn.addEventListener('click', (decrement) => {
    counterValue -= 1;
    myCounterValue.textContent = counterValue;
})

counterPlusBtn.addEventListener('click', (increment) =>{
    counterValue += 1;
    myCounterValue.textContent = counterValue;
})
