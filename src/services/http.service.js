import axios from "axios";

let retrieveData = async (api,id) => {
    
    return axios.get('https://fr33dz.pythonanywhere.com/api/'+api+'/'+id)
        .then(response => {
        return response.data;
        })
        .catch(error => {
        console.log(error);
        });

    //call:
    // httpservice.fetchDataa('jobber', jobberId).then(data => {
    //     console.log(data);
    //     setJobber(data)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });


}
    

export const httpservice = {
    retrieveData
}