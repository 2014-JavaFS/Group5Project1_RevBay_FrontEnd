import React from "react";
import { useNavigate } from "react-router-dom"
import profilePage from "../pages/profilePage";


export default function profilePageButton(){
    const navigate =useNavigate();

    function changePage(){
        navigate("/profile");
    }
    return(
        <div>
        <h1>TESTING</h1>
        <button onClick={changePage}>Profile Page</button>
        </div>
    );
}