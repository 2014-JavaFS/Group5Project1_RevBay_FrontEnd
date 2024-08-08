import { useState } from "react";
import { revbayServer } from "../../common/revbay-server";

export default function PostCart() {
    

    async function addToCart() {
        try {
            const response = await revbayServer.post("cart", {
                activeCartItem: document.getElementById("itemIdPost").value,
                productId: document.getElementById("prodIdPost").value,
                quantity: document.getElementById("amountPost").value,
                userId: document.getElementById("userIdenPost").value,
                address: document.getElementById("locationPost").value
            })

            console.log(response.data)
        }
        catch (error) {
            console.error('Error adding to cart:', error);
        }
    }

    return (<>
            <h1>Add to Cart</h1>
                <div>
                    <label>
                        Cart ID:
                        <input
                            type="text"
                            id="itemIdPost"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Product Id:
                        <input
                            type="number"
                            id="prodIdPost"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Product Quantity:
                        <input
                            type="number"
                            id="amountPost"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        User Id:
                        <input
                            type="number"
                            id="userIdenPost"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Address:
                        <input
                            type="text"
                            id="locationPost"
                        />
                    </label>
                </div>
            <button onClick={addToCart}>Add to Cart</button>
    </>);
}