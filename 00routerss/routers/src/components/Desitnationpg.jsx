import React from 'react'
import { useParams } from 'react-router-dom'
import { destinationNavbar } from '../utils'

function Desitnationpg() {

    const { id } = useParams()

    


    return (
        <div className={`lg:flex-row flex flex-col w-[100vw] ${id == 1 && "pr-[90px]"} justify-between px-[9rem]`}>
            <div className='text-white flex flex-col lg:flex-col gap-10 justify-center item-start'>
                <h1 className='w-[] --fontfamily--100 subheading--100 '><span className='font-bold primary-color--200 mr-[1.5rem]'>0{id}</span>PICK YOUR DESTINATION</h1>
                <img src={destinationNavbar[id].img} alt="" className='w-[400px] h-[400px] ml-[3rem]' />
            </div>
            <div>

                <div className='flex flex-col gap-[3rem]'>
                    <h1 className='lg:text-white text-red-500 w-[120px] h-[115px] --fontfamily--300 heading-font-200'>{destinationNavbar[id].h2}</h1>
                    <p className='text-white max-w-[25rem] --fontfamily--200 subheading--000'>{destinationNavbar[id].p}</p>
                    <hr className='border-primary-color--100' />
                </div>
                <div className='flex gap-[5rem] pt-[2rem] '>
                    <div>
                        <p className='--fontfamily--100 primary-color--200 subheading--300 '>AVG. DISTANCE</p>
                        <h2 className='text-white  --fontfamily--300 heading-font-500'>{destinationNavbar[id].distance}</h2>
                    </div>
                    <div>
                        <p className='--fontfamily--100 primary-color--200 subheading--300'>EST. TRAVEL TI</p>
                        <h2 className='text-white  --fontfamily--300 heading-font-500'>{destinationNavbar[id].time}</h2>
                    </div>

                </div>
            </div>

            {/* tablet version */}






        </div>


    )
}

export default Desitnationpg
