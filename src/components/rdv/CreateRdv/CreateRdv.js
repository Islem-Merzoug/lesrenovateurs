import React, { useEffect, useState } from 'react';

import axios from 'axios'; 

const CreateRdv = () => {
  const [rdv, setRdv] = useState();

  const create_Rdv = async (e) => {
   
    e.preventDefault();
    const { prenom, nom, numero, email, appel, date_appel } = e.target.elements;
    let details = {
        "prenom": prenom.value, 
        "nom": nom.value,
        "numero": numero.value,
        "email": email.value,
        "appel": appel.value = 'on' ? true : false,
        "date_appel": date_appel.value,

    }
    console.log(details);
    axios.post('http://fr33dz.pythonanywhere.com/api/rdv/', details)
    .then(response => setRdv({ rdv: response }));

  }
  return (
    <div className=''>
      
      <form  onSubmit={create_Rdv}>
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
            <label>email</label> <br/>
            <input type="email" id="email" className="form-control" placeholder="Email"/>
          </div>

          <div className="col">
            <label>Appel</label> <br/>
            <input type="checkbox" id="appel" />
          </div>

        </div>

        <button type="submit" className="btn btn-primary">Create Rdv</button>

      </form>
    </div>
  );
}

export default CreateRdv;
