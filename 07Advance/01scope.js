// it will give undefined
/*
when it is undefined there is more probability that we dont get the actual flaw 
why it is giving us undefined
It is all okay in frontend it wont block our code
*/ 
console.log(name);
var name = "Vikas";

// it will give error
/*
when we get error we can simply figure out what went wrong and correct it
it is good in backend - error can be rectified
*/ 
console.log(name);
let name = "Vikas";

if(true){
    var lastName = "Tiwari";
}
console.log(lastName); /*
it will print last name coz technically functions are treated as a scope and not "{ }"
therefore, in for loop default initialisation is let and not var

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/


if(true){
    let lastName = "Tiwari";
}
console.log(lastName); /*
but when we use let instead of var "{ }" is treated as a scope and it behaves 
as we want it to behave
*/