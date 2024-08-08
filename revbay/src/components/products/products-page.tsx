import { useContext, useRef, useState } from "react";
import { revbayServer } from "../../common/revbay-server";
import GetCartById from "../cart/cart";
import { MyContext } from "../../common/context";

export default function ProductPage(){

    const[products, setProducts] = useState([])
    const{setValue1, setValue2} = useContext(MyContext)
     const { value1, value2 } = useContext(MyContext);
    const quanityRef = useRef([])
    
        async function fetchData() {
          try {
            const response = await revbayServer.get("products")
            const productFound = response.data.map((x: any) => ({ id:x.productId,name: x.name, price: x.price, quantity : x.quantity }));
            
            setProducts(productFound)
          } catch (error:any) {
            console.log(error)
          } 
        }

         async function handleAddToCart (product, index){
            const quantity = quanityRef.current[index].value
            console.log(`Adding ${quantity} of ${product.name} ${product.id} to cart`)
             setValue1(product.id)
             setValue2(product.quantity)
            console.log(value1)
            console.log(value2)

        }   
    return  <>
    <h1>Welcome to Products Page</h1>
    <ul>
        {products.length > 0 ? (
            products.map((product, index) => (
                <li key={index}> {product.name} - ${product.price} -Qt{product.quantity} <input
                type="number"
                min="1"
                ref = {el=> quanityRef.current[index]=el}
                step={1.0}
            />
            <button  onClick={()=>handleAddToCart(product,index)}
                >
                
                Add to cart
            </button> </li>
            ))
        ) : (
            <p>No Products to Display</p>
        )}
    </ul>
    <button onClick={fetchData}>Get Available Products</button>
</>

}
