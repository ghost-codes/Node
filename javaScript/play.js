var name = "Julio";
var age = 29;
var hasHoddies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
    return "Name is " + userName + ",age is " + userAge + ' and the user has Hobbies' + userHasHobbies;
}

console.log(summarizeUser(name, age, hasHoddies));