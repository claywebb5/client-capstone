import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './LandingPage.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontFamily } from '@mui/system';
import blackLogo from '../LandingPage/blackFitTrucklogo.png'
function LandingPage() {
  const [heading, setHeading] = useState('Landing Page View');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  const onSeeClasses = (event) => {
    history.push('/all-classes');
  };

  return (
    <>
    <img src={blackLogo} 
    style ={{
    height: '67px'
    }}
   /> 

<h1> VIDEO GOES HERE</h1>
    <div style={{
     
      marginTop: '250px'
    }} className="container">
      {/* <h2><u>{heading}</u></h2> */}

      <div className="grid">
        <div className="grid-col grid-col_4">
          
          
          <center>
            {/* <h4>What's Offered?</h4> */}
            <Button 
            style = {{
              backgroundColor: "#ace23a",
              color: "black",
              fontFamily: 'Muli',
              padding: 5,
              width: 170,
              // border: 0,
              outline: 'solid',
              // display: 'flex'
              
            }}
            variant = "contained" className="btn btn_sizeSm" onClick={onSeeClasses}>
              See Classes
            </Button>
          </center>
          <br />

          <center>
            {/* <h4>Want to Join?</h4> */}
            <Button 
            style = {{
              backgroundColor: "#ace23a",
              color: "black",
              fontFamily: 'Muli',
              padding: 5,
              width: 170,
              // border: 0,
              outline: 'solid'
              
            }}
            variant = "contained"className="btn btn_sizeSm" onClick={onRegister}>
              Register
            </Button>
          </center>
            <br />
          <center>
            {/* <h4>Already a Member?</h4> */}
            <Button  
            style ={{
              color : 'black'
            }}
            size ='small'className="btn btn_sizeSm" onClick={onLogin}>
            Already a Member? Login
            </Button>
          </center>
        </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
