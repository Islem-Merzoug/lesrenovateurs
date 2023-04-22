import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-white text-dark py-3"
      style={{ margin: "5% 5%", marginTop: "2rem" }}
    >
      <Row>
        <Col xs={12} md={3}>
          <h5>Les renovateurs</h5>
          <ul className="list-unstyled">
            <li>241 rue Saint Denis 75002 Paris</li>
            <li>Aide & Support</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <h5>Pour les entreprises</h5>
          <ul className="list-unstyled">
            <li>Pourquoi lesrénovateurs ?</li>
            <li>Marketplace de freelances</li>
            <li>Solution de gestion de freelances</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <h5>Pour les freelances</h5>
          <ul className="list-unstyled">
            <li>Pourquoi lesrénovateurs ?</li>
            <li>Community & Programmes</li>
            <li>Fonctionnalités produit</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <h5>Ressources</h5>
          <ul className="list-unstyled">
            <li>Pour les entreprises</li>
            <li>Pour les freelances</li>
            <li>Nos études</li>
          </ul>
        </Col>
      </Row>
      © {new Date().getFullYear()} lesrénovateurs. ALL RIGHTS RESERVED.
    </Container>
  );
};

export default Footer;
