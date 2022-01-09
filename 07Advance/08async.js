// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
const uno = () => {
  console.log("I am One");
};

const dos = () => {
  setTimeout(() => {
    console.log("Wooohoooo");
  }, 3000);
  console.log("I am Two");
};

const tres = () => {
  console.log("I am Three");
};

uno();
dos();
tres();
tres();
// dos();

// the elements which take more time to load , 
// in that mean time js execute others who can come into picture and later we exectue that element