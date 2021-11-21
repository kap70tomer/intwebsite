import BookingForm from "./BookingForm";
import GalleryPage from "./GalleryPage";
import ComponentCarousela from "./Carousela";
import LocationDisplay from "./LocationDisplay"
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function HomePage(){
    return(
        <>
            {/* Display component using 'reactstrap' Carousel conponent- Studio's Welcome page photos */}
            <div className="carousel-home">
                <ComponentCarousela/> 
            </div>
            <div className ="welcome-home container">
            <Card>
               <CardHeader>
                <h2 className="home-header">ברוכים הבאים לאינטואיציה הבית לקעקועים שלכם</h2>
                </CardHeader>
            
                <h4>INTuition Tattoos & ART Studio</h4>
                <h6>By Yehuda Kalderon</h6>
                
                <i>
                    אינטואיציה באה מבפנים ובעזרת קווים אעזור לכם להגשים ולבטא חלומות בדיו. באווירה ביתית סטרילית ונעימה 
                </i>
                
                <br/>
                <b>
                    פתוח בימים א' עד ה' משעה 10 בבוקר ועד חצות. 
                    ובימי שישי עד השעה 1 בצהריים 
                </b>
                
            </Card>
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
