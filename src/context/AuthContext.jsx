import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from '../api/auth'
export const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
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
            setError([]) // Limpiar el mensaje de error cuando el registro es exitoso
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {    
                setError(error.response.data.message) // Actualizar el estado con el mensaje de error
            } else {
                setError('Ocurrió un error al registrarse.') // Mensaje de error genérico
            }
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                setError(error.response.data.message) // Actualizar el estado con el mensaje de error
            } else {
                setError('Ocurrió un error al registrarse.') // Mensaje de error genérico
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
