import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import './MainLoginPage.css';
import Axios from "axios";
import { useState } from 'react';
import { IsValid, IsPasswordValid} from '../../Business/Helpers/Validation';

export const MainLoginPage = ({ sessionID, setloginStatus, setcurrentPage }) => {
    
    const  [username, setUsername]= useState("");
    const  [password, setPassword]= useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    const handleUsername = (e) => {
        if (usernameError) {
            setUsernameError(false);
        }

        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        if (passwordError) {
            setPasswordError(false);
        }

        setPassword(e.target.value);  
    }

   
    
    const handleCreateAccountClick = () => {
        setcurrentPage("CreateAccount");
    };

    const handleLoginClick = () => {

        const valid = validate();

        if (valid) {
            loginUser();
        }
    };
    




    const validate = () => {

        console.log(username);
        console.log(password);

        var validInputs = true;

        if (!IsValid(username)) {
          setUsernameError(true);
          validInputs = false;
        }

        if (!IsValid(password)) {
            setPasswordError(true);
            validInputs = false;
        }

        return validInputs;
    }
    
    const loginUser = () => {

        //Mongo db call to make sure the user is in the database, then if statement


        setloginStatus("signedIn");
        setcurrentPage("HomePage");
    };


    console.log(sessionID);
    
        return(
            <div className='Login-display'>
               <div className='Header-display'>
                    Welcome to DeckBuilder.Test
               </div>
                
                <div className='Text-display'>
                    Please login or create an account
                </div>


                <div>
                    <div className='TextInput-Style'>
                        <TextField 
                        id='loginUsernameField' 
                        error={usernameError} 
                        variant='outlined' 
                        label='Username' 
                        color='primary' 
                        focused fullWidth 
                        onChange={handleUsername}></TextField>

                        {usernameError && <div className='Error-Style'>
                            Username is required
                        </div>}
                    </div>
                        
                   
                    <div className='TextInput-Style'>
                        <TextField id='loginPasswordField' 
                        error={passwordError} 
                        variant='outlined' 
                        label='Password' 
                        color='primary' 
                        focused 
                        fullWidth 
                        type={"password"} 
                        onChange={handlePassword}></TextField>

                        {passwordError && <div className='Error-Style'>
                            Password is required
                        </div>}
                    </div>
                </div>
                
                <div>    
                    <Button variant='outlined' color='primary' onClick={handleLoginClick}>Login</Button>
                    <Button variant='outlined' color='secondary' onClick={handleCreateAccountClick}>Create Account</Button>
                </div>                              
            </div>           
        );
   
}