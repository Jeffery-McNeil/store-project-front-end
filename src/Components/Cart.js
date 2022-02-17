import { React, useEffect, useState} from "react";
import NavBar from "./NavBar";
import CartItemCard from "./CartItemCard"; 
import '../AllCss/MainPage.css'
import '../AllCss/Cart.css'
import { Link } from "react-router-dom";

function Cart ({ cartItems, setCartItems, setTotalPrice, update, setUpdate, onDelete, totalPrice}) {
    
    useEffect(()=> {
        fetch(`http://localhost:9292/get_cart_items/${localStorage.user}`)
            .then((r) => r.json())
            .then((cart_data) => {
                console.log(cart_data)
            setCartItems(cart_data[0])
            setTotalPrice(cart_data[1])
            })
      }, [update])

    return (
        <>
            <NavBar/>
            <span className="cart-total">Cart Total: ${totalPrice}</span>
            <div className="card-holder">
                {cartItems.map(item =>  <CartItemCard key={item.id} item={item} onDelete={onDelete} update={update} setUpdate={setUpdate} />)}
            </div>
            <Link to="/checkout">
                <button>
                    Checkout
                </button>
            </Link>
        </>
    )
}

export default Cart

