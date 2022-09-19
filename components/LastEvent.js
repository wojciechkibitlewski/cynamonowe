import React from "react";
import {Container, Grid, Typography} from "@mui/material";
import styles from "../styles/Home.module.css";

const LastEvent = () => {
    return (
        <>
          <Container maxWidth="lg" sx={{ padding: "20px 0px" }}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12} sx={{padding: '10px'}}>
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
                    <img className={styles.images} src="images/splash/sesje_swiateczne_01-768x512.jpg" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/sesje-swiateczne-02-768x701.jpg" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/sesje-swiateczne-03-768x512.jpg" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/sesje-swiateczne-04-768x512.jpg" title="Sesje świąteczne. Katowice" alt ="Sesje świąteczne. Szklarnia do wynajęcia. Studio do wynajęcia" loading="lazy"/>
                </Grid>
                
    
            </Grid>
          </Container>
        </>
      );
}

export default LastEvent