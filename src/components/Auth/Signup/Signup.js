import React, { useEffect, useState } from "react";

import CreateJobber from "../../jobber/CreateJobber/CreateJobber";
import CreateClient from "../../client/CreateClient/CreateClient";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState();
  const [isSignedup, setIsSignedup] = useState(false);
  const [isToggledAsJobber, setIsToggledAsJobber] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = () => {
    setIsToggledAsJobber(!isToggledAsJobber);
  };

  const signup = async (e) => {
    setShowSpinner(true);

    e.preventDefault();
    const { email, username, password, password2 } = e.target.elements;
    if (password.value === password2.value) {
      let details = {
        email: email.value,
        username: username.value,
        password: password.value,
      };
      console.log(details);
      setUser(details);
      setIsSignedup(true);
      setShowSpinner(false);
    } else {
      alert("The passwords are different");
      setShowSpinner(false);
    }
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
              onClick={() => navigate("/Login")}
            >
              Se connecter
            </button>
          </div>
        </div>
        <br />

        <div style={{ fontWeight: "bold", fontSize: "1.7rem" }}>
          Renseignez vos informations de compte
        </div>
        <br />

        {isSignedup ? (
          <>
            {isToggledAsJobber ? (
              <>
                <CreateJobber propValue={user} />
              </>
            ) : (
              <>
                <CreateClient propValue={user} />
              </>
            )}
          </>
        ) : (
          <>
            <form onSubmit={signup}>
              <div className="col">
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Adresse email professionnelle"
                  required
                />
              </div>
              <div className="col">
                <label>Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Nom d'utilisateur"
                  required
                />
              </div>
              <div className="col">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  required
                />
              </div>
              <div className="col">
                <label>Conform your Password:</label>
                <input
                  type="password"
                  id="password2"
                  className="form-control"
                  placeholder="Confirmer le mot de passe"
                  required
                />
              </div>

              <div
                className="row"
                style={{ textAlign: "center", fontSize: "0.7rem" }}
              >
                <div className="col">&#60; 8 caractères</div>
                <div className="col">1 majuscule</div>
                <div className="col">1 caractère spécial</div>
              </div>
              <br />

              <div className="row">
                <div className="col" style={{ fontSize: "0.8rem" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked={!isToggledAsJobber}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Client
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={isToggledAsJobber}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Jobber
                    </label>
                  </div>
                </div>
              </div>

              <br />

              {/* <div className="row">
                <div className="col" style={{ fontSize: "0.8rem" }}>
                  lesrénovateurs collecte vos données pour la création et la
                  gestion de votre compte. En savoir plus sur la{" "}
                  <a href="">protection de vos données.</a>
                  <br />
                  En continuant votre inscription, vous acceptez nos conditions
                  générales.
                </div>
              </div> */}

              {/* <br />
              <br />
              <div className="row">
                <div className="col" style={{ fontSize: "1.1rem" }}>
                  //<input type="checkbox" checked={false} />
                  Je ne souhaite pas recevoir les actualités news et événements
                  de lesrénovateurs
                </div>
              </div> */}

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
                    Suivant
                  </button>
                  <div style={{ textAlign: "center", margin: "0.5rem" }}>
                    {showSpinner && <Spinner />}
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
        {/* </div> */}
        {/* <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://dam.malt.com/signup/signup-brand-illustration"
            alt="uploaded image"
            width="100%"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
