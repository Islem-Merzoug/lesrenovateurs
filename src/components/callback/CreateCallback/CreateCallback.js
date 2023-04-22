import React, { useEffect, useState } from "react";

import axios from "axios";
import { Alert, Spinner } from "react-bootstrap";
import Calendly from "react-calendly";
import CalendlyWidget from "../../CalendlyWidget";
import { useNavigate } from "react-router-dom";

const CreateCallback = () => {
  const [callback, setCallback] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  let navigate = useNavigate();

  const create_Callback = async (e) => {
    setShowSpinner(true);

    e.preventDefault();
    const { prenom, nom, numero, appel, date_appel } = e.target.elements;
    let details = {
      prenom: prenom.value,
      nom: nom.value,
      numero: numero.value,
      appel: (appel.value = "on" ? true : false),
      date_appel: date_appel.value,
    };
    console.log(details);
    axios
      .post("https://fr33dz.pythonanywhere.com/api/callback/", details, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setShowSpinner(false);
        alert("Callback Created successfully");
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
    <div className="">
      <div style={{ fontSize: "2.5vmin" }}>
        Nous savons que votre quotidien est chargé, alors notre équipe de choc
        💪 est disponible par téléphone du lundi au vendredi de 9h à 18h, en
        journée continue, même entre 12h00 et 14h00.
      </div>
      <br />
      <br />
      <form onSubmit={create_Callback}>
        <div className="row">
          <div className="col">
            <label>Prénom</label>
            <input
              type="text"
              id="prenom"
              className="form-control"
              placeholder="Prénom"
            />
          </div>
          <div className="col">
            <label>Nom</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Nom"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Date d'appel</label>
            <input
              type="datetime-local"
              id="date_appel"
              className="form-control"
              placeholder="date_appel"
            />
          </div>
          <div className="col">
            <label>Numéro de téléphone</label>
            <input
              type="tel"
              id="numero"
              className="form-control"
              placeholder="Numero"
              pattern="[0-9]{10}"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Appel</label> <br />
            <input type="checkbox" id="appel" />
          </div>
        </div>

        {/* <br />
        <br />
        <div className="row">
          <div className="col" style={{ fontSize: "1.1rem" }}>
            //<input type="checkbox" checked={false} />
            En cochant cette case vous acceptez
            <a href=""> la politique de confidentialité de Comptasanté</a>
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
              Create Callback
            </button>
            <div style={{ textAlign: "center", margin: "0.5rem" }}>
              {showSpinner && <Spinner />}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCallback;
