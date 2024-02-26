import axios from "axios";

const instance = axios.create({
    baseURL: "https://mejorprecioapp.onrender.com/api",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true
});

export default instance