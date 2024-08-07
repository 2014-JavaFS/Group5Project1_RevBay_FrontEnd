import { useState } from "react";
import { revbayServer } from "../../common/revbay-server";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    async function getAllCart() {
        try {
            const axResp = await revbayServer.get("cart")
            console.log(axResp.data);

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
            <button onClick={getAllCart}>Get Cart</button>
        </>
    );
}