import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { authservice } from '../../../services/auth.service';
// import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  let navigate = useNavigate ();

  const [logininfo, setLogininfo] = useState();

  const login = async (e) => {
   
    e.preventDefault();
    const { username, password } = e.target.elements;
    let details = {
        "username": username.value,
        "password": password.value
    }
    console.log(details);
    
    axios.post('https://fr33dz.pythonanywhere.com/api/login/', details)
    .then(res => {
        setLogininfo(res)
        authservice.saveToken(res.data.token)
        navigate('/Profil', { replace: true });
        window.location.reload(false);

      })
      .catch(function (error) {
        if (error.response) {
          let errorMsg = ""
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert(errorMsg);
        } 
      });


  }
  return (
    <div style={{margin: '2%'}}>
      
      <form  onSubmit={login}>
        <div className="row">
          <div className="col">
            <label>Username</label>
            <input type="text" id="username" className="form-control" placeholder="username" required/>
          </div>
          <div className="col">
            <label>Password</label>
            <input type="text" id="password" className="form-control" placeholder="password" required/>
          </div>
        </div>
        <br/>
        {/* <div style={{textAlign: 'center'}}> */}
            <button type="submit" className="btn btn-primary">Login</button>
        {/* </div> */}

      </form>
    </div>
  );
}

export default Login;
