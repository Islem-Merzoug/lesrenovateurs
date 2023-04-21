import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const GetRdv = () => {
  const [rdv, setRdv] = useState([]);
  const { id } = useParams();
  const [checked, setChecked] = useState(rdv?.appel);
  const [showSpinner, setShowSpinner] = useState(false);
  let navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fr33dz.pythonanywhere.com/api/rdv/" + id, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setRdv(res.data);
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

  const update_Rdv = async (e) => {
    setShowSpinner(true);
    e.preventDefault();
    const { prenom, nom, numero, email, date_appel } = e.target.elements;
    let details = {
      prenom: prenom.value,
      nom: nom.value,
      numero: numero.value,
      email: email.value,
      appel: checked,
      date_appel: date_appel.value,
    };

    console.log(details);
    axios
      .put("https://fr33dz.pythonanywhere.com/api/rdv/" + id + "/", details, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
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
      <form onSubmit={update_Rdv}>
        <div className="row">
          <div className="col">
            <label>Prénom</label>
            <input
              type="text"
              id="prenom"
              className="form-control"
              placeholder="Prénom"
              defaultValue={rdv?.prenom}
            />
          </div>
          <div className="col">
            <label>Nom</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Nom"
              defaultValue={rdv?.nom}
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
              defaultValue={rdv?.date_appel?.substring(
                0,
                rdv?.date_appel.length - 6
              )}
            />
          </div>
          <div className="col">
            <label>numero</label>
            <input
              type="tel"
              id="numero"
              className="form-control"
              placeholder="Numero"
              pattern="[0-9]{10}"
              defaultValue={rdv?.numero}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>email</label> <br />
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              defaultValue={rdv?.email}
            />
          </div>

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
              Update Rdv
            </button>
            <div style={{ textAlign: "center", margin: "0.5rem" }}>
              {showSpinner && <Spinner />}
            </div>
          </div>
        </div>
      </form>
    </div>

    // <div className="App">
    //   {rdv.nom}
    //   <br/>
    //   {rdv.prenom}
    //   <br/>
    //   {rdv.phone}
    //   <br/>
    //   <button type="button" className="btn btn-primary" onClick={togglePopup}>Update</button>
    //   <br/>

    //   {showPopup && (
    //     <div className="popup">
    //       <div className="popup-content">
    //         <UpdateRdv data={rdv}/>
    //         <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>

    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default GetRdv;
