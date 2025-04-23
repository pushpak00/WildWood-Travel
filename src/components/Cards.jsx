import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function Cards() {
    return (
        <>
        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700 "/>
            <div className="my-7">
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

                    <Card sx={{ width: 300 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image="images/rheinfall.jpg"
                            title="Rhine Falls"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Rhine Falls
                            </Typography>
                            Switzerland
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </Box>

                <Box 
                    sx={{
                        marginTop:4,
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
                            image="images/bangkok.jpg"
                            title="Bangkok"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Bangkok
                            </Typography>
                            Thailand
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

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
                            image="images/Marina Bay Sands from Gardens by the Bay Sunset.jpg"
                            title="Marina Bay"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Marina Bay
                            </Typography>
                            Singapore
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

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
                            image="images/newyork.jpg"
                            title="NewYork City"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            NewYork City
                            </Typography>
                            USA
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

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
                            image="images/jaipur.jpg"
                            title="Jaipur, Rajasthan"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Jaipur, Rajasthan
                            </Typography>
                            India
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

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

export default Cards