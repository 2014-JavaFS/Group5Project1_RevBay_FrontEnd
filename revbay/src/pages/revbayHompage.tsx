import React, { Fragment } from "react";
import {Outlet, Link, Router} from "react-router-dom"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { useNavigate } from "react-router-dom"


import profilePage from "./profilePage";
import profileButton from "../components/profileButton"

export default function revbayHomepage(){

    const navigate =useNavigate();

    function changePageProfile(){
        navigate("/profile");
    }
    function changePageCart(){    
        navigate("/cart");
    }
    function changePageShop(){
        navigate("/shop");

    }
    function changePageHome(){
        navigate("/");

    }


return (
    <div>
    <br></br>
    <button onClick={changePageHome}>Home Page</button>
    <button onClick={changePageShop}>Shop</button>
    <button onClick={changePageProfile}>Profile Page</button>
    <button onClick={changePageCart}>Cart Page</button>
    <h1>Home page</h1>

    </div>
)
}