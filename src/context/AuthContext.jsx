import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from '../api/auth.js'


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
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                setError(error.response.data)
            } else {
                setError('Ocurrió un error inesperado al registrarse')
            }
        }
    }


    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            // setErrors(error.response.data.message);
        }
    };





    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            error,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )

}