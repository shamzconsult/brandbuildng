import React from 'react'
import Header from './_components/Header'
import Intro from './_components/Intro'
import Footer from '../_components/Footer'
import TestimonialSection from '../_components/Testimonial'
import AboutSection from './_components/AboutSection'
import Counters from '../_components/Statistics'
import  { YTVideo } from './_components/Video'
import Team from './_components/Team'

function page() {
  return (
    <div>
        <Header />
        <Intro />
        <AboutSection/>
        <Counters/>
        <Team/>
        <YTVideo  ytVideoId="AaiSd3SrU6A"/>
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default page