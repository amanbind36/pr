import React, { useRef, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let url="https://practice-d736b-default-rtdb.firebaseio.com/"
    let navigate=useNavigate();
    const handleForm=(e)=>{
        e.preventDefault()
        let obj={
            name:e.target[0].value,
            password:e.target[1].value
        }
        console.log(obj)
        axios.post(`${url}users.json`,obj)
        .then((res)=>{
            alert("signup successfully")
            navigate("/login")
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <div>
        <form action="" onSubmit={handleForm}>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup