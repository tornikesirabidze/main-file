import { useState } from "react"



function Lists(){
    const [car, setcar]=useState({year:2019,
                                make:"nissan",
                                model:"skyline"})

    


    function makeOnchange(event) {
        setcar(car=>({...car, make: event.target.value}))
        
        
    }
    function moduleOnchange(event) {
        setcar(car=>({...car, model: event.target.value}))
       
        
    }
        function yearOnchange(event) {
        setcar(car=>({...car, year:event.target.value}))
       
        
    }

    return(
        <div>
            <p>your favoite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={yearOnchange} />
            <input type="text" value={car.make} onChange={makeOnchange}/>
            <input type="text" value={car.model}onChange={moduleOnchange}/>
        </div>
    )
}

export default Lists