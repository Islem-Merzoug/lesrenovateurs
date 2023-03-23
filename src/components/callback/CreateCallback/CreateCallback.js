import React, { useEffect, useState } from 'react';

import axios from 'axios'; 

const CreateCallback = () => {
  const [callback, setCallback] = useState();

  const create_Callback = async (e) => {
   
    e.preventDefault();
    const { prenom, nom, numero, appel, date_appel } = e.target.elements;
    let details = {
        "prenom": prenom.value, 
        "nom": nom.value,
        "numero": numero.value,
        "appel": appel.value = 'on' ? true : false,
        "date_appel": date_appel.value,

    }
    console.log(details);
    axios.post('https://fr33dz.pythonanywhere.com/api/callback/', details)
    .then(response => setCallback({ callback: response }));

  }
  return (
    <div className=''>
      
      <form  onSubmit={create_Callback}>
        <div className="row">
          <div className="col">
            <label>Prénom</label>
            <input type="text" id="prenom" className="form-control" placeholder="Prénom"/>
          </div>
          <div className="col">
            <label>Nom</label>
            <input type="text" id="nom" className="form-control" placeholder="Nom"/>
          </div>
        </div>

        <div className="row">

          <div className="col">
            <label>Date d'appel</label>
            <input type="datetime-local" id="date_appel" className="form-control" placeholder="date_appel"/>

          </div>
          <div className="col">
            <label>numero</label>
            <input type="tel" id="numero" className="form-control" placeholder="Numero" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Appel</label> <br/>
            <input type="checkbox" id="appel"/>

          </div>

        </div>

        <button type="submit" className="btn btn-primary">Create Callback</button>

      </form>
    </div>
  );
}

export default CreateCallback;
