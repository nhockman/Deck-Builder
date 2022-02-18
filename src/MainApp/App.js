
import './App.css';
import React, { useState } from 'react';


import { MainLoginPage } from '../PageComponents/LoginPage/MainLoginPage';
import { CreateAccountPage } from '../PageComponents/CreateAccountPage/CreateAccountPage';
import { DefaultErrorPage } from '../PageComponents/DefaultErrorPage/DefaultErrorPage';
import { HomePage } from '../PageComponents/HomePage/HomePage';

function App() {

  const GenRoomID = () => {
    return Math.random().toString(36).slice(2,16);
  }
 

  const [sessionID, setsessionID] = useState(GenRoomID());

  const [loginStatus, setloginStatus] = useState("signedOut");

  const [currentPage, setcurrentPage] = useState("Login");


  const conditionalRender = () => {

    //Logged out region
    //====================
    //page defaults to signed out and then loads login page
    if (loginStatus == "signedOut") {

      switch(currentPage) {
        case "Login":
          return (
            <div className="App">
                <MainLoginPage sessionID={sessionID} setloginStatus={setloginStatus} setcurrentPage = {setcurrentPage}/>
            </div>
          );

        case "CreateAccount":
          return (
            <div className="App">
                <CreateAccountPage sessionID={sessionID} setcurrentPage = {setcurrentPage}/>
            </div>
          );
        
        default:
          return (
            <div className="App">
                <DefaultErrorPage sessionID={sessionID} setcurrentPage = {setcurrentPage}/>
            </div>
          );
      }
    }
    //End logged out region
    //=======================================================


    //user has been successful in logging in
    else if (loginStatus == "signedIn") {
      switch (currentPage) {
        case "HomePage":
          return(
            <div className="App">
                <HomePage sessionID={sessionID} setcurrentPage={setcurrentPage}/>
            </div>
          );

        default:
          return (
            <div className="App">
                <DefaultErrorPage sessionID={sessionID} setcurrentPage = {setcurrentPage}/>
            </div>
          );

      }
    }
    
    //error occured or state was not set properly
    else {
      return (
      <div>
        <DefaultErrorPage sessionID={sessionID}/>
      </div>);
    }
  }

  



  return (
    conditionalRender()
  );
}

export default App;
