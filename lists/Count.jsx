
function Count(){
    const[number, setNumber]=(0);
    let count=0
    

    const plusechange =()=>{
        count(setNumber++)
    }
    const minusechange =()=>{
        count(setNumber--)
    }



    return(
        <div>
            <button onChange={plusechange}></button>
            <h1>{}count</h1>
            <button onChange={minusechange}></button>
        </div>
    )
}

export default Count