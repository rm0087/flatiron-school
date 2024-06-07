/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
// Make a GET request for one dog fact.
fetch("https://dogapi.dog/api/v2/facts")
// Then, if that request was successful, take the JSON and convert it into JavaScript.
.then((response)=> {return response.json();})
// Then, if converting the response from JSON into JS ws successful, use the JS in some way.
.then(convertedResponse=> {
    const fact = convertedResponse.data[0].attributes.body;
    const dogSpan = document.querySelector("#dog");
    dogSpan.textContent = fact;
})
// If anything goes wrong, print an error to the console.
.catch(error => {
    console.error(error);
});

// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then(response=> response.json())
.then(books => {
    books.forEach((book)=> {
        const bookLi = document.createElement("li");
        bookLi.textContent = book.name;
        document.querySelector("#got").append(bookLi);
    })
})

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
        const pokemon = await response.json();
        document.querySelector("#pokemon").textContent = pokemon.name;
    } catch (error) {
        console.error(error);
    }
};

getPokemon("squirtle");

// ~ Challenge: Make a GET request to an API of your choice!

//polygon.io API key = 1N9taZpI2W8P93B4H2WNYn3Fjk4aF0M0
//Authorization: bearer 1N9taZpI2W8P93B4H2WNYn3Fjk4aF0M0

//create, id, fill, and append header to body

const stockHeader = document.createElement("h1");
stockHeader.id = "stock-header";
stockHeader.textContent = "Stocks";
document.querySelector("body").append(stockHeader);

//create, id, form for stock symbol
const stockForm = document.createElement("form");
stockForm.id = "stock-form";
document.querySelector("body").append(stockForm);

//create, id, text input for stock symbol
const stockInput = document.createElement("input");
stockInput.id = "stock-input";
document.querySelector("#stock-form").append(stockInput);

const symbolHeader = document.createElement("h2");
document.querySelector("body").append(symbolHeader);

//create, id, and append ul to #stocks
const stockList = document.createElement("ul");
stockList.id = "stock-list";
document.querySelector("body").append(stockList);

const stockEntries = document.createElement("li");

document.querySelector("#stock-form").addEventListener("submit",(event)=>{
    event.preventDefault();
    event === "submit";
    const ticker = event.target["stock-input"].value.toUpperCase();
    
    //make sync request to api, convert response, assign endpoint result to variable
    fetch("https://api.polygon.io/v2/aggs/ticker/"+ticker+"/prev?adjusted=true&apiKey=1N9taZpI2W8P93B4H2WNYn3Fjk4aF0M0")
    .then((response)=> {return response.json();})
    .then(convertedResponse=>{
        const price = convertedResponse.results[0].c;
        symbolHeader.textContent = ticker;
        stockEntries.textContent = "Last closing price: $"+price;
        document.querySelector("#stock-list").append(stockEntries);
        console.log(ticker+" price: "+price);
    });
});



//const yesterday = new Date(value);
//console.log(yesterday);