'use strict'


const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

 function inputRange(){
    span.style.fontSize = event.target.value +'px' 
 }

input.addEventListener('input', inputRange)