import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import './DefaultErrorPage.css';
import Axios from "axios";
import { useState, useEffect } from 'react';

export const DefaultErrorPage = ({ sessionID, setcurrentPage }) => {
    
    

        console.log(sessionID);
    
        return(
            <div>
                <p>Error Page</p>                          
            </div>           
        );
   
}