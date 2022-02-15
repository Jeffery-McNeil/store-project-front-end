import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'
import MainPage from "./Components/MainPage"
import Cart from "./Components/Cart"

function App() {
  const [itemList, setItemList] = useState([])
  const [user, setUser] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then((response)=> response.json())
    .then((data)=> {
      setItemList(data)
    })
  }, []); 

  console.log(user)

  return (
    <>
   <Routes>
     <Route exact path="/" element={<Login setUser={setUser}/>}/>
     <Route exact path="/createAccount" element={<CreateAccount/>}/>
     <Route exact path="/mainPage" element={<MainPage itemList={itemList} setItemList={setItemList}/>} user={user} />
     <Route exact path="/cart" element={<Cart user={user}/>}/>
   </Routes>
   </>
  )
}

export default App;
