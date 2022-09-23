import React from 'react'
import Head from 'next/head'

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";

const Prywatnosc = () => {
  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cynamonowe.com/" />
        <title>
          Cynamonowe.com. Wnętrze i szklarnia do wynajęcia. Katowice
        </title>

        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Polityka prywatności. Cynamonowe Studio"
        />
        <meta
          property="og:description"
          content="Sesje Świąteczne w Cynamonowym studio. Od 7 listopada nasze studio oraz szklarnia zamienią się w krainę świątecznej magii"
        />
        <meta property="og:url" content="https://cynamonowe.com/" />
        <meta
          property="og:site_name"
          content="Polityka prywatności. Cynamonowe Studio"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/cynamonowestudio"
        />
        <meta
          property="article:modified_time"
          content="2022-09-18T11:59:02+00:00"
        />
        <meta
          property="og:image"
          content="https://cynamonowe.com/images/splash/IMG_9583-768x512.jpg"
        />
                <link rel="icon" href="images/splash/cropped-cynamonowe-ico-white-32x32.png" sizes="32x32" />
        <link rel="icon" href="images/splash/cropped-cynamonowe-ico-white-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="images/splash/cropped-cynamonowe-ico-white-180x180.png" />   
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700;900&display=swap" rel="stylesheet" />

      </Head>
    <Container sx={{ padding: "100px 10px", width:'100%' }}>
        <Typography variant="h3" className={styles.naglTitle} gutterBottom >
        POLITYKA PRYWATNOŚCI
        </Typography>
        <Typography variant="body" gutterBottom >
        1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług Cynamonowe.com  – szlarnia i studio do wynajęcia<br/><br/>
        2. Administratorem danych osobowych zawartych w serwisie jest AWRJ Agnieszka Mandal z siedzibą w Katowicach, ul. Śnieżyczek 11A, 40-748 Katowice, numer NIP: 9542513284, REGON: 240431961.<br/><br/>
        3. W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu danych osobom nieupoważnionym. Kontrolujemy ich wykonywanie i stale sprawdzamy ich zgodność z odpowiednimi aktami prawnymi – ustawą o ochronie danych osobowych, ustawą o świadczeniu usług drogą elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i aktach prawa wspólnotowego.<br/><br/>
        4. Dane Osobowe przetwarzane są na podstawie zgody wyrażonej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy stronami umowy.<br/><br/>
        5. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniach w następujący sposób:<br/>
        * poprzez dobrowolnie wprowadzone w formularzach informacje.<br/>
        * poprzez gromadzenie plików „cookies”.<br/>
        6. Serwis zbiera informacje dobrowolnie podane przez użytkownika.<br/><br/>
        7. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza np. w celu dokonania procesu obsługi kontaktu informacyjnego.<br/><br/>
        8. Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani udostępnione osobom trzecim, zgodnie z przepisami Ustawy o ochronie danych osobowych.<br/><br/>
        9. Do danych zawartych w formularzu przysługuje wgląd osobie fizycznej, która je tam umieściła. Osoba ta ma również praw do modyfikacji i zaprzestania przetwarzania swoich danych w dowolnym momencie.<br/><br/>
        10. Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności serwisu, na które może wpłynąć rozwój technologii internetowej, ewentualne zmiany prawa w zakresie ochrony danych osobowych oraz rozwój naszego serwisu internetowego. O wszelkich zmianach będziemy informować w sposób widoczny i zrozumiały.<br/><br/>
        </Typography>

    </Container>
    </>
  )
}

export default Prywatnosc