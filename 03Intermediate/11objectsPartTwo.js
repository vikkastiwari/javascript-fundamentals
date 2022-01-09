var user = {
    firstName: "Vikas",
    lastName: "Tiwari",
    role: "User",
    loginCount: 24,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
        // this keyword is refered to user only as we are in user. Therefore, we reference it with the help of this keyword
    },// one more way to define function
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    courseInfo: function(){
        return `Name: ${this.firstName + " " + this.lastName}` + '\n'  + `Role: ${this.role}` + '\n' + 
        `Login Count: ${this.loginCount}` + '\n' + `Logged In from Facebook: ${this.facebookSignedIn}` + '\n' +
        `Purchased Course List: ${this.courseList}`;

    }
};

// console.table(user);
// var courseList = true;
// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("JS Fundamental course");
user.buyCourse("React JS course");
user.buyCourse("Vue JS course");
user.buyCourse("Node JS course");
// console.log(user.getCourseCount());
console.log(user.courseInfo());
