const name = "Julio";
let age = 29;
const hasHoddies = true;


const summarizeUser = (userName, userAge, userHasHobbies) => {
    return "Name is " + userName + ",age is " + userAge + ' and the user has Hobbies' + userHasHobbies;
};

const add = (a, b) => a + b;


// function summarizeUser(userName, userAge, userHasHobbies) {
//     return "Name is " + userName + ",age is " + userAge + ' and the user has Hobbies' + userHasHobbies;
// }

console.log(add(1, 3));

console.log(summarizeUser(name, age, hasHoddies));