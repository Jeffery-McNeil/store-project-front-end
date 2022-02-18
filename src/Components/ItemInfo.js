import { react, useEffect, useState } from "react";
import Reviews from "./Reviews";
import NavBar from "./NavBar";
import Related from './Related'
import '../AllCss/ItemInfo.css'

function ItemInfo () {
    const [itemInfo, setItemInfo] = useState([])
    const [relatedItems, setRelatedItems] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/products/${(localStorage.getItem('itemInfo'))}`)
        .then((response)=> response.json())
        .then((data)=> {
          setItemInfo(data)

          fetch(`http://localhost:9292/related/${data.category_id}/${data.brand}`)
        .then(r => r.json())
        .then(data => {
            setRelatedItems(data)
        })
        })
      }, []);
      function addToCart (e) {
       
        let cartItem = {
            product_id: itemInfo.id,
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

    return (
        <>
            
            <NavBar />
            {console.log('item',itemInfo)}
             <div className="itemInfoHolder">
                <div className="itemInfoTile">
                    <img className="itemInfoImg" src={itemInfo.img} alt={itemInfo.name} />
                    <p className="itemInfoName">{itemInfo.name}</p>                
                    <div className="itemInfoDetails">
                        <p>Brand: {itemInfo.brand}</p>
                        <p>{itemInfo.description}</p>
                        <p>${itemInfo.price}</p>
                        <button className='button' onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>
                <Reviews itemID={itemInfo.id}/>
                <Related related={relatedItems}/>

             </div>
        </>
    )

}

export default ItemInfo;