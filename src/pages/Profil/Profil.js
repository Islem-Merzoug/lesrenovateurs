import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import GetJobbers from '../../components/jobber/GetJobbers/GetJobbers';
import GetCallbacks from '../../components/callback/GetCallbacks/GetCallbacks';
import GetRdvs from '../../components/rdv/GetRdvs/GetRdvs';


function Profil() {
  return (
    <div style={{margin: '2%'}}>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">My jobbers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">My appointements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">My callbacks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Log out</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Change Password</Nav.Link>
            </Nav.Item>

          </Nav>
        </Col>

        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <GetJobbers/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <GetCallbacks/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <GetRdvs/>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
                <GetRdvs/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
                <GetRdvs/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </div>
  );
}

export default Profil;  