import React from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function BeachSection() {
    return (
        <>
            <div class="relative">
                <img class="h-150 w-full object-cover" src="images\hawai-beach-1.jpg" alt="" />
                <div class="absolute inset-0 bg-gray-700 opacity-20"></div>
                <div class="absolute inset-0 flex items-center justify-center flex-col space-y-4">
                    <h2 class="text-white text-[5rem] font-bold md:text-[9rem] font-KaushanScript">Hawaii</h2> 
                    {/* <p class="text-white text-2xl font-bold md:text-3xl font-DancingScript">- Watzmann Mountain, Germany</p> */}
                    <Button sx={{fontSize: 20}} endIcon={<ArrowForwardIosIcon />} color='error' variant='contained' size="large">Explore more </Button>
                    </div>
                   
            </div>

            <div className="relative -mt-36">
                <Box 
                                    sx={{
                                        width: '100%',
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                                        gap: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Card sx={{ width: 300 }}>
                                        <CardMedia
                                            sx={{ height: 250 }}
                                            image="images/Phelgam.jpg"
                                            title="Pahalgam, Kashmir"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Pahalgam, Kashmir
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                India
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                
                                    <Card sx={{ width: 300 }}>
                                        <CardMedia
                                            sx={{ height: 250 }}
                                            image="images/ladakh.jpg"
                                            title="Ladakh"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Ladakh
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                India
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                
                                    <Card sx={{ width: 300 }}>
                                        <CardMedia
                                            sx={{ height: 250 }}
                                            image="images/tiger-nest.webp"
                                            title="Paro Taktsang"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Paro Taktsang
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Bhutan
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                    </Box>
            </div>
        </>
    )
}

export default BeachSection