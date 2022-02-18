import react from "react";
import '../AllCss/Shipping.css'

function Shipping ({ setShippingRate }) {
    
    function handleClick(event) {
        switch (event.target.value) {
            case "overnight": {
                setShippingRate(.30)
            }
            break;
            case "standard": {
                setShippingRate(.15)
            }
            break;
            default: {
                setShippingRate(0)
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