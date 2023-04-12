import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [you,setYou] = useState("");
  const [comp,setComp] = useState("");
  
  // const [youScore,setYouScore] = useState(0);
  // const [compScore,setCompScore] = useState(0);

  const [result,setResult] = useState("");

  const handleComp = ()=>{
    const choice = ["✊", "✋", "✌️"]
    const index = Math.floor(Math.random() * 3);
    setComp(choice[index]);
  }

  const handleChoice = (e) => {
    setYou(e.target.id);
    handleComp();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setYou("");
    setComp("");
    setResult("");
  }

  useEffect(() => {
    if(you && comp){
      if( you === comp ){
        setResult("It's a tie")
      }
      else if( (you === "✊" && comp === "✋") || (you === "✋" && comp === "✌️") || (you === "✌️" && comp === "✊") ){
        setResult("You lose 🙁")
      }
      else if( (comp === "✊" && you === "✋") || (comp === "✋" && you === "✌️") || (comp === "✌️" && you === "✊") ){
        setResult("You win! 😊")
      }
    }
  }, [you,comp])
  



  return (
    <div className="container">
      <form>
    
            <h1><span>Rock</span> <span>Paper</span> <span>Scissors</span></h1>
    
            <div className="game">
    
    
                <div className="you">
                    <h2>You</h2>
                    <div className="your-choice">{ you }</div>
                </div>
    
                <div>vs</div>
    
                <div className="comp">
                    <h2>Computer</h2>
                    <div className="comp-choice">{ comp }</div>
                </div>
    
    
            </div>
    
            <p className="pick">Pick one</p>
    
            <div className="choice">
                <div className="rock" id={"✊"} onClick={handleChoice}>✊</div>
                <div className="paper" id={"✋"} onClick={handleChoice}>✋</div>
                <div className="scissors" id={"✌️"} onClick={handleChoice}>✌️</div>
            </div>
    
            { result? <div className="result">{result}</div> : ""}
            { result? <button onClick={handleSubmit}>Play Again</button> : ""}
    
    
        </form>
    </div>
  );
}

export default App;
