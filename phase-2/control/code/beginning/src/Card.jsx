

export default function Card({cardStringProp, randomizeProp}) {
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            {cardStringProp}
            <button onClick={randomizeProp}>Nah.</button>
        </h2>
    )
  }