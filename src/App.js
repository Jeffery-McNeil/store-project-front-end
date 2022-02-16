import {Routes, Route} from "react-router-dom"
import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'
import MainPage from "./Components/MainPage"
import Cart from "./Components/Cart"

function App() {


  return (
    <>
   <Routes>
     <Route exact path="/" element={<Login />}/>
     <Route exact path="/createAccount" element={<CreateAccount/>}/>
     <Route exact path="/shop" element={<MainPage />}  />
     <Route exact path="/cart" element={<Cart/>}/>
   </Routes>
   </>
  )
}

export default App;
