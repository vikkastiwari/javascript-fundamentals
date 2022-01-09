class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  #courseList = []; // this is how we define private variables by using # 
  // here we didn't make the use of var or const keyword 

  getInfo() {
    return { name: this.name, email: this.email };
  }// we can call it function or method

  enrollCourse(name) {
    this.#courseList.push(name); // while referring , we have to make use of #
  }

  getCourseList() {
    return this.#courseList;
  } // here also we didn't make the use of keyword function because we are working in class and we dont care about that stuffs.

  static logOn() { // static keyword dont let you access things from child classes it is only for parent
    return "You are logged in using privacy.";
  }

  login() {
    return "You are logged in from parent class";
  }
}

// creation of child class
class subAdmin extends User{
  constructor(name, email){
    super(name, email);
  }
  /*
  we can simply copy below code from parent class and paste above in child class
  and it will work just fine if dont want to do that simply make use of super keyword

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  */
  getAdminInfo(){
    return "I am Subadmin";
  }
  login(){
    return "Logged in from child class.";
  }// this method will be overrided over login method present in parent class 
}

module.exports = User; // with the help of this we can export the class and can access it from other file by simply importing it

// object creation 
const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList); // here it will come as undefined because courseList is private

const tom = new subAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
tom.enrollCourse("React Bootcamp");
console.log(tom.getCourseList());
console.log(tom.login());

console.log(tom.getInfo());

// Explore more on super keyword
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super