import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useHistory } from "react-router-dom";
import moment from "moment";
import Toolbar from "./ToolBar"
import styled from 'styled-components'
import {getAllApps} from "./Calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi';


import {getTodaysEvents, getCompletedApps, addNewEvent} from "./Calendar"
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment)

const API_KEY = "AIzaSyBlj1VnMflja9kGA73CB4VQ1rHTa2-oOO4";

const Btn = styled.button`
padding: 0.3rem;
outline:none;
color:#424B92;
width: 150px;
border-radius: 50px;
border: none;
font-weight:bold;
background:white;

`
export const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [gpCompleted, setGPCompleted] = useState(0);
  const [opCompleted, setOpCompleted] = useState(0);
  const [psychCompleted, setPsychCompleted] = useState(0);
  const [dentCompleted, setDentCompleted] = useState(0);
  const [gynoCompleted, setGynoCompleted] = useState(0);

  const history = useHistory();

  const [todaysEvents, setTodaysEvents] = useState([]);

  var gapi = window.gapi;
  var CLIENT_ID =
    "249886028801-4635vef8o4vjcgj539du52m6go3u3vnk.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBlj1VnMflja9kGA73CB4VQ1rHTa2-oOO4";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  /* gets all upcoming events for today */


  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("hello?"));

      let instance = gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          let request = gapi.client.calendar.events.list({
            calendarId: "primary",
            showDeleted: false,
            orderBy: "updated",
            maxResults: 2000,
          });

          request.execute((event) => {
            let res = event.items.filter(
              (i) => i.summary && i.summary.includes("MiMedi")
            );

            let psychApps = res.filter(
              (i) => i.summary && i.summary.includes("Psychologist")
            );
            psychApps = psychApps.map((elem) => {
              return {
                title: elem.summary,
                start: new Date(elem.start.dateTime),
                end: new Date(elem.start.dateTime),
                allDay: false,
                type: "Psych",
              };
            });
            let GPApps = res.filter(
              (i) => i.summary && i.summary.includes("GP")
            );
            GPApps = GPApps.map((elem) => {
              return {
                title: elem.summary,
                start: new Date(elem.start.dateTime),
                end: new Date(elem.start.dateTime),
                allDay: false,
                type: "Gp",
              };
            });
            let OpApps = res.filter(
              (i) => i.summary && i.summary.includes("Optometrist")
            );

            OpApps = OpApps.map((elem) => {
              return {
                title: elem.summary,
                start: new Date(elem.start.dateTime),
                end: new Date(elem.start.dateTime),
                allDay: false,
                type: "Op",
              };
            });

            let DentApps = res.filter(
              (i) => i.summary && i.summary.includes("Dentist")
            );

            DentApps = DentApps.map((elem) => {
              return {
                title: elem.summary,
                start: new Date(elem.start.dateTime),
                end: new Date(elem.start.dateTime),
                allDay: false,
                type: "Dent",
              };
            });

            let gynoApps = res.filter(
              (i) => i.summary && i.summary.includes("Gynaecologist")
            );

            gynoApps = gynoApps.map((elem) => {
              return {
                title: elem.summary,
                start: new Date(elem.start.dateTime),
                end: new Date(elem.start.dateTime),
                allDay: false,
                type: "Gyno",
              };
            });




            let meds = res.filter(
              (i) => i.summary && i.summary.includes("Dose of")
            );
            let medsEvents = [];

            meds.map((elem) => {
              let numDays = elem.recurrence[0].split("COUNT=")[1];
              let currentDate = moment(new Date(elem.start.dateTime));
              console.log(currentDate);
              for (let i = 0; i < numDays; i++) {
                medsEvents.push({
                  title: elem.summary,
                  start: currentDate._d,
                  end: currentDate._d,
                  allDay: true,
                  type: "Med",
                });
                currentDate = moment(currentDate).add(1, "days");
              }
            });

            console.log(medsEvents);

            setEvents(
              [GPApps, gynoApps, DentApps, OpApps, psychApps, medsEvents].flat(Infinity)
            );
            setTodaysEvents(
              getTodaysEvents(
                [medsEvents, gynoApps, GPApps, DentApps, OpApps, psychApps].flat(Infinity)
              )
            );

            setGPCompleted(getCompletedApps(GPApps));
            setDentCompleted(getCompletedApps(DentApps));
            setOpCompleted(getCompletedApps(OpApps));
            setPsychCompleted(getCompletedApps(psychApps));
            setGynoCompleted(getCompletedApps(gynoApps))
          });
        });
    });
  }, []);


  let formats = {
    dateFormat: "DD",

    dayFormat: (date, culture, localizer) =>
      localizer.format(date, "DD", culture),

    dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
      localizer.format(start, { date: "short" }, culture) +
      " — " +
      localizer.format(end, { date: "short" }, culture),
  };

  return (
    <div style={{ padding: "2rem" }}>
                    <FaTimes
          onClick={() => history.goBack()}
          size={30}
          style={{
            color: "#8ED9D7",
            position: "absolute",
            top: "1rem",
            right: "0rem",
          }}
        />
      <h1 style={{ color: "#8ED9D7", marginLeft:"40%" }}>MiCal</h1>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <Btn
            style={{ border: "none", color: "white", background: "#8ED9D7" }}
            onClick={() => history.push("/utilities/mi-cal/add-new-med")}
          >
            {" "}
            + medication{" "}
          </Btn>

          <br></br>

          <Btn
            style={{ border: "none", color: "white", background: "#8ED9D7" }}
            onClick={() => history.push("/utilities/mi-cal/add-new-app")}
          >
            {" "}
            + appointment{" "}
          </Btn>
        </div>

        <Calendar
          popupOffset={0}
          localizer={localizer}
          events={events}
          components={{
            toolbar:Toolbar
          }}
          step={60}
          showMultiDayTimes
          style={{ height: 500 }}
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: "lightgrey",
              color: "black",
              borderRadius: "0px",
              border: "none",
            };

            if (event.type == "Gp") {
              newStyle.backgroundColor = "#295FA6";
            } else if (event.type == "Psych") {
              newStyle.backgroundColor = "#FCC8E1";
            } else if (event.type == "Dent") {
              newStyle.backgroundColor = "#C4C4C4";
            } else if (event.type == "Op") {
              newStyle.backgroundColor = "#B1FF81";
            }
            else if (event.type == "Gyno") {
              newStyle.backgroundColor = "#FF0000";
            }

            return {
              className: "",
              style: newStyle,
            };
          }}
        />
      </div>

      <BottomBar>

