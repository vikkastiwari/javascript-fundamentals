// run the code in browser console
fetch('https://api.chucknorris.io/jokes/random')
.then((response)=>{
    // console.log("API:", response.json()); 
    /* 
    rather printing we will now return it 
    as it gives promise we can add another .then and in that everything from previous .then is added
    */
   return response.json();
})
.then((data) => {
    // console.log("DATA:", data);
    // Lets fetch joke
    var joke = data.value;
    console.log("Joke: ",joke);
})
// we can add as many then we want
.catch();
