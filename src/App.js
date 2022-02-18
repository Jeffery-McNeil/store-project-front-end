import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'
import MainPage from "./Components/MainPage"
import Cart from "./Components/Cart"
import AdminLogin from './Components/AdminLogin'
import ItemInfo from "./Components/ItemInfo"
import Checkout from "./Components/Checkout"
import './AllCss/Cart.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [update, setUpdate] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)
  const [title, setTitle] = useState("Pacific NorthWest");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  function onDelete(id) {
    setCartItems(cartItems.filter((item)=> item.id !== id))
  }

  return (
    <>
    <div id="title">
      <input
        type="text"
        onChange={changeTitle}
        value={title}
      />
    </div>
   <Routes>
     <Route exact path="/" element={<Login />}/>
     <Route exact path="/createAccount" element={<CreateAccount/>}/>
     <Route exact path="/shop" element={<MainPage />}  />
     <Route exact path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} update={update} setUpdate={setUpdate} onDelete={onDelete} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>}/>
     <Route exact path="/ItemInfo" element={<ItemInfo />} />
     <Route exact path="/admin-login" element={<AdminLogin/>}/>
     <Route exact path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} update={update} setUpdate={setUpdate} onDelete={onDelete} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>}/>
   </Routes>
   </>
  )
}

export default App;
