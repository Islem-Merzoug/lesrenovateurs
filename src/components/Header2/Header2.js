import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { authservice } from "../../services/auth.service";
import "./Header2.css";
import { useNavigate } from "react-router-dom";

function Header2() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  //   -------------------
  const [isLogged, setIsLogged] = useState();
  const [isClient, setIsClient] = useState();

  const [isExpired, setIsExpired] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLogged(authservice.isLogged());
    setIsClient(authservice.isClient());
  };

  const logout = async (e) => {
    localStorage.removeItem("token");
    navigate("/Login");
    window.location.reload(false);
    alert("You logged out !");
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      sticky="top"
      style={{ background: "white", padding: "3px 3% 3px 3%" }}
    >
      <Navbar.Brand href="/">lesrénovateurs</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={handleMobileMenuToggle}
      >
        <FaBars />
      </Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={showMobileMenu ? "show" : ""}
      >
        <Nav className="navbar-nav ms-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link href="/Appointment">Prendre un rendez-vous</Nav.Link>
          {!isExpired && isClient ? (
            <>
              <Nav.Link href="/CreateMission">Créer une Mission</Nav.Link>
            </>
          ) : (
            <></>
          )}
          <NavDropdown title="Profil" id="basic-nav-dropdown">
            {!isExpired && isLogged ? (
              <>
                <NavDropdown.Item as={Link} to="/Profil">
                  Setting
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </>
            ) : (
              <>
                <NavDropdown.Item as={Link} to="/Login">
                  Login
                </NavDropdown.Item>
              </>
            )}
            <NavDropdown.Item as={Link} to="/Signup">
              Signup
            </NavDropdown.Item>
          </NavDropdown>
          {!isExpired && isLogged ? (
            <>
              <button
                className="btn btn-outline-danger"
                type="submit"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header2;
