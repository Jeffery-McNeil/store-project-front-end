import { React, useEffect, useState} from "react";
import NavBar from "./NavBar";
import CartItemCard from "./CartItemCard"; 
import '../AllCss/MainPage.css'
import '../AllCss/Cart.css'

function Cart ({ cartItems, setCartItems}) {
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(()=> {
        fetch(`http://localhost:9292/get_cart_items/${localStorage.user}`)
            .then((r) => r.json())
            .then((cart_data) => {
                console.log(cart_data)
            setCartItems(cart_data[0])
            setTotalPrice(cart_data[1])
            })
    }, [])
    
    function onDelete(id) {
        setCartItems(cartItems.filter((item)=> item.id !== id))
    }


    return (
        <>
            <button className="back-button">Back</button>
            {console.log(totalPrice)}
            <NavBar/>
            {/* <span className="cart-total">Cart Total: ${totalPrice}</span> */}
            <div className="card-holder">
                {cartItems.map(item =>  <CartItemCard key={item.id} item={item} onDelete={onDelete}/>)}
            </div>
        </>
    )
}

export default Cart

