import axios from "axios";

export const revbayServer = axios.create({
    baseURL: "http://localhost:9090",
    headers :{
        Accept : "application/json",
        "Content-Type" : "application/json"
    }
})