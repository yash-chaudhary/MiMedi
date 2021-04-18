import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import MascotSeeThru from '../images/mascotNoBG.svg'; 
import axios from 'axios';
import {useHistory} from "react-router-dom"

let url = 'http://localhost:5000/api/signIn';
function Login() {

    const history = useHistory();
const [loading, setLoading] = useState(true)

useEffect(() => {
    setTimeout(() => setLoading(false),  3000)
    }, [])


    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleFormChange = e => {
    const { name, value } = e.target
    setLoginData({
        ...loginData,
        [name]: value
    });
}   

  const handleSubmit = e => {
      e.preventDefault();
      axios.post(url, loginData).then(res=>{
          if (res.data.code == "NotAuthorizedException");
          else {
            history.push({
                pathname: 
                "/home"
            })
          }

      }).catch(
          err=>console.log(err)
      )
  };




  return (
    <Container>

    <PaneLeft></PaneLeft>

    <PaneRight></PaneRight>
    
    {loading === false ?
    <>
    <CompanyLogo>
      MiMedi
    </CompanyLogo>


     <FormContainer>

      <FormWrap>

            <FormContent>

                 <Form onSubmit={handleSubmit}>
      
                    <FormH1>Sign In</FormH1>

                        <FormInput1
                            value={loginData.email}
                            onChange={handleFormChange}
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                            autoComplete="off"
                        />

                        <FormInput2
                            value={loginData.password}
                            onChange={handleFormChange}
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            autoComplete="off"
                        /> 

                       
                        <FormButton onClick={handleSubmit} onMouseEnter={onHover} onMouseLeave={onHover} type='submit'>Sign Mi In {hover ? <ArrowForward /> : <ArrowRight /> }</FormButton>
                        <Text to='/sign-up'>New? <u>Create an Account!</u></Text>
                </Form> 

            </FormContent>  

        </FormWrap> 

     </FormContainer> 

    </>
    :
    <>

    <PaneLeft></PaneLeft>

    <PaneRight></PaneRight>

    <PreloaderWelcome>
        Welcome to 
    </PreloaderWelcome>
    <PreloaderH1>
      MiMedi
    </PreloaderH1>

    {/* <PreloaderImg src={MascotWhiteBG} type='image/svg' /> */}
    <PreloaderAnimation>
        <PreloaderImg src={MascotSeeThru} type='image/svg' />
    </PreloaderAnimation>

    </>


    }
    
    </Container>

    
  );
};

export default Login;



// ------------------------------------------ Preloader Animation --------------------------------------
// Credit: https://codepen.io/peeke/pen/BjxXZa

const PreloaderAnimation = styled.div`
position: absolute;
position: absolute;
left: 50%;
top: 65%;
transform: translateX(-50%) translateY(-50%);
width: 200px;
height: 200px;


&:before {
    content: '';
    position: relative;
    display: block;
    width: 200%;
    height: 200%;
    box-sizing: border-box;
    margin-left: -50%;
    margin-top: -50%;
    border-radius: 50%;
    background-color: #9ede73;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0; 
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
  }

  @keyframes pulse-ring {
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
}
`;

const PreloaderImg = styled.img `
position: absolute;
position: absolute;
left: 50%;
top: 47%;
transform: translateX(-50%) translateY(-50%);
width: 200px;
height: 200px;
border-radius: 50%;
z-index: 999;
`;


//  -------------------------------------------- styles -------------------------------------------------

const Container = styled.div `
    background-image: linear-gradient(to left top, #434997, #295fa6, #0573b0, #0285b4, #2b96b6, #30a1b9, #3cacbb, #4bb7bc, #42c0bd, #3ec9bb, #41d1b6, #4cd9af);
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: 'Baloo 2', cursive;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const PreloaderWelcome = styled.h2 `
    position: relative;
    font-size: 32px;
    color: white;
    margin-top: 10%;
    margin-right: auto;
    margin-left: auto;
`;

const PreloaderH1 = styled.h1 `
    position: relative;
    font-size: 104px;
    color: white;
    margin-top: -1%;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 480px) {
        font-size: 72px;
        margin: 15% auto;
    }
`;




const CompanyLogo = styled.h1 `
    position: relative;
    font-size: 64px;
    color: white;
    margin: 5% auto;

    @media screen and (max-width: 480px) {
        font-size: 72px;
        margin: 15% auto;
    }
`;


const FormContainer = styled.div`
    position: relative;
    height: 70%;
    width: 40%;
    margin: -8% auto;
    font-family: 'Baloo 2', cursive;
    border-radius: 8px;

    @media screen and (max-width: 480px) {
        height: 70%;
        width: 75%;
        margin: -20% auto;
    } 
`;


const FormWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
`;



const FormContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;


const Form = styled.div`
    background: rgb(255,255,255,0.3);
    max-width: 375px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 15% auto 0 auto;
    padding: 20px 30px 80px 30px;
    border-radius: 4px;
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.9); */}

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;


const FormGroup = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
`;


const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
`;


const FormInput1 = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
`;

const FormInput2 = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
`;


const FormButton = styled.button`   
    margin-top: 10px;
    position: relative;
    background: #3E3EDC;
    ${'' /* background: #50DF60; */}
    border-radius: 50px;
    ${'' /* background: #f07167; */}
    white-space: nowrap;
    padding: 14px 48px;
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
        ${'' /* background: #1D39AD; */}
        background: #9ede73;
    }
`;

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
    
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 24px;
`;

const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
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