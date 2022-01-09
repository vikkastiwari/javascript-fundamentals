/*
MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/ 
var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    },
};

var hitesh = Object.create(User);
console.log(hitesh);
hitesh.name = "hitesh Choudhary";
hitesh.getUserName();

/*
on browser it shows all the defined objects and functions , we can also access the __proto__
and respective objects and functions into it. 
but in environment of node it is not possible to see all this things direclty on console
but we can access all that stuffs by simply making a call.   
*/ 

// other way of creating object
var sam = Object.create(User, {
    name: { value: "sammy" }, // in object the object is defined
    courseCount: { value: 3 },
});
sam.getUserName();

// there are of it go through with docs