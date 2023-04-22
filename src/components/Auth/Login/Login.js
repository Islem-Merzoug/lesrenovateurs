import React, { useEffect, useState } from "react";

import axios from "axios";
import { authservice } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import swal from "sweetalert";

const Login = () => {
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [user, setUser] = useState();

  const login = async (e) => {
    setShowSpinner(true);

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
        debugger;
        console.log(res);
        authservice.saveToken(res);
        setShowSpinner(false);
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to delete this file?",
          icon: "success",
          dangerMode: true,
        });
        navigate("/Profil");
        window.location.reload(false);
      })
      .catch(function (error) {
        setShowSpinner(false);
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
    <div style={{ margin: "2% 10% 2% 10%" }}>
      {/* <div className="row"> */}
      <div className="col">
        <div className="row" style={{ textAlign: "center" }}>
          <div
            className="col"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Les rénovateurs 
          </div>
          <br />
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/Signup")}
            >
              S'inscrire
            </button>
          </div>
        </div>
        <br />

        <div style={{ fontSize: "1.5rem" }}>Se connecter</div>
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
          <div className="col">
            <label>Mot de passe</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Mot de passe"
              required
            />
          </div>

          {/* <div className="row">
            <div className="col" style={{ fontSize: "0.9rem" }}>
              <a href="">J'ai perdu mon mot de passe.</a>
            </div>
          </div>

          <div className="row">
            <div className="col" style={{ fontSize: "0.8rem" }}>
              En entrant sur lesrénovateurs  vous confirmez que vous acceptez les
              <a href=""> conditions générales.</a>
            </div>
          </div> */}

          <br />
          <br />

          <div className="row" style={{ textAlign: "center" }}>
            <div className="col">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => navigate(-1)}
              >
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
        {/* </div> */}
        {/* <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://dam.malt.com/rebranding2020/illustrations/team-united?w=500"
            alt="uploaded image"
            width="100%"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
