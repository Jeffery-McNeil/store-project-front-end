// import React,{useState} from "react";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import '../AllCss/LoginPage.css'

function Login({ setUser }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    



    function onSubmit(e){
        e.preventDefault()
        let login = {
            username: username,
            password: password
        }
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
            })
            .then((r) => r.json())
            .then((currentUser) => {
                if(currentUser.length == 1){
                console.log('user', currentUser)
                setUser(currentUser)
                
                setPassword("")
                setUsername("")
                }else{
                    alert("The username or password you entered is incorrect")
                }
                
            });

    }




    if(localStorage.length > 0){
        return(
            <>
                {/* {navigate(`/frontPage/${localStorage.userID}`)} */}
            </>
        )
    
    }else{
        return(
            <div className="sign-in-background">
                <div className='bg-layer'>
                    <div className="login">
                        <form onSubmit={onSubmit}>
                            <h1>Login</h1>
                            <input type={"text"} name="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
                            <input type={"password"} name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                            <input type={"submit"} value="Login"></input>
                        </form>
                        <br></br>
                        <br></br>
                        <Link to={"/createAccount"} className="link">Dont have an account? Click here to create one!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login

