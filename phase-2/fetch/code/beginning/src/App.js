/*

Phase 2 -> fetch()
By Sakib Rasul

Core Deliverables
1. Host our restaurant's menu (`public/db.json`) with JSON Server.
2. Render a list of menu items on load.
3. If an error occurs on `fetch()`, display the error in the DOM.
4. Feature one dish by printing its name in an <h2> element.
5. Render a "controlled" form for adding new dishes to the list *and* in db.json.
6. Render a "controlled" form next to each existing dish for updating its metadata both in the list *and* in db.json.

*/

import Form from './Form';
import {useState, useEffect} from 'react';

export default function App() {
  const[dishes,setDishes] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3000/menu")
    .then(response => response.json())
    .then(items => {setDishes(items)})
  }, [])

  function addDish(e,name,price){
    e.preventDefault();
    fetch("http://localhost:3000/menu")
    .then(response => response.json())
    .then(items =>{console.log(items);
      let sameItem = items.find(item => name===item.name);
      sameItem? setDishes(items): postDish(e,name,price)
    })
  }
  
  
  function postDish(e,name,price){
    e.preventDefault();
    fetch("http://localhost:3000/menu",{
      method:"POST",
      headers:{"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        price: price
      })
    })
    .then(response => response.json())
    .then(newDish => {setDishes([...dishes, newDish])
    })
  }

  const [radio, setRadio] = useState(0)
  
  function handleRadio(e){setRadio(e.target.id); console.log(e.target.id)}

  return (
    <main>
      <h1>Chez Flatiron</h1>
      {dishes.map(dish => 
        <> 
          <label className="product-labels" onClick={(e)=>handleRadio(e)}> 
            <input id ={dish.id}type="radio" name="dish-button"/>
              <p key={dish.id}>{dish.name} | ${dish.price}</p>
          </label>
        </>
      )}
      <section>
        <h2>Featured Dish:!</h2>
        <div>NAME | $<br/></div>
        <h3>Submit a New Dish! <Form addDish={addDish}/></h3>
      </section>
    </main>
  );
}
