import axios from "axios";

const API = "https://mejorprecio-back-production.up.railway.app/registro"

export const registerRequest = users => axios.post(`${API}`, users)