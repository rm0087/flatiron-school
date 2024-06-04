/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
console.log("hi!");
//const = a variable that will not change value, i.e not reassigned
const firstName = "Sakib";
//let = a variable that can change value, i.e can be reassigned
/**
 * The number 5.
 */
let number = 5;
console.log(number);
number = 6;
console.log(number);

// ~ Types
// -> undefined, null*, boolean, number, string
//Booleans are true or false
const isItRaining = false;

// ~ Objects
// -> definition, bracket/dot notation, stringify
// collections of data related to one entity

/**
 * An object named 'dog' with a string prooperty 'firstName' and a number property 'age'
 */
const dog = {
    firstName: "Benji",
    age: 4
};

console.log(dog.firstName);
console.log(dog["firstName"]);

dog.age = 5;
console.log(dog.age);

console.log(dog);
console.log(JSON.stringify(dog));

// ~ Arrays
// -> definition, access, modification
/**
 * An arracy of prices, each a number.
 */
const prices = [30,40,10,60];
console.log(prices[1]);
prices[2]= 20;
console.log(prices[2]);

console.log(prices);
console.log(JSON.stringify(prices));


// ~ Conditionals
// if, if-else, if-else-if-else, ternary

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

// ~ Scope
// -> global, local, closures, function hoisting

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.


