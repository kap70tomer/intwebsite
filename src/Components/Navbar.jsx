import { NavLink } from "react-router-dom";
import Logoint from "../Assets/logoint.png"
export default function NavBar(){
    return(
      <div className="nav-navbar">
        <NavBarItem>
        <NavLink to="/home"><img className="app-logo" src={Logoint} alt="octo-logo"/></NavLink>
        </NavBarItem>
        <NavBarItem>
              <NavLink to="/home"><i className="fa fa-home"></i> הבית</NavLink>
        </NavBarItem>

        <NavBarItem>
              <NavLink to="/about"><i className="fa fa-info"></i> מידע</NavLink>
              &nbsp;&nbsp;&nbsp;
        </NavBarItem>
        <NavBarItem>
            
              <NavLink to="/booking"><i className="far fa-calendar-plus"></i> קביעת תור</NavLink>
              &nbsp;&nbsp;&nbsp;
              </NavBarItem>

        <NavBarItem>
            
              <NavLink to="/contact"><i className="fas fa-user-friends"></i> רשתות חברתיות</NavLink>
              &nbsp;&nbsp;&nbsp;
              </NavBarItem>

        <NavBarItem>
        <a href="tel:0522177853"> <i className="fa fa-phone"></i> 052-2177853 חייג עכשיו</a>

        </NavBarItem>

      </div>
      
    )
  }
  
function NavBarItem(props){
    return(
      <div className="nav-bar-item">{props.children}</div>
    )
}