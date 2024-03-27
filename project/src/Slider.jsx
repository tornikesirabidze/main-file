import React from "react"
import HeroSlider, {Slide} from "hero-slider"



const imgess1 = "https://imgur.com/gallery/J5iM18v";
const imgess2 = "https://imgur.com/gallery/I7QphGm";
const imgess3 = "https://imgur.com/gallery/OZq0DaI";

function Slider(){


    return(
        <HeroSlider 
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforChange={(previusSlide, nextSlide)=>console.log("onBeforChange", previusSlide, nextSlide)}
            onChange={nextSlide=> console.log("onChange", nextSlide)}
            onAfterChange={nextSlide=> console.log("onAfterChange",nextSlide)}
            settings={{
                slidingDuration:250,
                slidingAnimation:100,
                shouldAutopley:true,
                shouldDisplayButtons:true,
                autoplayDuration:5000,
                height:"100vh"

            }}
        >
            <Slide bacgorund={{
                backgroundImage:imgess1,
                backgroundAttachment:"fixed"
            }}/>
            <Slide bacgorund={{
                backgroundImage:imgess2,
                backgroundAttachment:"fixed"
            }}/>
            <Slide bacgorund={{
                backgroundImage:imgess3,
                backgroundAttachment:"fixed"
            }}/>    
        </HeroSlider>
        
    )
}

export default Slider