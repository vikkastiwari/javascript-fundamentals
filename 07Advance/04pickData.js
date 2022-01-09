// Destructure data
// Destructuring is not limited to objects
/* 
whatever is the  datatype is at right hand side 
similar datatype should be on left hand side then
probably you can do the destructuring 
*/

/*
const user = ["Vikas", 4, "admin"];
// var role = user[2]; // case 1
var [name, courseCount, role] = user; // case 2
console.log(role); // same output
*/

/*
make sure datatypes and keys are correct at both sides either it will give undefined
*/ 

const MyUser = {
    name: "Vikas",
    courseCount: 3,
    role: "admin",
}
console.log(MyUser.courseCount);

const {name, courseCount, myRole} = MyUser;
console.log(courseCount); // it will generate same output
console.log(myRole); // it will generate undefined