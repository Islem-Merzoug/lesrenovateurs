import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import { Link,useHistory  } from 'react-router-dom';

const GetCallbacks = () => {
    const [callbacks, setCallbacks] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('https://fr33dz.pythonanywhere.com/api/callback/')
      .then(res => {
        setCallbacks(res.data)
        console.log(callbacks);
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
      axios.delete('https://fr33dz.pythonanywhere.com/api/callback/'+id)
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

      const newTableData = callbacks.filter((row) => row.id !== id);
      setCallbacks(newTableData);
    };

  return (
    <div className="App"> 
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Numero</th>
            <th>Appel</th>
            <th>Date appel</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            callbacks?.map((row, index) =>
            <tr key={row.id} >
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

export default GetCallbacks;