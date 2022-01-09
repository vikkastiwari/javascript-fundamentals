
var User = function(firstName, courseCount){
    // way of creating object using this keyword
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course Count: ${this.courseCount}`);
    };
};
// wherever you see constructor always new keyword is associated with it

/*
 To add more functionality in main function like User we make use of proto
 we actually dont touch the main function but by using proto we can inject functionalities to 
 our main function.

 */
User.prototype.getFirstName = function(){
    console.log(`Your Firstname: ${this.firstName}`);
};

var vikas = new User("Vikas",2); 
console.log(vikas); // not a regular function call
// because new keyword reference it under the User scope 
// it means it is not pointing towards the global object(for e.g. window object)
vikas.getCourseCount();

// with the help of hasOwnProperty we can keep check on some property(eg. firstName) that we are trying
// to access exists or not and if not exists we can simply follow conditionals to get rid of undefined 
if(vikas.hasOwnProperty("firstName")){
    vikas.getFirstName();
}

/*
Some more information about objects
run below code in browser

var myArr = [1,23,4,5];
myArr

this object contains .length in it with the help of which we can directly access 
the length of the array.

and __poroto__ contians more of it
as everything is mostly as object in javascript
*/
