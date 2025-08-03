import { useState } from "react";
import Button from "./Button";

export default function Score() {

    const [selected , setSelected] =useState(null);
    const [score , setScore] =useState(0);
    const [dice , setDice] =useState(1);
    const [error , setError] =useState();


    const liList = [1,2,3,4,5,6]

    function handleSelect(list) {
        setSelected(list)
        setError("")
    };

    function rollDice() {
        if(selected === null){
            setError("Please select a number before rolling the dice.");
            return ;
        }
    

        const rolled = Math.floor(Math.random() * 6) + 1;
        setDice(rolled);

    
        if (rolled === selected) {
            setScore(score + selected)

        }else{
            setScore(score - 1 )
        }
        setSelected(null)
    }

    return (
        <>
            <div className="score-div">
                <div className="main-score-div">
                    <div className="score-side">
                        <p>{score}</p>
                        <p>Total Score</p>
                    </div>
                    <div className="select-score">
                      

                        <p>{error ? error : selected ? `You selected ${selected}` : "You have not selected any number"}</p>

                        <ul className="number-list">

                            {liList.map((list)  => (
                              <li
                key={list}
                onClick={() => handleSelect(list)}
                style={{
                  backgroundColor: selected === list ? "black" : "white",
                  color: selected === list ? "white" : "black",
                  cursor: "pointer",
                  padding: "0.5rem 1rem",
                  margin: "0.5rem",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              >
                {list}
              </li>
                            ))}
                           
                       </ul>
                        <p className="selected-para">Select Number</p>
                    </div>
                </div>
                <div className="score-dice">
        
                        <img
                         src={`../../public/images/dice/dice_${dice}.png`}
                         alt={`dice-${dice}`} 
                        style={{ width: "100px", cursor: "pointer" }}
                         onClick={rollDice}
                         />
                    
                    <p>Click on dice to roll</p>
                    <Button onClick={()=> setScore(0)} >Reset Score</Button> <br />
                    <Button onClick={() => alert("Rules:\n1. Select a number\n2. Roll the dice\n3. If match, score += num, else score -= 1")}>Show Rules</Button>   
                </div>
            </div>
        
        </>
    )
}