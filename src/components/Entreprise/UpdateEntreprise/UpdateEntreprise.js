import React, { useEffect, useState } from "react";

import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpdateEntreprise = (props) => {
  let navigate = useNavigate();

  const [entreprise, setEntreprise] = useState();
  const [checked, setChecked] = useState(props?.data.appel);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const updateEntreprise = async (e) => {
    setShowSpinner(true);

    console.log(props?.data.id);
    e.preventDefault();
    const { nom, adresse, numero_siret, numero_tva, tva, statut_juridique } =
      e.target.elements;
    let details = {
      nom: nom.value,
      adresse: adresse.value,
      numero_siret: numero_siret.value,
      numero_tva: numero_tva.value,
      tva: tva.value,
      statut_juridique: statut_juridique.value,
    };

    console.log(details);
    axios
      .put(
        "https://fr33dz.pythonanywhere.com/api/entreprise/" +
          props?.data.id +
          "/",
        details,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setShowSpinner(false);
        alert("Entreprise updated successfully");
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
      <div style={{ textAlign: "center" }}>
        <b>Update Entreprise:</b>
        <br />
      </div>
      <form onSubmit={updateEntreprise}>
        <div className="row">
          <div className="col">
            <label>Nom</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Nom"
              required
              defaultValue={props?.data.nom}
            />
          </div>
          <div className="col">
            <label>Numero Siret</label>
            <input
              type="number"
              id="numero_siret"
              className="form-control"
              placeholder="Numero siret"
              required
              defaultValue={props?.data.numero_siret}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Numero TVA</label>
            <input
              type="number"
              id="numero_tva"
              className="form-control"
              placeholder="Numero TVA"
              required
              defaultValue={props?.data.numero_tva}
            />
          </div>
          <div className="col">
            <label>TVA</label>
            <input
              type="number"
              id="tva"
              className="form-control"
              placeholder="TVA"
              required
              defaultValue={props?.data.tva}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Adresse</label>
            <textarea
              type="text"
              id="adresse"
              className="form-control"
              placeholder="Adresse"
              required
              defaultValue={props?.data.adresse}
            />
          </div>

          <div className="col">
            <label>Statut Juridique</label>
            <select
              id="statut_juridique"
              name="Statut Juridique"
              className="form-control"
              required
              defaultValue={props?.data.statut_juridique}
            >
              <option value="Auto-entreprise / micro entreprise avec option TVA">
                Auto-entreprise / micro entreprise avec option TVA
              </option>
              <option value="Auto-entreprise / micro entreprise sans option TVA">
                Auto-entreprise / micro entreprise sans option TVA
              </option>
              <option value="SARL/EURL">SARL/EURL</option>
              <option value="SAS/SASU">SAS/SASU</option>
            </select>
          </div>
        </div>

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
              Update Entreprise
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

export default UpdateEntreprise;
