import React from "react";

import {Avatar, Container, Grid, Typography} from "@mui/material";

import styles from "../styles/Home.module.css";

const Testimonial = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{margin: '20px auto'}} >

        <Typography variant="body2" className={styles.textTestimonial} gutterBottom >
        Cynamonowe studio  to jasna i klimatyczna przestrzeń, w której zrobisz sesję zdjęciową, przeprowadzisz warsztaty fotograficzne lub nagrasz swój film na youtuba. Szukasz niebanalnego wnętrza w Katowicach? Zapraszamy Cię do nas
        </Typography>
        
        <Grid container spacing={2} sx={{maxWidth: '300px', marginRight: 'auto', marginLeft: 'auto'}}> 
          <Grid item md={4} xs={4}>
            <Avatar alt="Agnieszka Mandal" src="images/splash/tdwx-IMG-0703-150x150.jpg" sx={{ marginLeft:'30px', width:'50px', height: '50px'}}/>
          </Grid>
          <Grid item md={8} xs={8}>
            <Typography className={styles.testimonialNameLast}>
            Agnieszka Mandal
            </Typography>
            <Typography className={styles.testimonialWho } gutterBottom >
            właściciel
            </Typography>
          </Grid>
        </Grid> 
      </Container>
    </>
  )
}

export default Testimonial