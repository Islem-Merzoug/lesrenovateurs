import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateCallback from "../../components/callback/CreateCallback/CreateCallback";
import CreateMission from "../../components/Mission/CreateMission/CreateMission";
import CreateRdv from "../../components/rdv/CreateRdv/CreateRdv";

function Appointment() {
  const [key, setKey] = useState("rdv");
  let navigate = useNavigate();

  return (
    <div style={{ margin: "2%" }}>
      <Tabs
        defaultActiveKey="rdv"
        id="uncontrolled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="rdv" title="📅 Prendre un rendez-vous">
          <CreateRdv />
        </Tab>
        <Tab eventKey="callback" title="📞 Rappel immédiat">
          <CreateCallback />
        </Tab>
        {/* <Tab eventKey="mission" title="Créer une mission">
          <CreateMission />
        </Tab> */}
        {/* <Tab eventKey="writeUs" title="Nous écrire">
        </Tab> */}
      </Tabs>
    </div>
  );
}

export default Appointment;
