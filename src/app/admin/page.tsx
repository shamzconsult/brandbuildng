// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import AdminDashboard from './_components/AdminDashboard'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

// const queryClient = new QueryClient();

function page() {
  return (
    <div>
      <Header/>
      {/* <QueryClientProvider client={queryClient}> */}
        <AdminDashboard/>
      {/* </QueryClientProvider> */}

      <Footer/>
    </div>
  )
}

export default page