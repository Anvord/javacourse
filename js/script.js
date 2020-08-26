'use strict';
//odin element
const box = document.getElementById('box'),
//massiv elementov, ukazat' kakoy nuzhen
    btns = document.getElementsByTagName('button'),
//sovremenniy metod
    hearts = document.querySelectorAll('.heart'),  //в скобках - любой css селектор
    oneHeart = document.querySelector('.heart'), //возвращает первый элемент подходящий под название селектора
    wrapper = document.querySelector('.wrapper'),
    circles = document.querySelectorAll('.circle');


box.style.cssText = `background-color: purple; width: 500px`;
btns[0].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'pink';

// for (let i = 0; i < hearts.length; i++) {
//     hearts [i].style.backgroundColor = 'orange';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'grey';
});

const div = document.createElement('div');
// const text = document.createTextNode('Ya byl tut');
div.classList.add('black');
wrapper.append(div);


// document.querySelector('.wrapper').append(div);
// wrapper.prepend(div); // вставить до хартс
// hearts[0].before(div); // вставить до хартс
// hearts[0].after(div);  //вставить после хартс
// circles[1].remove();  // удалить вырбранный элемент
// hearts[0].replaceWith(circles[0]); // заменить первое вторым

//старые варианты
// wrapper.insertBefore(div,hearts[1]); //что вставить и перед чем
// wrapper.removeChild(hearts[2]); //удаление указанного. 
// wrapper.removeChild(circles[0], hearts[0]); //замена второго на первое


div.innerHTML = '<h1>Hello blya</h1>';   // да, можно юзать ХТМЛ внутри джавы. Работает.
//div.textContent = "hello";  // просто текст. Если нужно что-то получить от пользователя - юзай это. Безопасно.
div.insertAdjacentHTML('afterEnd', '<h2>Passy</h2>');
