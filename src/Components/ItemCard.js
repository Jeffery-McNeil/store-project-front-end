// import { queryByDisplayValue } from "@testing-library/react"

import '../AllCss/ItemCard.css'

function ItemCard ({ item, user }) {
    
    function addToCart (e) {
       
        let cartItem = {
            product_id: e.target.value,
            user_id: localStorage.user
        }
        fetch("http://localhost:9292/add_to_cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartItem),
            })
            .then((r) => r.json())
            .then((data) => {
             console.log(data)
            })
        }

    function handleClick () {
        localStorage.setItem('itemInfo', `${item.id}`)
        window.location.href = 'ItemInfo'
    }
        

    

    if (item.category_id === 1) {
        return (
            <div className="tile">
                <p className="name">{item.name}</p>
                <img className="img" src={item.img} alt={item.name} />
                <div className="cardDetails">
                    {/* <p>Brand: {item.brand}</p> */}
                    {/* <p>{item.description}</p> */}
                    <p>${item.price}</p>
                    <button className='button' value={item.id} onClick={handleClick}>More Information</button>
                    <button className='button' value={item.id} onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="tile">
              
                <img className="img" src={item.img} alt={item.name} />
                <p className="name">{item.name}</p>
                <div className="cardDetails">
                    {/* <p>Artist: {item.brand}</p> */}
                    {/* <p>{item.description}</p> */}
                    <p>${item.price}</p>
                    <div className="bttn-holder">
                        <button className='button' value={item.id} onClick={handleClick}>More Information</button>
                        <button className='button' value={item.id} onClick={addToCart}>Add to Cart</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default ItemCard; 