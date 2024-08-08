import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { revbayServer } from "../../common/revbay-server";
import axios from "axios";
import React from "react";
import DisplayTransactionHistory from "./displayTransactionHistory"

export default function getTransactionHistory(){

    const[val, setVal]=useState(0);
    const[toMap, setMap]=useState([[]]);
    const[check, toCheck]=useState("");

    async function requestTransactionHistory(){
        try{
            const response = await revbayServer.post("Transactions/History",{
                //userId: document.getElementById("userIden").value
                headers:{
                    "Content-type": "application/json; charset=UTF-8"},
                data:val
            })
            console.log(val)
            console.log(response)
            return response;

        }
        catch(error){
            console.log(document.getElementById("userIden"))
            console.error("error requesting transactions", error);
        }
        
        return "";
        //console.log(val)
    }

function postManTest(){
let data = JSON.stringify(val);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8080/Transactions/History',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
    //console.log(JSON.stringify(response.data));
    toCheck(JSON.stringify(response.data))
    //setMap(JSON.parse(JSON.stringify(response.data)))
    
    //setVal(response.data)
})
.catch((error) => {
  console.log(error);
});
//console.log(toMap)
console.log(check)


}

useEffect(() => {
    toCheck("TESTING SOMETHING");
  }, []);

//toCheck("TESTING SOMETHING");

//<h1>{check}</h1>

/*{tempMap.length > 0 ? (
                    tempMap.map((product, index) => (
                        <li key={index}> {product} </li>
                    ))
                ) : (
                    <p>No Transaction History</p>
                )}
                    */

function DisplayTransaction(){

    
    try{
        let tempMap = JSON.parse(check);
        return(
        
        <div>
            <ul>
                <h1>{check}</h1>
            </ul>
        </div>
       
    )
    }
    catch{
        return <>No User Logged In
        </>
    }
}



//postManTest()
    
    return(
        <div>
            <h1>Getting Transaction History</h1>
            <label>
                        User Id:
                        <input onChange={(e)=>setVal(Number(e.target.value))}
                            value = {val}
                            type="number"
                            id="userIden"
                        />
            </label>
            <br></br>
            <button onClick={postManTest}>User's Transaction History</button>
            <p>May Take a few Tries</p>
            <br></br>
            <DisplayTransaction />
            
            

        </div>
    )
}