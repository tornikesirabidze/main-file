import { useState } from "react"


function Onchanges(){

    const [input, setinput]= useState("")
    const [number, setnumber]= useState(0)
    const [text, settext]= useState("")
    const [peyment, setpeyment]= useState("")
    const [shipping, setshipping]= useState("")


    function inputOnchage(event){
        setinput(event.target.value)
    }
    function numberOnchange(event){
        setnumber(event.target.value)
    }
    function textOnchange(event){
        settext(event.target.value)
    }
    function peymentOnchange(event){
        setpeyment(event.target.value)
    }
    function shippingOnchange(event){
        setshipping(event.target.value)
    }


    return(

        <div>
            <input type="text" value={input} onChange={inputOnchage}/>
            <p>Name: {input}</p>

            <input type="number" value={number} onChange={numberOnchange}/>
            <p>Number: {number}</p>

            <textarea name="" id="" cols="30" rows="10" placeholder="text something"value={text} onChange={textOnchange}></textarea>
            <p>Comment: {text}</p>

            <select value={peyment} onChange={peymentOnchange}>
                <option value="">select a peyment</option>
                <option value="visa">visa</option>
                <option value="mastercard">mastercard</option>
                <option value="cash">cash</option>
            </select>
            <p>peyment: {peyment}</p>

            <label htmlFor="pick up">
            <input type="radio" value="pick up"
                                checked={shipping==="pick up"} 
                                onChange={shippingOnchange}></input>
                pick up
            </label>

            <label htmlFor="delivery">
            <input type="radio" value="delivery" 
                                checked={shipping==="delivery"} 
                                onChange={shippingOnchange}></input>
                delivery
            </label>
            <p>shipping: {shipping}</p>

        </div>

    )



}

export default Onchanges