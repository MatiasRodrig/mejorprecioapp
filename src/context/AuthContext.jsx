import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js'
import Cookies from "js-cookie";



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
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const signUp = (user) => {
        let res;
        try {
            res = registerRequest(user);
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError('Ocurrió un error inesperado al registrarse');
            }
        }
        setIsAuthenticated(true);
        if (res) {
            console.log(res.data);
            setUser(res.data);
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setIsLoggedIn(true);
            setUser(res.data);
        } catch (error) {
            console.log(error);
            // setErrors(error.response.data.message);
        }
    };


    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
           // if (!cookies.token) {
             //   setIsAuthenticated(false)
               // setIsLoggedIn(false) // Asegúrate de que isLoggedIn se establece a false si no hay token
               // setLoading(false)
               // return setUser(null)
             // }
            try {
                const res = await verifyTokenRequest(cookies)
                if (!res.data) {
                    setIsAuthenticated(false)
                    setIsLoggedIn(false) // Asegúrate de que isLoggedIn se establece a false si la verificación falla
                    setLoading(false)
                    return
                }
                setIsAuthenticated(true)
                setIsLoggedIn(true) // Establece isLoggedIn a true si la verificación es exitosa
                setUser(res.data)
                setLoading(false)
                console.log(loading)
            } catch (error) {
                setIsAuthenticated(false)
                setIsLoggedIn(false) // Asegúrate de que isLoggedIn se establece a false si hay un error
                setUser(null)
                setLoading(false)
            }
        }

        checkLogin();
    }, [isLoggedIn]); // Añade isLoggedIn a las dependencias del efecto


    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            error,
            signIn,
            loading,
            isLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    )

}