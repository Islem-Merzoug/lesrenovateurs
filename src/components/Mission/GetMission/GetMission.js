import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useTable } from "react-table";
import { useNavigate, useParams } from "react-router-dom";
import UpdateMission from "../UpdateMission/UpdateMission";
import { Spinner } from "react-bootstrap";

const GetMission = () => {
  const [mission, setMission] = useState([]);
  const { id } = useParams();
  const [showSpinner, setShowSpinner] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fr33dz.pythonanywhere.com/api/mission/" + id, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMission(res.data);
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

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length !== 3) {
      alert("Please select only up to 3 files.");
      fileInputRef.current.value = null;
    } else {
      setImages(files);
    }
  };

  let updateMission = async (e) => {
    setShowSpinner(true);

    e.preventDefault();
    const { titre, budget, description, adresse } = e.target.elements;

    const data = new FormData();
    console.log("images:", images);
    data.append("image1", images[1]);
    data.append("image2", images[2]);
    data.append("image3", images[2]);
    data.append("titre", titre.value);
    data.append("adresse", adresse.value);
    data.append("budget", budget.value);
    data.append("description", description.value);
    data.append("clientid", localStorage.getItem("clientId"));

    axios
      .put(
        "https://fr33dz.pythonanywhere.com/api/mission/" + mission?.id + "/",
        data,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setShowSpinner(false);
        alert("Mission Updated successfully");
      })
      .catch(function (error) {
        if (error.response) {
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert(errorMsg);
          setShowSpinner(false);
        }
      });
  };
  return (
    <div style={{ margin: "2%" }}>
      <form onSubmit={updateMission}>
        <div className="row">
          <div className="col">
            <label>Image</label>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="form-control"
              multiple
              required
            />
            <div style={{ textAlign: "center" }}>
              {images.length !== 0 ? (
                //images selectionnées:
                <div className="row">
                  {images?.map((row, index) => (
                    <div className="col">
                      {images && (
                        <img
                          style={{ marginTop: "0.5rem", maxWidth: "10rem" }}
                          src={URL.createObjectURL(row)}
                          alt="uploaded image"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                //images non selectionnées:
                <div className="row">
                  <div className="col">
                    {mission?.image1 !== null ? (
                      images && (
                        <img
                          style={{ marginTop: "0.5rem", maxWidth: "10rem" }}
                          src={mission?.image1}
                          alt="uploaded image"
                        />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="col">
                    {mission?.image2 !== null ? (
                      images && (
                        <img
                          style={{ marginTop: "0.5rem", maxWidth: "10rem" }}
                          src={mission?.image2}
                          alt="uploaded image"
                        />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="col">
                    {mission?.image3 !== null ? (
                      images && (
                        <img
                          style={{ marginTop: "0.5rem", maxWidth: "10rem" }}
                          src={mission?.image3}
                          alt="uploaded image"
                        />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Titre</label>
            <input
              type="text"
              id="titre"
              className="form-control"
              placeholder="titre"
              required
              defaultValue={mission?.titre}
            />
          </div>
          <div className="col">
            <label>Budget</label>
            <input
              type="number"
              id="budget"
              className="form-control"
              placeholder="Budget"
              required
              defaultValue={mission?.budget}
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
              defaultValue={mission?.adresse}
            />
          </div>
          <div className="col">
            <label>Description</label>
            <textarea
              type="text"
              id="description"
              className="form-control"
              placeholder="Description"
              required
              defaultValue={mission?.description}
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
              Update Mission
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

export default GetMission;
