import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import { useParams } from 'react-router-dom';
import UpdateJobber from '../UpdateJobber/UpdateJobber';

const GetJobber = () => {
    const [jobber, setJobber] = useState([]);
    const { id } = useParams();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    }
  
    const fetchData = () => {
      axios.get('https://fr33dz.pythonanywhere.com/api/jobber/'+id)
      .then(res => {
        setJobber(res.data)
        console.log(jobber)
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
      {jobber.nom}
      <br/>
      {jobber.prenom}
      <br/>
      {jobber.email}
      <br/>
      <button type="button" className="btn btn-primary" onClick={togglePopup}>Update</button>
      <br/>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <UpdateJobber data={jobber}/>
            <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>

          </div>
        </div>
      )}



    </div>

    
  );
}

export default GetJobber;