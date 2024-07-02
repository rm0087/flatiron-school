export default function Item(props){
    const { name, price } = props;
    
    return (
        <>
            <h2>{name}</h2>
            <h3>{price}</h3>
        </>
    )
}