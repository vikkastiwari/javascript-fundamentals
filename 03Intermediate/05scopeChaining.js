var name = "Vikas";

console.log("Line number 3", name);

function sayName() {
  // var name = "Mr. V";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    // var name = "Mr. VT";
    console.log("Line number 12", name);
  }
}

sayName();
