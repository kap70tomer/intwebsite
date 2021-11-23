
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import HomePage from '../Pages/HomePage';
import BookingPage from '../Pages/BookingPage';

const AppRouter = ()=> {
    return(
    <>
    {/* switch router puts up one component at per view at a time, called by desired Path */}
        <Routes>
            <Route path ="/home" element={<HomePage/>} exact />
            {/* About me & App 'help' page - guide and info */}
            <Route path ="/about" element = {<AboutPage/>} />
            {/* Booking Page - form for sending booking tattoos requests from clients. */}
            <Route path ="/booking" element= {<BookingPage/>}/>
            {/* Contact page - facebook ,git , whatsapp ,phone ... */}
            <Route path ="/contact" element= {<ContactPage/>}/>
            {/* deafult path home - redirect all urls with no match */}
            <Route path ='*' element ={<HomePage/>} />
        </Routes>
    </>
    );
};
export default AppRouter;