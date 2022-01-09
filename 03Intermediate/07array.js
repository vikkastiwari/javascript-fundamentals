// 1st way of initialisation
var hobbies = ["Horse Riding","Cycling","Bike Riding","Teaching"];

// 2nd way of initialisation
// writing new keyword is not essential coz we are not initialising an object 
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

// console.log(states[1]);
// console.log(states);

// console.log(states.length);
states[0] = "Punjab";
// console.log(states);

// this is not a good datastructure
var user = ["Vikas","vikas@pm.dev", 3, 34, true];
console.log("Original:",user);
user.pop();
user.pop();
// console.log(user.pop());
console.log("Result after two pops:",user);

user.unshift("New Value");
console.log("Result After one unshift:",user);
// console.log(user);
user.shift();
user.shift();
console.log("Result After two shifts:",user);

// when the value is present it will reutrn the index respectively
console.log(user.indexOf(3));

/* if the value is not present in the array it will return -1
 which is comparable to pop messages using ifelse conditions*/
 console.log(user.indexOf("loopHole"));

// study about arrays in mdn doc for 2-3 days
// it has alot of shortcuts like
console.log(Array.from("Vikas")); 

// Loop over an Array
hobbies.forEach(function(item, index, array) {
    console.log(item, index, array[index]);
  })