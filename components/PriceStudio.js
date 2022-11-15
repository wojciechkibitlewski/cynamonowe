import React from "react";
import {Box, Container, Link,Typography } from "@mui/material";

import styles from "../styles/Home.module.css";

const PriceStudio = () => {
  return (
    <>
      <Container sx={{ padding: "40px 0px", width:'100%', backgroundColor: '#eee' }}>

        <Typography variant="h3" className={styles.naglTitle} gutterBottom >
        Cena za wynajem studia
        </Typography>
        <Typography variant="h4" className={styles.price} gutterBottom >
        150 zł/brutto za godzinę
        </Typography>
        
        <Box sx={{textAlign: 'center', marginTop:'30px', marginBottom: '10px'}} >
            <Link 
            href="./regulamin-studio" 
            title="Regulamin studia Cynamonowe.com">
                Regulamin studia Cynamonowe.com
            </Link>
        </Box>
        <Typography variant="caption" display="block" gutterBottom sx={{textAlign: 'center'}} >
        * minimalny czas wynajmu - 2 godziny
        </Typography>
      </Container>
    </>
  )
}

export default PriceStudio