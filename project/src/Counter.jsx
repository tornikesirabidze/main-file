import { useState } from "react"


function Counter(){
    const [name, setName]= useState("");
    const [number, setNumber]= useState();
    

    function changevelnum(m){
        setNumber(m.target.value)
    }

    function changvalue(event){
        setName(event.target.value);
    }
    return(

        <div className="maindiv">
            <input className="inputname" value={name} onChange={changvalue} placeholder="text something"/>
            <h1>{name}</h1>
            <input className="inputnum" value={number} onChange={changevelnum} type="number"  placeholder="text num"/>
            <h1>{number}</h1>
        </div>
    )

}

export default Counter