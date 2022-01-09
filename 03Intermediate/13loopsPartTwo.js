const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

// Interview question
// var i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }

// their are two ways of function declaration - refer 08arrayPartTwo.js
myStates.forEach((s) => (console.log(s)));
// it takes call back function as input
myStates.forEach((s) => console.log(s));
