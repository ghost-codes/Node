const hobbiesArray = ["Sports", "Juggling", "Cooking"];

for (let hobby of hobbiesArray) {
    console.log(hobby);
}

console.log(hobbiesArray.map(hobby => "Hobby: " + hobby));
console.log(hobbiesArray);