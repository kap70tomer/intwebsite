
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';

const AppRouter = ()=> {
    return(
    <>
    {/* switch router puts up one component at per view at a time, called by desired Path */}
        <Switch>
            <Route path ="/home" component = {HomePage} exact />
            {/* About me & App 'help' page - guide and info */}
            <Route path ="/about" component = {AboutPage} exact />
            {/* Contact page - facebook ,git , whatsapp ,phone ... */}
            <Route path ="/contact" component= {ContactPage} exact/>
        </Switch>
    </>
    );
};
export default AppRouter;