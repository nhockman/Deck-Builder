import React, { Component } from 'react';
import { Button, TextField, InputLabel, MenuItem, FormControl, Select, Box, Checkbox, FormControlLabel, FormGroup, FormLabel} from '@mui/material';
import './SearchPage.css';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IsValid } from '../../../../Business/Helpers/Validation';

import { pink, green, red, blue, yellow, grey, purple } from '@mui/material/colors';


const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    { 
        field: 'firstName', 
        headerName: 'First name',
        width: 130 
    },
    { 
        field: 'lastName', 
        headerName: 'Last name', 
        width: 130 
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const renderArr = () => {
        const arr = ["T","e","s","t"];
        var string = "";

        arr.forEach(element => {
            string += element;
        });

        return(string);
   
  }

  const rows = [
    { id: 1, lastName:renderArr(), firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export const SearchPage = ({ sessionID }) => {
    const [CMC, setCMC] = useState('');

    //white, black, blue, red, green
    const [selectedColors, setSelectedColors] = useState([false, false, false, false, false]);

    const [cardNameSearch, setCardNameSearch] = useState("");

    const [checkedBlue, setCheckedBlue] = React.useState([true, false]);
    const [checkedBlack, setCheckedBlack] = React.useState([true, false]);
    const [checkedWhite, setCheckedWhite] = React.useState([true, false]);
    const [checkedRed, setCheckedRed] = React.useState([true, false]);
    const [checkedGreen, setCheckedGreen] = React.useState([true, false]);

        const handleCMCDropdown = (event) => {
            setCMC(event.target.value);
        }
        const handleNameSearch = (event) => {
            setCardNameSearch(event.target.value);
        }
        const handleRedCheckBox = (event) => {
            setCheckedRed([checkedRed[0], event.target.checked]);
            setSelectedColors([checkedWhite[1],checkedBlack[1],checkedBlue[1],event.target.checked,checkedGreen[1]]);
        }
        const handleBlueCheckBox = (event) => {
            setCheckedBlue([checkedBlue[0], event.target.checked]);
            setSelectedColors([checkedWhite[1],checkedBlack[1],event.target.checked,checkedRed[1],checkedGreen[1]]);
        }
        const handleBlackCheckBox = (event) => {
            setCheckedBlack([checkedBlack[0], event.target.checked]);
            setSelectedColors([checkedWhite[1],event.target.checked,checkedBlue[1],checkedRed[1],checkedGreen[1]]);
        }
        const handleWhiteCheckBox = (event) => {
            setCheckedWhite([checkedWhite[0], event.target.checked]);
            setSelectedColors([event.target.checked,checkedBlack[1],checkedBlue[1],checkedRed[1],checkedGreen[1]]);
        }
        const handleGreenCheckBox = (event) => {
            setCheckedGreen([checkedGreen[0], event.target.checked]);
            setSelectedColors([checkedWhite[1],checkedBlack[1],checkedBlue[1],checkedRed[1],event.target.checked]);
        }


        const handleSearch = () => {
            const validInputs = validate();

            console.log(validInputs);
        }

        const handleClear = (event) => {
            setCMC("");

            setCardNameSearch("");
            document.getElementById("search").value="";

            setSelectedColors([false,false,false,false,false]);
            setCheckedGreen([checkedGreen[0],false]);
            setCheckedWhite([checkedWhite[0],false]);
            setCheckedBlack([checkedBlack[0],false]);
            setCheckedBlue([checkedBlue[0],false]);
            setCheckedRed([checkedRed[0],false]);



        }


        const validate = () => {
            let valid = false;

            if (IsValid(CMC)
             || IsValid(cardNameSearch) 
             || selectedColors[0] 
             || selectedColors[1] 
             || selectedColors[2] 
             || selectedColors[3] 
             || selectedColors[4])
             {
                valid = true;
             }

             return valid;
        }

        //console.log(sessionID);
    
        return(
            <div className='Search-display'>
                <div style={{ height: '15%', width: '85%' }}>
                    <FormControl sx={{minWidth: 320}}>
                        <TextField id="search" label="Card Name" type="search" color="secondary" onChange={handleNameSearch}/>
                    </FormControl>
                    
                    <FormControl sx={{minWidth: 100, marginLeft: '2%'}}>
                        <InputLabel id="simple-select-label">CMC</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="CMC"
                            value={CMC}
                            label="Age"
                            onChange={handleCMCDropdown}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                        </Select>
                    </FormControl>
                
                 
                    <FormControl sx={{ ml: 3, borderColor: purple[500], borderWidth: 2, border: '1px dashed purple' }} component="fieldset" variant="standard">
                        <FormLabel sx={{color: purple[500]}}  component="legend">Card Color/s</FormLabel>
                        <FormGroup sx={{pl: 1}}>
                            <FormControlLabel sx={{color: yellow[200]}}
                                control={
                                <Checkbox checked={checkedWhite[1]} onChange={handleWhiteCheckBox} name="white" sx={{
                                    color: yellow[200],
                                    '&.Mui-checked': {
                                      color: yellow[300],
                                    },
                                  }} />
                                }
                                label="White"
                            />
                            <FormControlLabel sx={{color: blue[300]}}
                                control={
                                <Checkbox checked={checkedBlue[1]} onChange={handleBlueCheckBox} name="blue" sx={{
                                    color: blue[400],
                                    '&.Mui-checked': {
                                      color: blue[500],
                                    },
                                  }}/>
                                }
                                label="Blue"
                            />
                            <FormControlLabel sx={{color: grey[500]}}
                                control={
                                <Checkbox checked={checkedBlack[1]} onChange={handleBlackCheckBox} name="black" sx={{
                                    color: grey[600],
                                    '&.Mui-checked': {
                                      color: grey[700],
                                    },
                                  }}/>
                                }
                                label="Black"
                            />
                            <FormControlLabel sx={{color: red[500]}}
                                control={
                                <Checkbox checked={checkedRed[1]} onChange={handleRedCheckBox} name="red" sx={{
                                    color: red[600],
                                    '&.Mui-checked': {
                                      color: red[700],
                                    },
                                  }}/>
                                }
                                label="Red"
                            />
                            <FormControlLabel sx={{color: green[500]}}
                                control={
                                <Checkbox checked={checkedGreen[1]} onChange={handleGreenCheckBox} name="green" sx={{
                                    color: green[600],
                                    '&.Mui-checked': {
                                      color: green[700],
                                    },
                                  }}/>
                                }
                                label="Green"
                            />
                        </FormGroup>
                      
                    </FormControl>

                
                  <Box sx={{ml:4}}>
                      <Button variant='outlined' color='primary' onClick={handleSearch}>Search</Button>
                    <Button variant='outlined' color='secondary' onClick={handleClear}>Clear</Button>
                  </Box>
                    
                  
                   
                  
            </div>
            

            <Box sx ={{ mt: '2%', height: 600, width: '85%' }}>
            <FormLabel sx={{color: purple[500]}}  component="legend">Search Results</FormLabel>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    />
               
            </Box>
                
            </div>

                    
        );
   
}