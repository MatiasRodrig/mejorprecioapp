import axios from "axios";

const APIREGITRO = "https://mejorprecio-back-production.up.railway.app/registro"

export const registerRequest = users => axios.post(`${APIREGITRO}`, users)

const APILOGIN = "https://mejorprecio-back-production.up.railway.app/login"

export const loginRequest = users => axios.post(`${APILOGIN}`, users)

