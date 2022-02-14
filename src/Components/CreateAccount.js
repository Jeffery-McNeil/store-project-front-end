import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import '../AllCss/LoginPage.css'

function CreateAccount(){
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function resetForm(){
        setPassword('')
        setUsername('')
        setEmail('')
    }
    function createAccount(e){
        e.preventDefault()
        let newUser = {
            username: username,
            password: password,
            email: email
        }
    if(username.length > 7 && password.length > 7 && email.includes('@')){
        fetch("http://localhost:9292/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
            })
            .then((r) => r.json())
            .then((newUser) => {
                if (newUser){
                    navigate('/')
                } else{
                    resetForm()
                    alert("username already taken")      
            }
            });
        
    }if(email.includes("@") === false){
        alert('please enter valid Email address')
        resetForm()
    }else if(username.length < 7 && password.length < 7){
        alert("username and password must be larger than 8 characters")
        resetForm()
    }

    }


    return(
        <div className="sign-in-background">
            <div className="bg-layer">
                <div className="login">
                    <form onSubmit={createAccount}>
                        <h1>Create Account</h1>
                        <input type={"text"} name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} ></input>
                        <input type={"text"} name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
                        <input type={"password"} name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                        <input type={"submit"} value="Create Account"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount