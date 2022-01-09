// Two Rules for context Execution
// Always keep note of this while defining function or variable

/*
 - Functions declarations are scanned and made available 
 - Variable declarations are scanned and made undefined
*/

// case 1

tipper("88");
// in this it wont give error as the function is scanned and made available
function tipper(a){
    var bill = parseInt(a);
    console.log("Bill:",bill+5+"$");
}

// case 2

// bigTipper("88");
// At this point the variable is undefined of bigTipper so it will give error
// yes it is function but assigned to a variable

var bigTipper = function (a){
    var bill = parseInt(a);
    console.log("Bill:",bill+5+"$");
}

bigTipper(200);

// case 3
// remember undefined is completely different from an error

console.log("Name:",name);
var name="Vikas Tiwari";    

function myName(name){
    var name = "Mr. V";
    console.log("From Function:",name);
}
myName();

console.log("Name:",name);