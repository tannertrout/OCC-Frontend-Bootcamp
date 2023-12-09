// Functions: set of instructions

function greet() {
    console.log("Instruction # 1")
    console.log("Instruction # 2")
    console.log("Instruction # 2")
    console.log("Merry Christmas!")
};
greet();


// Function Hoisting

functionDeclaration()

// Can call actual function before it's been declared.
// It's been "hoisted" to the top of script.


// 1. Function Declaration
function functionDeclaration () {
    console.log("Hello World! I am a function declaration.");
}


// 2. Function Expression (used more often in practice)
const functionExpression = function() {
    console.log("Hello universe! I am a function expression.");
}

functionExpression()


// Calls variable that has function inside of it.
// Can only call after variable has been declared.


// Function with Parameters
function greet(name) {   // variable is the parameter (placeholder), argument is the value of variable
    console.log("Hello!", name);
}

greet('Gab')


// Functions with a return value
function sum(a, b) {
    a = a + 1
    return a + b;
}

console.log("Sum:", sum(10, 5));


// Anonymous Function
let greet2 = function() {
    console.log("Hello Anonymous")
}

greet2();


// Higher-Order Function
function calculate(operation, num1, num2) {
    return operation(num1, num2);
}

// Callback Function
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Using higher-order function
let total = calculate(add, 10, 5);
let difference = calculate(subtract, 23, 13)

console.log("Result of addition:", total);
console.log("Result of subtraction:", difference);