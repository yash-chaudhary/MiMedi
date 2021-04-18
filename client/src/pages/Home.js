import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';
import { RiInformationFill } from 'react-icons/ri';
import mascotNoBG from '../images/mascotNoBG.svg';
import Progress from '../components/Progress';
import Foot0 from '../images/mountain_foot_0.svg';
import Foot2 from '../images/mountain_foot_2.svg';
import Foot4 from '../images/mountain_foot_4.svg';
import Foot6 from '../images/mountain_foot_6.svg';
import Foot8 from '../images/mountain_foot_8.svg';
import Foot10 from '../images/mountain_foot_10.svg';
import {getAllApps} from "../Calendar/Calendar"

// greeting

function getStateOfDay() {
    const hourHand = new Date().getHours();
    if (0 <= hourHand && hourHand <= 11) {
        return ("Morning");
    } else if (12 <= hourHand && hourHand <= 16) {
        return ("Afternoon");
    } else {
        return ("Evening");
    }
}

// // progression calculator
let maxStandardConsult = 5;

function Home() {

    // const [trackerPercent, setTrackerPercent] = useState(0);

    // useEffect(() => {
    //     setInterval(() => setTracker(Math.floor(Math.random() * 100) + 1), 2000);
    //   }, []);
    const [completed, setCompleted] = useState(0);

    const [isOpen, setIsOpen] = useState(false)
    const [numberOfUserConsult, setNumberOfUserConsult] = useState(0)

    function handleClick() {
        setIsOpen(!isOpen)
        console.log("clicked")
    }

    useEffect(()=> {
        setCompleted(30);
        getAllApps().then(res=>{
            setNumberOfUserConsult(res);
        })
    }, [])

    function HandleUserConsultProgress(numberOfUserConsult) {
        const maxStandardConsult = 5;
        console.log(numberOfUserConsult)
        if(numberOfUserConsult >= maxStandardConsult) {
            return (Foot10);
        }
        else if (numberOfUserConsult=== 4) {
            return (Foot8);
        }
        else if (numberOfUserConsult=== 3) {
            return (Foot6);
        }
        else if (numberOfUserConsult === 2) {
            return (Foot4);
        }
        else if (numberOfUserConsult=== 1) {
            return (Foot2);
        }
        else if (numberOfUserConsult=== 0) {
            return (Foot0);
        }

    }



    return (
        <>
               <Container>

<PaneLeft></PaneLeft>

<PaneRight></PaneRight>

<TopBarContainer>
    <Mascot src={mascotNoBG} type='image/svg'/>
    <TopBarContent>
        <GreetingText>Good {getStateOfDay()},</GreetingText>
        <TopBarTextContent>Nami</TopBarTextContent>
    </TopBarContent>
</TopBarContainer>



<TrackerContentContainer>
    MiMedi Goals

<TrackIconsContainer>

    <smallIconsNoLink>
    <RiInformationFill onClick={handleClick}/>
    </smallIconsNoLink>

    {isOpen ? 

        <InfoContainer>
            <InfoPara>To fill Up your MiMedi goal bar aim to complete all your 
            recommended medical visits in a year:</InfoPara>

            <InfoPara>1/1 GP: 1 visit / year</InfoPara>
            <InfoPara>1/1 Optometrist: 1 visit / 2 year</InfoPara>
            <InfoPara>0/2 Dentist: 2 visits / year</InfoPara>
            <InfoPara>0/1 Obstetrician/Gynecologist: 1 visit / year </InfoPara>

            <FormButton to='/utilities'>
                Make An Appointment
            </FormButton>

        </InfoContainer>


    
    : null
    }

    <IconLink2 to='/settings'>
        <MdSettings/>
    </IconLink2>
</TrackIconsContainer>

</TrackerContentContainer>

<div>
<Progress bgcolor={"#2b317c"} completed={completed} />
</div>

{/* <TrackerBar>
</TrackerBar> */}
    
<HeroImageContainer>
    <HeroImage src={HandleUserConsultProgress(numberOfUserConsult)} type='image/svg' />
</HeroImageContainer> 

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

export default Home;


//-------------------------------------------- styles -------------------------------------------------



//------------------------------------------- tracker styles-------------------------------------------

// const containerStyles = styled.div `
//     height: 20px,
//     width: 45%;
//     background-color: #e0e0de;
//     border-radius: 16px;
//     margin: 50px;
// `;

// const fillerStyles = {
//     height: 100%;
//     width: ;
//     text-align: right;



// }


//   const fillerStyles = {
//     height: '100%',
//     width: `${completed}%`,
//     backgroundColor: bgcolor,
//     borderRadius: 'inherit',
//     textAlign: 'right'
//   }




//-----------------------------------------------------------------------------------------------------



// 41AED1 ->C9EBF6 ->DFF7FF  100%, 75%, 0%

const Container = styled.div `
    background-image: linear-gradient(180deg, rgba(65,174,209,1) 0%, rgba(201,235,246,1) 95%, rgba(223,247,255,1) 100%);
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: 'Baloo 2', cursive;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const TopBarContainer = styled.div `
    display: flex;
    position: relative;
    width: 45%;
    height: 15%;
    ${'' /* margin-top: 0 auto; */}
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;


const TopBarContent = styled.div `
display: flex;
flex-direction: column;
margin-left: 20px;
`;

const TopBarTextContent = styled.h1 `
    font-size: 75px;
    color: #424B92;
    margin-top: -1%;

    @media screen and (max-width: 480px) {
        font-size: 56px;
        margin-top: 1%;
    }
`;

const GreetingText = styled.small `
z-index: 10;
font-size: 20px;
margin-bottom: -18%;
margin-top: 10%;
color: #424B92;

@media screen and (max-width: 480px) {
        font-size: 20px;
        margin-top: 5%;
    }

`;

const Mascot = styled.img `
position: relative;
height: 75px;
width: 75px;
margin-top: 4%;
border-radius: 50%;
`;


const TrackerBar = styled.div `
    height: 10px;
    width: 30%;
    background: #fff;
    border-radius: 16px;
    margin-left: 35%;
    ${'' /* margin-top: 2%; */}

    @media screen and (max-width: 480px) {
        width: 70%;
        margin-left: 15%;
    }
`;


const TrackerContentContainer = styled.div `
    width: 30%; 
    height: 25px;
    font-size: 16px;
    margin-left: 35%;
    margin-top: 1%;
    z-index: 9999;
    display: flex;
    justify-content: center;    
    color: #424B92;
    

    @media screen and (max-width: 480px) {
        width: 40%; 
        margin-left: 32%;
    }
`;

const TrackIconsContainer = styled.div `
`;


const smallIcons = styled(Link) `
    font-size: 16px;
`;

const smallIconsNoLink = styled.button `
    font-size: 16px;
    color: #424B92;
`;

const HeroImageContainer = styled.div `
position: relative;
width: 45%;
height: 70vh;
z-index: 900;
margin-right: auto;
margin-left: auto;

@media screen and (max-width: 480px) {
    width: 80%;
    margin-top: 3%;
    margin-left: 8%;
}
`;

const HeroImage = styled.img `
position: absolute;
max-width: 100%;
max-height: 100%;
margin-top: 10%;
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

const IconLink2 = styled(Link) `
    color: #424B92;
    font-size: 18px;

    @media screen and (max-width: 480px) {
        padding-top: -1%;
        
    }
`;

const InfoContainer = styled.div `
    height: 60vh;
    width: 35%;
    background-color: #fff;
    right: 31.75%;
    top: 25%;
    position: absolute;
    border-radius: 40px;
    
    @media screen and (max-width: 480px) {
        height: 65vh;
        width: 80%;
        right: 10%;
        top: 22%;
        transition: 1s ease-in;
    }
    

`;

const InfoPara = styled.div `
    
    font-size: 16px;
    color: #8ED9D7;
    padding: 4% 8%;

    @media screen and (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 1%;  
    }
`;

const FormButton = styled(Link)`   
    margin-top: 10px;
    padding: 10px 16px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    background: #1D39AD;
    border-radius: 50px;
    white-space: nowrap;
    width: 50%;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        background: #9ede73;
    }

    @media screen and (max-width: 480px;) {
        width: 80%;
        padding: 6px 16px;
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