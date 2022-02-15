import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'
import MainPage from "./Components/MainPage"

function App() {
  const [itemList, setItemList] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then((response)=> response.json())
    .then((data)=> {
      setItemList(data)
    })
  }, []); 
  
  console.log(itemList)

  return (
    <>
   <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route exact path="/createAccount" element={<CreateAccount/>}/>
     <Route exact path="/mainPage" element={<MainPage itemList={itemList} />}/>
   </Routes>
   </>
  )
}

export default App;
