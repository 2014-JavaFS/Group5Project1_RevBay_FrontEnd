import { useEffect, useState } from "react";
import { revbayServer } from "../common/revbay-server";
export default function ProductPage(){

    const[products, setProducts] = useState([])
    const[cart,setCart] = useState([])
        async function fetchData() {
          try {
            const response = await revbayServer.get("products")
            const productFound = response.data.map((x: any) => ({ name: x.name, price: x.price, quantity : x.quantity }));
            
            setProducts(productFound)
          } catch (error:any) {
            console.log(error)
          } 
        }
        
    
    
      
    return  <>
    <h1>Welcome to Products Page</h1>
    <ul>
        {products.length > 0 ? (
            products.map((product, index) => (
                <li key={index}> {product.name} - ${product.price} -Qt{product.quantity}<button>Add to cart</button> </li>
            ))
        ) : (
            <p>No Products to Display</p>
        )}
    </ul>
    <button onClick={fetchData}>Get Available Products</button>
</>

}
