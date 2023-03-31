import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

const CreateClient = (props) => {
  const [jobber, setJobber] = useState();
  const [image, setImage] = useState(null);
  let navigate = useNavigate ();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const create_client = async (e) => {
   
    e.preventDefault();
    const { adresse } = e.target.elements;
    let details = {
        "adresse": adresse.value, 
        "user": props.propValue.data.user.id
    }

    const data = new FormData();
    data.append('adresse', adresse.value);
    data.append('user', props.propValue.data.user.id);
    data.append('image', image);


    console.log(details);
    axios.post('https://fr33dz.pythonanywhere.com/api/client/', data)         
    .then(response => {
      setJobber({ client: response })  

      window.location.reload(false);
      navigate('/Profil', { replace: true });
      window.location.reload(false);
      setShowSpinner(!showSpinner)
      alert('Client Created successfully');  
      

    })
    .catch(function (error) {
      if (error.response) {
        let errorMsg = ""
        for (const property in error.response.data) {
          errorMsg += `${property}: ${error.response.data[property]}\n`;
        }
        alert(errorMsg);
        setShowSpinner(!showSpinner)
      } 
    });

  }
  return (
    <div className=''>
      
      <form  onSubmit={create_client}>

        <div className="row">
          <div className="col">
            <label>Uploaded image</label>
            <input type="file" onChange={handleImageUpload} className="form-control"/>
            {/* {image && <img src={URL.createObjectURL(image)} alt="uploaded image" />} */}
          </div>
          <div className="col">
            <label>Adresse</label>
            <textarea type="text" id="adresse" className="form-control" placeholder="Adresse" required/>
          </div>
        </div>

        <br/>

        
        <div style={{textAlign: 'center'}}>
          <button type="submit" className="btn btn-primary">Create Client</button>
        </div>
        <div style={{textAlign: 'center', margin: '0.5rem'}}>
          {showSpinner && <Spinner />}
        </div>

      </form>
    </div>
  );
}

export default CreateClient;
