import React from 'react'
import Intro from './_components/Intro'
import Footer from '../_components/Footer'
import TestimonialSection from '../_components/Testimonial'
import AboutSection from './_components/AboutSection'
import Counters from '../_components/Statistics'
import  { YTVideo } from './_components/Video'
import Team from './_components/Team'
import LogoSlider from './_components/LogoSlider'
import Offers from './_components/Offers'
import Header from '../_components/Header'
import Hero from './_components/Hero'
import Introduction from '../_components/Introduction'

function page() {
  return (
    <div>
        <Header />
        <Hero/>
        <Introduction/>
        <Intro />
        <AboutSection />
        <Counters />
        <Team />
        <Offers />
        <YTVideo  ytVideoId="AaiSd3SrU6A" />
        <LogoSlider />
        <TestimonialSection />
        <Footer />
    </div>
  )
}

export default page