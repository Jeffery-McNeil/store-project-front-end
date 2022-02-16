import { React, useEffect, useState} from "react";
import NavBar from "./NavBar";
import CartItemCard from "./CartItemCard"; 

function Cart () {
    const [cartItems, setCartItems] = useState([])
    useEffect(()=> {

        fetch(`http://localhost:9292/cart_items/${localStorage.user}`)
            .then((r) => r.json())
            .then((allCartItems) => {
            console.log(allCartItems)
            })
    }, [])
    
    return (
        <>
            {console.log(cartItems)}
            <button className="back-button">Back</button>
            <NavBar/>
            <div className="cards">
                {cartItems.map(item =>  <CartItemCard key={item.id} item={item}/>)}
            </div>
        </>
    )
}

export default Cart

