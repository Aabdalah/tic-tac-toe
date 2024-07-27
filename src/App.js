import { useState } from 'react';
import './App.css';
import Game from './components/Game'
function App() {

  const[choice,setChoice] = useState(["o", null])
  const [xIsNext,setXIsNext] = useState(true);
  function handleClickXOrO(value){
      const nextChoice = choice.slice();
      if(value === choice[0]){
          return
      }
      nextChoice[0] = value;
      setChoice(nextChoice)
  }

  function handleClickPCOrHumane(value){
      const nextChoice = choice.slice();
      if(value === choice[1]){
          return
      }
      nextChoice[1] = value;
      setChoice(nextChoice)
      if(choice[0] === "o" && value ==="pc"){
        setXIsNext(false)
      }
  }

  return (
    <Game handleClickXOrO = {handleClickXOrO} handleClickPCOrHumane = {handleClickPCOrHumane} choice={choice} xIsNext={xIsNext} setXIsNext={setXIsNext}/>
  );
}

export default App;
