import { react, useEffect, useState } from "react";
import Reviews from "./Reviews";
import NavBar from "./NavBar";
import '../AllCss/ItemInfo.css'

function ItemInfo () {
    const [itemInfo, setItemInfo] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/products/${(localStorage.getItem('itemInfo'))}`)
        .then((response)=> response.json())
        .then((data)=> {
          setItemInfo(data)
        })
      }, []);

    return (
        <>
            
            <NavBar />
             <div className="itemInfoHolder">
             <div className="itemInfoTile">
                 <img className="itemInfoImg" src={itemInfo.img} alt={itemInfo.name} />
                 <p className="itemInfoName">{itemInfo.name}</p>                
                 <div className="itemInfoDetails">
                     <p>Brand: {itemInfo.brand}</p>
                     <p>{itemInfo.description}</p>
                     <p>${itemInfo.price}</p>
                 </div>
             </div>
                <Reviews itemID={itemInfo.id}/>
             </div>
        </>
    )

}

export default ItemInfo;