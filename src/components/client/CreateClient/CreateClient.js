import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { authservice } from "../../../services/auth.service";

const CreateClient = (props) => {
  const [user, setUser] = useState();
  const [jobber, setJobber] = useState();
  const [image, setImage] = useState(null);
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const create_client = async (e) => {
    debugger;
    setShowSpinner(true);

    e.preventDefault();
    const { adresse } = e.target.elements;
    axios
      .post("https://fr33dz.pythonanywhere.com/api/register/", props.propValue)
      .then((res) => {
        debugger;
        console.log(res);
        setUser(res);
        setShowSpinner(false);

        let details = {
          adresse: adresse.value,
          user: res.data.user.id,
        };
        console.log("details:", details);
        const data = new FormData();
        data.append("adresse", adresse.value);
        data.append("user", res.data.user.id);
        data.append("image", image);

        console.log(details);

        axios
          .post("https://fr33dz.pythonanywhere.com/api/client/", data, {
            headers: {
              Authorization: `Token ${res.data.token}`,
            },
          })
          .then((response) => {
            debugger;
            authservice.saveToken(res);
            setShowSpinner(false);

            alert("Client Created successfully");
            navigate("/Home");
            window.location.reload(false);
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
    <div className="">
      <form onSubmit={create_client}>
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
        </div>

        <div className="row">
          <div className="col">
            <label>Uploaded image</label>
            <input
              type="file"
              accept="image/*"
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
              Create Client
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

export default CreateClient;
