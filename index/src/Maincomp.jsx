import { useState } from "react"



function Maincomp(){

    const[cars, setcars]=useState([]);
    const[carYear, setCaryear]=useState(2024);
    const[carMaker, setCarmaker]=useState("");
    const[carModel, setCarmodel]=useState("");


    function CarlistAdd(){
        const newCars={
            year:carYear,
            make:carMaker,
            model:carModel
        };
        setcars([...cars,newCars]);
        setCaryear(2024)
        setCarmaker("")
        setCarmodel("")


    }


    function CarlistRemove(index){
        setcars(cars=> cars.filter((_, i)=> i !==index))
    }



    function YearOnchange(event){
        setCaryear(event.target.value)
        
    }
    function MakeOnchange(event){
        setCarmaker(event.target.value)
        
    }
    function ModelOnchange(event){
        setCarmodel(event.target.value)
   
        
    }
    



    return(
        <div>
            <h2>List of Car Objects</h2>

            <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>CarlistRemove(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" id="inputnum" value={carYear} onChange={YearOnchange} />
            <input type="text"placeholder="Enter car maker" value={carMaker} onChange={MakeOnchange}/>
            <input type="text" placeholder="Enter car model" value={carModel} onChange={ModelOnchange}/>
            <button onClick={CarlistAdd}>add to car</button>
        </div>
    )
}


export default Maincomp