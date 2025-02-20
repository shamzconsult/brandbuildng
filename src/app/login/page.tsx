import React from 'react'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import LoginPage from './_components/LoginPage'

function page() {
  return (
    <div>
      <Header/>
      <LoginPage/>
      <Footer/>
    </div>
  )
}

export default page