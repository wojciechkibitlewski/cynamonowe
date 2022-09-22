import React from 'react'
import Link from 'next/link'

import {Grid} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <Container maxWidth="100%" sx={{backgroundColor:'#000', color:'#fff', textAlign: 'center', padding: '20px 0px'}}>
        <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
            <Typography variant="subtitle2" className="maven" gutterBottom >
                Studio: ul. Śnieżyczek 11A, Katowice Podlesie<br/>
                Zarezerwuj termin: +48 519 635 973
            </Typography>

            </Grid>
            <Grid item md={4} xs={12}>
                <Box className={styles.footerlink} sx={{marginBottom:'10px'}}>
                    <Link href="/polityka-prywatnosci"  >
                    Polityka prywatności
                    </Link>
                    <Link href="/regulamin-studio" >
                    Regulaminy
                    </Link>

                </Box> 
            </Grid>
            <Grid item md={4} xs={12}>
                <Link href="https://www.facebook.com/cynamonowestudio/" target="_blank" >
                    <FacebookIcon sx={{ color:' white', marginRight: '10px' }} />
                </Link>
                <Link href="https://www.instagram.com/cynamonowe_studio_szklarnia/"  target="_blank">
                    <InstagramIcon sx={{ color: 'white', marginRight: '10px'  }} />
                </Link>
                <Link href="mailto:cynamonowe.studio@gmail.com" >
                    <EmailIcon sx={{ color: 'white' }} />
                </Link>
            </Grid>

        </Grid>
    
    </Container>
  )
}

export default Footer