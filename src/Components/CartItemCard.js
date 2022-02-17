import react, { useEffect, useState } from "react";
import '../AllCss/CartItemCard.css'

function CartItemCard ({ item, onDelete, update, setUpdate }) {
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
             setUpdate(!update)
            })}   
    
    function handleClick () {
        localStorage.setItem('itemInfo', `${item.id}`)
        window.location.href = 'ItemInfo'
    }

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
        <article className="cartTile">                    
            <img className="cartImg" src={item.img} />
            <div className="cartName">
                <h2 >{item.name}</h2>
            </div>
            <div className="cartCardDetails">
                {/* <p>Artist: {item.brand}</p> */}
                {/*<p>{item.description}</p>*/}
                
                <div className="quantity">
                <p>quantity</p>
                    <button id="subtractButton" className="quantityButton" onClick={handleSubtract}>-</button>
                    <h3 className="quantityButton">{quantity}</h3>
                    <button id="addButton" className="quantityButton" onClick={handleAdd}>+</button>
                </div>
                
                <p>${itemPrice.toFixed(Math.max(2, (itemPrice.toString().split('.')[1] || []).length))}</p>
                <button className="button" value={item.id} onClick={handleClick}>More Information</button>
                <button className="button" value={item.id} onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </article>
    )

        
}

export default CartItemCard;