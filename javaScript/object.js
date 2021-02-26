const person = {
    name: 'Max',
    age: 5,
    hasHobbies: true,
    greet: function () {
        console.log("Hi I am " + this.name);
    }
}

person.greet();