import { NavLink } from "react-router-dom";
import Logoint from "../Assets/logoint.png"
export default function NavBar(){
    return(
      <div className="nav-navbar">
        <NavBarItem>
        <NavLink to="/home"><img className="app-logo" src={Logoint} alt="octo-logo"/></NavLink>
        </NavBarItem>
        <NavBarItem>
              <NavLink to="/home">הבית</NavLink>
        </NavBarItem>

        <NavBarItem>
              <NavLink to="/about">מידע</NavLink>
              &nbsp;&nbsp;&nbsp;
        </NavBarItem>
        <NavBarItem>
            
              <NavLink to="/booking">קביעת תור</NavLink>
              &nbsp;&nbsp;&nbsp;
              </NavBarItem>

        <NavBarItem>
            
              <NavLink to="/contact">רשתות חברתיות</NavLink>
              &nbsp;&nbsp;&nbsp;
              </NavBarItem>

        <NavBarItem>
        <a href="tel:0522177853"> 052-2177853 חייג עכשיו</a>

        </NavBarItem>

      </div>
      
    )
  }
  
function NavBarItem(props){
    return(
      <div className="nav-bar-item">{props.children}</div>
    )
}