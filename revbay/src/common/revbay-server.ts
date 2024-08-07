import axios from 'axios'

export const revServer = axios.create({
    baseURL: "http://localhost:5173",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})