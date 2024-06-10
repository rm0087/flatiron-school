/*

Phase 1 -> Appendix
Created March 17, 2024
by Sakib Rasul

Objectives
1. Learn about the following advanced programming concepts:
   - First-class citizens
   - Compilation and execution
   - Algorithmic complexity

2. Learn about the following advanced JavaScript concepts:
   - Immediate invocation
   - Context
   - Array methods
   
Takeaways
- When faced with a problem, (a) understand its objectives and edge cases, (b) write some solution,
       and then (c) work towards case coverage and optimal time and space complexity.
- Hold onto `map` and `filter` for Phase 2!

*/

// ~ First-Class Citizens
// A **first-class** object or **citizen** is one that has every capability a language has to offer.
// In JavaScript, functions are first-class citizens.

// ~ Compilation and Execution
// During **compilation**, JavaScript allocates memory for your code, and understands its scope(s).
// During **execution**, JavaScript runs your code line-by-line, stores values in variables, and executes functions.

// ~ Algorithms in Time and Space
// An **algorithm** is a set of instructions that, when run, accomplish some task.
// **Big O notation** is a way of quantifying how "good" an algorithm is.
// By "good", we mean fast (no. of small operations) and/or small (amount of memory taken up by operations).
// Big O describes this "goodness" as a factor of n, the algorithm's input size.
// Common big O descriptions include:
// - O(1): **constant** speed or memory
// - O(log n): **logarithmic** speed or memory
// - O(n): **linear** speed or memory
// - O(n^2): **quadratic** speed or memory
// - O(n^2), O(n^3), etc.: **exponential** speed or memory

// ~ Immediate Invocation
console.log("~~IMMEDIATE INVOCATION~~");
// We can immediately invoke functions upon declaration with (definition)(arguments).
(function sayHi(name){
   console.log("Hi, " + name + "!")})("Sakib");

// ~ Context
console.log("~~CONTEXT~~");
// -> A function's **context** is an object it can access with the keyword `this`.
// -> We can use the function methods `apply`, `call`, and `bind` to define a function's context.
//This is a function that constructs and console.log() out of a parameter and the function's context.
function greet(end){console.log("Hello, " + this.name + end)};
// -> function.apply(this, [arguments]);
//    executes `function` with an object reference and array of arguments.
// Call 'greet' with a context of {name: "Ray"} and an end of "!"
greet.apply({name: "Ray"}, ["!"]);
// -> function.call(this, ...arguments);
//    executes `function` with an object reference and list of arguments.
greet.call({name: "Yidy"}, "!");
// -> function.bind(this, ...arguments);
//    returns a function with an object reference and array of arguments.
const greetFelix = greet.bind({name: "Felix"}, ".");
greetFelix();


// ~ Advanced Array Methods
console.log("~~ADVANCED ARRAY METHODS~~");
// `forEach` isn't the only array method out there. Let's learn about a few more!
const names = ["Sakib", "Elizabeth", "Pedro", "Marcus"];
//For each name in names, print name to the console.
names.forEach(name => {console.log(name);});
// Hint: For the purposes of Phase 2, `filter` and `map` are most relevant.
// -> array.find() returns the first element that satisfies some condition.
console.log(names.find(name => {return name.length>5}));
//or find a specific string
console.log(names.find(name => {return name === "Elizabeth"}));
// -> array.reduce() accumulates a value by applying a function to each element in an array.
const numbers = [1,2,3];
console.log(numbers.reduce((sum, number) => {return sum + number}));
// -> array.filter() returns an array with only the elements that satisfy some condition.
console.log(names.filter(name => {return name.length>5}));
// -> array.map() returns an array where each element has been transformed in some specified way.
console.log(names.map(name => {return name.length}));

// ~ Challenges
 // example array for #1 and #2
const phrases = ["hello, there!", "how are you?", "It's me!"];
// 1. Write a function that takes an array of sentences and returns only those that are questions.
console.log(phrases.filter(phrase => {return phrase.endsWith("?")}));

// 2. Write a function that takes an array of lowercased sentences and returns them capitalized.
console.log(phrases.map(phrase =>{return phrase.charAt(0).toUpperCase()+phrase.slice(1)}));
 