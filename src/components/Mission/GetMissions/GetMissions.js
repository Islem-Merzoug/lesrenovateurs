import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import { Link, useHistory  } from 'react-router-dom';

const GetMissions = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('https://fr33dz.pythonanywhere.com/api/mission')
      .then(res => {
        setMissions(res.data)
        console.log(missions)
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

    const handleRemove = (id) => {
      console.log(id)
      axios.delete('https://fr33dz.pythonanywhere.com/api/mission/'+id)
      .then(res => {
        // setRdvs(res.data)
        console.log(res);
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

      const newTableData = missions.filter((row) => row.id !== id);
      setMissions(newTableData);
    };

  return (
    <div className="App"> 
      <table className="table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Adresse</th>
            <th>Bugdet</th>
            <th>Description</th>
            <th>Client</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            missions?.map((row, index) =>
              <tr key={row.id} >
                  <td >
                    <div style={{textAlign: 'center', fontSize:'1rem'}}>{row.titre}</div> 
                  </td>
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.adresse}</div> 
                  </td>    
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.budget}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.description}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.client}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>
                      <Link to={`/GetMission/${row.id}`}>View Details</Link>
                    </div> 
                  </td>    
                  <td>
                    <Link onClick={() => handleRemove(row.id)}>Remove</Link>
                  </td>                    
              </tr>
              )
          }
        </tbody>
      </table>
    </div>

  );
}

export default GetMissions;