import React from "react";
import {Container, Grid, Typography} from "@mui/material";
import Image from 'next/future/image';  

import styles from "../styles/Home.module.css";
import stylesImage from "../styles/Image.module.css";

import studioA from '../images/splash/IMG_9583-768x512.jpg';
import studioB from '../images/splash/IMG_9576-768x512.jpg';
import studioC from '../images/splash/IMG_9571-768x512.jpg';
import studioD from '../images/splash/IMG_9570-768x512.jpg';
import studioE from '../images/splash/IMG_9569-768x512.jpg';
import studioF from '../images/splash/IMG_9561-768x512.jpg';


const Studio = () => {
    return (
        <>
          <Container maxWidth="lg" sx={{ padding: "20px 0px" }}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}  sx={{padding: '20px'}}>
                    <Typography variant="h3" className={styles.homeTitle} gutterBottom >
                        Cynamonowe Studio
                    </Typography>
                    <Typography className={styles.homeTextCenter} gutterBottom >
                        Wnętrze do wynajęcia w Katowicach. Jasna i klimatyczna przestrzeń, doskonała do sesji i warsztatów fotograficznych oraz do nagrań filmowych.
                    </Typography>
                </Grid>
                
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={studioA} layout="fill" className={stylesImage.image} placeholder="blur" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={studioB} layout="fill" className={stylesImage.image} placeholder="blur" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={studioC} layout="fill" className={stylesImage.image} placeholder="blur" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={studioD} layout="fill" className={stylesImage.image} placeholder="blur" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={studioE} layout="fill" className={stylesImage.image} placeholder="blur" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={studioF} layout="fill" className={stylesImage.image} placeholder="blur" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk"/>
                </div>
                </Grid>               
    
            </Grid>
          </Container>
        </>
      );
}

export default Studio