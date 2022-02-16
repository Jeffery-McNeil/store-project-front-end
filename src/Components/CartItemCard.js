import react from "react";
import '../AllCss/ItemCard.css'

function CartItemCard ({ item, onDelete }) {
    function removeFromCart() {
        fetch(`http://localhost:9292/carts/${item.id}`, {
            method: "DELETE"
            })
            .then((r) => r.json())
            .then((data) => {
             onDelete(data.product_id)
            })}   
    
    if (item.category_id === 1) {
            return (
                <article className="tile">
                    <h2 className="name">{item.name}</h2>
                    <img className="img" src={item.img} />
                    <div className="cardDetails">
                        <p>Artist: {item.brand}</p>
                        {/*<p>{item.description}</p>*/}
                        <p>${item.price}</p>
                        <button value={item.id}>More Information</button>
                        <button value={item.id} onClick={removeFromCart}>Remove From Cart</button>
                    </div>
                </article>
            )
        }
        else {
            return(
            <div className="tile">
              
            <img className="img" src={item.img} alt={item.name} />
            <p className="name">{item.name}</p>
            <div className="cardDetails">
                {/* <p>Artist: {item.brand}</p> */}
                {/* <p>{item.description}</p> */}
                <p>${item.price}</p>
                <div className="bttn-holder">
                    <button value={item.id}>More Information</button>
                    <button value={item.id} onClick={removeFromCart}>Remove From Cart</button>
                    </div>
            </div>
        </div>
            )}

        
}

export default CartItemCard;