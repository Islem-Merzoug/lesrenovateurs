import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const GetCallback = () => {
  let navigate = useNavigate();
  const [callback, setCallback] = useState();
  const [checked, setChecked] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fr33dz.pythonanywhere.com/api/callback/" + id, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCallback(res.data);
        setChecked(res.data.appel);
      })
      .catch(function (error) {
        if (error.response) {
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert(errorMsg);
        }
      });
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const update_Callback = async (e) => {
    setShowSpinner(true);

    e.preventDefault();
    const { prenom, nom, numero, date_appel } = e.target.elements;
    let details = {
      prenom: prenom.value,
      nom: nom.value,
      numero: numero.value,
      appel: checked,
      date_appel: date_appel.value,
    };

    console.log(details);
    axios
      .put(
        "https://fr33dz.pythonanywhere.com/api/callback/" + id + "/",
        details,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setShowSpinner(false);
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
    <div style={{ margin: "2%" }}>
      <form onSubmit={update_Callback}>
        <div className="row">
          <div className="col">
            <label>Prénom</label>
            <input
              type="text"
              id="prenom"
              className="form-control"
              placeholder="Prénom"
              defaultValue={callback?.prenom}
            />
          </div>
          <div className="col">
            <label>Nom</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Nom"
              defaultValue={callback?.nom}
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
              defaultValue={callback?.date_appel?.substring(
                0,
                callback?.date_appel?.length - 6
              )}
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
              defaultValue={callback?.numero}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Appel</label> <br />
            <input
              type="checkbox"
              id="appel"
              checked={checked}
              onChange={handleChange}
            />
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
              Update Callback
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

export default GetCallback;
