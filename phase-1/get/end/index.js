/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// `fetch()` is an API that lets us:
// - Create (POST) data.
// - Read (GET) data.
// - Update (PATCH) data.
// - Delete (DELETE) data.
// Whereas `document` let us perform these operations on the DOM,
// `fetch` lets us do them on the web, i.e. any dataset we have access to.

// To make a GET request, we call `fetch()` with a URL as a string parameter.
fetch("https://dog-api.kinduff.com/api/facts?number=1")
// `fetch()` returns a **promise**, or a guaranteed response.
// That response may be what we want, or an error.
// To handle the successful state, we use .then().
// Here, we use .then to convert the successful state (a JSON response) to a JavaScript object.
// To do that, we call response.json().
.then(response => response.json())
// .then() returns yet another promise, and here we handle its successful state (a JavaScript object)
// by manipulating the DOM.
.then(data => document.querySelector("#dog").textContent = data.facts[0])
// We can use .catch() to handle errors.
.catch(error => document.querySelector("#dog").textContent = error);

// We can also pass named functions into .then(), and have successful states passed into them.
fetch('https://anapioficeandfire.com/api/books')
.then(response => response.json())
.then(renderBooks)
.catch(console.error);

function renderBooks(books) {
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    document.querySelector("#got").appendChild(li);
  });
}

// If we don't want to run a function that returns a promise right away,
// we can include it in an **asynchronous** function.
// In an `async` function, functions that return promises are prepended by `await`.
// We can also use a try { } catch (error) { } block to handle asynchronous errors.
async function getPokemon(name) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await response.json();
    console.log(pokemon);
    document.querySelector("#pokemon").textContent =
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + " (" + pokemon.id + ")";
  } catch (error) {
    console.error(error);
  }
}
getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!