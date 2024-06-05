/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/
const school = {
    name: "flatiron",
    cohortSize: 8
}
// ~ the "click" event
document.querySelector("#tomorrow").addEventListener("click", (event)=>{
    document.querySelector("#forever").textContent = "On June 5, 2024";
    console.log(event.pointerType);
});

// ~ the "submit" event
document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();
    // event === "submit"
    //event.target === <form>
    //event.target["date-input"] === <input name="date-input">
    //event.target["date-input"].value === 2024-06-27
    console.log(event.target["date-input"].value);
    document.querySelector("#sometime").textContent= event.target["date-input"].value;
    console.log("The user submitted a date!");
});

//console.log(school.name);
//console.log(school["name"]);


// ~ challenges
// 1. [easy] Add another click event handler.
document.querySelector("#today").addEventListener("click",(event2)=>{
    document.querySelector("#today").textContent = "Not today!"
});
// 2. [medium] Add some non-click, non-submit event listener to the page.
document.querySelector("html").addEventListener("wheel", (event3)=>{
    document.querySelector("#tomorrow").textContent = "Where you going?"
});
// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.
document.querySelector("#dates").addEventListener("submit", (event4)=>{
    const img = document.createElement("img");
    document.querySelector("img").src = "https://en.wikipedia.org/wiki/Cat#/media/File:Cat_August_2010-4.jpg";
    document.querySelector("#dates").append(img);
});
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.