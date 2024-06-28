/*
When a user fills out a form, they fire countless events.
Most of these events affect a form's input values.
Ergo, it makes sense to hold and update input values in state!

CONTROLLED FORM:

export default function Form(){
    const [name, setName] = useState("");
    
    function handleChange(event){setName(event.target.value)}
    return(
        <form>
            <label>NAME
                <input value={name} onChange={handleChange} />
            </label>
            <input type="submit"/>
        </form>
    )
};









*/

