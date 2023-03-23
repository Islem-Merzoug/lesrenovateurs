import jwt_decode from "jwt-decode";

let saveToken = (token) => {
    localStorage.setItem('token', token)
    console.log(localStorage.getItem('token'))

}
    
let logout = () => {
    localStorage.removeItem('token')
}
    
let isLogged = () => {    
    let token = localStorage.getItem('token');

    return !!token
}    

let decodeToken = (token) => {
    var decoded = jwt_decode(token);
 
    console.log(decoded);
    return decoded;
}

export const authservice = {
    saveToken, logout, isLogged, decodeToken
}