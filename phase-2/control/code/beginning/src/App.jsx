/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
import { useState } from "react";

export default function App() {
  //Create a state for the string that appears and will change in <Card>
const [cardString, setCardString] = useState("Ace of Spades");

//Define a function that changes `cardString` to a new string.
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

const randomize = () => {
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
  const randomSuit= suits[Math.floor(Math.random() * suits.length)];

  setCardString(`${randomRank} of ${randomSuit}`) //apply setCardString to cardString
}
  
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card cardStringProp = {cardString} randomizeProp={randomize}/>
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}

// <Card card = {card} randomize = {randomize}>