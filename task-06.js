'use strict'

const input = document.querySelector('#validation-input')
input.onblur = function(){
    console.log(this.value.length);
    if(this.getAttribute('data-length') >= this.value.length ){
        this.classList.add('valid');
        this.classList.remove('invalid');
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
    }
};
