// before defining the function we can call it and js knows it is there due to global context
// sayHello();

// function sayHello(){
//     console.log("Hello Folks!");
// }

var name = "Vikas";
// this code will give error in vs code because the global context is not window but it will successfully run in browser
if(name === window.name){
    console.log("This is true statement.");
}

// it has basically to context - global context and - execution context
// it forms a stack like structure for each block of code - shown below
/* 
Execution Context
Execution Context
Execution Context
Global Context
*/

// Execution Context have three things
/* 
- Variable Object
- Scope Chain
- this
*/


// Two Rules for context Execution
// - Functions declarations are scanned and made avilable 
// - Variable declarations are scanned and made undefined


