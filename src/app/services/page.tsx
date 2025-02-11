import React from 'react'
// import Slider from './_components/Slider'
import Intro from './_components/Intro'
import Collection from './_components/Collection'
import Footer from './_components/Footer'
import Header from '../_components/Header'
import Hero from './_components/Hero'

function page() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Intro/>
        {/* <Slider /> */}
        <Collection/>
        <Footer/>
    </div>
  )
}

export default page