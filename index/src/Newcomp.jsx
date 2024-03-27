import { useState } from "react"


function Newcomp(){

    const[cars ,setCars]=useState([]);
    const[carYear, setCarYear]=useState(2024);
    const[carMaker, setCarmaker]=useState("");
    const[carModel, setCarmodel]=useState("");

    function addCarlist(){
        const newArr={
            year:carYear,
            maker:carMaker,
            model:carModel,
        }

        setCars([...cars, newArr]);
        
        setCarYear(2024)
        setCarmaker("")
        setCarmodel("")

    }


    function removeCar(index){

        setCars(cars.filter((_, i)=>i !==index))

    }

    function yearChanger(event){
        setCarYear(event.target.value)
    }

    function makeChanger(event){
        setCarmaker(event.target.value)
    }
    function modelChanger(event){
        setCarmodel(event.target.value)
    }


    
    return(
        <div>
            <h1>select a car</h1>

            <ul>
                {cars.map((car , index)=><li key={index} onClick={()=>removeCar(index)}>{car.year} {car.model} {car.maker}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={yearChanger} />
            <input type="text"  value={carMaker} placeholder="enter text" onChange={makeChanger}/>
            <input type="text" value={carModel} placeholder="enter text" onChange={modelChanger} />
            <button onClick={addCarlist}>add a car</button>
        </div>
    )
}


export default Newcomp