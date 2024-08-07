import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { revbayServer } from "../../common/revbay-server";

export default function GetCartById() {
    const {id} = useParams();
    const [cartItems, setCartItems] = useState([]);

    async function getAllCart(id: any) {
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
            <h1>Welcome to your Cart below is items in cart</h1>
            <ul>
                {cartItems.length > 0 ? (
                    cartItems.map((product, index) => (
                        <li key={index}> {product} </li>
                    ))
                ) : (
                    <p>No Cart Items</p>
                )}
            </ul>
            <button onClick={() => getAllCart(id)}>Get Cart</button>
        </>
    );
}