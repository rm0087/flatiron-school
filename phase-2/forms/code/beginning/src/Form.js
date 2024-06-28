/*
1. Implement some input synchronization, e.g. the user's 'lucky number' is the lengths of inputs combined.
2. Implement some input validation, e.g. the first letter of a user's name must be capitalized.
3. (BONUS) Rewrite this controlled form where 'name' and 'movie' are managed with one state, e.g. 'formData'.

*/
import { useState } from "react";


export default function Form() {
    const [name, setName] = useState("");
    const [movie, setMovie] = useState("");

    const handleName=(event)=>{setName(event.target.value.toUpperCase().charAt(0) + event.target.value.slice(1))}
    
    const handleMovie=(event)=>{setMovie(event.target.value)}

    const sum = movie.length+name.length;


    
    return (
        <form>
            <label><strong>Name </strong>
                <input value={name} onChange={handleName} />
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
                <input value={movie} onChange={handleMovie}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>{sum}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up" onClick/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}