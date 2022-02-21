import React, { Component } from 'react';
import { Button, TextField, InputLabel, MenuItem, FormControl, Select, Box, Checkbox, FormControlLabel} from '@mui/material';
import './SearchPage.css';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { pink } from '@mui/material/colors';


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
    const [checked, setChecked] = React.useState([true, false]);

        const handleCMCDropdown = (event) => {
            setCMC(event.target.value);
        }
    
        const handleNameSearch = () => {

        }

        const handleRedCheckBox = (event) => {
            setChecked([event.target.checked, checked[1]]);
        }

        console.log(sessionID);
    
        return(
            <div className='Search-display'>
                <div style={{ height: 100, width: '85%' }}>
                    <FormControl sx={{minWidth: 320}}>
                        <TextField id="outlined-search" label="Card Name" type="search" color="secondary" onChange={handleNameSearch}/>
                    </FormControl>
                    
                    <FormControl sx={{minWidth: 100, marginLeft: '2%'}}>
                        <InputLabel id="simple-select-label">CMC</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
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
                
                 
                    <FormControlLabel
                            label="Child 1"
                            control={<Checkbox checked={checked[0]} onChange={handleRedCheckBox} sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                }}/>}
                        />
                   
                  
                </div>


                <div style={{ height: 600, width: '85%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    />
                </div>  
            </div>

                    
        );
   
}