import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import axios from 'axios';
import {useHistory} from "react-router-dom"

let url = 'http://localhost:5000/api/register';


function SignUp() {
  let history = useHistory();

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    age:'',
    sex:'',
    email: '',
    password: ''
  });

  const handleFormChange = e => {
    const { name, value } = e.target
    setRegisterData({
        ...registerData,
        [name]: value
    });
}   


const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


  const handleSubmit = e => {
      e.preventDefault();
      axios.post(url, registerData).then(res=>{
        if (!res.code) {
          history.push("/home")
        }
      }).catch(err=>console.log(err))
  };

  return (

    <Container>

<PaneLeft></PaneLeft>

<PaneRight></PaneRight>

    <CompanyLogo>
      MiMedi
    </CompanyLogo>

    <FormContainer>

    
    <FormWrap>
    <Form >

    <FormH1>
      Sign Up
    </FormH1>
    <FormGroup>
      <FormInputShort
        value={registerData.firstName}
        onChange={handleFormChange}
        placeholder="Firstname"
        type="text"
        name="firstName"
        required
        autoComplete="off"
      />

      
      <FormInputShort
        value={registerData.lastName}
        onChange={handleFormChange}
        placeholder="Lastname"
        type="text"
        name="lastName"
        required
        autoComplete="off"
      />

      </FormGroup>  

      <FormGroup>
      <FormSelect name="sex" value={registerData.sex} onChange={handleFormChange}>
        <option value="" disabled selected>Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="not-specified">Prefer not to specify</option>
      </FormSelect>

      <FormInputAge type="date" name="age" value={registerData.age} onChange={handleFormChange} />

      </FormGroup>

      <FormInputLong
        value={registerData.email}
        onChange={handleFormChange}
        placeholder="Email"
        type="email"
        name="email"
        required
        autoComplete="off"
      />
      <FormInputLong
        value={registerData.password}
        onChange={handleFormChange}
        placeholder="Password"
        type="password"
        name="password"
        required
        autoComplete="off"
      />

<FormButton onMouseEnter={onHover} onMouseLeave={onHover} onClick={handleSubmit} type='submit' to='/home'>Get Mi Started {hover ? <ArrowForward /> : <ArrowRight/> }</FormButton>
      <Text to='/'>Already have an account? <u>Sign In!</u></Text>
    </Form>
    </FormWrap>   
    </FormContainer>
    </Container>
  );
};

export default SignUp;



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

const CompanyLogo = styled.h1 `
    position: relative;
    font-size: 64px;
    color: white;
    margin: 5% auto;

    @media screen and (max-width: 480px) {
        font-size: 36px;
        margin: 10% auto;
    }
`;


// const FormContainer = styled.div`
//     min-height: 692px;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     top: 0;
//     z-index: 0;
//     overflow: hidden;
//     padding-top: 6%;
//     ${'' /* background: #f07167; */}
//     font-family: 'Baloo 2', cursive;
    
// `;

const FormContainer = styled.div`
    position: relative;
    height: 70%;
    width: 40%;
    margin: -8% auto;
    font-family: 'Baloo 2', cursive;
    border-radius: 8px;

    @media screen and (max-width: 480px) {
        height: 60%;
        width: 80%;
        margin-top: 20%;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;


const Form = styled.div`
    background: rgb(255,255,255,0.3);
    max-width: 450px;
    ${'' /* height: auto; */}
    height: 550px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 15% auto 0 auto;
    padding: 20px 30px 80px 30px;
    border-radius: 4px;
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.9); */}

    @media screen and (max-width: 480px) {
      margin: -20% auto 0 auto;

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
    
    @media screen and (max-width: 480px) {
      font-size: 30px;
    }
`;


const FormInputShort = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    
    @media screen and (max-width: 480px) {
      width: 50%;
    }
`;

const FormInputLong = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    
    @media screen and (max-width: 480px) {
      width: 100%;
    }
`;



const FormInputAge = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    margin-right: 2px;

    @media screen and (max-width: 480px) {
      width: 50%;
    }

`;

const FormSelect = styled.select `
padding: 16px 16px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    margin-right: 10px;

    @media screen and (max-width: 480px) {
      width: 50%;
    }
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
        background: #72dc57;
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