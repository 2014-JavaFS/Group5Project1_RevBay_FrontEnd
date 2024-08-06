import React from "react";
import { useNavigate } from "react-router-dom"


export default function cartPage(){

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
    <h1>Cart page</h1>


    </div>
)
}