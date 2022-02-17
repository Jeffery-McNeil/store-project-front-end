// import { queryByDisplayValue } from "@testing-library/react"

import '../AllCss/ItemCard.css'

function ItemCard ({ item, user }) {
    
    function addToCart (e) {
       
        let cartItem = {
            product_id: e.target.value,
            user_id: localStorage.user
        }
        fetch("http://localhost:9292/add_to_cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartItem),
            })
            .then((r) => r.json())
            .then((data) => {
             console.log(data)
            })
    }

    function handleClick () {
        localStorage.setItem('itemInfo', `${item.id}`)
        window.location.href = 'ItemInfo'
    }
        

    const itemPrice = item.price

    
    return (
        <div className="tile">
            <p className="name">{item.name}</p>
            <img className="img" src={item.img} alt={item.name} />
            <div className="cardDetails">
                {/* <p>Brand: {item.brand}</p> */}
                {/* <p>{item.description}</p> */}
                <p>${itemPrice.toFixed(Math.max(2, (itemPrice.toString().split('.')[1] || []).length))}</p>
                <button className='button' onClick={handleClick}>More Information</button>
                <button className='button' value={item.id} onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCard; 