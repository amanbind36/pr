import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from "../contex/ThemeContex"

const Navbar = () => {
    // const [lightmode,setLightMode]=useState(true)
    let {lightmode, SetLightMode} = useContext(ThemeContext)
    useEffect(() => {
      document.body.className = lightmode ? 'light-mode' : 'dark-mode';
    }, [lightmode]);
  

    function handleTheme(){
        SetLightMode(!lightmode)
        localStorage.setItem("themeprefrence", JSON.stringify(!lightmode))
      }
    
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link to="/">
        <p>Home</p>
        </Link>
        <Link to="admin">
        <p>Admin</p>
        </Link>
        <Link to="booking">
        <p>Booking</p>
        </Link>
        <Link to="signup">
        <p>Signup</p>
        </Link>
        <Link to="login">
        <p>Login</p>
        </Link>
        <button onClick={handleTheme}>{lightmode ? "Dark Mode" : "Light Mode"}</button>
    </div>
  )
}

export default Navbar