'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useRef } from "react";
// import Testimonial from './Testimonial';


interface Offer {
  _id: string;
  title: string;
  description: string;
  discount: string;
  price: string;
  image: string;
}

interface AdminDashboardProps {
  offers: Offer[];
}

export default function AdminDashboard({ offers: initialOffers }: AdminDashboardProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [offers, setOffers] = useState<Offer[]>(initialOffers);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  const [,setIsAuthenticated] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discount: '',
    price: ''
  });

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";

    if (loggedInStatus) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };


  useEffect(() => {
    async function fetchOffers() {
      try {
        const res = await fetch('/api/offers');
        const data: Offer[] = await res.json();
        setOffers(data);
      } catch (error) {
        console.error('Error fetching offers: ', error);
      }
    }
    fetchOffers();
  }, [])


  const openModal = (offer: Offer | null = null) => {
    if (offer) {
      setEditingOffer(offer);
      setFormData({
        title: offer.title,
        description: offer.description,
        discount: offer.discount,
        price: offer.price,
      });
    } else {
      setEditingOffer(null);
      setFormData({
        title: "",
        description: "",
        discount: "",
        price: "",
      });
      setFile(null);
    }
    setIsModalOpen(true);
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    if (!file) {
        console.error('No file selected');
        setUploading(false);
        return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("discount", formData.discount);
    formDataToSend.append("image", file); 

    try {
      const res = await fetch('/api/offers', {
        method: 'POST',
        body: formDataToSend, 
      });
  
      if (!res.ok) {
        console.error('Failed to save offer:', await res.text());
        return;
      }
  
      const responseData = await res.json();
      setOffers((prevOffers) => [...prevOffers, responseData.newOffer]);
      setIsModalOpen(false);
      setFormData({ 
        title: '', 
        description: '', 
        discount: '', 
        price: '' 
      });
      setFile(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setUploading(false);
    }
  };



  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this offer?");
    if(!confirmDelete) return;

    try {
      const res = await fetch(`/api/offers/${id}`, 
        {
          method: 'DELETE'
        }
      );

      if (!res.ok) {
        console.error("Failed to delete offer");
        return;
      }
      setOffers((prevOffers) => prevOffers.filter((offer) => offer._id !== id));
    } catch (error) {
      console.error("Error deleting offer: ", error)
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingOffer) return;
  
    let uploadedImageUrl = editingOffer.image;
  
    if (file) {
      const imageFormData = new FormData();
      imageFormData.append('image', file);
  
      try {
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: imageFormData,
        });
  
        if (!uploadRes.ok) {
          console.error('Image upload failed:', await uploadRes.text());
          return;
        }
  
        const imageData = await uploadRes.json();
        uploadedImageUrl = imageData.url;
      } catch (error) {
        console.error('Error uploading image:', error);
        return;
      }
    }
  
    try {
      const res = await fetch(`/api/offers/${editingOffer._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image: uploadedImageUrl,
        }),
      });
  
      if (!res.ok) {
        console.error("Failed to update offer");
        return;
      }
  
      const updatedOffer = await res.json();
      setOffers((prev) =>
        prev.map((offer) =>
          offer._id === editingOffer._id ? updatedOffer.updatedOffer : offer
        )
      );
      setEditingOffer(null);
      setIsModalOpen(false);
      setFormData({ 
        title: '', 
        description: '', 
        discount: '', 
        price: '' 
      });
      setFile(null);
    } catch (error) {
      console.error("Error updating offer:", error);
    }
  };
  

  
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <div className="relative  h-[600px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/images/kappframework-bRXJUP(1)(1).png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome, Admin!</h1>
          <p className="mt-4 text-lg text-gray-200">Manage your offers efficiently with ease</p>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => openModal()}
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
              + Add New Offer
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Uploaded Products Section */}
      <h2 className="text-center mt-16 text-4xl text-gray-700 font-semibold">Uploaded Products</h2>


      {offers.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <img
            src="/assets/images/Offer-image/no-offer.avif"
            alt="No Offers"
            className="w-96 h-96 opacity-75"
          />
          <p className="text-gray-500 text-lg mt-4">
            We are SORRY! No offers available at the moment..
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

            <div className="p-5 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">{offer.title}</h3>
              <p className="mt-2 text-gray-500">{truncateText(offer.description, 50)}</p>
              <p className="text-3xl text-orange-500 font-bold mt-4">#{offer.price}</p>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => openModal(offer)}
                  className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition w-1/2"
                >
                  <CiEdit size={20} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(offer._id)}
                  className="flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition w-1/2"
                >
                  <CiTrash size={20} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingOffer ? "Edit Offer" : "Create Offer"}</h2>
            <form onSubmit={editingOffer ? handleUpdate : handleSubmit} className="space-y-5">
              <div>
                <label className="text-gray-700 font-medium">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Offer Title" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400" required />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Offer Description" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400" required></textarea>
              </div>
              <div>
                <label className="text-gray-700 font-medium">Discount (%)</label>
                <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount %" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400" required />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400" required />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Upload Image</label>
                <input type="file"  accept="image/*" ref={fileInputRef} onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full p-3 border rounded-md" />
              </div>
              <button type="submit" className="bg-orange-500 text-white w-full py-3 rounded-md font-medium hover:bg-orange-600 transition">
                {uploading ? "Uploading..." : editingOffer ? "Update Offer" : "Upload Offer"}
              </button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white w-full py-3 mt-2 rounded-md font-medium hover:bg-gray-600 transition">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {/* <Testimonial/> */}
    </div>
  );
}


