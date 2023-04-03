import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import { Spinner } from 'react-bootstrap';

const CreateMission = (props) => {
  const [mission, setMission] = useState();
  const [entreprise, setEntreprise] = useState();
  let navigate = useNavigate ();
  const [showSpinner, setShowSpinner] = useState(false);

  const [isMissionCreated, setIsMissionCreated] = useState(false);
  const [isToggledAsEntreprise, setIsToggledAsEntreprise] = useState(false)

  const [images, setImages] = useState(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };


  const handleChange = () => {
    setIsToggledAsEntreprise(!isToggledAsEntreprise);
  }

  const createMission = async (e) => {
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
    data.append('client', localStorage.getItem('clientId'));
    // data.append('jobber_id', localStorage.getItem('jobber_id'));
    
    axios.post('https://fr33dz.pythonanywhere.com/api/mission/', data)         
    .then(response => {
      setMission({ mission: response })  
      // navigate('/Mission', { replace: true });
      setShowSpinner(false);
      // window.location.reload(false);  
      alert('Mission Created successfully');  

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
        <form  onSubmit={createMission}>

              <div className="row">
                <div className="col">
                  <label>Titre</label>
                  <input type="text" id="titre" className="form-control" placeholder="titre" required/>
                </div>
                <div className="col">
                <label>Budget</label>
                  <input type="number" id="budget" className="form-control" placeholder="Budget" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Adresse</label>
                  <textarea type="text" id="adresse" className="form-control" placeholder="Adresse" required/>
                </div>
                <div className="col">
                  <label>Description</label>
                  <textarea type="text" id="description" className="form-control" placeholder="Description" required/>
                </div>
              </div>

              
              <div className="row">
                <div className="col">
                  <label>Uploaded images</label>
                  <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="form-control"/>
                  {/* {image && <img src={URL.createObjectURL(image)} alt="uploaded image" />} */}

                  <div style={{textAlign:'center'}}>
                    <div className="row">
                      {images?.map((row, index) =>
                        <div className="col">
                          {images && <img style={{marginTop: '0.5rem', maxWidth: '10rem'}} src={URL.createObjectURL(row)} alt="uploaded image" />}          
                        </div>
                      )}
                    </div>
                  </div>


                </div>
              </div>

              <br/>
              <div style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-primary">Create Mission</button>
              </div>
              <div style={{textAlign: 'center', margin: '0.5rem'}}>
                {showSpinner && <Spinner />}
              </div>

            </form>

    </div>
  );
}

export default CreateMission;
