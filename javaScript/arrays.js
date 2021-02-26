const hobbiesArray = ["Sports", "Juggling", "Cooking"];

for (let hobby of hobbiesArray) {
    console.log(hobby);
}

console.log(hobbiesArray.map(hobby => "Hobby: " + hobby));
console.log(hobbiesArray);


// ... is the spread operator
const copiedArray = [...hobbiesArray, "hello"]
console.log(copiedArray);

// rest operator
// ... same as the spread operator but differnt in context
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));