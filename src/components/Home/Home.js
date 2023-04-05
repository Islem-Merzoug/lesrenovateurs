import React, { useState, useEffect } from "react";
import { Carousel, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [key, setKey] = useState("data");
  let navigate = useNavigate();

  return (
    <div style={{ margin: "7%" }}>
      <div className="row">
        <div className="col">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2.2rem",
              marginBottom: "2.5rem",
            }}
          >
            Entreprises & freelances étaient faits pour se rencontrer
          </div>
          Trouvez le talent parfait pour propulser vos projets
        </div>
        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/f84b318c-7035-4212-b80b-36b71238cc77_FR_Homepage_Hero_GRDF.png?auto=enhance,format&w=632&h=391"
            alt="uploaded image"
            width="500"
          />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="row" style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          Malt c’est avant tout une communauté
        </div>
        <div>
          Où freelances et entreprises se retrouvent sur une marketplace, pour
          collaborer en toute simplicité.
        </div>

        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/fdcae09e-f5b3-4d2b-9e69-82b268e4b68e_50K.svg?auto=enhance,format&w=140&h=140"
            alt="uploaded image"
            width="150"
          />
          <div style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
            50K entreprises
          </div>
          <div>À la recherche de freelances confirmés</div>
        </div>

        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/c5b343ff-925d-407f-bd26-b4ec671b5622_390K.svg?auto=enhance,format&w=140&h=140"
            alt="uploaded image"
            width="150"
          />
          <div style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
            +400K freelances
          </div>
          <div>Aux multiples compétences</div>
        </div>

        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/a00f2381-5182-43b1-9d11-3bda9cca5088_1.svg?auto=enhance,format&w=140&h=140"
            alt="uploaded image"
            width="150"
          />
          <div style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
            1 solution dédiée
          </div>
          <div>Pensée et conçue pour collaborer</div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <Tabs
          defaultActiveKey="data"
          id="uncontrolled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="data" title="DATA, IT & TECH">
            <div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="mkt" title="MARKETING & COMMUNICATION">
            <div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="bsns" title="STRATÉGIE & BUSINESS">
            <div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="dsgn" title="DESIGNERS, SON & IMAGE">
            <div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>

              <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">2</div>
                <div className="col">2</div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <br />
      <br />
      <br />

      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Vous allez adorer cette nouvelle façon de collaborer
        </div>

        <div className="row">
          <div className="col">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "2.5rem",
              }}
            >
              Boostez votre carrière freelance
            </div>
            <div>
              Recevez des offres de missions en adéquation avec vos compétences
              et communiquez directement avec 50 000 clients potentiels issus de
              tous les secteurs. Grâce à Malt, réduisez vos tâches
              administratives à l'aide de nos outils en ligne ; faites-vous
              payer en 3 jours ouvrables à compter de la fin de la mission ; et
              gardez l'esprit tranquille : toutes vos missions sont
              automatiquement garanties. Cerise sur le gâteau : notre équipe
              dédiée aux freelances vous aide à développer votre carrière à
              l'aide de ressources spécialisées, de partenariats, d'évènements
              et de programmes de peer learning.
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/Signup", { replace: true })}
              >
                Rejoindre la communauté
              </button>
            </div>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.prismic.io/malt-cms-marketing/1bd45af1-d7de-430c-a4a8-9c530e8b0dc6_2022_REBRAND_WEBSITE_HOME_CONTENT-1.png?auto=enhance,format&w=938&h=514"
              alt="uploaded image"
              width="600"
            />
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.prismic.io/malt-cms-marketing/5dfe75b2-3104-4ad2-a14f-757be59cf1e4_2022_REBRAND_WEBSITE_HOME_CONTENT-2.png?auto=enhance,format&w=938&h=514"
              alt="uploaded image"
              width="600"
            />
          </div>

          <div className="col">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "2.5rem",
              }}
            >
              Trouvez le bon profil en deux clics
            </div>
            <div>
              Partez à la recherche de votre expert parmi nos 400 000 talentueux
              freelances ou entrez en contact avec les meilleurs profils
              disponibles pour votre projet. Consultez les avis et expériences,
              et discutez directement avec les freelances pour pouvoir les
              recruter en quelques clics. Nous vous garantissons une
              collaboration simple et sécurisée, avec des contrats et un
              processus de paiement entièrement digitalisés. Trouvez votre
              expert, nous nous occupons du reste.
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/Mission", { replace: true })}
              >
                Trouver le freelance parfait
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "2.5rem",
              }}
            >
              Découvrir notre solution
            </div>
            <div>
              Vous collaborez régulièrement avec plusieurs freelances ?
              Simplifiez et regroupez toutes vos activités avec des freelances
              dans un seul outil. Suivez et gérez les dépenses de votre
              structure, obtenez des aperçus de missions et suivez vos contrats
              en cours, en temps réel. Une solution de gestion à 360° pour tous
              vos freelances, qu'ils soient déjà sur Malt ou non.
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/", { replace: true })}
              >
                Découvrir notre solution
              </button>
            </div>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.prismic.io/malt-cms-marketing/33ad36c6-30f9-40f4-ab1d-ee18f7793148_2022_REBRAND_WEBSITE_HOME_CONTENT-3.png?auto=enhance,format&w=938&h=514"
              alt="uploaded image"
              width="600"
            />
          </div>
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.prismic.io/malt-cms-marketing/5dfe75b2-3104-4ad2-a14f-757be59cf1e4_2022_REBRAND_WEBSITE_HOME_CONTENT-2.png?auto=enhance,format&w=938&h=514"
              alt="uploaded image"
              width="600"
            />
          </div>

          <div className="col">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "2.5rem",
              }}
            >
              Nous vous appellons
            </div>
            <div>
              Partez à la recherche de votre expert parmi nos 400 000 talentueux
              freelances ou entrez en contact avec les meilleurs profils
              disponibles pour votre projet. Consultez les avis et expériences,
              et discutez directement avec les freelances pour pouvoir les
              recruter en quelques clics. Nous vous garantissons une
              collaboration simple et sécurisée, avec des contrats et un
              processus de paiement entièrement digitalisés. Trouvez votre
              expert, nous nous occupons du reste.
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  navigate("/MakeAnAppointment", { replace: true })
                }
              >
                Trouver le freelance parfait
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.prismic.io/malt-cms-marketing/5dfe75b2-3104-4ad2-a14f-757be59cf1e4_2022_REBRAND_WEBSITE_HOME_CONTENT-2.png?auto=enhance,format&w=938&h=514"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.prismic.io/malt-cms-marketing/5dfe75b2-3104-4ad2-a14f-757be59cf1e4_2022_REBRAND_WEBSITE_HOME_CONTENT-2.png?auto=enhance,format&w=938&h=514"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.prismic.io/malt-cms-marketing/33ad36c6-30f9-40f4-ab1d-ee18f7793148_2022_REBRAND_WEBSITE_HOME_CONTENT-3.png?auto=enhance,format&w=938&h=514"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />
      <br />

      <div>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.8rem",
            marginBottom: "2.5rem",
          }}
        >
          Rejoignez Malt, la communauté qui enchaîne les succès
        </div>

        <div className="row" style={{ marginRight: "28%", marginLeft: "28%" }}>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/Mission", { replace: true })}
            >
              Je cherche des freelances
            </button>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => navigate("/Signup", { replace: true })}
            >
              Rejoindre la communauté
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
