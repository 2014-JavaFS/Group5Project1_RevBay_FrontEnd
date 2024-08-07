import { useNavigate } from "react-router-dom";

export default function goToShop(){
    const navigate = useNavigate()
    function changePageCart(){    
        navigate("/cart");
    }

    return(
        <>
        <button onClick={changePageCart}>Cart Page</button>
        </>
    )
}