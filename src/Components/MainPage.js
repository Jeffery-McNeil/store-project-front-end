import { react, useState } from 'react'
import ItemCard from "./ItemCard"
import NavBar from "./NavBar"
import '../AllCss/MainPage.css'

function MainPage ({ itemList, user }) {
    const [category, setCategory] = useState("")

    let itemsToDisplay = []

    function handleChange(event) {
        setCategory(event.target.value)
    }

    switch (category) {
        case 'music': 
            itemsToDisplay = itemList.filter((item)=> item.category_id === 1)
            break;
        case 'games': 
            itemsToDisplay = itemList.filter((item)=> item.category_id === 2)
            break;
        default:
            itemsToDisplay = itemList
    };

    return(
        <div className="bg-layer">
            <header>
                <NavBar/>
            </header>
            <div className="item-container">
                <div>
                    <select className='selectBox' onChange={handleChange} name="categories">
                        <option value="">--Show By Category--</option>
                        <option value="music">Music</option>
                        <option value="games">Games</option>
                    </select>    
                </div>
                <div>
                    {itemsToDisplay.map((item)=>{
                        return (
                            <ItemCard key={item.name} item={item} user={user}/>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}


export default MainPage;
