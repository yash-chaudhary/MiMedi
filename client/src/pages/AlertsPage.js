import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { AiFillHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import {useHistory} from "react-router-dom";
let alertsLink = "http://localhost:5000/api/getAlerts";
export const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(alertsLink).then((res) => {
      setAlerts(res.data);
      console.log(res.data[0].date);

    });
  }, []);

  return (
    <div style={{padding:"1rem"}}>
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

      <h1 style={{ color: "#42C0BD" }}>Mi Alert</h1>
      {alerts.map((alert,i) => {
        return (
          <div key={i} style={{marginBottom:"10px",fontWeight:"bold", color:"white"}}>
            <div style={{background:"#42C0BD"}}>{alert.date}</div>
            <div style={{color: "gray", background:"#DDFAF9"}}>{alert.blurb}</div>
          </div>
        );
      })}




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