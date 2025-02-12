import React from 'react'
import AdminDashboard from './_components/AdminDashboard'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

function page() {
  return (
    <div>
      <Header/>
      <AdminDashboard/>
      <Footer/>
    </div>
  )
}

export default page