var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = false;

if( isLoggedIn && isEmailVerified && cardInfo){
    console.log("Hurray!! You can make a purchase.");
}else{
    console.log("Oops!! You are in trouble because you failed to follow up the instrucions.");
}

// ternary operator
cardInfo ? console.log("Card Info Validated.") : console.log("Authentication Required.");

// switch case
user = " Vikas ";
switch (user) {
    case vikas:
        console.log("You are amazing!!");
        break;

    default:
        console.log("Oops!! No value found.");
        break;
}