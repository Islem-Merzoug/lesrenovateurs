import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useTable } from 'react-table';
import "./GetRdvs.css";
import { Link, useHistory  } from 'react-router-dom';

const GetRdvs = () => {
    const [rdvs, setRdvs] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      axios.get('http://fr33dz.pythonanywhere.com/api/rdv')
      .then(res => {
        setRdvs(res.data)
        console.log(rdvs);
        })
      .catch((error) => {
          console.log(error);
        });

    };


    // useEffect(() => {
    //   axios.get('http://fr33dz.pythonanywhere.com/api/rdv')
    //   .then(res => {
    //     setRdvs(res.data)
    //     console.log(rdvs);
    //     })
    //   .catch((error) => {
    //       console.log(error);
    //     });
    // });

    const handleRemove = (id) => {
      console.log(id)
      axios.delete('http://fr33dz.pythonanywhere.com/api/rdv/'+id)
      .then(res => {
        // setRdvs(res.data)
        console.log(res);
        })
      .catch((error) => {
          console.log(error);
        });

      const newTableData = rdvs.filter((row) => row.id !== id);
      setRdvs(newTableData);
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
            <th>Email</th>
            <th>Appel</th>
            <th>Date appel</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            rdvs?.map((row) =>
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
                    <div style={{fontSize:'1rem'}}>{row.email}</div> 
                  </td> 
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.appel}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>{row.date_appel}</div> 
                  </td>   
                  <td >
                    <div style={{fontSize:'1rem'}}>
                      <Link to={`/GetRdv/${row.id}`}>View Details</Link>
                    </div> 
                  </td>
                  {/* <td >
                    <div style={{fontSize:'1rem'}}>
                      <button onClick={handleRemove(row.id)}>delete</button>
                    </div> 
                  </td>     */}
                  <td>
                    <button onClick={() => handleRemove(row.id)}>Remove</button>
                  </td>
                        
              </tr>
              )
          }
        </tbody>
      </table>
    </div>

  );
}

export default GetRdvs;