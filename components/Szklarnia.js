import React from "react";
import Image from 'next/image';
import {Container, Grid, Typography} from "@mui/material";
import styles from "../styles/Home.module.css";

const Szklarnia = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "20px 0px" }}>
        <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <Typography variant="h3" className={styles.homeTitle} gutterBottom >
                    Szklarnia do wynajęcia
                </Typography>
                <Typography className={styles.homeTextCenter} gutterBottom >
                    Pierwsza w Katowicach i całej Aglomeracji szklarnia przeznaczona do sesji fotograficznej.
                </Typography>
            </Grid>
            
            <Grid item md={6} xs={12}>
              <Image className={styles.images} src="images/splash/szklarnia-katowice-01-768x512.jpg" title="Szklarnia do wynajęcia Katowice" alt ="Szklarnia sesja fotograficzna Katowice" loading="lazy"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <img className={styles.images} src="images/splash/szklarnia-katowice-02-768x512.jpg" title="Szklarnia do wynajęcia Katowice" alt ="Szklarnia sesja fotograficzna Katowice" loading="lazy"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <img className={styles.images} src="images/splash/szklarnia-katowice-03-768x512.jpg" title="Szklarnia do wynajęcia Katowice" alt ="Szklarnia sesja fotograficzna Katowice" loading="lazy"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <img className={styles.images} src="images/splash/szklarnia-katowice-04-768x512.jpg" title="Szklarnia do wynajęcia Katowice" alt ="Szklarnia sesja fotograficzna Katowice" loading="lazy"/>
            </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Szklarnia;
