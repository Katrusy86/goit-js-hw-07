'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const element = document.querySelector('ul');

const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    fragment.appendChild(li);
});

element.appendChild(fragment);


// const list = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//     const items = document.createElement("li");
//     items.textContent = ingredient;
    
//     list.appendChild(items)
// })