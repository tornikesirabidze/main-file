import React, { useState } from 'react'
import { crewText } from '../utils'
import "./Crew"

function Crew() {
    const [move, setMove] = useState(0)
    const moveCrew = (pos) => {
        if (pos == "first") {
            setMove(0) 
        } 
        if(pos == "midle") {
            setMove(-1500 ) 
        }
        if(pos=="second"){
            setMove(-3000) 
        }  
        if(pos=="third"){
            setMove(-4500) 
        }

    }




    return (

        <div className='overflow-hidden w-[100vw] crew-bg'>
            <div className='flex absolute z-[99]  bottom-[8rem] gap-[1rem] left-[10rem] '>

                <div onClick={() => moveCrew("first")} className='click1 cursor-pointer w-[20px] h-[20px] bg-red-600 rounded-full'></div>
                <div onClick={() => moveCrew("midle")} className='click2  cursor-pointer w-[20px] h-[20px] bg-red-600 rounded-full'></div>
                <div onClick={() => moveCrew("second")} className='click3  cursor-pointer w-[20px] h-[20px] bg-red-600 rounded-full'></div>
                <div onClick={() => moveCrew("third")} className='click3  cursor-pointer w-[20px] h-[20px] bg-red-600 rounded-full'></div>


            </div>
            <div className={`scrolmain overflow-hidden w-[6000px] ml-[5rem] h-[100vh] transition-all  flex  relative z-[5] justify-center items-center`} style={{left:`${move}px` }}>

                {crewText.map((item, index) => (
                    <div key={index} className={`anime-${index} w-full flex lg:flex-row justify-between flex-col lg:gap-[5rem] gap-[1rem] items-center `}>
                        <div className='flex flex-col pl-[5rem] w-full items-start  '>
                            <h1 className=' text-white w-full text-start lg:pl-0 pl-[2rem] lg:mt-[0]   --fontfamily--100 subheading--003 mt-[5rem] '><span className='font-bold primary-color--200 mr-[1rem]'>02</span>MEET YOUR CREW</h1>
                            <div className='flex flex-col mt-[5rem]'>
                                <h3 className='text-white --fontfamily--300 heading-font-400 primary-color--200'>{crewText[index].status}</h3>
                                <h2 className='text-white --fontfamily--300 heading-font-300'>{crewText[index].name}</h2>
                                <p className='text-white --fontfamily--200  --paragraph--100 primary-color--200 max-w-[444px]'>{crewText[index].p}</p>
                            </div>
                        </div>
                        <div className=' h-[90vh] w-full flex lg:items-end lg:justify-center justify-center '>

                            <img className=' w-[400px] z-[-1] absolute bottom-0' src={crewText[index].img} alt="" />
                        </div>



                    </div>


                ))}



            </div>
        </div>

    )
}


export default Crew
