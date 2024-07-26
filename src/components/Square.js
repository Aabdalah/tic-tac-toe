import x from "../assits/icon-x.svg"
import o from "../assits/icon-o.svg"

export default function Square({value, onclick}){
    return(
        <div className="square" onClick={onclick} style={{ backgroundImage:`url(${value === "x" ? x : value === "o" ? o : null})`}}>
            
        </div>
    );
}