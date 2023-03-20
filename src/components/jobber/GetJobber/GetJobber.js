import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetJobber.css";
import { useParams } from 'react-router-dom';

const GetJobber = () => {
    const [jobber, setJobber] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('http://fr33dz.pythonanywhere.com/api/jobber/'+id)
      .then(res => {
        setJobber(res.data)
        console.log(jobber)
        })
      .catch((error) => {
          console.log(error);
        });
    };



  return (
    <div className="App">
      {jobber.nom}
      {jobber.prenom}
      {jobber.email}
    </div>
  );
}

export default GetJobber;