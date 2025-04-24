import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function Forms() {

    const [budgetPerPerson, setbudgetPerPerson] = React.useState('');

    const handleChange = (event) => {
        setbudgetPerPerson(event.target.value);
    };
    return (
        <>
            <div className="my-4 py-5 bg-amber-300 bg-no-repeat bg-center bg-[length:1600px_1000px] bg-[url(images/jungle-top-view.jpg)]">
                <span className="flex justify-center text-white text-2xl">Can’t wait to explore and holiday in and around...</span>
                <div className="flex flex-col items-center justify-center ">

                    <Box
                        className="flex flex-col md:flex-row"
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField sx={{
                            input: {
                                color: "white",

                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },

                            },
                        }}
                            id="outlined-basic" label="Destination" variant="outlined" size="small" />


                        <FormControl sx={{ input: {
                                            color: "white",
            
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            color: 'white',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
            
                                        }, m: 1, width: 180 }} fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Budget Per Person</InputLabel>
                            <Select

                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={budgetPerPerson}
                                label="Budget Per Person"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Less than ₹ 30,000</MenuItem>
                                <MenuItem value={20}>₹ 30,000 to ₹ 1Lac</MenuItem>
                                <MenuItem value={30}>₹1 Lac to ₹2 Lac</MenuItem>
                                <MenuItem value={40}>More than ₹2 Lac</MenuItem>
                            </Select>
                        </FormControl>




                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DemoContainer  components={['DatePicker']}>
                                <DatePicker
                                    
                                    
                                    slotProps={{
                                        textField: {
                                            size: "small",
                                            fullWidth: true,
                                            label: "Date of travel",
                                            sx:{
                                                '& .MuiInputBase-input': {
                                                    color: "white",
                    
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: 'white',
                                                },
                                                // '& .MuiOutlinedInput-input': {
                                                //     color: 'white',
                                                // },
                                                '& .MuiOutlinedInput-root': {
                                                    
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                    
                                                },
                                            }

                                        },
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>


                        <Button sx={{ marginLeft: 1, marginTop: 1, display: 'flex', height: 40 }} color="success" variant="contained" size="small" startIcon={<SearchIcon />}>
                            Search
                        </Button>


                    </Box>


                </div>
            </div>
        </>
    )
}

export default Forms