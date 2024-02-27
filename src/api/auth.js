import axios from "axios";

const APIREGITRO = "https://mejorprecioapp.onrender.com/api/register"

export const registerRequest = users => axios.post(`${APIREGITRO}`, users)

const APILOGIN = "https://mejorprecioapp.onrender.com/api/login"

export const loginRequest = users => axios.post(`${APILOGIN}`, users)

const APILOGOUT = "https://mejorprecioapp.onrender.com/api/logout"


export const logoutRequest = () => axios.post(`${APILOGOUT}`, users)

export const verifyTokenRequest = () => axios.get('/verify')