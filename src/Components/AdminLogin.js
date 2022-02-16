// import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { useState} from "react";
import '../AllCss/LoginPage.css'

function AdminLogin(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    function onSubmit(e){
        e.preventDefault()
        let login = {
            username: username,
            password: password
        }
        fetch("http://localhost:9292/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
            })
            .then((r) => r.json())
            .then((currentAdmin) => {
                if(currentAdmin.length === 1){
                setPassword("")
                setUsername("")
                navigate('/shop')
                }else{
                    alert("The username or password you entered is incorrect")
                    setPassword("")
                    setUsername("")
                }
                
            });

    }

        return(
            <div className="sign-in-background">
                <div className='bg-layer'>
                    <div className="login">
                        <form onSubmit={onSubmit}>
                            <h1>Admin Login</h1>
                            <input type={"text"} name="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
                            <input type={"password"} name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                            <input type={"submit"} value="Login"></input>
                        </form>
                        <br></br>
                        <br></br>
                        <Link to={"/createAccount"} className="link">Dont have an account? Click here to create one!</Link>
                        <br></br>
                        <br></br>
                        <Link to={"/"} className="link">Costumer Login</Link>
                    </div>
                </div>
            </div>
        )
    }

export default AdminLogin

