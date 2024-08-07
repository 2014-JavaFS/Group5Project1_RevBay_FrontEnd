import { useState } from "react";
import { revbayServer } from "../../common/revbay-server";

export default function CreateCart() {
    

    async function addToCart() {
        try {
            const response = await revbayServer.post("cart", {
                activeCartItem: document.getElementById("itemId").value,
                productId: document.getElementById("prodId").value,
                quantity: document.getElementById("amount").value,
                userId: document.getElementById("userIden").value,
                address: document.getElementById("location").value
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
                            id="itemId"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Product Id:
                        <input
                            type="number"
                            id="prodId"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Product Quantity:
                        <input
                            type="number"
                            id="amount"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        User Id:
                        <input
                            type="number"
                            id="userIden"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Address:
                        <input
                            type="text"
                            id="location"
                        />
                    </label>
                </div>
            <button onClick={addToCart}>Add to Cart</button>
    </>);
}