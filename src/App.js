import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateJobber from "./components/jobber/CreateJobber/CreateJobber";
import GetJobber from "./components/jobber/GetJobber/GetJobber";
import GetJobbers from "./components/jobber/GetJobbers/GetJobbers";
import CreateCallback from "./components/callback/CreateCallback/CreateCallback";
import GetCallbacks from "./components/callback/GetCallbacks/GetCallbacks";
import GetCallback from "./components/callback/GetCallback/GetCallback";
import CreateRdv from "./components/rdv/CreateRdv/CreateRdv";
import GetRdvs from "./components/rdv/GetRdvs/GetRdvs";
import GetRdv from "./components/rdv/GetRdv/GetRdv";

import Header from "./components/Header/Header";
import { useState } from "react";
import Appointment from "./pages/Appointment/Appointment";
import Profil from "./pages/Profil/Profil";
import Login from "./components/Auth/Login/Login";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Auth/Signup/Signup";
import { useEffect } from "react";
import { authservice } from "./services/auth.service";
import ProtectedRoutes from "./components/Auth/ProtectedRoutes";
import CreateMission from "./components/Mission/CreateMission/CreateMission";
import GetMissions from "./components/Mission/GetMissions/GetMissions";
import UpdateMission from "./components/Mission/UpdateMission/UpdateMission";
import GetMission from "./components/Mission/GetMission/GetMission";
import Home from "./components/Home/Home";
import Header2 from "./components/Header2/Header2";

function App() {
  const [isLogged, setIsLogged] = useState();
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLogged(authservice.isLogged());
  };

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Header2 />
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/CreateJobber" element={<CreateJobber />} />

        <Route path="/CreateCallback/" element={<CreateCallback />} />

        <Route path="/CreateRdv/" element={<CreateRdv />} />

        <Route path="/Appointment/" element={<Appointment />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/Signup/" element={<Signup />} />

        {/* add all protected routes here: */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/Profil/" element={<Profil />} />
          <Route path="/CreateMission/" element={<CreateMission />} />
          <Route path="/GetMissions/" element={<GetMissions />} />
          <Route path="/UpdateMission/" element={<UpdateMission />} />
          <Route path="/GetMission/:id" element={<GetMission />} />

          <Route path="/GetJobbers" element={<GetJobbers />} />
          <Route path="/GetJobber/:id" element={<GetJobber />} />

          <Route path="/GetCallbacks" element={<GetCallbacks />} />
          <Route path="/GetCallback/:id" element={<GetCallback />} />

          <Route path="/GetRdvs" element={<GetRdvs />} />
          <Route path="/GetRdv/:id" element={<GetRdv />} />
        </Route>
      </Routes>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
