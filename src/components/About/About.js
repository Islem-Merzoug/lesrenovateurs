import axios from "axios";
import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { httpservice } from "../../services/http.service";
import UpdateClient from "../client/UpdateClient/UpdateClient";
import UpdateEntreprise from "../Entreprise/UpdateEntreprise/UpdateEntreprise";
import UpdateJobber from "../jobber/UpdateJobber/UpdateJobber";
import UserCard from "../User/User";

const About = () => {
  debugger;
  let jobberId;
  let clientId;
  let entrepriseId = localStorage.getItem("entreprise_info");

  if (localStorage.getItem("profilId")) {
    if (localStorage.getItem("profilType") === "jobber") {
      jobberId = localStorage.getItem("profilId");
      // setHasEntreprise(localStorage.getItem("profilId"));
    }
    if (localStorage.getItem("profilType") === "client")
      clientId = localStorage.getItem("profilId");
  }

  const [jobber, setJobber] = useState([]);
  const [entreprise, setEntreprise] = useState([]);
  const [client, setClient] = useState([]);
  const [hasEntreprise, setHasEntreprise] = useState(false);

  useEffect(() => {
    console.log("jobberId", jobberId);
    console.log("clientId", clientId);
    console.log("entrepriseId", entrepriseId);
    fetchData();
  }, []);

  const fetchData = () => {
    if (jobberId) {
      axios
        .get("https://fr33dz.pythonanywhere.com/api/jobber/" + jobberId, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setJobber(res.data);
          console.log("jobber:", jobberId);
        })
        .catch(function (error) {
          if (error.response) {
            let errorMsg = "";
            for (const property in error.response.data) {
              errorMsg += `${property}: ${error.response.data[property]}\n`;
            }
            console.error("1:", errorMsg);
          }
        });
    }

    if (entrepriseId) {
      axios
        .get(
          "https://fr33dz.pythonanywhere.com/api/entreprise/" + entrepriseId,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          setEntreprise(res.data);
          console.log(entreprise);
        })
        .catch(function (error) {
          if (error.response) {
            let errorMsg = "";
            for (const property in error.response.data) {
              errorMsg += `${property}: ${error.response.data[property]}\n`;
            }
            console.error("2:", errorMsg);
          }
        });
    }

    if (clientId) {
      axios
        .get("https://fr33dz.pythonanywhere.com/api/client/" + clientId, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setClient(res.data);
          console.log(client);
        })
        .catch(function (error) {
          if (error.response) {
            let errorMsg = "";
            for (const property in error.response.data) {
              errorMsg += `${property}: ${error.response.data[property]}\n`;
            }
            console.error("3:", errorMsg);
          }
        });
    }
  };

  return (
    <div>
      <UserCard />
      <br />
      {/* {"jobberId:" + jobberId} */}
      {jobberId && <UpdateJobber data={jobber} />}
      <br />
      {/* {"entrepriseId:" + entrepriseId} */}
      {/* {entrepriseId && <UpdateEntreprise data={entreprise} />} */}
      {entrepriseId == null ? <UpdateEntreprise data={entreprise} /> : <></>}
      <br />

      {/* {"clientId:" + clientId} */}
      {clientId && <UpdateClient data={client} />}
      <br />
    </div>
  );
};

export default About;
