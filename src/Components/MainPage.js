import react from 'react'
import ItemCard from "./ItemCard"
import NavBar from "./NavBar"
import '../AllCss/MainPage.css'

function MainPage ({ itemList }) {
    
    function handleChange() {
        console.log("Shut the fuck up")
    }

    return(
        <div className="bg-layer">
            <header>
                <NavBar/>
            </header>
            <div className="item-container">
                <div>
                    <select className='selectBox' onChange={handleChange} name="categories">
                        <option value="">--Show By Category--</option>
                        <option value=""></option>
                    </select>    
                </div>
                <div>
                    {itemList.map((item)=>{
                        return (
                            <ItemCard key={item.name} item={item}/>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}


export default MainPage;
