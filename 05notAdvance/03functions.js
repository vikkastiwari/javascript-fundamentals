// first learn about functional programming

/*
1) Keep your data and function totally seperate
2) dont change the state in functional programming 
    For e.g. dont initialize same variable again and again
3) functions are treated as first class
    For e.g. const addScore = function(){....}
    Treat them like strings or numbers as you store them in var and play around with them 
    like pass function as a parameter
    For e.g. sayHello(function(){...}){
        return function(){....}
    }
*/ 

// Self Executing Anonymous Function
// Reference - https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
    console.log("Hello");
    console.log("Hello, Programmers");
})();