import { useNavigate } from "react-router-dom";
import Button from "./Button";

// import  {diceImg }  from "../../public/images/dices.png"
export default function Home() {
 const navigate = useNavigate();

    function handlePlay() {
        navigate("./game")
    }

    return (
        
            <div className="home"> 
                <div className="dice-img">
                    <img src="../../public/images/dices.png" alt="" />
                </div>
                <div className="dice-game"> 
                     <h1 className="main-heading">DICE GAME</h1>
                     <div className="main-btn-div">
                       <Button onClick={handlePlay}>
                        Play Now 
                        </Button>
                     </div>
                 </div>
            </div>
            
        
    )
}
