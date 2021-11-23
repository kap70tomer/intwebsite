import AppRouter from "./appRouter";
import FooterRights from "./Footer";
import NavBar from "./Navbar";

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