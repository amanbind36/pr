import React, { createContext, useState } from 'react'

export const LoginContext=createContext();

export const LoginProvider=({children})=>{
    const [login,setLogin]=useState(false)

    function SetLogin(login){
        setLogin(login)
    }
    return(
        <LoginContext.Provider value={{login, SetLogin}}>
      {children}
    </LoginContext.Provider>
    )

}
