function init(){
    var firstName = "Vikas";
    function sayHello(){
        console.log(firstName);
    }
    sayHello();
}

init();

/*
when a init function is called 1st context is stacked
then firstName is declared again sayHello is initialised
and again 2nd context is stacked over 1st, shown below
...
context 2
context 1
Global Executional Context
... 
uptil here eveything is fine
after we called our regular function
sayHello is executed and context 2 is gone after execution
and then after the execution of init function context 1  is gone 

but when we try to log firstName when the context is over, it probably doesn't know about it
and end up giving a whole lot of errors

but in closure we follow different style of writing the code where we dont follow 
functional programming but there we assign function to a variable and all the scenario
*/ 