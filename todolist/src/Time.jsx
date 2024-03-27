import {useState, useEffect} from "react";


function Time(){

	const [time, setTime]=useState(new Date())

	useEffect(()=>{
	   const intervalid= setInterval(()=>{
		   setTime(new Date())
	   },1000)
 

	   return()=>{
		  clearInterval(intervalid);
	   }
	},[])          

	
function formatTime(){

	let hours= time.getHours();
	const minutes= time.getMinutes();
	const seconds= time.getSeconds();
	const meridiem = hours >= 12 ? "PM" :"AM";

	
	hours = hours %12 || 12;

	return `${hours}:${minutes}:${seconds}:${meridiem}`

}



	return(
		<div>
			<h1>{formatTime()}</h1>
		</div>
	)
}


export default Time