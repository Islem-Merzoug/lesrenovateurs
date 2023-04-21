import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { authservice } from "../../../services/auth.service";

const CreateJobber = (props) => {
  const [jobber, setJobber] = useState();
  const [entreprise, setEntreprise] = useState();
  const [user, setUser] = useState();
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const [isEntreprise, setIsEntreprise] = useState(false);

  const [image, setImage] = useState(null);
  const dataa = new FormData();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = () => {
    setIsEntreprise(!isEntreprise);
  };

  const createJobber = async (e) => {
    debugger;
    setShowSpinner(true);

    e.preventDefault();

    axios
      .post("https://fr33dz.pythonanywhere.com/api/register/", props.propValue)
      .then((res) => {
        console.log("regitser:", res);
        setUser(res);

        const {
          nom,
          email,
          competences,
          diplomes,
          permis,
          vehicules,
          niveau_etudes,
          villes,
          adresse,
          statut_juridique,
          numero_siret,
          numero_tva,
          tva,
        } = e.target.elements;

        dataa.append("competences", competences.value);
        dataa.append("diplomes", diplomes.value);
        dataa.append("permis", permis.value);
        dataa.append("vehicules", vehicules.value);
        dataa.append("niveau_etudes", niveau_etudes.value);
        dataa.append("villes", villes.value);
        dataa.append("user_id", res.data.user.id);
        dataa.append("entreprise_id", entreprise);
        dataa.append("image", image);
        console.log(competences.value);
        setJobber(dataa);
        if (isEntreprise) {
          let entrepriseDetails = {
            nom: nom.value,
            adresse: adresse.value,
            statut_juridique: statut_juridique.value,
            numero_siret: numero_siret.value,
            numero_tva: numero_tva.value,
            tva: tva.value,
          };
          console.log(entrepriseDetails);

          handleCreateEntreprise(entrepriseDetails);
        }
      })
      .catch(function (error) {
        if (error.response) {
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert("3: " + errorMsg);
          console.log("3", errorMsg);
          setShowSpinner(false);
        }
      });
  };

  const handleCreateEntreprise = (data) => {
    debugger;
    axios
      .post("https://fr33dz.pythonanywhere.com/api/entreprise/", data, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        handleCreateJobber(jobber);
      })
      .catch(function (error) {
        if (error.response) {
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert("1", +errorMsg);
          console.log("1", errorMsg);
          setShowSpinner(false);
          //delete the registred user if any probleme happends
        }
      });
  };

  const handleCreateJobber = (data) => {
    debugger;
    axios
      .post("https://fr33dz.pythonanywhere.com/api/jobber/", data, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        authservice.saveToken(user);
        navigate("/Profil");
        setShowSpinner(false);
        window.location.reload(false);
        alert("Jobber Created successfully");
      })
      .catch((error) => {
        if (error.response) {
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert("2", +errorMsg);
          console.log("2", errorMsg);
          setShowSpinner(false);
          //delete the registred user if any probleme happends
          //delete the registred entreprise if any probleme happends
        }
      });
  };

  return (
    <div className="">
      <form onSubmit={createJobber}>
        <div className="row">
          <div className="col">
            <label>Competences</label>
            <input
              type="text"
              id="competences"
              className="form-control"
              placeholder="Competences"
              required
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
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Permis</label>
            <select id="permis" name="permis" className="form-control">
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
              name="vehicules"
              id="vehicules"
              className="form-control"
              placeholder="Vehicules"
              required
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
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Uploaded image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="form-control"
              required
            />
            <div style={{ textAlign: "center" }}>
              {image && (
                <img
                  style={{ marginTop: "0.5rem", maxWidth: "10rem" }}
                  src={URL.createObjectURL(image)}
                  alt="uploaded image"
                />
              )}
            </div>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col">
            <label>
              Is Entreprise ? - if not, so it will be a personal jobber !{" "}
            </label>
            <br />
            <input
              type="checkbox"
              checked={isEntreprise}
              onChange={handleChange}
            />
          </div>
        </div>

        {isEntreprise ? (
          <>
            <div className="row">
              <div className="col">
                <label>Nom</label>
                <input
                  type="text"
                  id="nom"
                  className="form-control"
                  placeholder="Nom"
                  required
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
                />
              </div>

              <div className="col">
                <label>Statut Juridique</label>
                <select
                  id="statut_juridique"
                  name="Statut Juridique"
                  className="form-control"
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
          </>
        ) : (
          <></>
        )}

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
              S'inscrire
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

export default CreateJobber;
