import { useState } from "react";
import Square from "./Square";
import logo from "../assits/logo.svg"
import x from "../assits/icon-x-grey.svg"
import o from "../assits/icon-o-grey.svg"
import restart from "../assits/icon-restart.svg"

export default function Board({classes, choice, xIsNext, setXIsNext}){
    const [squares,setSquares] = useState(Array(9).fill(null));

    const [score,setScore] = useState(Array(3).fill(0))

    if(choice[0] === "o" && isEmpty(squares) && choice[1] === "pc"){
        pcPlay("x",squares)
    }

    let winner = calcWinner(squares);//calculate if there is a winner to prevent the user from playing again

    function handleClick(i){
        winner = calcWinner(squares);//calculate if there is a winner to prevent the user from playing again
        if(squares[i] || winner){return;}
        const nextSquares = squares.slice();//make a copy for immutablity
        if(choice[1] === "pc"){//the user choose to play against pc
            if(choice[0] === "x"){//user choose to be x
                nextSquares[i] = "x";
                setSquares(nextSquares);
                if(!calcWinner(nextSquares)){
                    pcPlay("o",nextSquares)
                }
                updateScore(nextSquares)
            }else if(choice[0] === "o"){//user choose to be o
                nextSquares[i] = "o";
                setSquares(nextSquares);
                if(!calcWinner(nextSquares)){
                    pcPlay("x",nextSquares)
                }
                updateScore(nextSquares)
            }
        }else if(choice[1] === "hu"){//the user choses to play against player
            xIsNext ? nextSquares[i] = "x" : nextSquares[i] = "o" ;//show the player move
            setSquares(nextSquares);//update the move in the squares array
            setXIsNext(!xIsNext)//say that the next turn will be the opposite of this turn
            updateScore(nextSquares)
        }
    }

    function pcPlay(move,nextSquares){
        let index = Math.floor(Math.random()*9);
        while(nextSquares[index]){
            index = Math.floor(Math.random()*9);
        }
        nextSquares[index] = move;
        setSquares(nextSquares)
    }

    function handleNewGame(){
        setSquares(Array(9).fill(null));
        if(choice[0] === "o" && choice[1] ==="pc"){
            setXIsNext(false)
        }else{
            setXIsNext(true);
        }
    }

    function isEmpty(array){
        for(let i = 0 ; i < array.length ; i++){
            if(array[i]){
                return false;
            }
        }
        return true;
    }

    function updateScore(nextSquares){
        const nextScore = score.slice();//this is to save the score if there is a winner in this turn
        if(calcWinner(nextSquares) === "x"){//notice using nextsquares as no to wait for the squares to update
            nextScore[0]++;
            setScore(nextScore)
        }else if(calcWinner(nextSquares) === "o"){
            nextScore[2]++;
            setScore(nextScore)
        }else if(calcWinner(nextSquares) === "tie"){
            nextScore[1]++;
            setScore(nextScore)
        }
    }

    return (
      <div className={classes}>
        {/* <p>{description}</p> */}
        <div className = "header">
            <img src = {logo} alt="logo"></img>
            <div className="turn">
                <img src={xIsNext && !winner ? x : !xIsNext && !winner ? o : null} alt="" className={winner ? "hidden" : null}></img>
                <p>{winner === "x" ? "Winner is X" : winner === "o" ? "Winnner is O" : winner === "tie" ? "IT IS A TIE" : "TURN"}</p>
            </div>
            <div className="restart" onClick={handleNewGame}>
                <img src={restart} alt="restart"></img>
            </div>
        </div>
        <div className="board-row">
          <Square value={squares[0]} onclick={() => handleClick(0)} />
          <Square value={squares[1]} onclick={() => handleClick(1)} />
          <Square value={squares[2]} onclick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onclick={() => handleClick(3)} />
          <Square value={squares[4]} onclick={() => handleClick(4)} />
          <Square value={squares[5]} onclick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onclick={() => handleClick(6)} />
          <Square value={squares[7]} onclick={() => handleClick(7)} />
          <Square value={squares[8]} onclick={() => handleClick(8)} />
        </div>
        <div className="score">
          <div className="x-score">
            <p>X ({choice[0] === "x" ? "YOU" : "CPU"})</p>
            <p>{score[0]}</p>
          </div>
          <div className="tie-score">
            <p>TIES</p>
            <p>{score[1]}</p>
          </div>
          <div className="o-score">
            <p>O ({choice[0] === "o" ? "YOU" : "CPU"})</p>
            <p>{score[2]}</p>
          </div>
        </div>
        {/* <button onClick={handleNewGame}>new game</button> */}
      </div>
    );
}

function calcWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i = 0 ; i < lines.length ; i++){
        const [a,b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    let field = true;
    for(let i = 0 ; i < 9 ; i++){
        if(!squares[i]){
            field = false;
        }
    }
    if(field){
        return "tie";
    }
    return null
}

