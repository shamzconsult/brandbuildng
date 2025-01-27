import React from 'react'
import Header from './_components/Header'
import Slider from './_components/Slider'
import Footer from '../_components/Footer'
import Intro from './_components/Intro'
import Collection from './_components/Collection'

function page() {
  return (
    <div>
        <Header/>
        <Intro/>
        <Slider />
        <Collection/>
        <Footer/>
    </div>
  )
}

export default page