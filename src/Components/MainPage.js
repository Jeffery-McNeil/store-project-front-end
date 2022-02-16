import {useState, useEffect } from 'react'
import ItemCard from "./ItemCard"
import NavBar from "./NavBar"
import Filter from './Filter'
import '../AllCss/MainPage.css'

function MainPage () {
    const [itemList, setItemList] = useState([])

    useEffect(()=> {
      fetch("http://localhost:9292/products")
      .then((response)=> response.json())
      .then((data)=> {
        setItemList(data)
      })
    }, []); 
    
    function handleChange(e) {
        fetch(`http://localhost:9292/${e.target.value}`) 
            .then((r) => r.json())
            .then((filteredProducts) => {
                setItemList(filteredProducts)
            });
        }

    return(
        <>
            <NavBar/>
            <Filter handleChange={handleChange}/>
            <div className="card-holder">
                {itemList.map(item => <ItemCard key={item.name} item={item}/>)}
            </div>
            
        </>
    )
}


export default MainPage;
