const uno = () => {
  return "I am One";
};

// const dos = () => {
//   setTimeout(() => {
//     return "I am Two";
//   }, 3000);
// };

const dos = () => {
    // below is the way how we can create promise 
    // either it will resolve the promise or it will reject it
    // here we are dealing with only resolve but we can handle both with say try catch
    // resolve and reject both are methods
    return new Promise( (resolve, reject) => { // we wont directly use reject coz it will raise an error so we have to handle it nicely or it will just blow up
    setTimeout(() => {
        resolve("I am Two"); // we will resolve it and we wont return coz we are already using return
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

// now we will sequentially call the functions in one go
const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos(); // here until it is completely executed it wont let others to execute, it will hold up
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();