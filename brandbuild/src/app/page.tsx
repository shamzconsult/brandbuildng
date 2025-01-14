import Head from "next/head";
import HomePage from "./_components/Header";
import Introduction from "./_components/Introduction";
import Values from "./_components/Values";
import About from "./_components/About";
import Statistics from "./_components/Statistics";
import Services from "./_components/Services";
import Contact from "./_components/Contact";
import TestimonialSection from "./_components/Testimonial";
import Footer from "./_components/Footer";
import FAQs from "./_components/FAQs";
// import Slider from "./components/Slider";

export default function Home() {
  return (
   <div>
     <Head>
        <title>Brand Build Navigation</title>
        <meta name="description" content="Brand Build Navigation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
      <Introduction />
      <Values />
      <About/>
      {/* <Slider/> */}
      <Statistics />
      <Services/>
      <Contact />
      <TestimonialSection />
      <FAQs />
      <Footer />
   </div>
  );
}
