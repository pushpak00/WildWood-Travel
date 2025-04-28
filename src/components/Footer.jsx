import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


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
                <div className="bg-gray-900">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={2}>
                                <div className="mx-5 flex justify-center items-center">
                                    <img className="w-72 felx " src="logo\wildwood-travel-logo.png" />
                                </div>
                            </Grid>
                            <Grid color='white' size={2}>
                                <div className="flex flex-col space-y-1 py-3 text-xs">
                                    <span className="text-xl py-4">Quick Links</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">About Us</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Contact Us</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Terms of Use</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Disclaimer</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Careers</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Become Travel Business Associate</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Gallery</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Cookir Policy</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Travel & Tourism Training</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Travel E-Brochure</span>
                                </div>

                            </Grid>
                            <Grid color="white" size={2}>
                                <div className="flex flex-col space-y-1 py-3 text-xs">
                                    <span className="text-xl py-4">International Holidays</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Tour Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Best Time to Visit</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Top Places Internationally</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">International Tourism</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">International Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">America Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Bali Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Dubai Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Europe Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Mauritius Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">New Zealand Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Singapore Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Thailand Packages</span>




                                </div>
                            </Grid>
                            <Grid color="white" size={2}>
                                <div className="flex flex-col space-y-1 py-3 text-xs">
                                    <span className="text-xl py-4 ">India Holidays</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">India Tour Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Best Time to Visit</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Top Places in India</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">India Tourism</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Andaman Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">CharDham Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Goa Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Himachal Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Kashmir Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Kerala Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Ladakh Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">North East Tour Packages</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Rajasthan Packages</span>

                                </div>
                            </Grid>
                            <Grid color="white" size={2}>
                                <div className="flex flex-col space-y-1 py-3 text-xs">
                                    <span className="text-xl py-4 ">Travel Blogs</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">30 Weird Sports Played Across The World</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Top 10 Countries With The Best Food</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">50 Must Visit Places In The World Before You Die</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">10 Most forbidden islands of the world</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">How To Reach Bhutan From India</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Top Tourist Places in India</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">18 Places to Visit in Ooty</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">10 Best Snowfall Places in India</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">20 Hill Stations in India You Must Visit</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Top 9 Food Items That You Must Try in Karnataka</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">21 Magical Places to Visit Near Pune in Monsoon</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">List of 14 Famous Places to Visit in Shimla</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">25 Best Places to Visit in Himachal Pradesh</span>


                                </div>
                            </Grid>
                            <Grid color="white" size={2}>
                                <div className="flex flex-col space-y-1 py-3 text-xs">
                                    <span className="text-xl py-4 ">Contact Us</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Our Hotel</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Accomodation</span>
                                    <span className="text-gray-400 hover:text-white cursor-pointer">Reservations</span>

                                </div>
                            </Grid>


                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="py-4 px-4 bg-neutral-900 text-white flex gap-3">
                <span>Follow Us</span>

                <XIcon className="hover:bg-black rounded-sm cursor-pointer" />
                <LinkedInIcon className="hover:bg-blue-600 rounded-sm cursor-pointer" />
                <YouTubeIcon className="hover:bg-red-500 rounded-sm cursor-pointer" />
                <InstagramIcon className="hover:bg-pink-600 rounded-sm cursor-pointer" />
                <FacebookIcon className="hover:bg-blue-800 rounded-sm cursor-pointer" />
                <span className="flex self-end text-sm">© 2025 WildRoots Travel</span>
            </div>

        </>
    )
}

export default Footer
