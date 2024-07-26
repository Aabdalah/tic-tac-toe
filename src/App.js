import { useState } from 'react';
import './App.css';
import Game from './components/Game'
function App() {

  const[choice,setChoice] = useState(["o", null])

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
  }

  return (
    <Game handleClickXOrO = {handleClickXOrO} handleClickPCOrHumane = {handleClickPCOrHumane} choice={choice}/>
  );
}

export default App;
