import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {BiCalendarHeart} from 'react-icons/bi';
import {BiSearchAlt} from 'react-icons/bi';
import {IoAlertCircle} from 'react-icons/io5';
import {IoMdSettings} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi';
import axios from 'axios';
import moment from 'moment';

let alertsLink = "http://localhost:5000/api/getAlerts";

function Utilities() {
    
    let [alerts, setAlerts] = useState("");
    let [hasNew, setHasNew] = useState(false);

    let numGP = 1;
    let numOpt = 1;
    let numDent = 2;
    let numGyno = 1;


    useEffect(()=> {
        axios.get(alertsLink).then((res) => {
            setAlerts(res.data);
                let mostRecent = res.data[0].date;
                if (moment(new Date(mostRecent)).isSame(new Date(), 'date')) {
                    setHasNew(true);
                }
            })
    }, [])

    return (

        <>
        <Container>

        <PaneLeft></PaneLeft>

        <PaneRight></PaneRight>

            <CompanyLogo>MiMedi</CompanyLogo>
            <ServicesContainer>

                <ServiceGroup to='/utilities/mi-cal'>
                    <ServiceIcon>
                        <BiCalendarHeart />
                    </ServiceIcon>
                    <ServiceDescription>
                        <ServiceDesTitle>
                            MiCal
                        </ServiceDesTitle>
                        <ServiceDesData>
                            This week: 1 appointment
                        </ServiceDesData>
                    </ServiceDescription>
                </ServiceGroup>


                <ServiceGroup to='/utilities/mi-search'>
                    <ServiceIcon>
                        <BiSearchAlt />
                    </ServiceIcon>
                    <ServiceDescription>
                        <ServiceDesTitle>
                            MiSearch
                        </ServiceDesTitle>
                        <ServiceDesData>
                            Your most recent visit: <br></br>
                            Sita Medical Clinic
                        </ServiceDesData>
                    </ServiceDescription>
                </ServiceGroup>



                <ServiceGroup to='/utilities/mi-alert'>
                    <ServiceIcon>
                        <IoAlertCircle />
                    </ServiceIcon>
                    <ServiceDescription>
                        <ServiceDesTitle>
                            MiAlert
                        </ServiceDesTitle>
                        <ServiceDesData>
                            {hasNew ? "You have a new announcement" : "No new announcements"}
                        </ServiceDesData>
                    </ServiceDescription>
                </ServiceGroup>



                <ServiceGroup to='/settings'>
                    <ServiceIcon>
                        <IoMdSettings />
                    </ServiceIcon>
                    <ServiceDescription>
                        <ServiceDesTitle>
                            Settings
                        </ServiceDesTitle>
                        <ServiceDesData>
                                Modify goal targets <br></br>
                                notification preferences <br></br>
                                privacy <br></br>
                        </ServiceDesData>
                    </ServiceDescription>
                </ServiceGroup>
            </ServicesContainer>   

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

        </Container>
        </>

    );
}

export default Utilities;


// ---------------------------------------------- styles ----------------------------------------------
const Container = styled.div `
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: 'Baloo 2', cursive;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const CompanyLogo = styled.h1 `
    position: relative;
    font-size: 64px;
    color: #42C0BD;
    margin: 1% auto;

    @media screen and (max-width: 480px) {
        font-size: 56px;
        margin: 5% auto;
    }
`;


const ServicesContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 75vh;
    ${'' /* background: #000; */}
    margin-right: auto;
    margin-left: auto;
    margin-top: -2%;

    @media screen and (max-width: 480px) {
        width: 80%;
        height: 75vh;
        margin-top: -7%;
    }
`;


const ServiceGroup = styled(Link) `
    display: flex;
    flex-direction: row;
    height: 18vh;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    ${'' /* background-color: beige; */}
    margin-bottom: 2%;
    text-decoration: none;
`;

const ServiceIcon = styled.div `
    font-size: 96px;
    color: #000000;
    background: #8ED9D7;
    border-radius: 16px;
    margin-top: 4%;
    margin-bottom: 1%;
    padding: 0 1%;
    margin-left: 10%;

    @media screen and (max-width:480px) {
        font-size: 72px;
        margin-bottom: 7%;
    }
`;


const ServiceDescription = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 2%;

    @media screen and (max-width:480px) {
        margin-top: 2%;
    }
`;


const ServiceDesTitle = styled.h1 `
    color: #424B92;
`;


const ServiceDesData = styled.p `
    font-size: 16px;
    color: #000;

    @media screen and (max-width:480px) {
        margin-top: -7%;
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










