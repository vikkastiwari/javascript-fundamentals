// type 1
// var isEven = (element) => {
  //   if (element % 2 === 0) {
  //     return true;
  //   }
  //   return false;

//   return element % 2 === 0;
// };

// console.log(isEven(2));

// type 2
// var result = [2, 3, 6, 8].every(isEven);
// console.log(result);

// type 3
// var result = [2, 4, 6, 8].every((e) => {
//   return (e % 2 === 0);
// });
// console.log(result);

// type 4 - one line code
// if you dont want to return anything just remove {} and replace it with ()

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);
