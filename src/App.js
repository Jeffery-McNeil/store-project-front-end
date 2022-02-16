import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'
import MainPage from "./Components/MainPage"
import Cart from "./Components/Cart"
import AdminLogin from './Components/AdminLogin'
import Checkout from "./Components/Checkout"

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
   <Routes>
     <Route exact path="/" element={<Login />}/>
     <Route exact path="/createAccount" element={<CreateAccount/>}/>
     <Route exact path="/shop" element={<MainPage />}  />
     <Route exact path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
     <Route exact path="/checkout" element={<Checkout/>} />
     <Route exact path="/admin-login" element={<AdminLogin/>}/>
   </Routes>
   </>
  )
}

export default App;
