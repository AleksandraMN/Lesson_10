'use strict';

const arr = [...listIPv4];
//const arr = [].concat(listIPv4);
//const arr = listIPv4.slice();


const getNumber = function (arr) {
   const newArr = arr.flat(Infinity);
   const newArray = [...new Set(newArr)] ;

   let number = 0;
   for (let i = 0; i < newArray.length; i++) {
   number += i;
   }
   return number;
};

console.log(getNumber(arr));

