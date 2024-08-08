import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { revbayServer } from "../../common/revbay-server";
import axios from "axios"

export default function postCheckoutCart(){

    const[val, setVal]=useState(0);

    async function sendCheckoutRequest(){
        try{
            const response = await revbayServer.post("Transaction/Checkout",{
                userId: document.getElementById("userIden").value
            })
            console.log(response.data)
        }
        catch(error){
            console.error("error sending checkout request", error);
        }
        
    }


    function sendCheckoutPostmanRequest(){
        let data = JSON.stringify(val);
        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/Transactions/Checkout',
        headers: { 
         'Content-Type': 'application/json'
         },
         data : data
    };

        axios.request(config)
        .then((response) => {
             console.log(JSON.stringify(response.data));
        })
         .catch((error) => {
            console.log(error);
        });

    }

    return(
        <div>
            <h1>Checkout Button function tester</h1>
            <h2> checkout for Users with ID given</h2>

            <label>
                        User Id:
                        <input
                            onChange={(e)=>setVal(Number(e.target.value))}
                            type="number"
                            id="userIden"
                        />
            </label>
            <br></br>
            <button onClick={sendCheckoutPostmanRequest}>Send Checkout Request</button>

        </div>
    );
}