import { useState } from "react";


export default function Form() {
    const [name, setName] = useState("");
    const [movie, setMovie] = useState("");

    const handleName=(event)=>{setName(event.target.value)}
    const handleMovie=(event)=>{setMovie(event.target.value)}
    
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
            <em>Your lucky number is</em> <strong>2</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up" onClick/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}