<IconsContainer>
    <IconLink to='/profile'>
        <MdAccountCircle />
    </IconLink>

<IconLink to='/home'>
    <AiFillHome/>
</IconLink>

<IconLink to='/utilities'>
    <FiMenu/>
</IconLink>

</IconsContainer>

</BottomBar>

    </div>
  );
};


const Container = styled.div `
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: 'Baloo 2', cursive;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const PageTitle = styled.h1 `
    position: relative;
    font-size: 64px;
    color: #42C0BD;
    margin: 1% auto;

    @media screen and (max-width: 480px) {
        font-size: 56px;
        margin: 5% auto;
    }
`;

const SettingsContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 77vh;
    background: #42C0BD;
    border-radius: 16px;
    margin-right: auto;
    margin-left: auto;
    margin-top: -2%;

    @media screen and (max-width: 480px) {
        width: 80%;
        height: 75vh;
        margin-top: -7%;
    }
`;


const SettingsButton = styled.button `
    display: flex;
    outline: none;
    border: ${({active}) => (active ? '5px solid #1D39AD' : '5px solid #1D39AD')};
    border-radius: 40px;
    font-size: 18px;
    padding: 10px 12px;
    color: ${({active}) => (active ? '#FFF' : '#1D39AD')};
    background: ${({active}) => (active ? '#1D39AD' : '#FFF')};
    font-weight: 500;
    max-height: 64px;
    wrap: row-wrap;
    ${'' /* margin: 5px 5px; */}
    margin-left: 5%;
    font-family: 'Baloo 2', cursive;


    &:hover {
        color: #FFF;
        background: #1D39AD;
    }

    @media screen and (max-width:480px) {
        max-height: 60px;
        padding: 10px 10px;
        font-size: 14px;
        margin-left: -6px;
        
    }

`;

const ButtonGroup = styled.div `
    display: flex;
    position: relative;
    margin-top: 10%;
    margin-left: 7%;
    font-family: 'Baloo 2', cursive;
    flex-wrap: nowrap;
    ${'' /* background: gray; */}
    width: 80%;


   
`;

const InfoContainer = styled.div `
    position: relative;
    background: gray;
    width: 90%;
    height: 55vh;
    justify-self: center;
    margin-left: 5%;
    margin-top: 5%;
    background: #fff;
    border-radius: 40px;
`;


const ReminderContainer = styled.div `
    height: 15%;
    width: 90%;
    margin-top: 7%;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
`;


const FormLabel = styled.label `
    font-size: 20px;
    ${'' /* border-bottom: 2px solid #424B92 */}
`;

const FormSelect = styled.select `
    margin-top: 1%;
    padding: 8px 8px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;


    @media screen and (max-width: 480px) {
      width: 50%;
    }
`;





const BottomBar = styled.div ` 
    height: 50px;
    width: 45%;
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 27.5%;
    margin-left: auto;
    margin-right: auto;
    z-index: 1999;
    
    @media screen and (max-width: 480px) {
        background: #8ED9D7;
        width: 100%;
        left: 0;
    }
`;


const IconsContainer = styled.div `
    display: flex;
    justify-content: space-around;
    color: white;
    height: 36px;
    margin-right: 10%;
    margin-left: 10%;
`;


const IconLink = styled(Link) `
    color: #424B92;
    font-size: 35px;

    @media screen and (max-width: 480px) {
        color: white;
        padding-top: 1%;
    }
`;

const PaneLeft = styled.div `
    height: 100vh;
    width: 34%;
    background: #323639;
    position: absolute;
`;

const PaneRight = styled.div `
    height: 100vh;
    width: 34%;
    background: #323639;
    position: absolute;
    right: 0;
`;