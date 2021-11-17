// Caousel component - Displays photos-slider at home page.

import { useEffect, useState } from "react";
// Array of images of the buisness as data model for display, imported from 'src/Assets' static dir. 
import { images } from "../Helpers/CarouselaData";
// Import Arrow icons, As Carousel's controls.
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

//Display Comp. for studio Photos, located first in landing page.

const CarouselContainer =()=>{
    
    let [current, setCurrent] = useState(0);
    let length = images.length;
    // On component mounted, call Timeout func taking in nextSlide to resulting in 'auto slide show' effect UI.
    useEffect(()=>{
        setTimeout(nextSlide,12000);
    });
    
    // Validations to 'images' Array before render. 
    if(!Array.isArray(images)|| images.length <= 0){
        return null;
    };
    
    // Carousel's controler 'left arrow'.
    // on Button Clicked, Change the current photo, to the last one displayed.  
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current-1);
    };
    // Carousel's controller 'right arrow'.
    // on Button Clicked, change the current displayed photo on the carousel to the next one on 'CarouselData'.
    const nextSlide=()=>{
        setCurrent(current === length-1 ? 0: current+1);
    };
    
    
    return (
        
        <div className='carousela'>
            
            <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide} />
    
            <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />

            {images.map((slide, index)=>{
                return(
                    
                    <div className={index === current ? 'slide active': 'slide'} key={index}>
                       {current === index && <img src={slide.image} alt={slide.text} className="slide-image" /> }
                    </div>
                ) 
            })}

        </div>
    );
};
export default CarouselContainer;






























// const items = [
//   {
//     src: '../Assets/fb.jpg',
//     key: '1'
//   },
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     key: '2'
//   },
//   {
//       src: {WelcomeImage},
//       key: '3'
//     },
//     {
//         src: `data:image/${WelcomeImage}`,
//         key:'4'
//   }
// ];

// const Carousel = () => <UncontrolledCarousel captionText={false} indicators={false} items={items} />;

// export default Carousel;