import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ---------< MUI IMPORTS >----------------
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
  }));
  

function AboutTab() {

    const user = useSelector(store => store.user)

    const classes = useStyles();


    // ======< IMAGE DATA >==================
    const itemData = [
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4729.jpg",
            title: 'First',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4752.jpg",
            title: 'Second',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4755.jpg",
            title: 'Third',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4765.jpg",
            title: 'Fourth',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4767.jpg",
            title: 'Fifth',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4791.jpg",
            title: 'Sixth',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4776-scaled.jpg",
            title: 'Seventh',
        },
        {
            img: "https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4793.jpg",
            title: 'Eighth',
        },
    ]

    return (
        <>
            <Container>
                {/*========< START HEADING CARD >================*/}
                <Card sx={{ bgcolor: '#41414c', color: '#FFFFFF'}}>
                    <CardContent>
                        <Typography variant="h3" align="center">
                            ABOUT THE TRUK
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h6" align="center">
                            Fit Truk is a fully equipped, mobile, outdoor gym complete with squat rack, cable station, landmine, pull up and dip bars, TRX, medicine ball wall and immersive sound and lighting experience.
                        </Typography>
                    </CardContent>
                </Card>

                {/*========< START HERE'S WHAT IS ON THE TRUK CARD >================*/}
                <Card sx={{ bgcolor: '#41414c', color: '#FFFFFF'}}>
                    <Typography variant="h6" align="center">
                        HERE'S WHAT IS ON THE TRUK:
                    </Typography>

                    {/* ========< HIGHLIGHTS ACCORDION >============= */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>HIGHLIGHTS</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Mobile Sign in" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Workout Displays" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Water Bottle Filler" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Heat/AC" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Office workstation for private health plans" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="TV's for workout experience" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="State-of-the-art sound system" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    {/* ========< EQUIPMENT ACCORDION >============= */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>EQUIPMENT</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails className={classes.details}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridAutoFlow: 'row',
                                    gap: 1,
                                }}
                            >
                                <Grid sx={{ gridColumn: '1', }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Squat Rack" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Cable Station" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Pull-Up Bars" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Plyo Boxes" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Dip Bars" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Battle Rope" />
                                    </ListItem>
                                </Grid>
                                <Grid sx={{ gridColumn: '2 / 3' }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary="2 Rogue Landmines" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Trx Trainer" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Tank Sled" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Dumbbell Set" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="2 Rogue Benches" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="3 Barbells" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="2 Training Bars" />
                                    </ListItem>
                                </Grid>
                                <Grid sx={{ gridColumn: '3 / 3' }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Trap Bar" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Bumper Plates" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Kettle Bell Set" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Resistance Bands" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Medicine Balls" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Jump Ropes" />
                                    </ListItem>
                                </Grid>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* ===========< AUDIO/VIDEO ACCORDION >=============== */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>AUDIO/VIDEO</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Pioneer DMG-WT8600NEX Head Unit with 10.1” Floating Display" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Kicker Marine Amplifiers" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="8 Kicker 6.5” Marine Lighted Marine Speakers" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="2 Bazooka Marine Subwoofers" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="2 Flat Screen LED Displays" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    {/* ===========< LIGHTING ACCORDION >=============== */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>LIGHTING</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Million Color App Controlled LED Under-glow Lighting" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="6 LED Scene Lights" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="2 LED Light Bars" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="LED Lighting Throughout Interior Space" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    {/* ===========< SECURITY ACCORDION >=============== */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>SECURITY</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Viper Audible Alarm System with Text Alerts" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="App Controlled Lock/Unlock, GPS Location/Speed Tracking" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Remote Start" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Low Battery Alerts" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    {/* ===========< INTERIOR AMENITIES ACCORDION >=============== */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>INTERIOR AMENITIES</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Desk and Workspace" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Heated and Cooled Rear Workspace" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Interior Audio Controls" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Mini Fridge" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Water Bottle Filler" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="360 Camera System For Driver- Always on with Video Storage" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Front Touchscreen Head Unit" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="Custom Fit Truk Seats" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    {/* ===========< POWER ACCORDION >=============== */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>POWER</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="7 Onboard Batteries" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="400 Watt Solar Panel System" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText primary="110 Power Inverter" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    {/* ===========< PICTURES ACCORDION >=============== */}
                    <Accordion sx={{ bgcolor: '#6d6e71', color: '#F0FFFF', fontWeight: 'bold' }}>
                        {/* ------< SUMMARY >-------- */}
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography sx={{color: '#80bd02'}}>PICTURES</Typography>
                        </AccordionSummary>
                        {/* ------< DETAILS >-------- */}
                        <AccordionDetails>
                            <ImageList>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy" />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </AccordionDetails>
                    </Accordion>

                </Card>
                {/*======< END HERES WHAT'S ON THE TRUK CARD >======================== */}
            </Container>
        </>
    );
}

export default AboutTab;
