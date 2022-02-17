import react, { useState, useEffect } from "react"
import "../AllCss/CheckoutList.css"

function CheckoutList ({ item, update, setUpdate, onDelete}) {
    const [quantity, setQuantity] = useState(0)

    useEffect(()=> {
        fetch(`http://localhost:9292/get_cart_quantity/${item.id}`)
            .then((r) => r.json())
            .then((data) => {
                setQuantity(data)
            })
    }, [])
    

    function removeFromCart() {
        fetch(`http://localhost:9292/carts/${item.id}`, {
            method: "DELETE"
            })
            .then((r) => r.json())
            .then((data) => {
             onDelete(data.product_id)
            })}   

    function handleAdd () {
        fetch(`http://localhost:9292/cart_quantity_add/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity + 1
            })
        })
            .then((r) => r.json())
            .then((data) => {
             console.log(data)
            })
        setQuantity(quantity + 1)
        setUpdate(!update)
    }

    function handleSubtract () {
        fetch(`http://localhost:9292/cart_quantity_subtract/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity - 1
            })
        })
            .then((r) => r.json())
            .then((data) => {
             console.log(data)
            })
        setQuantity(quantity - 1)
        setUpdate(!update)
    }

    const itemPrice = item.price

    return (
    <article className="checkoutTile">                    
        <div className="checkoutName">
            <h2 >{item.name}</h2>
        </div>
        <div className="checkoutCardDetails">
            <div className="checkoutQuantity">
                <button id="subtractButton" className="quantityButton" onClick={handleSubtract}>-</button>
                <h3 className="quantityButton">{quantity}</h3>
                <button id="addButton" className="quantityButton" onClick={handleAdd}>+</button>
            </div>
            <div id="checkoutPrice">
                <p>${itemPrice.toFixed(Math.max(2, (itemPrice.toString().split('.')[1] || []).length))}</p>
            </div>
            <div id="checkoutButton">
                <button className="button" value={item.id} onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    </article>
)
}

export default CheckoutList;