import {useState} from 'react';

export default function Form({addDish}) {

    const [name,setName] = useState("")
    const [price,setPrice]= useState(0)

    function changeName(e){setName(e.target.value)}
    function changePrice(e){setPrice(e.target.value)}
    return (
        <form onSubmit={(e)=>addDish(e,name,price)}>
            <input name="name" type="text" placeholder="Name" onChange={changeName} value={name} />{` `}
            <input name="price" type="number" placeholder="0" min="0" onChange={changePrice} value={price}/>{` `}
            <input type="submit" value="Submit" />
        </form>
    )
}