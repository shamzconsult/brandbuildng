'use client'

import React, { useState } from 'react';

interface Offer {
  _id: string;
  title: string;
  description: string;
  discount: number;
  price: string;
  image: string;
  rating?: number;
}


interface OffersProps {
  offers: Offer[];
}

function Offers({ offers }: OffersProps) {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className=' mt-20 text-4xl text-gray-400 md:text-5xl '> Hey Friend👋, checkout our Products</h2>
      
      {offers.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <img
            src="/assets/images/Offer-image/no-offer.avif"
            alt="No Offers"
            className="w-96 h-96 opacity-75"
          />
          <p className="text-gray-500 text-lg mt-4">
            We are SORRY! No special offers available at the moment.
          </p>
        </div>
      ) : (
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {offers.map((offer) => (
            <div key={offer._id} className="relative w-[350px] sm:w-[400px] md:w-[400px] lg:w-[350px] xl:w-[380px] block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100 shadow-md">
              <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-2 font-medium uppercase tracking-widest text-white">
                Save {offer.discount}%
              </span>

              <img src={offer.image} alt={offer.title} className="h-80 w-full rounded-tr-3xl object-cover" />

              <div className="p-4 text-center">
                <strong className="text-xl font-medium text-gray-900">{offer.title}</strong>
                <p className="mt-2 text-gray-400">{offer.description}</p>
                <p className='text-3xl text-orange-500 mt-4'>#{offer.price}</p>

                <button 
                  onClick={() => setSelectedOffer(offer)}
                  className="mt-4 block w-full rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>

      )}

      {/* MODAL */}
      {selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg md:flex max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-2 right-4 bg-black p-3 rounded-full text-white hover:text-gray-400 z-50"
            >
              ✖
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 h-[300px] md:h-auto"> 
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text & Contact Section */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedOffer.title}</h3>
              <p className="text-gray-600 mt-2">{selectedOffer.description}</p>
              <p className="text-3xl text-orange-500 mt-4">#{selectedOffer.price}</p>

              <p className="font-semibold mt-2">In Stock</p>

              {/* Star Rating */}
              <p className="mt-2 text-yellow-400 text-xl">
                {"★".repeat(selectedOffer.rating || 0)}{"☆".repeat(5 - (selectedOffer.rating || 0))}
              </p>

              <p className="text-gray-600 text-sm mt-4">
                🚚 **Fast Delivery Available** | 🏠 **Pay on Delivery**
              </p>

              {/* Contact Options */}
              <div className="mt-4 flex flex-col space-y-2">
                <a
                  href={`https://wa.me/2349038940088?text=${encodeURIComponent(
                    `Hello brandbuildng, I'm interested in this product:\n\n*${selectedOffer.title}* 📌\n${selectedOffer.description}\nPrice: #${selectedOffer.price} 💰\nDiscount: ${selectedOffer.discount}% 🎉`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 text-white py-3 rounded-lg font-medium transition hover:bg-green-600"
                >
                  Contact on WhatsApp
                </a>

                <a
                  href="tel:+2349038940088"
                  className="block text-center bg-blue-500 text-white py-3 rounded-lg font-medium transition hover:bg-blue-600"
                >
                  Call Us 📞
                </a>

                <a
                  href={`mailto:brandbuildnglimited@gmail.com?subject=Product Inquiry&body=Hello brandbuildng, I'm interested in this product:\n\n*${selectedOffer.title}* 📌\n${selectedOffer.description}\nPrice: #${selectedOffer.price} 💰\nDiscount: ${selectedOffer.discount}% 🎉`}
                  className="block text-center bg-gray-800 text-white py-3 rounded-lg font-medium transition hover:bg-gray-900"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Offers;
