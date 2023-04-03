import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import { useParams } from 'react-router-dom';
import UpdateCallback from '../UpdateCallback/UpdateCallback';

const GetCallback = () => {
    const [callback, setCallback] = useState([]);
    const { id } = useParams();
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    }

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('https://fr33dz.pythonanywhere.com/api/callback/'+id)
      .then(res => {
        setCallback(res.data)
        console.log(callback)
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
    };



  return (
    <div className="App">
      {callback.nom}
      <br/>
      {callback.prenom}
      <br/>
      {callback.phone}
      <br/>
      <button type="button" className="btn btn-primary" onClick={togglePopup}>Update</button>
      <br/>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <UpdateCallback data={callback}/>
            <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>

          </div>
        </div>
      )}

    </div>
  );
}

export default GetCallback;