import { useNavigate } from "react-router-dom"

export default function searchButton(){
    const navigate =useNavigate();
        function changePageHome(){
            navigate("/");

        }
    return(
        <>
        <button onClick={changePageHome}>Home Page</button>
        </>
    )
}