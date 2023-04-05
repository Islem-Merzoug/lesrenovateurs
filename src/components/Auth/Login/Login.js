import React, { useEffect, useState } from "react";

import axios from "axios";
import { authservice } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Login = () => {
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const [logininfo, setLogininfo] = useState();

  const login = async (e) => {
    setShowSpinner(!showSpinner);

    e.preventDefault();
    const { username, password } = e.target.elements;
    let details = {
      username: username.value,
      password: password.value,
    };
    console.log(details);

    axios
      .post("https://fr33dz.pythonanywhere.com/api/login/", details)
      .then((res) => {
        setLogininfo(res);
        authservice.saveToken(res.data.token, res.data.user);
        setShowSpinner(!showSpinner);
        navigate("/Profil", { replace: true });
        window.location.reload(false);
      })
      .catch(function (error) {
        setShowSpinner(!showSpinner);
        if (error.response) {
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert(errorMsg);
        }
      });
  };
  return (
    <div style={{ margin: "2%" }}>
      <div className="row">
        <div className="col">
          <div className="row" style={{ textAlign: "center" }}>
            <div
              className="col"
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Les bricoleurs
            </div>
            <br />
            <div className="col">
              <button type="submit" className="btn btn-outline-secondary">
                Se connecter
              </button>
            </div>
          </div>

          <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Se connecter
          </div>
          <br />

          <form onSubmit={login}>
            <div className="col">
              <label>Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Nom d'utilisateur"
                required
              />
            </div>
            <br />
            <div className="col">
              <label>Mot de passe</label>
              <input
                type="text"
                id="password"
                className="form-control"
                placeholder="Mot de passe"
                required
              />
            </div>

            <br />
            <div className="row">
              <div className="col" style={{ fontSize: "0.9rem" }}>
                <a href="">J'ai perdu mon mot de passe.</a>
              </div>
            </div>

            <div className="row">
              <div className="col" style={{ fontSize: "0.8rem" }}>
                En entrant sur Malt vous confirmez que vous acceptez les
                <a href=""> conditions générales.</a>
              </div>
            </div>

            <br />
            <br />

            <div className="row" style={{ textAlign: "center" }}>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Précédent
                </button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Se connecter
                </button>
                <div style={{ textAlign: "center", margin: "0.5rem" }}>
                  {showSpinner && <Spinner />}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://dam.malt.com/rebranding2020/illustrations/team-united?w=500"
            alt="uploaded image"
            width="500rem"
          />
        </div>
      </div>
    </div>

    // <div style={{margin: '2%'}}>

    //   <form  onSubmit={login}>
    //     <div className="row">
    //       <div className="col">
    //         <label>Username</label>
    //         <input type="text" id="username" className="form-control" placeholder="username" required/>
    //       </div>
    //       <div className="col">
    //         <label>Password</label>
    //         <input type="text" id="password" className="form-control" placeholder="password" required/>
    //       </div>
    //     </div>
    //     <br/>

    //     <br/>
    //     <div style={{textAlign: 'center'}}>
    //       <button type="submit" className="btn btn-primary">Login</button>
    //     </div>
    //     <div style={{textAlign: 'center', margin: '0.5rem'}}>
    //       {showSpinner && <Spinner />}
    //     </div>

    //   </form>
    // </div>
  );
};

export default Login;
