import Head from 'next/head'

import Googlemaps from "../components/Googlemaps";
import PriceStudio from "../components/PriceStudio";
import PriceSzklarnia from "../components/PriceSzklarnia";
import Testimonial from "../components/Testimonial";

export default function Kontakt(props) {
    
  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cynamonowe.com/" />
        <title>
          Kontakt. Wnętrze i szklarnia do wynajęcia. Katowice
        </title>

        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kontakt. Wnętrze i szklarnia do wynajęcia. Katowice"
        />
        <meta
          property="og:description"
          content="Wynajmij studio lub szklarnię do sesji fotograficznej. Skontaktuj się z nami telefonicznie lub mailowo"
        />
        <meta property="og:url" content="https://cynamonowe.com/" />
        <meta
          property="og:site_name"
          content="Kontakt. Wnętrze i szklarnia do wynajęcia. Katowice"
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

      </Head>
      <Testimonial />
      <PriceStudio />
      <PriceSzklarnia />
      <Googlemaps />
    </>
  )
  
}
