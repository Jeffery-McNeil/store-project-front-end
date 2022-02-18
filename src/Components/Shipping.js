import react from "react";
import '../AllCss/Shipping.css'

function Shipping ({ totalPrice, setShippingPrice }) {
    
    function handleClick(event) {
        switch (event.target.value) {
            case "overnight": {
                setShippingPrice(totalPrice*.30)
            }
            break;
            case "standard": {
                setShippingPrice(totalPrice*.15)
            }
            break;
            default: {
                setShippingPrice(0)
            }
        }           
    }
    
    return (
        <div>
            <div id="cart-shipping"  name="categories">
                <h4 className="shipping-heading">Choose Shipping</h4>
                <button className="shipping-button" onClick={handleClick} value="overnight">Overnight</button>
                <button className="shipping-button" onClick={handleClick} value="standard">Standard (1-2 weeks)</button>
                <button className="shipping-button" onClick={handleClick} value="free">Free (3-4 weeks)</button>
            </div>
        </div>
    )
}

export default Shipping; 