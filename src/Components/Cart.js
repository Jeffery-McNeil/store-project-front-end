import { React, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import CartItemCard from "./CartItemCard"; 

function Cart ({ user }) {
    const [cartItems, setCartItems] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/products/user/${user.id}`)
        .then((response)=> response.json())
        .then((data)=> setCartItems(data))
    })
    
    return (
        <>
        <button className="back-button">Back</button>
        <NavBar/>
        <div className="cards">
            {cartItems.map((item)=>{
                return (
                <CartItemCard key={item.name} item={item}/>
                )
            })}
        </div>
        </>
    )
}

export default Cart; 

