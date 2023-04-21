import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const GetRdvs = () => {
  const [rdvs, setRdvs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fr33dz.pythonanywhere.com/api/rdv/")
      .then((res) => {
        setRdvs(res.data);
        console.log(rdvs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRemove = (id) => {
    console.log(id);
    axios
      .delete("https://fr33dz.pythonanywhere.com/api/rdv/" + id, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setRdvs(rdvs.filter((row) => row.id !== id));
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

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Numero</th>
            <th>Email</th>
            <th>Appel</th>
            <th>Date appel</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rdvs?.map((row) => (
            <tr key={row.id}>
              <td>
                <div style={{ textAlign: "center", fontSize: "1rem" }}>
                  {row.nom}
                </div>
              </td>
              <td>
                <div style={{ fontSize: "1rem" }}>{row.prenom}</div>
              </td>
              <td>
                <div style={{ fontSize: "1rem" }}>{row.numero}</div>
              </td>
              <td>
                <div style={{ fontSize: "1rem" }}>{row.email}</div>
              </td>
              <td>
                <div style={{ fontSize: "1rem" }}>{row.appel}</div>
              </td>
              <td>
                <div style={{ fontSize: "1rem" }}>{row.date_appel}</div>
              </td>
              <td>
                <div style={{ fontSize: "1rem" }}>
                  <Link to={`/GetRdv/${row.id}`}>View</Link>
                </div>
              </td>
              <td>
                <Link onClick={() => handleRemove(row.id)}>Remove</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetRdvs;
