import logo from '../assits/logo.svg'
export default function Welcome({handleClickXOrO, handleClickPCOrHumane, classes}){
    return(
        <div className={classes}>
            <img src={logo} alt="logo"></img>
            <div className="pick-player">
                <p>PICK PLAYER 1'S MARK</p>
                <div>
                    <input type="radio" name="choice" id="x"></input>
                    <label htmlFor='x' onClick={()=>handleClickXOrO("x")}></label>
                    <input type="radio" name="choice" id="o" defaultChecked></input>
                    <label htmlFor='o' onClick={()=>{handleClickXOrO("o")}}></label>
                </div>
                <p>REMEMBER: X GOES FIRST</p>
            </div>
            <div className="pick-type">
                <button onClick={()=>handleClickPCOrHumane("pc")}>NEW GAME (VS CPU)</button>
                <button onClick={()=>handleClickPCOrHumane("hu")}>NEW GAME (VS PLAYER)</button>
            </div>
        </div>

    );
}