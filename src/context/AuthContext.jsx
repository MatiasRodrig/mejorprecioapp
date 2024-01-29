import { createContext, useState, useContext } from "react";
import { registerRequest } from '../api/auth'
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
    const [error, setError] = useState(null) // Nuevo estado para el mensaje de error

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
            setError(null) // Limpiar el mensaje de error cuando el registro es exitoso
        } catch (err) {
            console.log(err)
            if (err.response && err.response.data) {
                setError(err.response.data.message) // Actualizar el estado con el mensaje de error
            } else {
                setError('Ocurrió un error al registrarse.') // Mensaje de error genérico
            }
        }
    }

    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            error, // Pasar el mensaje de error al contexto
        }}>
            {children}
        </AuthContext.Provider>
    )
}
