import { Navigate, Outlet } from "react-router-dom";
import { authservice } from "../../services/auth.service";

const useAuth = () => {
  
  const isLogged = authservice.isLogged();

  return isLogged;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;