"use client";

import React, { useState } from "react";

interface Offer {
  _id: string;
  title: string;
  description: string;
  discount: number;
  price: string;
  image: string;
  rating?: number;
}

const mockOffers: Offer[] = [
    {
      _id: "1",
      title: "Branded Bag",
      description: "Stylish and durable branded bag, perfect for promotions and everyday use.",
      discount: 15,
      price: "150,000",
      image: "/assets/images/Offer-image/plastic-bag.jpg",
      rating: 4,
    },
    {
      _id: "2",
      title: "Branded Shirt",
      description: "High-quality branded shirt with a comfortable fit and stylish design.",
      discount: 10,
      price: "45,000",
      image: "/assets/images/Offer-image/shirt.jpg",
      rating: 5,
    },
    {
      _id: "3",
      title: "Branded Maxi Umbrella",
      description: "Large, durable branded umbrella to keep you covered in any weather.",
      discount: 20,
      price: "100,000",
      image: "/assets/images/Brandbuild.ng 3.jpg",
      rating: 5,
    },
    {
      _id: "4",
      title: "Customized Gift Bag",
      description: "Elegant and customizable gift bag for special occasions and corporate branding.",
      discount: 12,
      price: "980,000",
      image: "/assets/images/branded-bag.jpg",
      rating: 4,
    },
    {
      _id: "5",
      title: "4-in-1 Gift Package",
      description: "A perfect gift set featuring premium items tailored for special moments.",
      discount: 8,
      price: "70,000",
      image: "/assets/images/Offer-image/packaged-item.JPG",
      rating: 5,
    },
    {
      _id: "6",
      title: "Transparent 3-in-1 Bag",
      description: "Trendy and versatile transparent bag set, ideal for stylish storage and travel.",
      discount: 18,
      price: "25,000",
      image: "/assets/images/Offer-image/transparent-bags.jpg",
      rating: 4,
    },
];
  

function HomeOffer() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="mt-20 text-4xl text-gray-400 md:text-5xl">Hey Friend👋, checkout our Products</h2>

      {/* Grid Layout for Offers */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockOffers.map((offer) => (
          <div
            key={offer._id}
            className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100 shadow-md"
          >
            <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white">
              Save {offer.discount}%
            </span>

            <img src={offer.image} alt={offer.title} className="h-80 w-full rounded-tr-3xl object-cover" />

            <div className="p-4 text-center">
              <strong className="text-xl font-medium text-gray-900">{offer.title}</strong>
              <p className="mt-2 text-gray-400">{offer.description}</p>
              <p className="text-3xl text-orange-500 mt-4">#{offer.price}</p>

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedOffer(offer)}
                className="mt-4 block w-full rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-orange-600"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* "View More Products" Button */}
      <div className="mt-10 flex justify-center">
        <a href="/offers" className="px-6 py-3 text-white bg-gray-800 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
          View More Products
        </a>
      </div>

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

export default HomeOffer;
