import {Outlet, Link, Router} from "react-router-dom"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import React, { useState, useEffect } from 'react';

import profilePage from "./profilePage";
import profileButton from "../components/profileButton"

export default function revbayHomepage(){
    const [data, setData] = useState(null);
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
    //useEffect(() => {
    //    fetch('http://localhost:9090/users')
    //      .then(response => response.json())
    //      .then(json => setData(json))
    //      .catch(error => console.error(error));
    //  }, []);
    //
    //From Return Statement
    //{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
return (
    <div>
    <br></br>
    <button onClick={changePageHome}>Home Page</button>
    <button onClick={changePageShop}>Shop</button>
    <button onClick={changePageProfile}>Profile Page</button>
    <button onClick={changePageCart}>Cart Page</button>
    <h1>Home page</h1>
    </div>
);
}