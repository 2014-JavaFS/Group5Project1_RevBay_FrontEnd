import React from 'react';
import { useNavigate } from "react-router-dom";

const MoveToCart = () =>{
    const navigate = useNavigate()
    const gotToNewPage=()=>{
        navigate("/shop");
    }
    return(
            <>
            <button onClick={()=>navigate("/shop")} className = "btn">Cart Button</button>
            </>
    );
};
export default MoveToCart;
