// Part 1 of this keyword

// case 1 
console.log(this);

// case 2
function printName(){
    var movie = "terminator";
    console.log(this);
}

printName();

// same code in browser console will give output of window object in both cases
// coz this keyword behaves differently in different environment