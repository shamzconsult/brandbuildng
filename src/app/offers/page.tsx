import React from 'react'
import Offers from './_components/Offers'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Hero from './_components/Hero'

function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default page