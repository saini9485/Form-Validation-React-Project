import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './Login.css';
function Login(){ 
   const Fullname=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("Fullname") 
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(Fullname.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("Fullname",Fullname.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }else{
        alert("Please Enter Detalis")
      }
   }

   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <div className="Sign-container">
                        <h1>Hello, {localName} Congratulation</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="Login-Container">
                    <div>   <h1>Sign Up Form </h1>      </div>
                        <div className="input_space">
                            <input minLength={6} placeholder="FullName" type='text' ref={Fullname} required/>
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} required />
                        </div>
                        <div className="input_space">
                            <input minLength={7} placeholder="Password" type='password' ref={password} required />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default Login;