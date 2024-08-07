import { useNavigate } from "react-router-dom"
import { useNavigation } from "react-router-dom";

export default function homeButton(){
        const navigation = useNavigation();

        function changePageHome(){
            navigation
        }
    return(
        <>
        <button onClick={changePageHome}>Home Page</button>
        </>
    )
}