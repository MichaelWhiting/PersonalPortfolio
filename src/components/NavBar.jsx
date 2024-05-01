import { Navbar, Nav, NavbarCollapse, NavbarBrand } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

// CSS
import "../css/NavBar.css";
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.css'; // this is the import for bootstrap css

function NavBar() {
  return (
    <Navbar className="me-2" expand='md' data-bs-theme="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2 mt-2"/>
        <Navbar.Collapse className="ms-1">
            <Nav className="ms-auto me-3 my-3">
                <NavLink to="/" className="nav-link ms-2 nav-label">Home</NavLink>
                <NavLink to="/projects" className="nav-link ms-2 nav-label">Projects</NavLink>
                <NavLink to="/contact" className="nav-link ms-2 nav-label">Contact</NavLink>
                <NavLink to="/joke" className="nav-link ms-2 nav-label" style={{color: "black"}}>Home</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar