import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateCallback from '../../components/callback/CreateCallback/CreateCallback';
import CreateRdv from '../../components/rdv/CreateRdv/CreateRdv';
import './MakeAnAppointment.css';

function MakeAnAppointment() {
  const [key, setKey] = useState('Rdv');

  return (
    <div style={{margin: '2%'}}>

      <Tabs
        defaultActiveKey="Rdv"
        id="uncontrolled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >

        <Tab eventKey="Rdv" title="Prendre un Rendez-vous">
          <CreateRdv/>
        </Tab>
        <Tab eventKey="Callback" title="Appel Immédiat">
          <CreateCallback/>
        </Tab>

      </Tabs>
    </div>
  );
}

export default MakeAnAppointment;
