import { NavLink } from "react-router-dom";
import AppRouter from "./Components/appRouter";


function App() {
  return (
    <div className="Layout">
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </div>
  );
}

function NavBar(){
  return(
    <nav className="nav-navbar">
      <img className="app-logo" src="https://image.freepik.com/free-vector/octopus-logo-concept_23-2148494541.jpg" alt="octo-logo"/>
      <NavBarItem>
            
            <NavLink to="/home">Home</NavLink>
                        
            <NavLink to="/about">About us</NavLink>
              
            <NavLink to="/contact">Contact</NavLink>
          
      </NavBarItem>
    </nav>
  )
}
function NavBarItem(props){
  return(
    <div className="nav-bar-item">{props.children}</div>
  )
}
export default App;
