import react, { useEffect } from "react"
import CheckoutList from "./CheckoutList";
import NavBar from "./NavBar";
import "../AllCss/Cart.css"
import CreditCardCheck from "./CreditCardCheck";
import Shipping from "./Shipping"


function Checkout ({ cartItems, update, setCartItems, setTotalPrice, setUpdate, onDelete, totalPrice}) {

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
            <div className="item-list">
                {cartItems.map((item)=> <CheckoutList key={item.name} item={item} onDelete={onDelete} update={update} setUpdate={setUpdate}/>)}
            </div>
            <div className="cartTile">
                <Shipping />
            </div>
            <div className="cartTile">
                <CreditCardCheck />
            </div>

        </>
    )
}

export default Checkout;