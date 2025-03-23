import React from 'react'
import Intro from './_components/Intro'
import Footer from '../_components/Footer'
import Counters from '../_components/Statistics'
import Team from './_components/Team'
import LogoSlider from './_components/LogoSlider'
import Header from '../_components/Header'
import Hero from './_components/Hero'
import Introduction from '../_components/Introduction'
import About from '../_components/About'
import Values from '../_components/Values'

function page() {
  return (
    <div>
        <Header />
        <Hero/>
        <Introduction/>
        <About/>
        <Counters />
        <Intro />
        <Values/>
        <Team />
        <LogoSlider />
        <Footer />
    </div>
  )
}

export default page