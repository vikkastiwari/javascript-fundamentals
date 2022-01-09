// All below mentioned values are flasy and other than that everything is true 

// undefined
// null
// 0
// ""
// NaN

var user = "";
if(user){
    console.log("The Value is True.");
}else{
    console.log("The Value is Falsy.");
}


var coercion = "2";
if( 2 == coercion){ //Some part is assumed by js
    console.log("Strict Checking is not a Concern.");
}else if( 2 === coercion){
    console.log("Strict Checking Passed.");
}else{
    console.log("Oops!! Something went wrong.");
}