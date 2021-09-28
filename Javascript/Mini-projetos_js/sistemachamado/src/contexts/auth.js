import {useState,useEffect, createContext } from "react";
import firebase from "../services/firebaseConnection"

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user,setUser] = useState()
    const [loadingAuth,setLoadingAuth] = useState(false)
     const [loading,setLoading] =useState(true)

    useEffect(()=>{
        function loadStorage(){
            const storegeUser = localStorage.getItem('SistemaUser')
            if(storegeUser){
                setUser(JSON.parse(storegeUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage()
       
    },[])

    return(
        <AuthContext.Provider value={{signed: !!user,user,loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;