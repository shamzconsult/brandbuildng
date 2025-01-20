import React from 'react'
import Header from './_components/Header'
import Intro from './_components/Intro'
import Footer from '../_components/Footer'
import TestimonialSection from '../_components/Testimonial'
import AboutSection from './_components/AboutSection'
import Counters from '../_components/Statistics'
import Contact from '../_components/Contact'

function page() {
  return (
    <div>
        <Header />
        <Intro />
        <AboutSection/>
        <Counters/>
        <Contact/>
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default page