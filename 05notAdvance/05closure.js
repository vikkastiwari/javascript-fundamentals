// function init(){
//     var firstName = "Vikas";
//     console.log("I am init");
//     function sayHello(){
//         console.log(firstName);
//     }
//     return sayHello;
// }
// /*
// As we are returning sayHello(we are providing the reference) the purpose are pending to be served
// therefore the context of sayHello doesnt goes away completely
// and therefore the context of init also exists
// due to which we can access the line 2 & 3 with closure on line 16
// */ 
// var value = init();
// value();

// example 2
function doAddition(x){
    return function(y){
        return x + y;
    }// it also passes the refernce
}

var sum = doAddition(5); // x=5
console.log(sum(10)); // y=10
// x + y = 15

// Now we always dont need to store the reference, without doing so it just works fine
console.log(doAddition(5)(4));
/*
It is possible with the help of closure and memory management of js
it just that one internal reference of the function lies therefore all context doesnt goes away
and therefore we can take advantage of that...

Now probably we can pass more than two paranthesis as well
for e.g. doAddition()()()(); 
and this is called as curring
*/ 