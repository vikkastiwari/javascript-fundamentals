// For all regular function calls, this points to window object or whatever global object is (for e.g. empty global object in node).
console.log(this);

var user = {
    firstName: "Vikas",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 8 - I am from object reference call");
        console.log("Line 8", this);
    },
};

user.getCourseCount(); // function call through an object. Hence, it is not a regular function call

function greet(){
    console.log("Hello!, I am regular function call.");
    console.log("Line 17:",this);
}// it is a regular function

greet(); // it is a regular function call

// scene 2
var user1 = {
    firstName: "Vikas",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 26", this);

        function sayHello(){
            console.log("Hello!, I am regular function call.");
            console.log("Line 30:",this);
        }// it is also a regular function

        sayHello(); // it is aslo a regular function call
    },
};

user1.getCourseCount(); // function call through an object. Hence, it is not a regular function call
