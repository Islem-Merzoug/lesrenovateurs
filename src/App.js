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

import Header from './pages/Header/Header';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MakeAnAppointment from './pages/MakeAnAppointment/MakeAnAppointment';
import Profil from './pages/Profil/Profil';
import Login from './components/Auth/Login/Login';

function App() {

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
          <Route path='/Profil/' element={<Profil/>} />
          <Route path='/Login/' element={<Login/>} />


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

      </BrowserRouter>

  );
}

export default App;
