import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetJobbers.css";
import { Link,useHistory  } from 'react-router-dom';

const GetCallbacks = () => {
    const [jobbers, setJobbers] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('http://fr33dz.pythonanywhere.com/api/jobber')
      .then(res => {
        setJobbers(res.data)
        console.log(jobbers)
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
            <th>email</th>
            <th>password</th>
            <th>Competences</th>
            <th>Diplomes</th>
            <th>Permis</th>
            <th>Niveau d'études</th>
            <th>Villes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            jobbers?.map((row, index) =>
              <tr key={index} >
                  <td >
                    <div style={{textAlign: 'center', fontSize:'1rem'}}>{row.nom}</div> 
                  </td>
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.prenom}</div> 
                  </td>    
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.email}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.password}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.competences}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.diplomes}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.permis}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.niveau_etudes}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.villes}</div> 
                  </td>  
                  <td >
                    <div style={{fontSize:'1rem'}}>
                      {/* <button type="button" className="btn btn-link" onClick={routeChange(index)}>Link</button>   */}
                      <Link to={`/GetJobber/${row.id}`}>View Details</Link>
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