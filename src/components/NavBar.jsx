import { Navbar, Nav, NavbarCollapse } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

// CSS
import "../css/NavBar.css";
import "../css/App.css";

function NavBar() {
  return (
    <Navbar className="me-2" expand='md' data-bs-theme="dark">
        <div className="brand-container">
            <Icon.Person className="person-icon"/>
            <label className="site-name">Portfolio</label>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
            <Nav className="ms-auto me-3">
                <NavLink to="/" className="nav-link ms-2">Home</NavLink>
                <NavLink to="/projects" className="nav-link ms-2">Projects</NavLink>
                <NavLink to="/contact" className="nav-link ms-2">Contact</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar