import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetCallback.css";
import { useParams } from 'react-router-dom';
import UpdateCallback from '../UpdateCallback/UpdateCallback';

const GetCallback = () => {
    const [callback, setCallback] = useState([]);
    const { id } = useParams();
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    }

    const onOpenUpdatePopup = async (e) => {
      console.log('onOpenUpdatePopup', callback)
    }


    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('http://fr33dz.pythonanywhere.com/api/callback/'+id)
      .then(res => {
        setCallback(res.data)
        console.log(callback)
        })
      .catch((error) => {
          console.log(error);
        });
    };



  return (
    <div className="App">
      {callback.nom}
      {callback.prenom}
      {callback.phone}
      
      <button type="button" className="btn btn-primary" onClick={togglePopup}>Update</button>
      
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