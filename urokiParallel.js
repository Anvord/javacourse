"use strict";

let str = "some";
let strObj = new String (str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100
};

const john = Object.create(soldier);

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