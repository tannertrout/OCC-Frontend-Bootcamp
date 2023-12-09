// Introduction to Arrays

let superheroes = ["Superman", "Batman", "Joker", "Spiderman", "Wonder Woman"]

console.log("Hero 1 is", superheroes[0]);
console.log("Hero 5 is", superheroes[4]);

// add to specific index (2) in array
superheroes[2] = "Doctor Strange";

// Push Method: adds new value to end of array
superheroes.push("Deadpool");
console.log(superheroes);

// Pop Method: removes last value from array
superheroes.pop();
console.log(superheroes);

// Array Iteration
for (let i = 0; i <= 4; i++) {
    console.log("Hero", i+1, "is", superheroes[i]);
}

// forEach Method: passes in argument with function
superheroes.forEach(function(hero) {
    console.log(hero);
})

// Array Methods
console.log("Array length is", superheroes.length);
console.log("Index of is", superheroes.indexOf("Wonder Woman"));
console.log("Joined Array:", superheroes.join("-"));

let slicedArray = superheroes.slice(1, 4);
console.log("Sliced Array:", slicedArray);
console.log("Superheroes Array:", superheroes);

let removedElements = superheroes.splice(2, 2);
console.log("Removed Elements:", removedElements);
console.log("Updated array:", superheroes);