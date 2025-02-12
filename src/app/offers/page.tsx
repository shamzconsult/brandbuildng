'use client'

import React from 'react'
import { useEffect, useState } from 'react';

interface Offer {
  _id: string; 
  name: string;
  description: string;
  discount: number;
  price: string;
  image: string;
}


function Offers() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    async function fetchOffers() {
      const res = await fetch('/api/offers');
      const data = await res.json();
      setOffers(data)
    }
    fetchOffers();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center">Available Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {offers.map((offer, index) => (
          <div key={index} className="border shadow-md p-4 text-center">
            <img src={offer.image} alt={offer.name} className="h-40 w-full object-cover" />
            <h3 className="text-lg font-semibold">{offer.name}</h3>
            <p className="text-orange-500 mt-2">${offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offers