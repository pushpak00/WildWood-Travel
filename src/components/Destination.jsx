import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function Destination() {
    return (
        <>
            <div className="my-6 mx-8 md:flex md:mx-52 md:my-14" >
                <div className="flex justify-center">
                    <img className="w-96 rounded-2xl" src="images/switzerland-1.jpg" alt="Switzerland" />
                </div>

                <div className="md:mx-32 flex flex-col items-center justify-center">
                    <span className="text-2xl py-6">Where’s Your Wild?</span>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                    >
                        
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Destination"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                       
                    </Paper>

                </div>
            </div>

        </>
    )
}

export default Destination