import React, { useEffect, useState } from 'react';

import axios from 'axios'; 

const UpdateJobber = (props) => {
  const [jobber, setJobber] = useState();
  const [checked, setChecked] = useState(props.data.appel);

  const handleChange = () => {
    setChecked(!checked);
  }
  
  const update_Jobber = async (e) => {
    console.log(props.data.id)
    e.preventDefault();
    const { prenom, nom, email, password, competences, diplomes, permis, vehicules, niveau_etudes,villes } = e.target.elements;
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
    axios.put('https://fr33dz.pythonanywhere.com/api/jobber/'+props.data.id+"/", details)
    .then(response => setJobber({ jobber: response }))
    .catch(function (error) {
      if (error.response) {
        let errorMsg = ""
        for (const property in error.response.data) {
          errorMsg += `${property}: ${error.response.data[property]}\n`;
        }
        alert(errorMsg);
      } 
    });
  }

  return (
    <div className=''>
      
      <form  onSubmit={update_Jobber}>
      <div className="row">
          <div className="col">
          <label>Prénom</label>
            <input type="text" id="prenom" className="form-control" placeholder="Prénom" defaultValue={props.data.prenom}/>
          </div>
          <div className="col">
          <label>Nom</label>
            <input type="text" id="nom" className="form-control" placeholder="Nom" defaultValue={props.data.nom}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <label>Email</label>
            <input type="text" id="email" className="form-control" placeholder="Email" defaultValue={props.data.email}/>
          </div>
          <div className="col">
          <label>Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" defaultValue={props.data.password}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <label>Competences</label>
            <input type="text" id="competences" className="form-control" placeholder="Competences" defaultValue={props.data.competences}/>
          </div>
          <div className="col">
          <label>Diplomes</label>
            <input type="text" id="diplomes" className="form-control" placeholder="Diplomes" defaultValue={props.data.diplomes}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Permis</label>
            <input label="Permis" id="permis" type="text" className="form-control" placeholder="Permis" defaultValue={props.data.permis}/>
          </div>
          <div className="col">
            <label>Vehicules</label>
            <input type="text" id="vehicules" className="form-control" placeholder="Vehicules" defaultValue={props.data.vehicules}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Niveau etudes</label>
            <input type="text" id="niveau_etudes" className="form-control" placeholder="Niveau etudes" defaultValue={props.data.niveau_etudes}/>
          </div>
          <div className="col">
            <label>Villes</label>
            <input type="text" id="villes" className="form-control" placeholder="Villes" defaultValue={props.data.villes}/>
          </div>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Update Jobber</button>

      </form>
    </div>
  );
}

export default UpdateJobber;
