import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authservice } from "../../services/auth.service";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLogged, setIsLogged] = useState();
  const [isExpired, setIsExpired] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLogged(authservice.isLogged());
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
    <div className="header">
      {/* <div className="mobile">
        <div className="hamburger" onClick={handleMenuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>

      <div className="web"> */}
      <div className="logo">Les Renovateurs</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Appointment">Prendre un rendez vous</Link>
          </li>

          {!isExpired && isLogged ? (
            <>
              <li>
                <Link to="/CreateMission">Creer une Mission</Link>
              </li>
              <li>
                <Link to={"/"}>
                  <span onClick={logout}>Logout</span>
                </Link>
              </li>
              <li>
                <Link to="/Profil">Profil</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/Login">Login</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
}

export default Header;
