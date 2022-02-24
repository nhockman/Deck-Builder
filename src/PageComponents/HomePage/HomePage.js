import React, { Component } from 'react';
import './HomePage.css';
import Axios from "axios";
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, TextField, Typography, IconButton, Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { Menu, Home, Logout } from '@mui/icons-material';

import { HomePageContent } from './HomeChildPages/HomePageContent/HomePageContent'
import { SearchPage } from './HomeChildPages/SearchPage/SearchPage'
import { AboutPage } from './HomeChildPages/AboutPage/AboutPage'
import { DecksPage } from './HomeChildPages/DecksPage/DecksPage'
import { AccountPage } from './HomeChildPages/AccountPage/AccountPage'
import { LogoutModal } from './LogoutModal'


export const HomePage = ({ sessionID, setloginStatus, setcurrentPage }) => {
        const [childPage, setChildPage] = useState("Home");

        const [openLogoutModal, setOpenLogoutModal] = useState(false);
    
      

        const handleLogout = () => {
            setOpenLogoutModal(true);



           // setloginStatus("signedOut");
            //setcurrentPage("Login");
        }

        
        

        console.log(sessionID);
    
        return(
            <div className='Home-display'>
                <AppBar
                    color="primary"
                    className='AppBar'
                >
                    <Toolbar >
                        <IconButton
                            edge="start"
                            onClick={() => setChildPage("Home")}
                            color="inherit"
                            aria-label="home"
                        >
                           <Home/>
                           
                        </IconButton>

                        
                        <Typography variant="h4" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            DeckBuilder.Test
                        </Typography>

                        <Box mr={2}>
                           <IconButton color="inherit" onClick={() => setChildPage("Search")}>
                                Search Cards
                            </IconButton> 
                        </Box>
                        
                        <Box mr={2}>
                            <IconButton color="inherit" onClick={() => setChildPage("Decks")}>
                                Decks
                            </IconButton>
                        </Box>

                        <Box mr={2}>
                            <IconButton color="inherit" onClick={() => setChildPage("Account")}>
                                Account
                            </IconButton>
                        </Box>
                        
                        <Box mr={2}>
                            <IconButton color="inherit" onClick={() => setChildPage("About")}>
                                About
                            </IconButton>  
                        </Box>
                        




                        <IconButton
                            edge="end"
                            onClick={handleLogout}
                            color="inherit"
                            aria-label="logout"
                        >
                            <Logout/>

                        </IconButton>
                    </Toolbar>
                </AppBar>    

                

                {childPage == "Home" && <HomePageContent sessionID={sessionID}/>}

                {childPage == "Search" && <SearchPage sessionID={sessionID}/>}

                {childPage == "Decks" && <DecksPage sessionID={sessionID}/>}

                {childPage == "Account" && <AccountPage sessionID={sessionID}/>}

                {childPage == "About" && <AboutPage sessionID={sessionID}/>}
                

                {openLogoutModal && <LogoutModal sessionID={sessionID} setloginStatus={setloginStatus} setcurrentPage={setcurrentPage} openLogoutModel={openLogoutModal} setOpenLogoutModal={setOpenLogoutModal}/>}


            </div>           
        );
   
}