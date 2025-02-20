// src/app/offers/page.tsx
import React from 'react';
import Offers from './_components/Offers';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Hero from './_components/Hero';
import { getAllOffer } from '@/service/offers/offers.server';

export default async function Page() {
  const offers = await getAllOffer();

  return (
    <div>
      <Header />
      <Hero />
      <Offers offers={offers} />
      <Footer />
    </div>
  );
}
