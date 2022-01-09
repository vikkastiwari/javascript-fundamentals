var counter = document.querySelector(".counter");
// grab elements with selectors it works with all
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if(count<1000){
        count++;
        counter.innerHTML = count;
    }
},0.0001);

setTimeout(() => {
   followers.innerHTML = "Followers on Instagram!"; 
}, 4000);