import React, { Component } from 'react';
import { Button, TextField, useScrollTrigger } from '@material-ui/core';

import './CreateAccountPage.css';
import { CreateAccount } from '../../Business/CreateAccount';
import { NewAccount } from '../../Models/NewAccount';
import { IsValid, IsPasswordValid } from '../../Business/Helpers/Validation';

import { useState } from 'react';

export const CreateAccountPage = ({ sessionID, setcurrentPage }) => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordWeakError, setPasswordWeakError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [birthDateError, setBirthDateError] = useState(false);

    const handleLastName = (e) => {
        if (lastNameError) {
            setLastNameError(false);
        }
        setLastName(e.target.value);  
    }

    const handleFirstName = (e) => {
        if (firstNameError) {
            setFirstNameError(false);
        }
        setFirstName(e.target.value);  
    }

    const handlePhone = (e) => {
        if (phoneError) {
            setPhoneError(false);
        }
        setPhone(e.target.value);  
    }

    const handleEmail = (e) => {
        if (emailError) {
            setEmailError(false);
        }
        setEmail(e.target.value);  
    }


    const handleUsername = (e) => {
        if (usernameError) {
            setUsernameError(false);
        }
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        if (passwordError) {
            setPasswordError(false);
            setPasswordWeakError(false);
        }
        if (passwordMatchError) {
            setPasswordMatchError(false);
        }
        if (passwordWeakError) {
            setPasswordWeakError(false);
        }
        setPassword(e.target.value);  
    }

    const handleConfirmPassword = (e) => {
        if (confirmPasswordError) {
            setConfirmPasswordError(false);
            setPasswordWeakError(false);
        }
        if (passwordMatchError) {
            setPasswordMatchError(false);  
        }
        if (passwordWeakError) {
            setPasswordWeakError(false);
        }
        setConfirmPassword(e.target.value);  
    }

    const handleBirthDate = (e) => {
        if (birthDateError) {
            setBirthDateError(false);
        }
        setBirthDate(e.target.value); 
    }




    const handleCreateAccountClick = () => {
        const valid = validate();

        if (valid) {
            var dataObj = new NewAccount(firstName,lastName,email,phone,birthDate,username,password);
            CreateAccount(dataObj);
        }    
    };

    const handleCancelClick = () => {
        setcurrentPage("Login");
    };



    const validate = () => {
        var validInputs = true;
        const vPwd = IsPasswordValid(password);


        if (!IsValid(username)) {
          setUsernameError(!usernameError);
          validInputs = false;
        }

        if (vPwd === "empty") {
            setPasswordError(!passwordError);
            validInputs = false;
        } else if (vPwd === "weak") {
            setPasswordWeakError(!passwordError);
            validInputs = false;
        }

        if (!IsValid(email)) {
            setEmailError(!emailError);
            validInputs = false;
        }
        if (!IsValid(birthDate)) {
            setBirthDateError(!birthDateError);
            validInputs = false;
        }
        // if (phone === null || password === "") {
        //     setPasswordError(!passwordError);
        //     validInputs = false;
        // }
        if (!IsValid(confirmPassword)) {
            setConfirmPasswordError(!confirmPasswordError);
            validInputs = false;
        }
        if (!IsValid(firstName)) {
            setFirstNameError(!firstNameError);
            validInputs = false;
        }
        if (!IsValid(lastName)) {
            setLastNameError(!lastNameError);
            validInputs = false;
        }

        if (password !== confirmPassword) {
            setPasswordMatchError(!passwordMatchError);
            validInputs = false;
        }


        return validInputs;
    }

        console.log(sessionID);
    
        return(
            <div className='CreateAccount-display'>
                <div className='Header-display'>
                    DeckBuilder.Test Create Account    
                </div>

                <div className='Text-display'>
                    Please enter your information below
                </div>

               
                <div className='Form-display'>
                    <div className='TextInputRow-Style'>
                        <TextField onChange={handleFirstName} error={firstNameError} required id='createAccountFirstNameField' variant='outlined' label='First Name' color='primary' focused fullWidth></TextField>
                        {firstNameError && <div className='Error-Style'>
                            Password is required
                        </div>}
                    </div>

                    <div className='TextInputRow-Style'>
                        <TextField onChange={handleLastName} error={lastNameError} required id='createAccountLastNameField' variant='outlined' label='Last Name' color='primary' focused fullWidth></TextField>
                        {lastNameError && <div className='Error-Style'>
                            Password is required
                        </div>}
                    </div>
                
                    <div className='TextInputRow-Style'>
                        <TextField onChange={handleEmail} error={emailError} required id='createAccountEmailField' variant='outlined' label='Email' color='primary' type='email' focused fullWidth></TextField>
                        {emailError && <div className='Error-Style'>
                            Password is required
                        </div>}
                    </div>

                    <div className='TextInputRow-Style'>
                        <TextField onChange={handlePhone} error={phoneError} id='createAccountPhoneField' variant='outlined' label='Phone Number' color='primary' type='number' focused fullWidth></TextField>
                        {phoneError && <div className='Error-Style'>
                            Password is required
                        </div>}
                    </div>

                    <div className='TextInputRow-Style'>
                        <TextField onChange={handleBirthDate} error={birthDateError} required id='createAccountUsernameField' variant='outlined' label='Date of Birth' color='primary' type='date' focused fullWidth></TextField>
                        {birthDateError && <div className='Error-Style'>
                            Date of Birth is required
                        </div>}
                    </div>

                    <div className='TextInputRow-Style'>
                        <TextField onChange={handleUsername} error={usernameError} required id='createAccountUsernameField' variant='outlined' label='Username' color='primary' focused fullWidth></TextField>
                        {usernameError && <div className='Error-Style'>
                            Username is required
                        </div>}
                    </div>

                    <div className='TextInputRow-Style'>
                        <TextField onChange={handlePassword} error={passwordError} required id='createAccountPasswrdField' variant='outlined' label='Password' color='primary' type='password' focused fullWidth></TextField>
                        {passwordError && <div className='Error-Style'>
                            Password is required
                        </div>}
                    </div>

                    <div className='TextInputRow-Style'>
                        <TextField onChange={handleConfirmPassword} error={confirmPasswordError} required id='createAccountRepeatPasswordField' variant='outlined' label='Confirm Password' color='primary' type='password' focused fullWidth></TextField>
                        {confirmPasswordError && <div className='Error-Style'>
                            Confirmation password is required
                        </div>}
                        {passwordMatchError && <div className='Error-Style'>
                            Password and Confirmation Password must match
                        </div>}
                        {passwordWeakError && <div className='Error-Style'>
                            Password must be over 8 characters and contain: Upper, Lower, Numerical, and Special characters
                        </div>}
                        
                    </div>
                </div>

                
                <div>    
                    <Button variant='outlined' color='primary' onClick={handleCreateAccountClick}>Create Account</Button>
                    <Button variant='outlined' color='secondary' onClick={handleCancelClick}>Cancel</Button>
                </div>                 
            </div>           
        );
}