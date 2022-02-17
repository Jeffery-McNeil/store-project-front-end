import react from "react";

function Shipping ({ totalPrice, setShippingPrice }) {
    
    function handleChange(event) {
        switch (event.target.value) {
            case "overnight": setShippingPrice(totalPrice + (totalPrice*.30))
                break;
            case "standard": setShippingPrice(totalPrice + (totalPrice*.15))
                break;
            default: setShippingPrice(totalPrice)
        }
            
    }
    
    return (
        <div>
            <select id="cart-shipping" onChange={handleChange} name="categories">
                <option value="shipping">Choose Shipping</option>
                <option value="overnight">Overnight</option>
                <option value="standard">Standard (1-2 weeks)</option>
                <option value="free">Free (3-4 weeks)</option>
            </select>
        </div>
    )
}

export default Shipping; 