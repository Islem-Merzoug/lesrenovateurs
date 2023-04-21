import React, { useEffect, useState } from "react";

import axios from "axios";
import { Spinner } from "react-bootstrap";
import {
  InlineWidget,
  useCalendlyEventListener,
  CalendlyEventListener,
} from "react-calendly";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { useRef } from "react";
import { authservice } from "../../../services/auth.service";
import moment from "moment/moment";

const CreateRdv = () => {
  const calendarRef = useRef(null);

  const [rdv, setRdv] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const [eventClickInfo, setEventClickInfo] = useState(false);
  const [isLogged, setIsLogged] = useState();
  const [isExpired, setIsExpired] = useState(false);

  let API_KEY = "AIzaSyC_IgiP6MlY-M4unMSwr7rPJu_fWc9IMNE";
  let CALENDAR_ID = "i.merzoug16@gmail.com";
  let CLIENT_ID =
    "764344850823-n2n763dvmfp4q39r72lvfvn2t554o6v9.apps.googleusercontent.com";
  let Code_SECRET_CLIENT = "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";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  let plugin_name = "Les Renovateurs";
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Event 1",
      start: "2023-04-10T03:30:00",
      end: "2023-04-11",
      editable: true,
    },
    {
      id: "2",
      title: "Event 2",
      start: "2023-04-20T23:30:00",
      end: "2023-04-21",
      editable: false,
    },
    {
      id: "3",
      title: "Event 3",
      start: "2023-04-22T10:30:00",
      end: "2023-04-23",
      editable: true,
    },
    {
      id: "4",
      title: "Event 4",
      start: "2023-04-24T19:30:00",
      end: "2023-04-25",
      editable: true,
    },
    {
      id: "5",
      title: "Event 5",
      start: "2023-04-25T10:30:00",
      end: "2023-04-26",
      editable: true,
    },
    {
      id: "6",
      title: "Event 6",
      start: "2023-04-27T15:30:00",
      end: "2023-04-28",
      editable: true,
    },
    {
      id: "7",
      title: "Event 7",
      start: "2023-04-27T10:00:00",
      end: "2023-04-28",
      editable: true,
    },
  ]);

  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  var gapi = window.gapi;

  let prefill = {
    email: localStorage.getItem("email"),
    firstName: localStorage.getItem("username"),
    name: localStorage.getItem("email"),
    guests: ["janedoe@example.com", "johndoe@example.com"],
    customAnswers: {
      a1: "+213659819202",
      a2: "BLBLA",
      a3: 2,
      a4: 3,
      a5: "a5",
      a6: "a6",
      a7: "a7",
      a8: "a8",
      a9: "a9",
      a10: "a10",
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log(authservice.isLogged());
    setIsLogged(authservice.isLogged());
  };

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e),
  });

  const create_Rdv = async (e) => {
    setShowSpinner(true);

    const formattedStart = eventClickInfo.event.start.toLocaleString();

    e.preventDefault();
    const { prenom, nom, numero, email, appel } = e.target.elements;
    let details = {
      title: eventClickInfo.event.title,
      start: eventClickInfo.event.start,
      end: eventClickInfo.event.end,
      formattedStart: eventClickInfo.event.start.toLocaleString(),

      prenom: prenom.value,
      nom: nom.value,
      numero: numero.value,
      email: email.value,
      appel: (appel.value = "on" ? true : false),
      date_appel: moment(formattedStart, "DD/MM/YYYY HH:mm:ss").format(
        "YYYY-MM-DDTHH:mm"
      ),
    };
    console.log(details);
    axios
      .post("https://fr33dz.pythonanywhere.com/api/rdv/", details, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setShowSpinner(false);
        setShowPopup(false);
        alert("Rdv Created successfully");
      })
      .catch(function (error) {
        if (error.response) {
          setShowSpinner(false);
          let errorMsg = "";
          for (const property in error.response.data) {
            errorMsg += `${property}: ${error.response.data[property]}\n`;
          }
          alert(errorMsg);
        }
        setEvents(events.filter((row) => row.id !== eventClickInfo.event.id));
      });
  };

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        plugin_name: plugin_name,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: "Awesome Event!",
            location: "800 Howard St., San Francisco, CA 94103",
            description: "Really great refreshments",
            start: {
              dateTime: "2020-06-28T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2020-06-28T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });

          /*
            Uncomment the following block to get events
        */
          /*
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
        */
        });
    });
  };

  const handleEventClick = (info) => {
    debugger;
    setEventClickInfo(info);
    setShowPopup(true);
    // setEvents([...events, { title: "Event 1", date: "2023-04-19" }]);
  };

  const handleDateClick = (info) => {
    debugger;
    const calendarApi = calendarRef.current.getApi();
    const title = prompt("Enter event title:");
    if (title) {
      calendarApi.addEvent({
        title,
        start: info.dateStr,
        allDay: info.allDay,
      });
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={{ margin: "2%" }}>
      Pas le temps aujourd’hui ? Choisissez le meilleur moment pour vous, et
      notre équipe vous rappelle sur le créneau de votre choix : [Vous ne voyez
      pas le calendrier s’afficher ci-dessous ?
      <a href="https://calendly.com/i-merzoug16/15min">
        Cliquez ici pour voir notre agenda en ligne
      </a>
      ]
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <form onSubmit={create_Rdv}>
              <div className="row">
                <div className="col">
                  <label>Prénom</label>
                  <input
                    type="text"
                    id="prenom"
                    className="form-control"
                    placeholder="Prénom"
                  />
                </div>
                <div className="col">
                  <label>Nom</label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Numéro</label>
                  <input
                    type="tel"
                    id="numero"
                    className="form-control"
                    placeholder="Numero"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>email</label> <br />
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="col">
                  <label>Appel</label> <br />
                  <input type="checkbox" id="appel" />
                </div>
              </div>
              <br />

              <div style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-primary">
                  Create Rdv
                </button>
                <button
                  type="button"
                  onClick={() => handleClick()}
                  className="btn btn-outline-secondary"
                >
                  Create calendar
                </button>
              </div>

              <div style={{ textAlign: "center", margin: "0.5rem" }}>
                {showSpinner && <Spinner />}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={togglePopup}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <br />
      <br />
      {/* {!isLogged ? ( */}
      <InlineWidget
        url="https://calendly.com/i-merzoug16/15min"
        prefill={prefill}
        openPopupOnClick={true}
      />
      {/* ) : !showPopup ? (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
          selectable={true}
          eventClick={handleEventClick}
          // dateClick={handleDateClick}
          ref={calendarRef}
          height="640px"
        />
      ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default CreateRdv;
