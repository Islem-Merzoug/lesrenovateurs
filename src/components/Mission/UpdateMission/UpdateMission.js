import React, { useEffect, useState, useRef } from 'react';

import axios from 'axios'; 
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdateMission = (props) => {
  const [mission,, setMission] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  let navigate = useNavigate ();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      alert("Please select only up to 3 files.");
      fileInputRef.current.value = null;
    }else{
      setImages(files);
    }

  };


  let updateMission = async (e) => {
    setShowSpinner(!showSpinner)

    e.preventDefault();
    const { titre, budget, description, adresse } = e.target.elements;

    const data = new FormData();
    data.append('image1', images[1]);
    data.append('image2', images[2]);
    data.append('image3', images[2]);
    data.append('titre', titre.value);
    data.append('adresse', adresse.value);
    data.append('budget', budget.value);
    data.append('description', description.value);
    data.append('clientid', localStorage.getItem('clientId'));
    // data.append('jobber_id', localStorage.getItem('jobber_id'));
    
    axios.put('https://fr33dz.pythonanywhere.com/api/mission/'+props.data.id+"/", data)         
    .then(response => {
      // setMission({ mission: response })  
      navigate('/GetMission/'+props.data.id, { replace: true });
      console.log('{ mission: response }') 
      setShowSpinner(false);
      window.location.reload(false);  
      alert('Mission Updated successfully');  
    })
    .catch(function (error) {
      if (error.response) {
        let errorMsg = ""
        for (const property in error.response.data) {
          errorMsg += `${property}: ${error.response.data[property]}\n`;
        }
        alert(errorMsg);
        setShowSpinner(false);
      } 
    });

  }

  
  return (
    <div style={{margin: '2%'}}>
        <form  onSubmit={updateMission}>
          <div className="row">
            <div className="col">
              <label>Image</label>
              <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageUpload} className="form-control" multiple required/>
              <div style={{textAlign:'center'}}>

                {props?.data.image && !images ? 
                  <img style={{marginTop: '0.5rem', width: '20%'}} defaultValue={props?.data.image} alt="image" />
                  : 
                  <>
                    <div className="row">
                      <div className="col">
                        {
                        images.map((row, index) => {
                          images && <img style={{marginTop: '0.5rem', maxWidth: '10rem'}} src={URL.createObjectURL(images[0])} alt="uploaded image" />})
                        }
                      </div>
                    </div> 
                  </>
                  
                }
                {/* {image && <img style={{marginTop: '0.5rem', width: '20%'}} defaultValue={props?.data.image} alt="uploaded image" />} */}

              </div>
            </div>
          </div>


          <div className="row">
            <div className="col">
              <label>Titre</label>
              <input type="text" id="titre" className="form-control" placeholder="titre" required defaultValue={props.data.titre}/>
            </div>
            <div className="col">
              <label>Budget</label>
              <input type="number" id="budget" className="form-control" placeholder="Budget" required defaultValue={props.data.budget}/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Adresse</label>
              <textarea type="text" id="adresse" className="form-control" placeholder="Adresse" required defaultValue={props.data.adresse}/>
            </div>
            <div className="col">
              <label>Description</label>
              <textarea type="text" id="description" className="form-control" placeholder="Description" required defaultValue={props.data.description}/>
            </div>
          </div>

          <br/>
          <div style={{textAlign: 'center'}}>
            <button type="submit" className="btn btn-primary">Update Mission</button>
          </div>
          <div style={{textAlign: 'center', margin: '0.5rem'}}>
            {showSpinner && <Spinner />}
          </div>

        </form>

    </div>
  );
}

export default UpdateMission;
