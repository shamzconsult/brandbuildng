import React from 'react'
import Header from './_components/Header'
import Slider from './_components/Slider'
import Footer from '../_components/Footer'
import Intro from './_components/Intro'

function page() {
  return (
    <div>
        <Header/>
        <Intro/>
        <Slider />
        <Footer/>
    </div>
  )
}

export default page