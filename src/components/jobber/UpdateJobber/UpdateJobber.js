import React, { useEffect, useState } from "react";

import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpdateJobber = (props) => {
  let navigate = useNavigate();

  const [jobber, setJobber] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  let update_Jobber = async (e) => {
    setShowSpinner(true);

    e.preventDefault();
    const { competences, diplomes, permis, vehicules, niveau_etudes, villes } =
      e.target.elements;
    let details = {
      competences: competences.value,
      diplomes: diplomes.value,
      permis: permis.value,
      vehicules: vehicules.value,
      niveau_etudes: niveau_etudes.value,
      villes: villes.value,
    };

    console.log(details);
    axios
      .put(
        "https://fr33dz.pythonanywhere.com/api/jobber/" + props.data.id + "/",
        details,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setShowSpinner(false);
        alert("Jobber updated successfully");
      })
      .catch(function (error) {
        setShowSpinner(false);
        if (error.response) {
          setShowSpinner(false);
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
        <b>Update Jobber:</b>
        <br />
      </div>
      <form onSubmit={update_Jobber}>
        <div className="row">
          <div className="col">
            <label>Competences</label>
            <input
              type="text"
              id="competences"
              className="form-control"
              placeholder="Competences"
              required
              defaultValue={props.data.competences}
            />
          </div>
          <div className="col">
            <label>Diplomes</label>
            <input
              type="text"
              id="diplomes"
              className="form-control"
              placeholder="Diplomes"
              required
              defaultValue={props.data.diplomes}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Permis</label>
            <select
              id="permis"
              name="permis"
              className="form-control"
              required
              defaultValue={props?.data.permis}
            >
              <option value="Permis auto - catégorie B">
                Permis auto - catégorie B
              </option>
              <option value="Permis cyclomoteur - catégorie AM">
                Permis cyclomoteur - catégorie AM
              </option>
              <option value="Permis moto - catégorie A">
                Permis moto - catégorie A
              </option>
              <option value="Permis professionnels - catégories C et D">
                Permis professionnels - catégories C et D
              </option>
              <option value="Permis remorque - catégorie E">
                Permis remorque - catégorie E
              </option>
            </select>
          </div>
          <div className="col">
            <label>Vehicules</label>
            <input
              type="text"
              id="vehicules"
              className="form-control"
              placeholder="Vehicules"
              required
              defaultValue={props?.data.vehicules}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Niveau etudes</label>
            <input
              type="text"
              id="niveau_etudes"
              className="form-control"
              placeholder="Niveau etudes"
              required
              defaultValue={props?.data.niveau_etudes}
            />
          </div>
          <div className="col">
            <label>Villes</label>
            <input
              type="text"
              id="villes"
              className="form-control"
              placeholder="Villes"
              required
              defaultValue={props?.data.villes}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="form-control"
              required
            />
            <div style={{ textAlign: "center" }}>
              {props?.data.image && !image ? (
                <img
                  style={{ marginTop: "0.5rem", width: "20%" }}
                  defaultValue={props?.data.image}
                  alt="image"
                />
              ) : (
                image && (
                  <img
                    style={{ marginTop: "0.5rem", maxWidth: "10rem" }}
                    src={URL.createObjectURL(image)}
                    alt="uploaded image"
                  />
                )
              )}
              {/* {image && <img style={{marginTop: '0.5rem', width: '20%'}} defaultValue={props?.data.image} alt="uploaded image" />} */}
            </div>
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
              Update Jobber
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

export default UpdateJobber;
