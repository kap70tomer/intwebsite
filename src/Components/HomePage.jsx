import BookingForm from "./BookingForm";
import GalleryPage from "./GalleryPage";
import ComponentCarousela from "./Carousela";
import LocationDisplay from "./LocationDisplay"
import { Card } from "react-bootstrap";

export default function HomePage(){
    return(
        <>
            {/* Display component using 'reactstrap' Carousel conponent- Studio's Welcome page photos */}
            <div className="carousel-home">
                <ComponentCarousela/> 
            </div>
            <div className ="welcome-home container">
            
                <h2>ברוכים הבאים לאינטואיציה הבית לקעקועים שלכם</h2>
            
                <h4>INTuition Tattoos & ART Studio</h4>
                <h6>By Yehuda Kalderon</h6>
                <p>
                    אינטואיציה באה מבפנים ובעזרת קווים אעזור לכם לבטא ולהגשים חלומות בדיו    
                    באווירה ביתית סטרילית ונעימה 
                </p>
                <br></br>
                <b>
                פתוח בימים א' עד ה' משעה 10 בבוקר ועד חצות. 
                ובימי שישי עד השעה 1 בצהריים 
                </b>
                
                <br></br> 
                <div style={{border:'none'}}> 
                <LocationDisplay/>
                </div>
             
            </div>
            <br></br>
            {/* Display component - instagram feed - via 'insta-feed.js' */}
            <div className="gallery-home">
                <GalleryPage />
            </div>
            <div className="booking-home container">
                <BookingForm/>
            </div>
        </>
    );
};
