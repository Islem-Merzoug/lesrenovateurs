import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { authservice } from '../../../services/auth.service';
import CreateJobber from '../../jobber/CreateJobber/CreateJobber';
import CreateClient from '../../client/CreateClient/CreateClient';
import { Alert, Spinner } from 'react-bootstrap';
import { FidgetSpinner, Bars } from 'react-loader-spinner';
import WaitingSpinner from '../../Spinner/Spinner';
// import jwt from 'jsonwebtoken';

const Signup = () => {
  const [signupinfo, setSignupinfo] = useState();
  const [isSignedup, setIsSignedup] = useState(false);
  const [userId, setUserId] = useState();
  const [isToggledAsJobber, setIsToggledAsJobber] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = () => {
    setIsToggledAsJobber(!isToggledAsJobber);
  }

  const signup = async (e) => {
    setShowSpinner(!showSpinner)

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
          authservice.saveToken(res.data.token)
          setIsSignedup(true)
          setShowSpinner(!showSpinner)

        })
        .catch(function (error) {
          if (error.response) {
            let errorMsg = ""
            for (const property in error.response.data) {
              errorMsg += `${property}: ${error.response.data[property]}\n`;
            }
            alert(errorMsg);
            setShowSpinner(!showSpinner)
          } 
        });
        
        

        
    }else{
      alert("The passwords are different");
      setShowSpinner(!showSpinner)

    }



  }
  return (
    <div style={{margin: '2%'}}>

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
                  <label>email</label>
                  <input type="text" id="email" className="form-control" placeholder="email" required/>
                </div>
                <div className="col">
                  <label>Username</label>
                  <input type="text" id="username" className="form-control" placeholder="username" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Password</label>
                  <input type="text" id="password" className="form-control" placeholder="password"required/>
                </div>
                <div className="col">
                  <label>Conform your Password</label>
                  <input type="text" id="password2" className="form-control" placeholder="password" required/>
                </div>
              </div>

              <div className="row">
                
                <div className="col">
                  <label>Is Jobber ? - if not, so it will be a client ! </label><br/>
                  <input type="checkbox" checked={isToggledAsJobber} onChange={handleChange}/>
                </div>
              </div>

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
