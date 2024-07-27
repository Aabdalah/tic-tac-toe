// import { useState } from 'react';
import Welcome from "./Welcome";
import Board from './Board';

export default function Game({handleClickXOrO, handleClickPCOrHumane, choice, xIsNext ,setXIsNext}){

    // const[choice,setChoice] = useState(["o", null])

    // function handleClickXOrO(value){
    //     const nextChoice = choice.slice();
    //     if(value === choice[0]){
    //         return
    //     }
    //     nextChoice[0] = value;
    //     setChoice(nextChoice)
    // }

    // function handleClickPCOrHumane(value){
    //     const nextChoice = choice.slice();
    //     if(value === choice[1]){
    //         return
    //     }
    //     nextChoice[1] = value;
    //     setChoice(nextChoice)
    // }

    return(
        <>
        <Welcome handleClickXOrO={handleClickXOrO} handleClickPCOrHumane={handleClickPCOrHumane} classes = {choice[1] ? `welcome hidden` : "welcome"}/>
        <Board classes = {choice[1] ? `board` : "board hidden"} choice={choice} xIsNext = {xIsNext} setXIsNext = {setXIsNext}/>
        </>
    )
}