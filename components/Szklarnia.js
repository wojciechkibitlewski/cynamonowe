import React from "react";
import Image from 'next/future/image';  
import {Container, Grid, Typography} from "@mui/material";
import styles from "../styles/Home.module.css";
import stylesImage from "../styles/Image.module.css";

import szklarniaA from '../images/splash/szklarnia-katowice-01-768x512.jpg'
import szklarniaB from '../images/splash/szklarnia-katowice-02-768x512.jpg'
import szklarniaC from '../images/splash/szklarnia-katowice-03-768x512.jpg'
import szklarniaD from '../images/splash/szklarnia-katowice-04-768x512.jpg'


const Szklarnia = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "20px 0px" }}>
        <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <Typography variant="h3" className={styles.naglTitle} gutterBottom >
                    Szklarnia do wynajęcia
                </Typography>
                <Typography className={styles.textBody} gutterBottom >
                    Pierwsza w Katowicach i całej Aglomeracji szklarnia przeznaczona do sesji fotograficznej.
                </Typography>
            </Grid>
            
            <Grid item md={6} xs={12}>
              <div className={stylesImage.imageContainer}>
                <Image src={szklarniaA} layout="fill" className={stylesImage.image} placeholder="blur" alt="Szklarnia do wynajęcia Katowice"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={stylesImage.imageContainer}>
                <Image src={szklarniaB} layout="fill" className={stylesImage.image} placeholder="blur" alt="Szklarnia sesja fotograficzna Katowice"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={stylesImage.imageContainer}>
                <Image src={szklarniaC} layout="fill" className={stylesImage.image} placeholder="blur" alt="Szklarnia sesja fotograficzna Katowice"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={stylesImage.imageContainer}>
                <Image src={szklarniaD} layout="fill" className={stylesImage.image} placeholder="blur" alt="Szklarnia sesja fotograficzna Katowice"/>
              </div>
            </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Szklarnia;
