import { useState } from "react";
import { revbayServer } from "../../common/revbay-server";

export default function DeleteCart() {
    

    async function CartToDelete() {
        try {
            const cartToDelete = {
                activeCartItem: document.getElementById("itemIdDelete").value,
            }

            console.log(cartToDelete);

            const response = await revbayServer.delete(`cart?id=${document.getElementById("itemIdDelete").value}`)
        }
        catch (error) {
            console.error('Error deleting cart:', error);
        }
    }

    return (<>
            <h1>Enter data of cart to delete</h1>
                <div>
                    <label>
                        Cart ID:
                        <input
                            type="text"
                            id="itemIdDelete"
                        />
                    </label>
                </div>
            <button onClick={CartToDelete}>Delete Cart</button>
    </>);
}