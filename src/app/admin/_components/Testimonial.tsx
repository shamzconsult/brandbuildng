'use client'

import React, { useEffect, useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

interface Testimonial {
  _id: string;
  quote: string;
  name: string;
  stars: number;
  image: string;
}

interface TestimonialProps {
  testimonials: Testimonial[];
}

const Testimonial = ({ testimonials: initialTestimonials }: TestimonialProps) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Testimonial>({
    _id: "",
    quote: "",
    name: "",
    stars: 0,
    image: "",
  });
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Check if data exists in localStorage
    const cachedTestimonials = localStorage.getItem("testimonials");
    if (cachedTestimonials) {
      setTestimonials(JSON.parse(cachedTestimonials));
    }

    // Fetch fresh data from the server
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonial");
      const data: Testimonial[] = await res.json();
      setTestimonials(data);

      localStorage.setItem("testimonials", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };
  

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingTestimonial ? "PUT" : "POST";
      const url = editingTestimonial
        ? `/api/testimonial/${editingTestimonial._id}`
        : "/api/testimonial";
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      fetchTestimonials();
      setIsModalOpen(false);
      setEditingTestimonial(null);

      // Reset form after submission
      setFormData({
        _id: "",
        quote: "",
        name: "",
        stars: 0,
        image: "",
      });
    } catch (error) {
      console.error("Error saving testimonial:", error);
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      _id: testimonial._id,
      quote: testimonial.quote,
      name: testimonial.name,
      stars: testimonial.stars,
      image: testimonial.image, 
    });
    setEditingTestimonial(testimonial);
    setIsModalOpen(true);
  };
  


  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/testimonial/${id}`, { method: "DELETE" });
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 w-full py-20">
      {/* <h3 className="text-orange-500 text-3xl font-medium max-md:text-2xl text-center">
        Manage Testimonials
      </h3> */}
      <div className="relative w-full flex justify-center">
        <div className="relative max-w-screen-2xl w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/assets/images/kappframework-elGsve(1)(1).png')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold"> Manage your client&apos;s reviews efficiently with ease</h1>
            
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
              >
                + Add New Client Review
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* <div className="flex justify-end w-full max-w-screen-lg mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-6 py-2 rounded-md"
        >
          Add Testimonial
        </button>
      </div> */}

      <div className="mt-10 flex flex-wrap justify-center gap-6 w-full max-w-screen-xl">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="relative p-6 w-[400px] bg-white shadow-md rounded-lg text-center"
          >
            {/* Border corner accents */}
            <span className="absolute top-0 left-0 h-6 w-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></span>
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></span>

            {/* Testimonial Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg border border-gray-200 mx-auto"
            />

            {/* Quote */}
            <q className="italic text-gray-600 block">{testimonial.quote}</q>

            {/* Star Rating */}
            <div className="mt-2 text-yellow-400">
              {[...Array(testimonial.stars)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
            </div>

            {/* Name */}
            <p className="mt-3 text-gray-700 font-medium">- {testimonial.name}</p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={() => handleEdit(testimonial)}
                className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition w-1/2"
              >
                <CiEdit size={20} /> Edit
              </button>
              <button
                onClick={() => handleDelete(testimonial._id)}
                className="flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition w-1/2"
              >
                <CiTrash size={20} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-6">
              {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="quote"
                value={formData.quote}
                onChange={handleChange}
                placeholder="Testimonial quote"
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Customer Name"
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="number"
                name="stars"
                value={formData.stars}
                onChange={handleChange}
                placeholder="Stars (1-5)"
                className="w-full p-2 border rounded-md"
                required
              />
              {formData.image && !editingTestimonial && (
                <img src={formData.image} alt="Uploaded Preview" className="w-20 h-20 object-cover mx-auto mb-2 rounded-full" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded-md"
                required={!editingTestimonial}
              />

              <button type="submit" className="bg-orange-500 text-white w-full py-2 rounded-md">
                {editingTestimonial ? "Update" : "Add"} Testimonial
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
};

export default Testimonial;
