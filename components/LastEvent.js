import React from "react";
import Image from 'next/future/image';  

import {Container, Grid, Typography} from "@mui/material";
import styles from "../styles/Home.module.css";
import stylesImage from "../styles/Image.module.css";

import imageA from '../images/splash/sesje_swiateczne_01-768x512.jpg';
import imageB from '../images/splash/sesje-swiateczne-02-768x701.jpg';
import imageC from '../images/splash/sesje-swiateczne-03-768x512.jpg';
import imageD from '../images/splash/sesje-swiateczne-04-768x512.jpg';


const LastEvent = () => {
    return (
        <>
          <Container maxWidth="lg" sx={{ padding: "20px 0px" }}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12} sx={{padding: '20px'}}>
                    <Typography variant="h3" className={styles.homeTitle} gutterBottom >
                        Sesje świąteczne w cynamonowym Studio
                    </Typography>
                    <Typography className={styles.homeTextCenter} gutterBottom >
                    <b>Od 7 listopada nasze studio oraz szklarnia zamienią się w krainę świątecznej magii.</b>
                    </Typography>
                    <Typography className={styles.homeTextCenter} gutterBottom >
                    W szklarni i przed nią pojawią się piękne zielone choinki, w środku zielony, klimatyczny dywan oraz mnóstwo zielonych i czerwonych dodatków świątecznych. Jest elektryczna koza. Będą też dodatkowe lampki.<br/><br/>
                    W studio królować będzie świąteczna biel: postawimy kominek ze świecami, będą gwiazdy i mnóstwo klimatycznych czerwonych, zielonych i brązowych dodatków .<br/><br/>
                    <b>Zapraszamy do rezerwacji terminów.</b> Dostępne są dni <b>od poniedziałku do piątku od godz. 10:00.</b> W studiu światło pozwoli robić zdjęcia do godz. 14:00-15:00. W szklarni – przy lampkach i świecach – spokojnie można robić zdjęcia do godz. 19:00 .<br/><br/>
                    Świąteczne dekoracje dostępne od 7 listopada. Cena wynajmu: 150 zł za godzinę.
                    </Typography>
                </Grid>                
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={imageA} layout="fill" className={stylesImage.image} placeholder="blur" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={imageB} layout="fill" className={stylesImage.image} placeholder="blur" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={imageC} layout="fill" className={stylesImage.image} placeholder="blur" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia"/>
                </div>
                </Grid>
                <Grid item md={6} xs={12}>
                <div className={stylesImage.imageContainer}>
                    <Image src={imageD} layout="fill" className={stylesImage.image} placeholder="blur" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia"/>
                </div>
                </Grid>
    
            </Grid>
          </Container>
        </>
      );
}

export default LastEvent