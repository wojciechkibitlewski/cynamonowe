import React from "react";
import {Box, Container, Link, Typography } from "@mui/material";

import styles from "../styles/Home.module.css";

const PriceSzklarnia = () => {
    return (
        <>
          <Container sx={{ padding: "40px 0px", width:'100%' }}>
    
            <Typography variant="h3" className={styles.naglTitle} gutterBottom >
            Cena za wynajem szklarni
            </Typography>
            <Typography variant="h4" className={styles.price} gutterBottom >
            100 zł/brutto za godzinę
            </Typography>
            <Typography variant="h4" className={styles.price} gutterBottom >
            Od 7 listopada: 150 zł brutto za godzinę
            </Typography>
            <Box sx={{textAlign: 'center', marginTop:'30px', marginBottom: '10px'}} >
                <Link 
                href="./regulamin-szklarnia" 
                title="Regulamin studia Cynamonowe.com">
                    Regulamin szklarni Cynamonowe.com
                </Link>
            </Box>
            <Typography variant="caption" display="block" gutterBottom sx={{textAlign: 'center'}} >
            * minimalny czas wynajmu - 1 godzina
            </Typography>
            <Typography variant="caption" display="block" gutterBottom sx={{textAlign: 'center'}} >
            ** wynajem zaplecza socjalnego/przebieralni – 50 zł/godzinę
            </Typography>
          </Container>
        </>
      )
}

export default PriceSzklarnia