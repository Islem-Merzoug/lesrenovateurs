import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CreateJobber from './components/jobber/CreateJobber/CreateJobber';
import GetJobber from './components/jobber/GetJobber/GetJobber';
import GetJobbers from './components/jobber/GetJobbers/GetJobbers';
import CreateCallback from './components/callback/CreateCallback/CreateCallback';
import GetCallbacks from './components/callback/GetCallbacks/GetCallbacks';
import GetCallback from './components/callback/GetCallback/GetCallback';
import CreateRdv from './components/rdv/CreateRdv/CreateRdv';
import GetRdvs from './components/rdv/GetRdvs/GetRdvs';
import GetRdv from './components/rdv/GetRdv/GetRdv';

import Header from './components/Header/Header';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MakeAnAppointment from './pages/MakeAnAppointment/MakeAnAppointment';
import Profil from './pages/Profil/Profil';
import Login from './components/Auth/Login/Login';
import Footer from './components/Footer/Footer';
import Signup from './components/Auth/Signup/Signup';
import PrivateRoute from './components/Auth/ProtectedRoutes';
import { useEffect } from 'react';
import { authservice } from './services/auth.service';
import ProtectedRoutes from './components/Auth/ProtectedRoutes';
import CreateMission from './components/Mission/CreateMission/CreateMission';
import GetMissions from './components/Mission/GetMissions/GetMissions';
import UpdateMission from './components/Mission/UpdateMission/UpdateMission';
import GetMission from './components/Mission/GetMission/GetMission';

function App() {
  const [isLogged, setIsLogged] = useState();
  const [isExpired, setIsExpired] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLogged(authservice.isLogged())
  };

  return (

      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path='/CreateJobber' exact element={<CreateJobber/>} />
          <Route path='/GetJobbers' element={<GetJobbers/>} />
          <Route path='/GetJobber/:id' element={<GetJobber/>} />

          <Route path='/CreateCallback/' element={<CreateCallback/>} />
          <Route path='/GetCallbacks' element={<GetCallbacks/>} />
          <Route path='/GetCallback/:id' element={<GetCallback/>} />

          <Route path='/CreateRdv/' element={<CreateRdv/>} />
          <Route path='/GetRdvs' element={<GetRdvs/>} />
          <Route path='/GetRdv/:id' element={<GetRdv/>} />

          <Route path='/MakeAnAppointment/' element={<MakeAnAppointment/>} />
          <Route path='/Login/' element={<Login/>} />
          <Route path='/Signup/' element={<Signup/>} />
      
          {/* add all protected routes here: */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/Profil/' element={<Profil/>} />
            <Route path='/CreateMission/' element={<CreateMission/>} />
            <Route path='/GetMissions/' element={<GetMissions/>} />
            <Route path='/UpdateMission/' element={<UpdateMission/>} />
            <Route path='/GetMission/:id' element={<GetMission/>} />

          </Route>



        </Routes>

        
        <Link to="/CreateJobber">Go to CreateJobber</Link>
        <br/>
        <Link to="/GetJobbers">Go to GetJobbers</Link>
        <br/>
        <Link to="/CreateCallback">Go to CreateCallback</Link>
        <br/>
        <Link to="/GetCallbacks">Go to GetCallbacks</Link>
        <br/>
        <Link to="/CreateRdv">Go to CreateRdv</Link>
        <br/>
        <Link to="/GetRdvs">Go to GetRdvs</Link>
        <br/>
        
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
