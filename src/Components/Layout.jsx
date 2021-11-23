import AppRouter from "./appRouter";
import FooterRights from "./Footer";
import NavBar from "./Navbar";
import '../Styles/layout.css';

export default function Layout() {
    return (
        <div className="Layout">
            <NavBar />
            <div className="app-main">
                <AppRouter />
            </div>
            <FooterRights />
        </div>

    )
}