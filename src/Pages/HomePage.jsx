import BookingForm from "../Components/BookingForm";
import GalleryPage from "../Components/GalleryComponent";
import ComponentCarousela from "../Components/Carousela";
import LocationDisplay from "../Components/LocationDisplay"
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import '../Styles/home.css';

export default function HomePage(){
    return(
        <>
            {/* Display component using 'reactstrap' Carousel conponent- Studio's Welcome page photos */}
           
             <ComponentCarousela/> 
          
            <div className ="welcome">
            <Card>
               <CardHeader>
                <h2 className="home-header">ברוכים הבאים לאינטואיציה הבית לקעקועים שלכם</h2>
                </CardHeader>
            
                <h4>INTuition Tattoos & ART Studio</h4>
                
                <i>
                    אינטואיציה באה מבפנים ובעזרת קווים אעזור לכם להגשים ולבטא חלומות בדיו. באווירה ביתית סטרילית ונעימה 
                </i>
                
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
            <div className="booking-home card">
                <BookingForm/>
            </div>
        </>
    );
};
