import react from "react";

function CartItemCard ({ item }) {
        if (item.category_id === 1) {
            return (
                <article className="card">
                    <h2 className="itemName">{item.name}</h2>
                    <img className="itemImage" src={item.img} />
                    <div className="cardDetails">
                        <p>Artist: {item.brand}</p>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                </article>
            )
        }
        else {
            return (
                <article className="card">
                <h3 className="itemName">{item.name}</h3>
                <img className="itemImage" src={item.img} />
                <div className="cardDetails">
                    <p>Brand: {item.brand}</p>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
            </article>  
            )
        }
        
}

export default CartItemCard;