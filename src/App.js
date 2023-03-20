import logo from './logo.svg';
import './App.css';
import CreateJobber from './components/jobber/CreateJobber/CreateJobber';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetJobber from './components/jobber/GetJobber/GetJobber';
import GetJobbers from './components/jobber/GetJobbers/GetJobbers';
import CreateCallback from './components/callback/CreateCallback/CreateCallback';
import GetCallbacks from './components/callback/GetCallbacks/GetCallbacks';
import GetCallback from './components/callback/GetCallback/GetCallback';
import CreateRdv from './components/rdv/CreateRdv/CreateRdv';
import GetRdvs from './components/rdv/GetRdvs/GetRdvs';
import GetRdv from './components/rdv/GetRdv/GetRdv';

function App() {
  return (

      <BrowserRouter>
        
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


        </Routes>

      </BrowserRouter>

  );
}

export default App;
