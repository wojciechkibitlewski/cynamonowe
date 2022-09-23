import React from 'react'

import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import Box from '@mui/material/Box';
import styles from "../styles/Home.module.css";


const Googlemaps = () => {
    
  return (
    <Container sx={{ padding: '20px 0px'}}>
        <Typography
            className = {styles.naglTitle}
            variant="h6"
            component="div"
        >
            kontakt
        </Typography>
        <Typography
            className = {styles.mapsContactPhone}
            variant="body"
            component="div"
        >
            + 48 519 635 973
        </Typography>
        <Typography
            className = {styles.mapsContactAddress}
            variant="body"
            component="div"
            sx={{ marginBottom:'20px'}}
        >
            Ul. Śnieżyczek 11A, Katowice Podlesie
        </Typography>
        
        <iframe width="100%" height="400px" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?q=%C5%9Anie%C5%BCyczek%2011A%2C%20Katowice&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" title="Śnieżyczek 11A, Katowice" aria-label="Śnieżyczek 11A, Katowice"></iframe>
        
        
    </Container>
  )
}

export default Googlemaps