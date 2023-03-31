import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authservice } from '../../services/auth.service';
import './Header.css';
import { useNavigate } from 'react-router-dom'; 

function Header() {
  const [isLogged, setIsLogged] = useState();
  const [isExpired, setIsExpired] = useState(false);
  let navigate = useNavigate ();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLogged(authservice.isLogged())
  };

  const logout = async (e) => {
    localStorage.removeItem('token')
    navigate('/Signup', { replace: true });
    window.location.reload(false);
    
  }
  return (
    <div className="header">
      <div className="logo">Les Renovateurs</div>
      <nav className="nav">
        <ul>
        
          <li><Link to="/CreateJobber">Rejoindre le réseau</Link></li>
          <li><Link to="/MakeAnAppointment">Prendre un rendez vous</Link></li>
          <li><Link to="/Signup">Signup</Link></li>

          { !isExpired && isLogged ? (
              <>
                <li>
                  <Link to={'/'}>
                    <span onClick={logout}>Logout</span>
                  </Link>
                </li>
                <li> 
                  <Link to="/Profil">Profil</Link>
                </li>
              </>
              ) : (
                <>
                <li> <Link to="/Login">Login</Link></li>
                </>
              )
          } 

              
            {/* <DropdownButton id="dropdown-basic-button" title="Profil">
              <Dropdown.Item>
                <Link to="/Profil">Settings</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/">Login</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/">Signup</Link>
              </Dropdown.Item>
            </DropdownButton> */}
          
        </ul>
      </nav>
    </div>
  );
}

export default Header;
