import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { httpservice } from '../../services/http.service';
import UpdateClient from '../client/UpdateClient/UpdateClient';
import UpdateEntreprise from '../Entreprise/UpdateEntreprise/UpdateEntreprise';
import UpdateJobber from '../jobber/UpdateJobber/UpdateJobber';

const About = () => {
    let jobberId = localStorage.getItem('jobberId')
    let entrepriseId = localStorage.getItem('entrepriseId')
    let clientId = localStorage.getItem('clientId')
    const [jobber, setJobber] = useState([]);
    const [entreprise, setEntreprise] = useState([]);
    const [client, setClient] = useState([]);
    const [hasJobber, setHasJobber] = useState(false);
    const [hasEntreprise, setHasEntreprise] = useState(false);
    const [hasClient, setHasClient] = useState(false);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = () => {
      // debugger
        axios.get('https://fr33dz.pythonanywhere.com/api/jobber/'+jobberId)
        .then(res => {
          setJobber(res.data)
          console.log('jobber:', jobber)
          setHasJobber(!hasJobber)
          })
          .catch(function (error) {
            if (error.response) {
              let errorMsg = ""
              for (const property in error.response.data) {
                errorMsg += `${property}: ${error.response.data[property]}\n`;
              }
              console.error("1:",errorMsg);
              // alert(errorMsg);
            } 
          });


        axios.get('https://fr33dz.pythonanywhere.com/api/entreprise/'+entrepriseId)
        .then(res => {
          setEntreprise(res.data)
          console.log(entreprise)
          setHasEntreprise(!hasEntreprise)
          })
          .catch(function (error) {
            if (error.response) {
              let errorMsg = ""
              for (const property in error.response.data) {
                errorMsg += `${property}: ${error.response.data[property]}\n`;
              }
              console.error("2:",errorMsg);
              // alert(errorMsg);
            } 
          });

          
          axios.get('https://fr33dz.pythonanywhere.com/api/client/'+clientId)
          .then(res => {
            setClient(res.data)
            console.log(client)
            setHasClient(!hasClient)
            })
            .catch(function (error) {
              if (error.response) {
                let errorMsg = ""
                for (const property in error.response.data) {
                  errorMsg += `${property}: ${error.response.data[property]}\n`;
                }
                console.error("3:",errorMsg);
                // alert(errorMsg);
              } 
            });
  
  

        };
  
    return (
        <div>
            {hasJobber && <UpdateJobber data={jobber}/>}
            <br/>

            {hasEntreprise && <UpdateEntreprise data={entreprise}/>}
            <br/>

            {hasClient && <UpdateClient data={client}/>}
            <br/>

        </div>
    );
};

export default About;
