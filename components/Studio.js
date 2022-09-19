import React from "react";
import {Container, Grid, Typography} from "@mui/material";
import styles from "../styles/Home.module.css";

const Studio = () => {
    return (
        <>
          <Container maxWidth="lg" sx={{ padding: "20px 0px" }}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <Typography variant="h3" className={styles.homeTitle} gutterBottom >
                        Cynamonowe Studio
                    </Typography>
                    <Typography className={styles.homeTextCenter} gutterBottom >
                        Wnętrze do wynajęcia w Katowicach. Jasna i klimatyczna przestrzeń, doskonała do sesji i warsztatów fotograficznych oraz do nagrań filmowych.
                    </Typography>
                </Grid>
                
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/IMG_9583-768x512.jpg" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/IMG_9576-768x512.jpg" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/IMG_9571-768x512.jpg" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/IMG_9570-768x512.jpg" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/IMG_9569-768x512.jpg" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk" loading="lazy"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className={styles.images} src="images/splash/IMG_9561-768x512.jpg" title="Wnętrze, studio do wynajęcia. Katowice" alt ="Studio fotograficzne. Katowice. Śląsk" loading="lazy"/>
                </Grid>
    
            </Grid>
          </Container>
        </>
      );
}

export default Studio