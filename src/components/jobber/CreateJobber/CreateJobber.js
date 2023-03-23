import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

const CreateJobber = () => {
  const [jobber, setJobber] = useState();

  const create_jobber = async (e) => {
   
    e.preventDefault();
    const { prenom, nom, email, password, competences, diplomes, permis, vehicules, niveau_etudes, villes } = e.target.elements;
    let details = {
        "prenom": prenom.value, 
        "nom": nom.value,
        "email": email.value,
        "password": password.value,
        "competences": competences.value,
        "diplomes": diplomes.value,
        "permis": permis.value,
        "vehicules": vehicules.value,
        "niveau_etudes": niveau_etudes.value,
        "villes": villes.value

    }
    console.log(details);
    axios.post('https://fr33dz.pythonanywhere.com/api/jobber/', details)
    .then(response => setJobber({ jobber: response }));

  }
  return (
    <div className=''>
      
      <form  onSubmit={create_jobber}>
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
          <label>Email</label>
            <input type="text" id="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="col">
          <label>Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <label>Competences</label>
            <input type="text" id="competences" className="form-control" placeholder="Competences"/>
          </div>
          <div className="col">
          <label>Diplomes</label>
            <input type="text" id="diplomes" className="form-control" placeholder="Diplomes"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Permis</label>
            <input label="Permis" id="permis" type="text" className="form-control" placeholder="Permis"/>
          </div>
          <div className="col">
            <label>Vehicules</label>
            <input type="text" id="vehicules" className="form-control" placeholder="Vehicules"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Niveau etudes</label>
            <input type="text" id="niveau_etudes" className="form-control" placeholder="Niveau etudes"/>
          </div>
          <div className="col">
            <label>Villes</label>
            <input type="text" id="villes" className="form-control" placeholder="Villes"/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Create Jobber</button>

      </form>
    </div>
  );
}

export default CreateJobber;
