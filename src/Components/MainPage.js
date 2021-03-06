import {useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import ItemCard from "./ItemCard"
import NavBar from "./NavBar"
import Filter from './Filter'
import '../AllCss/MainPage.css'

function MainPage ({ setItemInfo }) {
    const [itemList, setItemList] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
      fetch("http://localhost:9292/products")
      .then((response)=> response.json())
      .then((data)=> {
        setItemList(data)
        setFilteredProducts(data.all)
      })
    }, []); 
    
    function handleChange(e) {
        let category = e.target.value 
        setFilteredProducts(itemList[category])
        }

    console.log(itemList)
    console.log(filteredProducts)
       
    if(localStorage.length > 0){
        return(
            <>
            <NavBar/>
                <div className="banner-container">
                 
                </div>
                
                <Filter handleChange={handleChange}/>
                <div className="card-holder">
                    {filteredProducts.map(item => <ItemCard key={item.name} item={item} setItemInfo={setItemInfo}/>)}
                </div>
            </>
        )
    }
    else{
        return(
            <>
       {navigate('/')}
       </>
        )
    }
}


export default MainPage;
