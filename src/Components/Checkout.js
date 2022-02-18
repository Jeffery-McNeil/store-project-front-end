import react, { useEffect, useState } from "react"
import CheckoutList from "./CheckoutList";
import NavBar from "./NavBar";
import "../AllCss/Cart.css"
import CreditCardCheck from "./CreditCardCheck";
import Shipping from "./Shipping"


function Checkout ({ cartItems, update, setCartItems, setTotalPrice, setUpdate, onDelete, totalPrice}) {
    const [shippingPrice, setShippingPrice] = useState(0)
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
                <span className="checkout-text">Cart Total: ${totalPrice.toFixed(Math.max(2, (totalPrice.toString().split('.')[1] || []).length))}</span>
                <span className="checkout-text">Shipping: ${shippingPrice.toFixed(Math.max(2, (shippingPrice.toString().split('.')[1] || []).length))}</span>
                <span className="checkout-text">Sum Total: ${(sumTotal).toFixed(Math.max(2, (sumTotal.toString().split('.')[1] || []).length))}</span>
            </div>
            <div>
                <Shipping totalPrice={totalPrice} setShippingPrice={setShippingPrice}/>
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