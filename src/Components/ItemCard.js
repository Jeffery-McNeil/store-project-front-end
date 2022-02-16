// import { queryByDisplayValue } from "@testing-library/react"

import '../AllCss/ItemCard.css'

function ItemCard ({ item }) {
    
    function addToCart (e) {
        let cartItem = {
            product_id: e.target.value,
            user_id: localStorage.user
        }
        fetch("http://localhost:9292/add_to_cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItem),
            })
            .then((r) => r.json())
            .then((cartItem) => {
             console.log(cartItem)
            })
        }
        

    

    if (item.category_id === 5) {
        return (
            <div className="tile">
                <p className="name">{item.name}</p>
                <img className="img" src={item.img} alt={item.name} />
                <div className="cardDetails">
                    <p>Artist: {item.brand}</p>
                    {/* <p>{item.description}</p> */}
                    <p>${item.price}</p>
                <button value={item.id}>More Information</button>
                <button value={item.id} onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="card">
            <h3 className="itemName">{item.name}</h3>
            <img className="itemImage" src={item.img} alt={item.name} />
            <div className="cardDetails">
                <p>Brand: {item.brand}</p>
                {/* <p>{item.description}</p> */}
                <p>${item.price}</p>
            </div>
            <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
        </div>  
        )
    }
}

export default ItemCard; 