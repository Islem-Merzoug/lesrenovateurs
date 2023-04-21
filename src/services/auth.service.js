import jwt_decode from "jwt-decode";

let saveToken = (res) => {
  debugger;
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", res.data.user.id);
  localStorage.setItem("username", res.data.user.username);
  localStorage.setItem("email", res.data.user.email);
  localStorage.setItem("profilId", res.data.profil.id);
  localStorage.setItem("profilType", res.data.profil.type);

  localStorage.setItem(
    "entreprise_info",
    res.data.profil.infos.entreprise_info
  );
  console.log(
    "res.data.infos.entreprise_info:",
    res.data.profil.infos.entreprise_info
  );
};

let logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("profilId");
  localStorage.removeItem("profilType");
  localStorage.removeItem("entreprise_info");
};

let isLogged = () => {
  let token = localStorage.getItem("token");

  return !!token;
};

let isClient = () => {
  if (localStorage.getItem("profilType") === "client") {
    let token = localStorage.getItem("token");
    return !!token;
  }
};

let isJobber = () => {
  if (localStorage.getItem("profilType") === "jobber") {
    let token = localStorage.getItem("token");
    return !!token;
  }
};

let decodeToken = (token) => {
  var decoded = jwt_decode(token);

  console.log(decoded);
  return decoded;
};

export const authservice = {
  saveToken,
  logout,
  isLogged,
  decodeToken,
  isClient,
  isJobber,
};
