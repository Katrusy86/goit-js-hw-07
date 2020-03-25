'use strict'

const list = document.querySelector('#categories');
console.log(`В списке ${list.children.length} категории`);


const items = document.querySelectorAll('.item');
items.forEach(element => {
    const title = element.querySelector('h2').innerHTML;
    const elements = element.querySelectorAll('li');
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${elements.length}`);
})
