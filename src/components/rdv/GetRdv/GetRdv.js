import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetRdv.css";
import { useParams } from 'react-router-dom';

const GetRdv = () => {
    const [rdv, setRdv] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('http://fr33dz.pythonanywhere.com/api/rdv/'+id)
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
      {rdv.prenom}
      {rdv.email}
    </div>
  );
}

export default GetRdv;