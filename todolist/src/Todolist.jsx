import { useState } from "react";



function Todolist(){

    const[tasksarr, setTaskarr]=useState(["do tomething ", "sleeep","stil sleep"])
    const[input, setinput]= useState("")


    function changeInput(event){
        setinput(event.target.value)
    }


    function addTolist(){
        if(input !== "")
        setTaskarr([...tasksarr, input ])
        setinput("")

    }


    function removeList(index){
        const updatetask=tasksarr.filter((_, i)=> i !== index);
        setTaskarr(updatetask)
    }



    function downMove(index){
        if(index < tasksarr.length-1){
            const updaTetask = [...tasksarr];
            [updaTetask[index], updaTetask[index-1]]=
            [updaTetask[index-1], updaTetask[index]]
            setTaskarr(updaTetask)
        
        } 
    }


    function upMove(index){
        if(index > 0){
            const updaTetask = [...tasksarr];
            [updaTetask[index], updaTetask[index+1]]=
            [updaTetask[index+1], updaTetask[index]]
            setTaskarr(updaTetask)
        
        } 
    }








    return(
        <div className="maindiv">
            <h1>TO-DO-LIST</h1>
            <div >
                <input type="text" value={input} 
                    onChange={changeInput}
                    placeholder="enter a task"/>
                <button className="inputbtn" onClick={addTolist}>
                    add it
                </button>
            </div>
            <div className="seeconddiv">
                <ol>
                    {tasksarr.map((task, index)=><li key={index}><span className="text">{task}</span>
                    <button className="buttonss" onClick={()=>removeList(index)}>delete</button>
                    <button onClick={()=>upMove(index)}>👆</button>
                    <button onClick={()=>downMove(index)}>👇</button>
                    
                    </li>)}
                    
                </ol>
            </div>
        </div>

    )
};


export default Todolist