import { useContext } from "react";
import { revbayServer } from "../../common/revbay-server";
import { MyContext } from "../../common/context";
 
export function usePostCart() {
    const { value1, value2 } = useContext(MyContext);
 
    async function addToCart() {
        try {
            const response = await revbayServer.post("cart", {
                productId: value1,
                quantity: value2,
                userId: 1,
                address: "Change to get user Address"
            });
 
            console.log(response.data);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }
 
    return { addToCart };
}