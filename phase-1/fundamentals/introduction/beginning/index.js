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
const isItRaining = true;
if (isItRaining==true){
    console.log(`Hey, bring an umbrella!`);
} else {
    console.log("You won't need an umbrella today");
}

const age = 20;
/*
if (age>=21){
    console.log("You are of age.")
} else if (isItRaining) {
    console.log("Not of age, and it's raining.")
}
*/

if (age>=21 && isItRaining) console.log("21R");
if (age>=21 && !isItRaining) console.log("21");
if (age<21 && isItRaining) console.log("YR");
if (age<21 && !isItRaining) console.log("Y");

let message = "";
if (age>=21) message ="21";
else message = "Y";
if (isItRaining) message+= "R";



// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/**
 * 
 * @param {string} greeting The greeting to send.
 * @param {string} recipient The recipient to send to.
 * @returns The greeting.
 */
function greet(greeting, recipient){
    // using string interpolation:
    console.log(`${greeting}, ${recipient}`);
    // using string concatenation:
    //console.log(greeting ", " + recipient + "!");
    return greeting + ", " + recipient + "!";
}
const greetingSakib = greet("Hello", "Sakib");
console.log(greetingSakib);
greet("Hi", "Elizabeth");

const words = ["jump", "escalate", "people"];

function printWord(word){
    console.log(word);
}
//Iterate over the array words
words.forEach(printWord);
words.forEach((word) => {console.log(word)});


// ~ Scope
// -> global, local, closures, function hoisting
const a = "A"; //global
function localFunction(){
    const a = "AA";
    console.log(a);
    const b = "B";

}
localFunction();
console.log(a);
//console.log(b);














// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

const nums = [1,2,3,5,9];
function sum(numbers){
    let arrSum = 0;
    numbers.forEach((number) => {arrSum+=number});
    console.log(arrSum);
}

sum(nums);

/*
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
function double(nums){
    nums.forEach((number) => {number+=});
    console.log(nums);
}
double(nums);

console.log(nums)
*/

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

const words2 = ["Duck", "Cat", "Dog"];

function lowerCase(words2){
    let copyWords = [];
    words2.forEach((word) => {copyWords.push(word.toLowerCase())});
    console.log(copyWords);
    console.log(words2);
}

lowerCase(words2);








/*
function lowercase(words){
    const wordLen = words.length;
    let copyWords = [];
    //console.log(`Words in array for lowercase() = ${wordLen}`);function double(numbers){
    const numLen = numbers.length;
    let mem = 0;
    //console.log(`Number length for double() = ${numLen}`);

    for (let i=0;i<numLen;i++){
        mem+=numbers[i]*2;
    }
    console.log(`sum of doubled array values = ${mem}`);
    return mem;
}

double([2,5,7]);

const arr = [1,2,3];
double(arr);
console.log(arr); // [2,4,6]
    
    for (let i=0;i<wordLen;i++){
        copyWords.push(words[i].toLowerCase());
    }
    console.log(words);
    console.log(copyWords);
    return copyWords;
}

lowercase(["Joe", "Max"]);



/*
function lowercase(words){
    let copyWords = words;
    copyWords=JSON.stringify(words);
    toCharArray(copyWords);
    console.log(copyWords);
    return copyWords.toLowerCase();

}
*/