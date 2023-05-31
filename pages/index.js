import Head from 'next/head'

import Googlemaps from "../components/Googlemaps";
import Studio from "../components/Studio";
import Szklarnia from "../components/Szklarnia";


export default function Home(props) {
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
          content="Cynamonowe Studio. Wnętrze i szklarnia do wynajęcia. Katowice"
        />
        <meta
          property="og:description"
          content="Sesje Świąteczne w Cynamonowym studio. Od 7 listopada nasze studio oraz szklarnia zamienią się w krainę świątecznej magii"
        />
        <meta property="og:url" content="https://cynamonowe.com/" />
        <meta
          property="og:site_name"
          content="Cynamonowe Studio - wnętrze i szklarnia do wynajęcia. Katowice"
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
      <Studio />
      <Szklarnia />
      <Googlemaps />
    </>
  );
}
