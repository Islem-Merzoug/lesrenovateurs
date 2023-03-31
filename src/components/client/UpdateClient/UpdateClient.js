import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const UpdateClient = (props) => {
  const [client, setClient] = useState();
  const [image, setImage] = useState(null);
  let navigate = useNavigate ();
  const [showSpinner, setShowSpinner] = useState(false);
  let userId = localStorage.getItem('userId')

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const update_client = async (e) => {
   
    e.preventDefault();
    const { adresse } = e.target.elements;
    // let details = {
    //     "adresse": adresse.value, 
    //     "user": props.propValue.data.user.id
    // }

    const data = new FormData();
    data.append('adresse', adresse.value);
    // data.append('user', props.propValue.data.user.id);
    data.append('user', userId); //just for testing
    data.append('image', image);


    console.log(data);
    axios.put('https://fr33dz.pythonanywhere.com/api/client/'+props.data.id+"/", data)
    .then(response => {
      setClient({ client: response })  
      setShowSpinner(!showSpinner)
      alert('Client updated successfully');  
    })
    .catch(function (error) {
      if (error.response) {
        setShowSpinner(!showSpinner)
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
      {
        
      }
      <div style={{textAlign: 'center'}}>
                <b>Update Client:</b><br/>
      </div>
      <form  onSubmit={update_client}>

        <div className="row">
          <div className="col">
            <label>Uploaded image</label>
            <input type="file" onChange={handleImageUpload} className="form-control" />
            {/* {image && <img src={URL.createObjectURL(image)} alt="uploaded image" />} */}
          </div>
          <div className="col">
            <label>Adresse</label>
            <textarea type="text" id="adresse" className="form-control" placeholder="Adresse" required defaultValue={props?.data.adresse}/>
          </div>
        </div>

        <br/>

        
        <div style={{textAlign: 'center'}}>
          <button type="submit" className="btn btn-primary">Update Client</button>
        </div>
        <div style={{textAlign: 'center', margin: '0.5rem'}}>
          {showSpinner && <Spinner />}
        </div>

      </form>
    </div>
  );
}

export default UpdateClient;
