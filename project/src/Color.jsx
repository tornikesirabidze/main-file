import { useState } from "react";



function Color(){
    const [colors, setcolors ]= useState("#ffffff")

    function colorChanger(event){
        setcolors(event.target.value)
    }

    return(
        <div className="maindiv">
            <h1>color picker</h1>
            <p>selected color {colors}</p>
            <div className="colordiv" style={{backgroundColor: colors}}>
            </div>

            <label className="colorinput">select a color: </label>
            <input type="color" value={colors} onChange={colorChanger}></input>
        </div>

    )
}


export default Color