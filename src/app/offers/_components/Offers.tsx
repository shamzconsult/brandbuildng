import React from 'react';

interface Offer {
  _id: string; 
  title: string;
  description: string;
  discount: number;
  price: string;
  image: string;}

  interface OffersProps {
    offers: Offer[];
  }
  
  function Offers({ offers }: OffersProps) {
    return (
      <div className="max-w-screen-xl mx-auto p-6">
        <h2 className='text-center mt-20 text-3xl text-gray-400 md:text-5xl '>Available offers</h2>
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div key={offer._id} className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100 shadow-md">
                <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white">
                  Save {offer.discount}%
                </span>
                <img src={offer.image} alt={offer.title} className="h-80 w-full rounded-tr-3xl object-cover" />
                <div className="p-4 text-center">
                  <strong className="text-xl font-medium text-gray-900">{offer.title}</strong>
                  <p className="mt-2 text-gray-400">{offer.description}</p>
                  <p className='text-3xl text-orange-500 mt-4'>${offer.price}</p>
                  <p className='mt-2 text-yellow-400 text-xl'>★★★★☆</p>
                  <span className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors">
                    LEARN MORE
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Offers;