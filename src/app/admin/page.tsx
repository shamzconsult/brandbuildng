// src/app/admin/page.tsx
import React from 'react';
import AdminDashboard from './_components/AdminDashboard';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { getAllOffer } from '@/service/offers/offers.server';
import { getAlltestimonial } from '@/service/testimonial/testimonial.offer';

export default async function Page() {
  const offers = await getAllOffer();
  // const testimonial = await getAlltestimonial();

  return (
    <div>
      <Header />
      <AdminDashboard offers={offers}/>
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}
