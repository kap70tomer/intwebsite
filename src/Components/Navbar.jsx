import { NavLink } from "react-router-dom";
import Logoint from "../Assets/logoint.png";
import '../Styles/navbar.css';
export default function NavBar() {
  return (
    <div className="nav-navbar">
      <NavBarItem>
        <NavLink to="/home"><img className="app-logo" src={Logoint} alt="octo-logo"/></NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/about"><i className="fa fa-info"/></NavLink>
      </NavBarItem>
      <NavBarItem>
        <a href="https://www.facebook.com/INT.tattoos"><i className="fab fa-facebook-f"/></a>
      </NavBarItem>
      <NavBarItem>
        <a href="https://www.instagram.com/int.tattoos/"><i className="fab fa-instagram"/></a>
      </NavBarItem>
      <NavBarItem>
        <a href="https://api.whatsapp.com/message/7SJZ3TRRFVM5G1"><i className="fab fa-whatsapp"/></a> 
      </NavBarItem>
      <NavBarItem> 
        <a href="tel:0522177853"><i className="fa fa-phone"/></a>
      </NavBarItem>

    </div>

  )
}

function NavBarItem(props) {
  return (
    <div className="nav-bar-item">{props.children}</div>
  )
}