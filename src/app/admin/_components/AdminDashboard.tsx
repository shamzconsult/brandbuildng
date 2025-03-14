'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useRef } from "react";


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



  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";

    if (loggedInStatus) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);
  

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

  // useEffect(() => {
  //   const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
  //   if (!loggedInStatus) {
  //     router.replace("/login");
  //   }
  // }, [router]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };


  // const handleLogout = async () => {
  //   localStorage.removeItem("isLoggedIn");
  
  //   router.replace("/login");
  
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 100);
  // };
  

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

    const imageFormData = new FormData();
    imageFormData.append('image', file);

    try {
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: imageFormData,
      });

      if (!uploadRes.ok) {
        console.error('Image upload failed:', await uploadRes.text());
        setUploading(false);
        return;
      }
  
      const imageData = await uploadRes.json();
      const uploadedImageUrl = imageData.url;

      const offerRes = await fetch('/api/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: formData.title,
          description: formData.description,
          discount: formData.discount || 0,
          price: formData.price,
          image: uploadedImageUrl  
        }),
      });

      if (!offerRes.ok) {
        console.error('Failed to save offer:', await offerRes.text());
      } else {
        console.log('Offer saved successfully');
        const responseData = await offerRes.json();
        const newOffer: Offer = responseData.newOffer;
        setOffers((prevOffers) => [...prevOffers, newOffer]);
        setIsModalOpen(false);
        setFormData({ 
          title: '', 
          description: '', 
          discount: '', 
          price: '' 
        });
        setFile(null);
      }
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
    <div className="p-10 mt-20 max-w-screen-xl mx-auto">
      <h2 className="text-2xl text-orange-500 font-bold text-center">Admin Dashboard</h2>

      <div className="flex justify-between p-4">
        <button 
          onClick={() => openModal()} 
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          Add New Offer
        </button>

        <button 
          onClick={handleLogout} 
          className=" text-black hover:underline px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      

      <h2 className="text-center mt-20 text-3xl text-gray-400 md:text-5xl">Uploaded Products</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer._id} className="relative block border mt-10 bg-slate-50 rounded-2xl shadow-md">
            
            <span
              className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
            >
              Save {offer.discount}%
            </span>
            <img src={offer.image} alt={offer.title} className="h-80 w-full object-cover rounded-tr-3xl" />
            <div className="p-4 text-center">
              <strong className="text-xl font-medium text-gray-900"> {offer.title} </strong>

              <p className="mt-2 text-gray-400">
                {offer.description}
              </p>

              <p className='text-3xl text-orange-500 mt-4'>#{offer.price}</p>

              <div className=" p-4 justify-center flex space-x-2">
                <div className="flex gap-4 w-full">
                  <div className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-50 w-1/2">
                    <h3>Edit</h3>
                    <CiEdit onClick={() => openModal(offer)} size={24} className="cursor-pointer" />
                  </div>

                  <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-2xl cursor-pointer hover:bg-red-700 w-1/2">
                    <h3>Delete</h3>
                    <CiTrash onClick={() => handleDelete(offer._id)} size={24} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-6">{editingOffer ? 'Edit Offer' : 'Create Offer'}</h2>
            <form onSubmit={editingOffer ? handleUpdate : handleSubmit} className="space-y-4">
              <div className=''>
                <label htmlFor="title">Title</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange} 
                  placeholder="Offer Title" 
                  className="w-full p-4 border rounded-md"
                  required 
                />
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  placeholder="Offer Description" 
                  className="w-full p-4 border rounded-md"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="discount">Discount</label>
                <input 
                  type="text" 
                  name="discount" 
                  value={formData.discount} 
                  onChange={handleChange} 
                  placeholder="Discount %" 
                  className="w-full p-4 border rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <input 
                  type="text" 
                  name="price" 
                  value={formData.price} 
                  onChange={handleChange} 
                  placeholder="Price" 
                  className="w-full p-4 border rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="image">Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => setFile(e.target.files?.[0] || null)} 
                  className="w-full p-4 border rounded-md"
                />
              </div>

              <button 
                type="submit" 
                className="bg-orange-500 text-white w-full py-2 rounded-md">
                  {uploading ? 'Uploading...' : editingOffer ? 'Update Offer' : 'Upload Offer'}
              </button>

              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white w-full py-2 mt-2 rounded-md"
              >
                Cancel
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}


