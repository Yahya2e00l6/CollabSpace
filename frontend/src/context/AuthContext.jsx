
import { createContext,useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [ user , setUser ] =  useState(()=>{
        const saveUser = localStorage.getItem('user')
        return saveUser ? JSON.parse(saveUser) : null;
    });

    const login = (userData) =>{
        setUser(userData)
        localStorage.setItem('user',JSON.stringify(userData))
    }

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user')
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}