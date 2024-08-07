

import {useState} from "react";
import { revServer } from "../common/revbay-server";
import { useEffect } from "react";
import ProductTableData from "./productTable";
import ProductGetId from "./productGetId";

export default function productDisplay(){
    const [products, setProducts] = useState();


    async function propigateProducts(){
        try{
            const response = await fetch("http://localhost:9090/products") //default its a get
            const data = await response.json()

            //const axResp = await revServer.get("/products")

            //console.log(axResp.headers)
            //console.log(data)

            setProducts(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        propigateProducts();
      }, []);


      // obj = JSON.stringify(products)
      //obj.split
      //const obj = JSON.parse(JSON.stringify(products))

      function MyForm() {
        const [name, setName] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
          alert(`The name you entered was: ${name}`)
        }
      
        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your name:
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        )
      }

    return(
        <>
            <div>
            <h1>This Is A Loading Test</h1>
            <br></br>
            
            <p>{products === undefined ? <p>Test???</p> : JSON.stringify(products)}</p>
            <br></br>
            <br></br>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>productId</th>
                </tr>
            </thead>
            {products === undefined || <ProductTableData products={products}></ProductTableData>}
            </table>
            </div>

            <br></br>
            <MyForm/>

        </>
    );
}