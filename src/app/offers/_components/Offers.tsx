'use client'

import React from 'react'
import { useEffect, useState } from 'react';

interface Offer {
  _id: string; 
  title: string;
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
    <div className="max-w-screen-lg mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-6">Available Offers</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <div key={offer._id} className="border p-4 rounded-lg shadow-md">
          <img src={offer.image} alt={offer.title} className="h-40 w-full object-cover rounded-md" />
          <h3 className="text-xl font-semibold mt-2">{offer.title}</h3>
          <p className="text-gray-600 mt-1">{offer.description}</p>
          <p className="text-orange-500 text-lg font-bold mt-2">${offer.price}</p>
          {offer.discount && <span className="text-green-600 font-semibold">Save {offer.discount}%</span>}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Offers