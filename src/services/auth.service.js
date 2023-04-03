import jwt_decode from "jwt-decode";

let saveToken = (token, user) => {
    // localStorage.setItem('token', token)
    // localStorage.setItem('userId', 1)
    // localStorage.setItem('entrepriseId', 1)
    // localStorage.setItem('clientId', 2)
    // localStorage.setItem('jobberId', 1)

    //senario client
    localStorage.setItem('token', token)
    localStorage.setItem('user', user.id)
    localStorage.setItem('username', user.username)
    localStorage.setItem('email', user.email)
    localStorage.setItem('entrepriseId', 1)
    localStorage.setItem('clientId', 2)
    // localStorage.setItem('jobberId', 1)

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