import react, { useEffect, useState } from "react"
import CheckoutList from "./CheckoutList";
import NavBar from "./NavBar";
import "../AllCss/Cart.css"
import CreditCardCheck from "./CreditCardCheck";
import Shipping from "./Shipping"


function Checkout ({ cartItems, update, setCartItems, setTotalPrice, setUpdate, onDelete, totalPrice}) {
    const [shippingRate, setShippingRate] = useState(0)
    const shippingPrice = (totalPrice * shippingRate)
    const sumTotal = (totalPrice + shippingPrice)

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
            <div className="checkout-total">
                <span className="checkout-text">Cart Total: ${totalPrice.toFixed(2)}</span>
                <span className="checkout-text">Shipping: ${shippingPrice.toFixed(2)}</span>
                <span className="checkout-text">Sum Total: ${sumTotal.toFixed(2)}</span>
            </div>
            <div>
                <Shipping totalPrice={totalPrice} setShippingRate={setShippingRate}/>
            </div>
            <div className="item-list">
                {cartItems.map((item)=> <CheckoutList key={item.name} item={item} onDelete={onDelete} update={update} setUpdate={setUpdate}/>)}
            </div>
            <div className="creditCardTile">
                <CreditCardCheck />
            </div>

        </>
    )
}

export default Checkout;