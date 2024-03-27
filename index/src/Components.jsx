
import { useState } from "react";



function Components(){

    const [foods, setFood]=useState(["apple","panana","orange"]);


    function onClickAdd(){

        const newFood= document.getElementById("foodinput").value
        document.getElementById("foodinput").value=""
        setFood([...foods,newFood])
    }
    function onClickremove(index){

        setFood(foods.filter((_,i)=> i !==index))
    }


    return(

    <div>

        <h2>List of foods</h2>
        <ul>
            {foods.map((food, index)=><li key={index} onClick={()=>onClickremove(index)}>{food}</li>)}
        </ul>
        <input type="text" placeholder="add fruites" id="foodinput" />
        <button onClick={onClickAdd} >add it</button>

    </div>

    )
}



export default Components