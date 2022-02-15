import {Routes, Route} from "react-router-dom"
import { useLocalStorage, useEffect, useState } from "react"
import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'
import MainPage from "./Components/MainPage"

function App() {
  const [itemList, setItemList] = useState([])
  const [user, setUser] = useLocalStorage([])

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
   </Routes>
   </>
  )
}

export default App;
