import Head from "next/head";
import Statistics from "./_components/Statistics";
import TestimonialSection from "./_components/Testimonial";
import Footer from "./_components/Footer";
import FAQs from "./_components/FAQs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Collection from "./services/_components/Collection";
import { YTVideo } from "./about/_components/Video";
import LogoSlider from "./about/_components/LogoSlider";
// import Offers from "./offers/_components/Offers";
// import { getAllOffer } from "@/service/offers/offers.server";
import HomeOffer from "./_components/HomeOffer";


export default async function Home() {
    // const offers = await getAllOffer();
  
  return (
   <div>
     <Head>
        <title>Brand Build Navigation</title>
        <meta name="description" content="Brand Build Navigation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero/>
      <HomeOffer/>
      {/* <Offers offers={offers} /> */}
      <Statistics />
      <Collection/>
      <YTVideo  ytVideoId="AaiSd3SrU6A" />
      <LogoSlider />
      <TestimonialSection />
      <FAQs />
      <Footer />
   </div>
  );
}
