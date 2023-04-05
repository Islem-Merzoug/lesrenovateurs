import React, { useEffect, useState } from "react";

import axios from "axios";
import { Spinner } from "react-bootstrap";
import Calendly from "react-calendly";
import CalendlyWidget from "../../CalendlyWidget";
// import EmbedCalendly from "react-embed-calendly";
import { InlineWidget } from "react-calendly";

const CreateCallback = () => {
  const [callback, setCallback] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const [calendlyScript, setCalendlyScript] = useState("");

  let prefill = {
    email: "test@test.com",
    firstName: "Jon",
    lastName: "Snow",
    name: "Jon Snow",
    guests: ["janedoe@example.com", "johndoe@example.com"],
    customAnswers: {
      a1: "a1",
      a2: "a2",
      a3: "a3",
      a4: "a4",
      a5: "a5",
      a6: "a6",
      a7: "a7",
      a8: "a8",
      a9: "a9",
      a10: "a10",
    },
    date: new Date(Date.now() + 86400000),
  };

  useEffect(() => {
    setCalendlyScript("https://assets.calendly.com/assets/external/widget.js");
  }, []);

  const create_Callback = async (e) => {
    e.preventDefault();
    const { prenom, nom, numero, appel, date_appel } = e.target.elements;
    let details = {
      prenom: prenom.value,
      nom: nom.value,
      numero: numero.value,
      appel: (appel.value = "on" ? true : false),
      date_appel: date_appel.value,
    };
    console.log(details);
    axios
      .post("https://fr33dz.pythonanywhere.com/api/callback/", details)
      .then((response) => setCallback({ callback: response }))
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
    <div className="">
      {/* <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/i-merzoug16/15min"
        style={{ minwidth: "320px", height: "630px" }}
      ></div>
      
      <script src={calendlyScript}></script> */}
      {/* <CalendlyWidget /> */}
      {/* <EmbedCalendly url="https://calendly.com/i-merzoug16/15min" /> */}
      <InlineWidget
        url="https://calendly.com/i-merzoug16/15min"
        prefill={prefill}
      />
      Pas le temps aujourd’hui ? Choisissez le meilleur moment pour vous, et
      notre équipe vous rappelle sur le créneau de votre choix : [Vous ne voyez
      pas le calendrier s’afficher ci-dessous ? Cliquez ici pour voir notre
      agenda en ligne]
      <form onSubmit={create_Callback}>
        <div className="row">
          <div className="col">
            <label>Prénom</label>
            <input
              type="text"
              id="prenom"
              className="form-control"
              placeholder="Prénom"
            />
          </div>
          <div className="col">
            <label>Nom</label>
            <input
              type="text"
              id="nom"
              className="form-control"
              placeholder="Nom"
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
            />
          </div>
          <div className="col">
            <label>numero</label>
            <input
              type="tel"
              id="numero"
              className="form-control"
              placeholder="Numero"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Appel</label> <br />
            <input type="checkbox" id="appel" />
          </div>
        </div>

        <br />
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Create Callback
          </button>
        </div>
        <div style={{ textAlign: "center", margin: "0.5rem" }}>
          {showSpinner && <Spinner />}
        </div>
      </form>
    </div>
  );
};

export default CreateCallback;
