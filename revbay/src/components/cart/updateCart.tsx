import { revbayServer } from "../../common/revbay-server";

export default function UpdateCart() {

    async function UpdateToCart() {
        try {
            const response = await revbayServer.put("cart", {
                activeCartItem: document.getElementById("itemId").value,
                productId: document.getElementById("prodId").value,
                quantity: document.getElementById("amount").value,
                userId: document.getElementById("userIden").value,
                address: document.getElementById("location").value
            })

            console.log(response.data);
        }
        catch (error) {
            console.error('Error updating cart:', error);
        }
    }

    return (
        <>
            <h2>Update Cart Item</h2>
            <div>
                <label>
                    Cart ID:
                    <input type="text" id="itemId" />
                </label>
            </div>
            <div>
                <label>
                    Product Id:
                    <input type="number" id="prodId" />
                </label>
            </div>
            <div>
                <label>
                    Product Quantity:
                    <input type="number" id="amount" />
                </label>
            </div>
            <div>
                <label>
                    User Id:
                    <input type="number" id="userIden" />
                </label>
            </div>
            <div>
                <label>
                    Address:
                    <input type="text" id="location" />
                </label>
            </div>
            <button onClick={UpdateToCart}>Update Cart</button>
        </>
    );
}