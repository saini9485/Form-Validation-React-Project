import React from "react";
import './Login.css';
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="Home-Container">
            <h1>Home Page </h1>
            <h4>Welcome To  {localStorage.getItem('Fullname')} </h4>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
        </div>
    );
}
export default Home;