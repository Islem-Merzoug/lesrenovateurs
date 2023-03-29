import React, { useEffect, useState } from 'react';

import axios from 'axios'; 

const UpdateRdv = (props) => {
  const [rdv, setRdv] = useState();
  const [checked, setChecked] = useState(props.data.appel);

  const handleChange = () => {
    setChecked(!checked);
  }
  
  const update_Rdv = async (e) => {
    console.log(props.data.id)
    e.preventDefault();
    const { prenom, nom, numero, email, appel, date_appel } = e.target.elements;
    let details = {
      "prenom": prenom.value, 
      "nom": nom.value,
      "numero": numero.value,
      "email": email.value,
      "appel": checked,
      "date_appel": date_appel.value,

  }
    
    console.log(details);
    axios.put('https://fr33dz.pythonanywhere.com/api/rdv/'+props.data.id+"/", details)
    .then(response => setRdv({ rdv: response }))
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
      
      <form  onSubmit={update_Rdv}>
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
            <label>Date d'appel</label>
            <input type="datetime-local" id="date_appel" className="form-control" placeholder="date_appel" defaultValue={props.data.date_appel.substring(0, props.data.date_appel.length-6)}/>

          </div>
          <div className="col">
            <label>numero</label>
            <input type="tel" id="numero" className="form-control" placeholder="Numero" pattern="[0-9]{10}" defaultValue={props.data.numero}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>email</label> <br/>
            <input type="email" id="email" className="form-control" placeholder="Email" defaultValue={props.data.email}/>
          </div>

          <div className="col">
            <label>Appel</label> <br/>
            <input type="checkbox" id="appel" checked={checked} onChange={handleChange} />
          </div>

        </div>



        <button type="submit" className="btn btn-primary">Update rdv</button>

      </form>
    </div>
  );
}

export default UpdateRdv;