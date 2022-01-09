const hitesh = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// hitesh.getInfo();
// dj.getInfo(); // it gives error because no getInfo method is defined or referenced to it 

/* 
bind references getInfo to dj with same properties when parameter namely dj passed to it 
either it would have default reference to hitesh
*/ 

//  hitesh.getInfo.bind(dj)(); // direct call
// or 
// var djInfo = hitesh.getInfo.bind(dj); // reference call
// djInfo();

hitesh.getInfo.call(dj); // it directly calls the function where we are not required to call it manually like bind
