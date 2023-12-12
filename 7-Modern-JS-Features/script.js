// Arrow Function - makes function a variable to more easily call later
const greet = () => {
    console.log("Merry Christmas");
}

greet();

// Enhanced Object Literals
const person = {
    name: "Ron",
    age: 21,
    greeting() {
        console.log(`My name is ${this.name}.`);
    }
}

person.greeting();

// Spread and Rest Operators
// Spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // can plug in the array as a shortcut

// Rest
function myFunction(firstArg, ...restofArgs) {
    console.log(firstArg);
    console.log(restofArgs);
}

myFunction('one', 'two', 'three', 'four');


// Common JS Built-in Methods

// ForArrays

// Filter
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers2.filter((number) => number % 2 == 0);
console.log(evenNumbers);

const oddNumbers = numbers2.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

// For Strings

// Split
const message = "Hello, Universe!";
const words = message.split(", ");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// Length
const sentenceLength = sentence.length;
console.log(sentenceLength);

// For Objects

const cat = {
    name: "Chicha",
    age: 3,
    color: ["Black", "White"]
}

// Keys
console.log(Object.keys(cat));

// Values
console.log(Object.values(cat));

console.log(cat);

// Entries
console.log(Object.entries(cat)); // - shows key/value in an array

// Math

// Max and Min
const maxNumber = Math.max(10, 5, 20, 30);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20, 30);
console.log(minNumber);

// Random - generates long decimal between 0 and 1
const randomValue = Math.random();
console.log(randomValue);

// Round - nearest whole number
console.log(Math.round(randomValue));

// Floor - rounds down nearest whole number
console.log(Math.floor(randomValue));

// Ceiling - rounds up nearest whole number
console.log(Math.ceil(randomValue));

// Nested Math Methods
const randomNumber = Math.floor(Math.random() * 100)
console.log("Random number between 1 and 100:", randomNumber);


// Other Methods

// Date
const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2023, 11, 25);
console.log(christmas);

// toFixed --> set decimal place to round
const price = 100.12345.toFixed(2);
console.log(price);

// toString --> convert number to string
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1);

