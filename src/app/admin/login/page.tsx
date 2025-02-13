import React from 'react'
import LoginPage from './_components/LoginPage'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'

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