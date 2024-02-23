import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Counter({incrementBy,startingvalue}){
  
    const [count, tokoCount]=useState(0);
    const plusCounter = ()=>{
        tokoCount(count+ (incrementBy || 1 ));
        console.log(tokoCount)
        
    }
    const minusCounter = ()=>{
        tokoCount(count-1)

    }
    return(
        <div>
            <button onClick={plusCounter} >+1</button>
            <button onClick={minusCounter}>-1</button>
            <p>{count}</p>
    
        </div>
    )
}





export default Counter;