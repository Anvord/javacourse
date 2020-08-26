//odin element
const box = document.getElementById('box');

console.log(box);
//massiv elementov, ukazat' kakoy nuzhen
const btns = document.getElementsByTagName('button');

console.log(btns[0]);

//sovremenniy metod

const hearts = document.querySelectorAll('.heart');  //в скобках - любой css селектор

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //возвращает первый элемент подходящий под название селектора
console.log(oneHeart);



//Динамическая типизация.  Из чего угодно в строку:

console.log(typeof(String(null)));
console.log(typeof(5+ ''));
 
//2 вариант

console.log(typeof(null + ''));

const num = 5;
console.log("https://vk.com/catalog" + num);
console.log(`https://vk.com/catalog${num}`);

const fontSize = 26 + 'px';

//В число:
//1
console.log(typeof(Number('null')));
//2
console.log(typeof(+'5'));
//3
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello?", "");

//To boolean
//to False
//0, '', null, undefined, NaN;  = False

let switcher = null;
if (switcher) {
    console.log('Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working...');
}

//2
console.log(typeof(Boolean('null')));

//3
console.log(typeof(!!('4444')));


// "use strict";

// let str = "some";
// let strObj = new String (str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// const soldier = {
//     health: 400,
//     armor: 100
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;
 
// Object.setPrototypeOf(john, soldier);

console.log(john.armor);
// let a = 7,
//     b = a;

// b = b +5;
// console.log(a);
// console.log (b);


// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj; 

// // copy.a = 10;

// // console.log(copy);
// // console.log (obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 4,
//     c: {
//         x:3,
//         y: 8
//     }
// };

// const newNumbers = copy (numbers);

// newNumbers. a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const aha = {
//     d: 17,
//     e: 33
// };

// const clone = Object.assign({}, aha);

// clone.d = 20; 

// console.log(aha);
// console.log(clone);


// const OldArray = ['a', 5, 'd'];
// const newArray = OldArray.slice();

// newArray[1] = 'Basdaf';
// console.log(newArray);
// console.log(OldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['worpress', 'haha'],    
//       internet = [...video, ...blogs, 'vk, ihihi'];
// console.log(internet);
  

// function log (a, b , c) {
//     console.log (a);
//     console.log (b);
//     console.log (c);
// }

// const num = [2,33,1];
// log (...num);

// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
//     good: 5,
//     norm: 3,
//     bad: 1
// };
// let newObj = {...q};


// console.log(newObj);





// // const arr = [1, 2, 6, 3];

// // arr.forEach(function(perebiraemoe, nomer, arr) {
// //     console.log(`${nomer}: ${perebiraemoe} внутри массива ${arr}`);
// // });



// // console.log(arr);

// // for (let i=0; i< arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // for (let chto of arr) {
// //     console.log(chto);
// // }


// // const arr = [112,23,6,21,42];
// // arr.sort(compareNum);
// // function compareNum(a,b) {
// //     return a - b;
// // }
// // console.log(arr);
// // arr[99] = 0;
// // console.log(arr.length);

// // arr.forEach(function(luboeimya, nomer, arr) {
// //     console.log(`${nomer}: ${luboeimya} внутри массива ${arr}`);
// // });

// // const str = prompt("", "");
// // const products = str.split
// // // console.log(arr);
// // // for ( let i =0; i <arr.length; i++) {
// // //     console.log(arr[i]);

// // // }

// // for (let key of arr) {
// //     console.log(key);
// // }