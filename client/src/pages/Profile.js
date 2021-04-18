import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import FemaleAvatar from '../images/female_profile_pic.svg'
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <>

        <Avatar src={FemaleAvatar} type='image/svg' />

        <PaneLeft></PaneLeft>

        <PaneRight></PaneRight>

        <InfoContainer>
            <InfoWrapper>
            <InfoPara>Name: Nami Rose</InfoPara>
            <InfoPara>Medicare No. XXXX XXXXX X</InfoPara>
            <InfoPara>Date of Birth: 18 April 1998</InfoPara>
            <InfoPara>Email: nami_rose@gmail.com</InfoPara>
            <InfoPara>Preferred Clinic: Sita Medical Clinic</InfoPara>
            <InfoPara>User since: 16 Apr 2021</InfoPara>
            <FormButton>Update My Details</FormButton>
            </InfoWrapper>
        </InfoContainer>

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

        

        </>


    );
}

export default Profile;


const Avatar = styled.img `
    position: absolute;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: #000;
    z-index: 100;
    left: 43%;
    top: 2%;
    border: 2px solid #fff;

    @media screen and (max-width: 480px) {
        width: 125px;
        height: 125px;
        left: 34%;
        top: 6%;
    }
`;


const InfoContainer = styled.div `
    height: 75vh;
    width: 30%;
    background-color: #42C0BD;
    right: 35%;
    top: 15%;
    position: absolute;
    border-radius: 40px;
    font-family: 'Baloo 2', cursive;
    
    @media screen and (max-width: 480px) {
        height: 70vh;
        width: 80%;
        right: 10%;
        top: 16%;
        transition: 1s ease-in;
    }
`;

const InfoWrapper = styled.div `
height: 50vh;
width: 80%;
${'' /* background-color: #000; */}
top: 16%;
position: absolute;
right: 10%;
`;


const InfoPara = styled.div `
    
    font-size: 20px;
    color: white;
    padding: 4% 8%;

    @media screen and (max-width: 480px) {
        font-size: 16px;
        margin-bottom: -1%;  
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
    font-size: 20px;
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

    @media screen and (max-width: 480px) {
        width: 80%;
        padding: 6px 16px;
        margin-top: 8%;
        font-size: 16px;
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