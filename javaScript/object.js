const person = {
    name: 'Max',
    age: 5,
    hasHobbies: true,
    greet: function () {
        console.log("Hi I am " + this.name);
    }
}

//Object Destructuring

//obselete
// const printName = (personData) => {
//     console.log(personData.name);
// }

//to use
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

//person.greet();

