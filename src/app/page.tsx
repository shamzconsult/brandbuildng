import Head from "next/head";
import Statistics from "./_components/Statistics";
import TestimonialSection from "./_components/Testimonial";
import Footer from "./_components/Footer";
import FAQs from "./_components/FAQs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Offers from "./about/_components/Offers";
import Collection from "./services/_components/Collection";
import { YTVideo } from "./about/_components/Video";
import LogoSlider from "./about/_components/LogoSlider";

export default function Home() {
  return (
   <div>
     <Head>
        <title>Brand Build Navigation</title>
        <meta name="description" content="Brand Build Navigation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero/>
      <Offers/>
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
