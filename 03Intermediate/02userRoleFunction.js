// First Approach

function getUserRole(name,role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to add and delete the course.`;
            break;
        case "testprep":
            return `${name} is test prep with access to create and delete test.`;
            break;
        case "user":
            return `${name} is user to consume content.`;
            break;
        default:
            return `${name} is a trial user.`
            break;
    }
}

console.log("First Approach");
console.log(getUserRole("Vikas","user"));

// second Approach - common approach

var getUserRole = function (name,role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to add and delete the course.`;
            break;
        case "testprep":
            return `${name} is test prep with access to create and delete test.`;
            break;
        case "user":
            return `${name} is user to consume content.`;
            break;
        default:
            return `${name} is a trial user.`
            break;
    }
}
console.log("Second Approach");
console.log(getUserRole("Vikas","testprep"));

// Third Approach - Arrow function

var getUserRole = (name,role) => {

    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to add and delete the course.`;
            break;
        case "testprep":
            return `${name} is test prep with access to create and delete test.`;
            break;
        case "user":
            return `${name} is user to consume content.`;
            break;
        default:
            return `${name} is a trial user.`
            break;
    }
}
console.log("Third Approach");
console.log(getUserRole("Vikas","admin"));

