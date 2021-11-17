import AppRouter from "./Components/appRouter";
import FooterRights from "./Components/Footer";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="Layout">
      <div className="app-nav">
        <NavBar/>
      </div>
      <div className="app-main">
        <AppRouter></AppRouter>
      </div>
      <FooterRights/>
    </div>
  );
}
export default App;
