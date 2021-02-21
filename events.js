const EventsEmitter = require('events');
const eventEmitter = new EventsEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log("tutorial event occured");
    console.log(num1 + num2);
});
eventEmitter.emit('tutorial', 5, 7);

class Person extends EventsEmitter {

    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let hope = new Person("Hope");
hope.on('name', () => {
    console.log("My name is " + hope.name);
});

// hope.emit("name");