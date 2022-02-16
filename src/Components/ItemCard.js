import react from "react"
import '../AllCss/ItemCard.css'

function ItemCard ({ item, user }) {
    
    function handleClick () {
        fetch("http://localhost:9292/products", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                product_id: item.id
            })
        })
    }

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
                <button className="add-to-cart-button" onClick={handleClick}>Add to Cart</button>
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
            <button className="add-to-cart-button" onClick={handleClick}>Add to Cart</button>
        </article>  
        )
    }
}

export default ItemCard; 