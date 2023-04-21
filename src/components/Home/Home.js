import React, { useState, useEffect } from "react";
import { Carousel, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Appointment from "../../pages/Appointment/Appointment";

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
              fontSize: "3vw",
              marginBottom: "2.5vw",
            }}
          >
            Les entreprises et les indépendants ont été créés pour se
            rencontrer.
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2vw",
              marginBottom: "2.5vw",
            }}
          >
            Trouvez le talent idéal pour mener à bien vos projets.{" "}
          </div>
          <br />
        </div>

        <div className="col">
          <img
            src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="uploaded image"
            width="100%"
          />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="row" style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "3.5vw" }}>
          Les bricoleurs c’est avant tout une communauté <br />
        </div>
        <div>
          Les entreprises et les indépendants peuvent se réunir sur une place de
          marché pour travailler ensemble facilement.
        </div>
        <br />
        <br />
        <div style={{ fontWeight: "bold", fontSize: "3.5vw" }}>
          Comment cela fonctionne-t-il ?
        </div>

        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                1. Décrivez vos besoins.
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                Tout projet, quelle que soit sa taille, peut bénéficier de notre
                assistance, qu'il s'agisse de travaux d'entretien et de
                réparation de base ou de rénovations fantaisistes.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                2. Nous trouverons des solutions personnalisées pour vous.
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Consultez instantanément votre devis et planifiez vos services.
                Demandez et comparez les prix de professionnels réputés dans
                votre région.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                3. Nous vous couvrons du début à la fin.
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Vous êtes couvert par notre garantie de bonheur lorsque vous
                effectuez une réservation et un paiement par l'intermédiaire
                d'Angi. Nous vous fournirons une protection limitée contre les
                dommages en plus de la couverture complète du prix d'achat de
                vos projets.
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/fdcae09e-f5b3-4d2b-9e69-82b268e4b68e_50K.svg?auto=enhance,format&w=140&h=140"
            alt="uploaded image"
            width="70%"
          />
          <div style={{ fontWeight: "bold", fontSize: "2.5vw" }}>
            Une centaine d'entreprises
          </div>
          <div>Recherche des freelances indépendants expérimentés</div>
        </div>

        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/c5b343ff-925d-407f-bd26-b4ec671b5622_390K.svg?auto=enhance,format&w=140&h=140"
            alt="uploaded image"
            width="70%"
          />
          <div style={{ fontWeight: "bold", fontSize: "2.5vw" }}>
            Une centaine de freelances
          </div>
          <div>Compétences multiples nécessaires</div>
        </div>

        <div className="col">
          <img
            src="https://images.prismic.io/malt-cms-marketing/a00f2381-5182-43b1-9d11-3bda9cca5088_1.svg?auto=enhance,format&w=140&h=140"
            alt="uploaded image"
            width="70%"
          />
          <div style={{ fontWeight: "bold", fontSize: "2.5vw" }}>
            1 solution dédiée
          </div>
          <div>élaborées et conçue pour travailler ensemble</div>
        </div>
      </div>

      <br />
      <br />
      <br />
      {/* <div style={{ textAlign: "center" }}>
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
      </div> */}
      <br />
      <br />
      <br />

      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "3.4vw",
            marginBottom: "3.5vw",
            textAlign: "center",
          }}
        >
          Vous allez adorer cette nouvelle façon de travailler avec nous.
        </div>

        <div className="row">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2.8vw",
              marginBottom: "3.5vw",
            }}
          >
            Trouvez le bon bricoleur en deux clics:
          </div>
          <div className="col">
            <div>
              Trouvez le bricoleur parfait pour vos projets en un rien de temps
              grâce à lesbricoleurs.fr ! Plus besoin de perdre du temps à
              chercher dans les annuaires ou à demander à vos amis. Avec notre
              plateforme en ligne, vous pouvez trouver le bricoleur idéal en
              seulement deux clics. Que vous ayez besoin d'un plombier, d'un
              électricien, d'un menuisier ou de tout autre artisan, notre
              service de recherche facile à utiliser vous permet de trouver
              rapidement le bon professionnel pour le travail. Alors ne perdez
              plus de temps et rejoignez lesbricoleurs.fr dès maintenant pour
              trouver le bricoleur parfait en deux clics !
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/CreateMission")}
              >
                Trouver votre bricoleur
              </button>
            </div>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/11890960/pexels-photo-11890960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="uploaded image"
              width="350"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2.8vw",
              marginBottom: "3.5vw",
            }}
          >
            Boostez votre carrière de bricoleur freelance:
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="uploaded image"
              width="350"
            />
          </div>
          <div className="col">
            <div>
              Vous êtes un boulanger talentueux et passionné à la recherche de
              nouveaux défis pour faire avancer votre carrière de freelance. La
              plateforme dont vous avez besoin est lesbricoleurs.fr. Vous
              pourrez évoluer rapidement et franchir de nouvelles étapes dans
              votre carrière grâce aux centaine de projets mis à votre
              disposition. En tant qu'artisan freelance, vous pouvez travailler
              sur des projets intéressants et variés tout en développant votre
              clientèle. Avec lesbricoleurs.fr, vous pouvez exploiter pleinement
              votre potentiel et réaliser des projets de bricolage qui dépassent
              toutes vos attentes. N'attendez plus pour rejoindre la communauté
              lesbricoleurs.fr et vivre une expérience de bricolage lucrative et
              passionnante !
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/Signup")}
              >
                Découvrir notre solution
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2.8vw",
              marginBottom: "3.5vw",
            }}
          >
            Boostez votre carrière de d'entreprise de bricolage:
          </div>
          <div className="col">
            <div>
              Vous cherchez à faire décoller votre carrière dans le domaine de
              l'entreprise de bricolage ? Ne cherchez pas plus loin que
              lesbricoleurs.fr ! Notre plateforme innovante met à votre
              disposition une multitude de projets passionnants pour les
              professionnels du bricolage, avec des opportunités de croissance
              et de développement professionnel à chaque étape du chemin.
              Rejoignez notre communauté dynamique de talents et commencez à
              booster votre carrière dès aujourd'hui avec lesbricoleurs.fr !
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/Signup")}
              >
                Découvrir notre solution
              </button>
            </div>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/3785693/pexels-photo-3785693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="uploaded image"
              width="350"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2.8vw",
              marginBottom: "3.5vw",
            }}
          >
            Boostez votre carrière freelance:
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="uploaded image"
              width="350"
            />
          </div>
          <div className="col">
            <div>
              Recevez des offres de missions en adéquation avec vos compétences
              et communiquez directement avec 50 000 clients potentiels issus de
              tous les secteurs. Grâce à lesbricoleurs, réduisez vos tâches
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
                onClick={() => navigate("/Appointment")}
              >
                Trouver le revovateur parfait
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
            src="https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/14515144/pexels-photo-14515144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
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
          Rejoignez lesbricoleurs, la communauté qui enchaîne les succès
        </div>

        <div className="row" style={{ marginRight: "28%", marginLeft: "28%" }}>
          <div className="col" style={{ marginBottom: "1rem" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/Mission")}
            >
              Je cherche des bricoleurs
            </button>
          </div>
          <br />

          <div className="col">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => navigate("/Signup")}
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
