import { useContext } from "react";
import { revbayServer } from "../../common/revbay-server";
import { MyContext } from "../../common/context";
import { MyUserContext } from "../../common/userContext";
 
export function usePostCart() {
    const { value1, value2 } = useContext(MyContext);
    const{userIdContext} = useContext(MyUserContext)
    
    async function addToCart() {
        try {
            console.log(userIdContext)
            const response = await revbayServer.post("cart", {
                productId: value1,
                quantity: value2,
                userId: userIdContext,
                address: "Change to get user Address"
            });
 
            console.log(response.data);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }
 
    return { addToCart };
}