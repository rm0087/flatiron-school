// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
import React, { useState } from "react";

export default function Item({ item: { name, price } }) {
  function CartButton(){
    const [isInCart, setIsInCart]= useState(false)
    
      function increment(){
        setIsInCart(!isInCart)
        console.log(isInCart);
      }
    return <>
      <button onClick={increment}>{
        isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
      
      {/* Some manual spacing, nothing to see here... */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <span> {isInCart ? 'Item in Cart!': 'Not in Cart'}</span>
    </>
  } //END of CartButton component.

  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p>
        
        <CartButton />
        
        
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}