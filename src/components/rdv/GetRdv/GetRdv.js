import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetRdv.css";
import { useParams } from 'react-router-dom';
import UpdateRdv from '../UpdateRdvs/UpdateRdv';

const GetRdv = () => {
    const [rdv, setRdv] = useState([]);
    const { id } = useParams();
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    }

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('https://fr33dz.pythonanywhere.com/api/rdv/'+id)
      .then(res => {
        setRdv(res.data)
        console.log(rdv)
        })
      .catch((error) => {
          console.log(error);
        });

    };
    



  return (
    <div className="App">
      {rdv.nom}
      <br/>
      {rdv.prenom}
      <br/>
      {rdv.phone}
      <br/>
      <button type="button" className="btn btn-primary" onClick={togglePopup}>Update</button>
      <br/>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <UpdateRdv data={rdv}/>
            <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default GetRdv;