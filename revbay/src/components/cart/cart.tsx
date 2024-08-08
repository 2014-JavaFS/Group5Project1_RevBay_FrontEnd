import { useParams } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import { revbayServer } from "../../common/revbay-server";
import DisplayCart from './displayCart.tsx';
import UpdateCart from "./updateCart.tsx";
import DeleteCart from "./deleteCart.tsx";
import { MyContext } from "../../common/context.tsx";
 
export default function GetCartById() {
    const {id} = useParams();
    const [cartItems, setCartItems] = useState([]);
 
    async function getAllCart() {
        try {
            const axResp = await revbayServer.get(`cart/${id}`)
 
            console.log(axResp.data)
 
            const names = axResp.data.map(item => item.products.name);
            console.log(names)
            // Update the state with the fetched data
            setCartItems(names);
        } catch (error) {
            console.error(error);
        }
    }
 
    return (
        <>
            <h1>Welcome to your Cart</h1>
            <button onClick={getAllCart}>Fetch Cart</button>
           
            {/*create Child to handle rendering*/}
            <DisplayCart cartItems={cartItems} />
 
            {/*create Child to handle rendering*/}
            <UpdateCart />
 
            <DeleteCart />
        </>
    );
}