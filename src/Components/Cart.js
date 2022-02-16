import { React, useEffect, useState} from "react";
import NavBar from "./NavBar";
import CartItemCard from "./CartItemCard"; 
import '../AllCss/MainPage.css'
import '../AllCss/Cart.css'

function Cart ({ cartItems, setCartItems}) {

    useEffect(()=> {
        fetch(`http://localhost:9292/get_cart_items/${localStorage.user}`)
            .then((r) => r.json())
            .then((allCartItems) => {
            setCartItems(allCartItems)
            //when using allCartItems as a state code breaks    
            })
    }, [])
    
    function onDelete(id) {
        setCartItems(cartItems.filter((item)=> item.id !== id))
    }

    const prices = cartItems.map((item)=> item.price)
    const totalPrice = prices.reduce((partialSum, a) => partialSum + a, 0)

    return (
        <>
            <button className="back-button">Back</button>
            <NavBar/>
            <span className="cart-total">Cart Total: ${totalPrice}</span>
            <div className="card-holder">
                {cartItems.map(item =>  <CartItemCard key={item.id} item={item} onDelete={onDelete}/>)}
            </div>
        </>
    )
}

export default Cart

