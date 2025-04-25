import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import XIcon from '@mui/icons-material/X';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function Footer() {
    return (
        <>
            <div class="relative">
                <img class="h-60 w-full object-cover" src="images\hawai-beach-1.jpg" alt="" />
                <div class="absolute inset-0 bg-gray-700 opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center flex-col space-y-4">

                </div>

            </div>
            <div className="relative bg-black">
                <div className=" bg-black">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={3}>
                                <div className="mx-5 flex justify-center"> 
                                    <img className="w-72 felx self-center" src="logo\wildwood-travel-logo.png"/>
                                </div>
                            </Grid>
                            <Grid color='white' size={3}>
                                <div className="flex flex-col space-y-1 py-3">
                                    <span className="text-2xl py-7">Quick Links</span>
                                    <span className="hover:underline">Our Hotel</span>
                                    <span className="hover:underline">Accomodation</span>
                                    <span className="hover:underline">Reservations</span>
                                    <span className="hover:underline">Meetings & Events</span>
                                    <span className="hover:underline">Local Area</span>
                                    <span className="hover:underline">Gallery</span>
                                </div>
                                
                            </Grid>
                            <Grid color="white" size={3}>
                            <div className="flex flex-col space-y-1 py-3">
                                    <span className="text-2xl py-7">Attractions</span>
                                    <span className="hover:underline">Our Hotel</span>
                                    <span className="hover:underline">Accomodation</span>
                                    <span className="hover:underline">Reservations</span>
                                   
                                </div>
                            </Grid>
                            <Grid color="white" size={3}>
                            <div className="flex flex-col space-y-1 py-3">
                                    <span className="text-2xl py-7">Contact Us</span>
                                    <span className="hover:underline">Our Hotel</span>
                                    <span className="hover:underline">Accomodation</span>
                                    <span className="hover:underline">Reservations</span>
                                    
                                </div>
                            </Grid>

                            
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="py-4 px-4 bg-gray-900 text-white flex">
                <span>Follow Us</span>
                <XIcon/>
            </div>
        </>
    )
}

export default Footer