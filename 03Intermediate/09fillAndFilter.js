var testArray = [2,3,4,10,6,7];

// console.log(testArray.fill("0"));
// console.log(testArray.fill("h",2));
// console.log(testArray.fill("h",2,4));

const myNumber = [22,33,445,45,6,4,3,5,63,23];
// const result = myNumber.filter((e) => (e!=45));
const result = myNumber.filter((e) => (e<=45));

// console.log(result);

var users = ["bim","pir","kar","rit","sam","tin","ton"];

console.log(users.slice(1,4));
console.log(users.slice(2));
console.log(users.slice(users.length-1));

users.splice(1,3,"HI","BYEE","Oye","Cool","School","Fool");
// splice(start: number, deleteCount?: number): string[]
console.log(users);
