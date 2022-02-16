import { React, useEffect, useState} from "react";
import NavBar from "./NavBar";
import CartItemCard from "./CartItemCard"; 

function Cart () {
    const [cartItems, setCartItems] = useState([])
    useEffect(()=> {
        let user = {
            user_id: localStorage.user
        }
        fetch("http://localhost:9292/get_cart_items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            })
            .then((r) => r.json())
            .then((allCartItems) => {
               setCartItems(allCartItems)
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

