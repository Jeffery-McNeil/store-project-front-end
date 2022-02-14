import {Routes, Route} from "react-router-dom"

import Login from "./Components/Login"
import CreateAccount from './Components/CreateAccount'

function App() {
  return (
    <>
   <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route exact path="/createAccount" element={<CreateAccount/>}/>
   </Routes>
   </>
  )
}

export default App;
