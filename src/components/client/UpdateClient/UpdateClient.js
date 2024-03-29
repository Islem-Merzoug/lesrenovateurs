import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const UpdateClient = (props) => {
  const [client, setClient] = useState();
  const [image, setImage] = useState(null);
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const update_client = async (e) => {
    setShowSpinner(true);
    e.preventDefault();
    const { adresse } = e.target.elements;

    const data = new FormData();
    data.append("adresse", adresse.value);
    data.append("user", localStorage.getItem("userId")); //just for testing
    data.append("image", image);

    console.log(data);
    axios
      .put(
        "https://fr33dz.pythonanywhere.com/api/client/" + props.data.id + "/",
        data,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setShowSpinner(false);
        alert("Client updated successfully");
      })
      .catch(function (error) {
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
      {}
      <div style={{ textAlign: "center" }}>
        <b>Update Client:</b>
        <br />
      </div>
      <form onSubmit={update_client}>
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
              Update Client
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

export default UpdateClient;
