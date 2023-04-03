import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { authservice } from '../../../services/auth.service';
import CreateJobber from '../../jobber/CreateJobber/CreateJobber';
import CreateClient from '../../client/CreateClient/CreateClient';
import { Alert, Spinner } from 'react-bootstrap';
import { FidgetSpinner, Bars } from 'react-loader-spinner';
import WaitingSpinner from '../../Spinner/Spinner';

const Signup = () => {
  const [signupinfo, setSignupinfo] = useState({
    "data": {
        "user": {
            "id": 40,
            "username": "fr33dztttt",
            "email": "test@test.com"
        },
        "token": "17148109c9bf8bbe4425cafc7499ecf559f8c841a17ace3f7cc6f9376d847bf4"
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "allow": "POST, OPTIONS",
        "connection": "keep-alive",
        "content-length": "141",
        "content-type": "application/json",
        "date": "Sun, 02 Apr 2023 16:06:03 GMT",
        "referrer-policy": "same-origin",
        "server": "PythonAnywhere",
        "vary": "Accept, Origin",
        "x-clacks-overhead": "GNU Terry Pratchett",
        "x-content-type-options": "nosniff",
        "x-frame-options": "DENY"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        "method": "post",
        "url": "https://fr33dz.pythonanywhere.com/api/register/",
        "data": "{\"email\":\"test@test.com\",\"username\":\"fr33dztttt\",\"password\":\"test5\"}"
    },
    "request": {}
});
  const [isSignedup, setIsSignedup] = useState(false);
  const [userId, setUserId] = useState();
  const [isToggledAsJobber, setIsToggledAsJobber] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = () => {
    setIsToggledAsJobber(!isToggledAsJobber);
  }

  const signup = async (e) => {
    setShowSpinner(true)

    e.preventDefault();
    const { email, username, password, password2 } = e.target.elements;
    if (
      password.value === password2.value 
      ){
      let details = {
        "email": email.value,
        "username": username.value,
        "password": password.value
      }
      console.log(details);
      
      axios.post('https://fr33dz.pythonanywhere.com/api/register/', details)
      .then(res => {
          
          console.log(res)
          setSignupinfo(res)
          authservice.saveToken(res.data.token, res.data.user)
          setIsSignedup(true)
          setShowSpinner(false)

        })
        .catch(function (error) {
          if (error.response) {
            let errorMsg = ""
            for (const property in error.response.data) {
              errorMsg += `${property}: ${error.response.data[property]}\n`;
            }
            alert(errorMsg);
            setShowSpinner(false)
          } 
        });
        
        

        
    }else{
      alert("The passwords are different");
      setShowSpinner(false)

    }



  }
  return (
    <div style={{margin: '2%'}}>
      {/* <CreateJobber propValue={signupinfo} />
      <CreateClient propValue={signupinfo} /> */}

      { isSignedup ? (
          <>
            { isToggledAsJobber ? (
                <>
                  <CreateJobber propValue={signupinfo} />
                </>
                ) : (
                <>
                  <CreateClient propValue={signupinfo} />
                </>
                )
            } 
          </>
          ) : (
          <>
            <form  onSubmit={signup}>
              <div className="row">
                <div className="col">
                  <label>Email</label>
                  <input type="email" id="email" className="form-control" placeholder="email" required/>
                </div>
                <div className="col">
                  <label>Username</label>
                  <input type="text" id="username" className="form-control" placeholder="Username" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Password</label>
                  <input type="text" id="password" className="form-control" placeholder="Password"required/>
                </div>
                <div className="col">
                  <label>Conform your Password:</label>
                  <input type="text" id="password2" className="form-control" placeholder="Password" required/>
                </div>
              </div>

              <div className="row">
                
                <div className="col">
                  <label>Is Jobber ? - if not, so it will be a client ! </label><br/>
                  <input type="checkbox" checked={isToggledAsJobber} onChange={handleChange}/>
                </div>
              </div>

              <br/>
              <div style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-primary">Signup</button>
              </div>
              <div style={{textAlign: 'center', margin: '0.5rem'}}>
                {showSpinner && <Spinner />}
              </div>

            </form>
          </>
          )
      } 

    </div>
  );
}

export default Signup;
