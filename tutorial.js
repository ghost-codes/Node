const sum = (num1, num2) => num1 + num2;

const PI = 3.14

class SomeMathObject {
    constructor() {
        console.log("Object create");
    }
}

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;