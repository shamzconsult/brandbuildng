import Head from "next/head";
import HomePage from "./components/Header";
import Introduction from "./components/Introduction";
import Values from "./components/Values";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TestimonialSection from "./components/Testimonial";
import Footer from "./components/Footer";

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
      <Statistics />
      <Services/>
      <Contact />
      <TestimonialSection />
      <Footer />
   </div>
  );
}
