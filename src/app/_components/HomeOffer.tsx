"use client";

import React, { useState } from "react";
import { FiHeart, FiX } from "react-icons/fi";


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
      description: "High-quality branded shirt with a comfortable fit and stylish design in multiple colors.",
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
          Hey Friend <span className="text-orange-500">👋</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Check out our premium collection of branded products
        </p>
      </div>

      {/* Grid Layout for Offers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {mockOffers.map((offer) => (
          <div
            key={offer._id}
            className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
              hoveredCard === offer._id ? "ring-2 ring-orange-500" : ""
            }`}
            onMouseEnter={() => setHoveredCard(offer._id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
              {offer.discount}% OFF
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition">
              <FiHeart className="text-gray-600 hover:text-red-500" />
            </button>

            {/* Product Image */}
            <div className="h-64 overflow-hidden relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{offer.title}</h3>
               
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{offer.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < (offer.rating || 0) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-xs ml-1">({offer.rating || 0}/5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-orange-500">₦{offer.price}</span>
                  <span className="text-gray-400 text-sm line-through ml-2">
                    ₦{Math.round(parseInt(offer.price.replace(/,/g, '')) / (1 - offer.discount/100)).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => setSelectedOffer(offer)}
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-lg font-medium transition inline-flex items-center">
          View All Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* MODAL - Enhanced Version */}
      {selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-50 transition"
            >
              <FiX size={24} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {selectedOffer.discount}% OFF
                </span>
              </div>
            </div>

            {/* Text & Contact Section */}
            <div className="md:w-1/2 p-8 overflow-y-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedOffer.title}</h3>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < (selectedOffer.rating || 0) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">({selectedOffer.rating || 0}/5)</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-orange-500">₦{selectedOffer.price}</span>
                <span className="text-gray-400 text-lg line-through ml-3">
                  ₦{Math.round(parseInt(selectedOffer.price.replace(/,/g, '')) / (1 - selectedOffer.discount/100)).toLocaleString()}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{selectedOffer.description}</p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Product Details</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
                      ✓
                    </span>
                    Premium quality materials
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
                      ✓
                    </span>
                    Custom branding available
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
                      ✓
                    </span>
                    Fast delivery nationwide
                  </li>
                </ul>
              </div>

              {/* Contact Options */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/2349038940088?text=${encodeURIComponent(
                    `Hello brandbuildng, I'm interested in this product:\n\n*${selectedOffer.title}* 📌\n${selectedOffer.description}\nPrice: #${selectedOffer.price} 💰\nDiscount: ${selectedOffer.discount}% 🎉`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+2349038940088"
                  className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z"/>
                  </svg>
                  Call Us Now
                </a>

                <a
                  href={`mailto:brandbuildng@gmail.com?subject=Inquiry about ${selectedOffer.title}&body=Hello BrandBuildNG,%0D%0A%0D%0AI'm interested in this product:%0D%0A%0D%0A*${selectedOffer.title}*%0D%0APrice: ₦${selectedOffer.price}%0D%0ADiscount: ${selectedOffer.discount}% OFF%0D%0A%0D%0ACould you please provide more information?%0D%0A%0D%0ARegards,`}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email Us
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
