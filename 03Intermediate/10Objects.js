var user = {
    firstName: "Vikas",
    lastName: "Tiwari",
    role: "User",
    loginCount: 24,
    facebookSignedIn: true,
};

console.log(user.role); // way 1 - mostly used
console.log(user.firstName); // way 1 - mostly used

// console.log(user[lastName]); // this will throw error coz the key need to be in quotes

console.log(user["lastName"]); // way 2 - rarely used

console.log(user.firstName + " " + user.lastName);

console.log("Before:",user.loginCount);
user.loginCount = 43;
console.log("After:",user.loginCount);
