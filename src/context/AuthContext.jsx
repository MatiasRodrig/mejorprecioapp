import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from '../api/auth'
export const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth debe utilizarse dentro de un AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [error, setError] = useState([])

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
            setError([])
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {    
                setError(error.response.data.message)
            } else {
                setError('Ocurrió un error al registrarse.')
            }
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                setError(error.response.data.message) 
            } else {
                setError('Ocurrió un error al iniciar sesión.') 
            }
        }
    }

useEffect(() => {
    if (error.length > 0) {
       const timer = setTimeout(() => {
            setError([])
       }, 5000)
        return () => clearTimeout(timer)
    }
}, [error])

    // Quedé en el minuto 3:10:27 de video 
    useEffect(() => {
        
    })

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            error, 
        }}>
            {children}
        </AuthContext.Provider>
    )
}
