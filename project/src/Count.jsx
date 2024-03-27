import { useState } from "react";
function Count(){
    const[count, setCount]=useState(0);

    

    
    const plusechange =()=>{
        setCount(count+1)
    
    }
    const minusechange =()=>{
        setCount(count-1)
    }

    const reset=()=>{
        setCount(0)

    }

    
    return(
        <div>
            <button onClick={plusechange}>+1</button>
            <h1>{count}</h1>
            <button onClick={minusechange}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Count