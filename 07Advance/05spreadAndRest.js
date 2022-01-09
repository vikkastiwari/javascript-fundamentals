// var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);

function sumOne(a, b) {
  return a + b;
}
/*
It will break the array in to individual element
*/ 
var myA = [5, 9];
console.log(sumOne(...myA)); // spread Operator

function sumTwo(a, b, ...args) { // we can take anything in place of args but it is most used
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}
console.log(sumTwo(2, 3, 1, 1, 1)); // REST Operator

function sumThree(a, b, ...args) { 
  console.log(args);
  let multi = a * b; // we can manipulate it as we want e.g. a*b*c
  let sum = 0;
  // here we can form an array of elements and process them as we want
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi]; // we can return it as objects or with other ways to as we want
}
console.log(sumThree(2, 3, 1, 5, 7)); // here we can pass n number of arguments we want
