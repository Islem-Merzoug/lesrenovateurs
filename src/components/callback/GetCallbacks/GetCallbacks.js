import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetCallbacks.css";
import { Link,useHistory  } from 'react-router-dom';

const GetCallbacks = () => {
    const [callbacks, setCallbacks] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('http://fr33dz.pythonanywhere.com/api/callback')
      .then(res => {
        setCallbacks(res.data)
        console.log(callbacks);
        })
      .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div className="App"> 
      All Jobbers:
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Numero</th>
            <th>Appel</th>
            <th>Date appel</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            callbacks?.map((row, index) =>
              <tr key={index} >
                  <td >
                    <div style={{textAlign: 'center', fontSize:'1rem'}}>{row.nom}</div> 
                  </td>
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.prenom}</div> 
                  </td>    
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.numero}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.appel}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.date_appel}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>
                      <Link to={`/GetCallback/${row.id}`}>View Details</Link>
                    </div> 
                    
                  </td>                        
              </tr>
              )
          }
        </tbody>
      </table>
    </div>

  );
}

export default GetCallbacks;