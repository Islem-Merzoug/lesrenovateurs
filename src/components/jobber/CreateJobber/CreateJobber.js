import React, { useEffect, useState } from 'react';

import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

const CreateJobber = (props) => {
  const [jobber, setJobber] = useState();
  const [entreprise, setEntreprise] = useState();
  let navigate = useNavigate ();

  const [isJobberCreated, setIsJobberCreated] = useState(false);
  const [isToggledAsEntreprise, setIsToggledAsEntreprise] = useState(false)

  const handleChange = () => {
    setIsToggledAsEntreprise(!isToggledAsEntreprise);
  }

  const create_jobber = async (e) => {
   
    e.preventDefault();
    const { prenom, nom, email, password, competences, diplomes, permis, vehicules, niveau_etudes, villes,
      adresse, statut_juridique, numero_siret, numero_tva, tva } = e.target.elements;
    let jobberDetails = {
        "prenom": prenom.value, 
        "nom": nom.value,
        "email": email.value,
        "password": password.value,
        "competences": competences.value,
        "diplomes": diplomes.value,
        "permis": permis.value,
        "vehicules": vehicules.value,
        "niveau_etudes": niveau_etudes.value,
        "villes": villes.value,
        "user": props.propValue.data.user.id,
        "entreprise_id": entreprise

    }

    if (isToggledAsEntreprise){
      let entrepriseDetails = {
        "nom": nom.value,
        "adresse": adresse.value,
        "statut_juridique": statut_juridique.value,
        "numero_siret": numero_siret.value,
        "numero_tva": numero_tva.value,
        "tva": tva.value,
      }
      
      console.log(jobberDetails);
      console.log(entrepriseDetails);
      axios.post('https://fr33dz.pythonanywhere.com/api/entreprise/', entrepriseDetails)         
      .then(response => {
        setEntreprise( response.data )  
        console.log(entreprise.id)
    
        axios.post('https://fr33dz.pythonanywhere.com/api/jobber/', jobberDetails)         
        .then(response => {
          setJobber({ jobber: response })   
          navigate('/Profil', { replace: true });

        }).catch(function (error) {
          if (error.response) {
            let errorMsg = ""
            for (const property in error.response.data) {
              errorMsg += `${property}: ${error.response.data[property]}\n`;
            }
            alert(errorMsg);
          } 
        });
    
      
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
  
    }else{
      console.log(jobberDetails);
    
        axios.post('https://fr33dz.pythonanywhere.com/api/jobber/', jobberDetails)         
        .then(response => {
          setJobber({ jobber: response })      
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

    }


  }
  return (
    <div className=''>


        <form  onSubmit={create_jobber}>

              <div className="row">
                <div className="col">
                  <label>Prénom</label>
                  <input type="text" id="prenom" className="form-control" placeholder="Prénom" required/>
                </div>
                <div className="col">
                  <label>Nom</label>
                  <input type="text" id="nom" className="form-control" placeholder="Nom" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                <label>Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="col">
                <label>Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Password" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                <label>Competences</label>
                  <input type="text" id="competences" className="form-control" placeholder="Competences" required/>
                </div>
                <div className="col">
                <label>Diplomes</label>
                  <input type="text" id="diplomes" className="form-control" placeholder="Diplomes" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Permis</label>
                  {/* <input label="Permis" id="permis" type="text" className="form-control" placeholder="Permis" required/> */}

                  <select id="permis" name="permis" className="form-control">
                    <option value="Permis auto - catégorie B">Permis auto - catégorie B</option>
                    <option value="Permis cyclomoteur - catégorie AM">Permis cyclomoteur - catégorie AM</option>
                    <option value="Permis moto - catégorie A">Permis moto - catégorie A</option>
                    <option value="Permis professionnels - catégories C et D">Permis professionnels - catégories C et D</option>
                    <option value="Permis remorque - catégorie E">Permis remorque - catégorie E</option>
                  </select>

                </div>
                <div className="col">
                  <label>Vehicules</label>
                  <input type="text" id="vehicules" className="form-control" placeholder="Vehicules" required/>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Niveau etudes</label>
                  <input type="text" id="niveau_etudes" className="form-control" placeholder="Niveau etudes" required/>
                </div>
                <div className="col">
                  <label>Villes</label>
                  <input type="text" id="villes" className="form-control" placeholder="Villes" required/>
                </div>
              </div>
              <br/>

              <div className="row">
                <div className="col">
                  <label>Is Entreprise ? - if not, so it will be a personal jobber ! </label><br/>
                  <input type="checkbox" checked={isToggledAsEntreprise} onChange={handleChange}/>
                </div>
              </div>

              { isToggledAsEntreprise ? (
                  <>
                    <div className="row">
                      <div className="col">
                        <label>Adresse</label>
                        <input type="text" id="adresse" className="form-control" placeholder="Adresse" required/>
                      </div>
                      <div className="col">
                        <label>Numero Siret</label>
                        <input type="number" id="numero_siret" className="form-control" placeholder="Numero siret" required/>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col">
                        <label>Numero TVA</label>
                        <input type="number" id="numero_tva" className="form-control" placeholder="Numero TVA" required/>
                      </div>
                      <div className="col">
                        <label>TVA</label>
                        <input type="number" id="tva" className="form-control" placeholder="TVA" required/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label>statut_juridique</label>
                        {/* <input type="text" id="statut_juridique" className="form-control" placeholder="Atatut juridique" required/> */}

                        <select id="statut_juridique" name="Statut Juridique" className="form-control">
                          <option value="Auto-entreprise / micro entreprise avec option TVA">Auto-entreprise / micro entreprise avec option TVA</option>
                          <option value="Auto-entreprise / micro entreprise sans option TVA">Auto-entreprise / micro entreprise sans option TVA</option>
                          <option value="SARL/EURL">SARL/EURL</option>
                          <option value="SAS/SASU">SAS/SASU</option>
                        </select>

                      </div>

                    </div>

                    <br/>
                  </>
                  ) : (
                  <>
                  </>
                  )
              }


              <button type="submit" className="btn btn-primary">Create Jobber</button>

            </form>
 







    </div>
  );
}

export default CreateJobber;