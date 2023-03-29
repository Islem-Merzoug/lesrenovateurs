import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

const CreateClient = (props) => {
  const [jobber, setJobber] = useState();

  const create_client = async (e) => {
   
    e.preventDefault();
    const { adresse } = e.target.elements;
    let details = {
        "adresse": adresse.value, 
        "user": props.propValue.data.user.id
    }
    console.log(details);
    axios.post('https://fr33dz.pythonanywhere.com/api/client/', details)         
    .then(response => {
      setJobber({ client: response })  
      window.location.reload(false);
    })
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
      
      <form  onSubmit={create_client}>

        <div className="row">
          <div className="col">
            <label>Adresse</label>
            <textarea type="text" id="adresse" className="form-control" placeholder="Adresse" required/>
          </div>
        </div>

        <br/>

        <button type="submit" className="btn btn-primary">Create Client</button>

      </form>
    </div>
  );
}

export default CreateClient;
