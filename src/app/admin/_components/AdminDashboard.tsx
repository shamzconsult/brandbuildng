'use client';
import { useState } from 'react';

export default function AdminDashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    discount: '',
    price: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setImageURL(uploadedImageUrl);
  
        const offerRes = await fetch('/api/offers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, image: uploadedImageUrl }),
        });

        if (!offerRes.ok) {
            console.error('Failed to save offer:', await offerRes.text());
          } else {
            console.log('Offer saved successfully');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setUploading(false);
        }
  };

  
  return (
    <div className="p-10 mt-20 max-w-2xl mx-auto">
      <h2 className="text-2xl text-orange-500 font-bold text-center">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white p-6 shadow-md rounded-md">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Offer Name" 
          className="w-full p-4 border rounded-md"
          required 
        />

        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Offer Description" 
          className="w-full p-4 border rounded-md"
          required
        ></textarea>

        <input 
          type="text" 
          name="discount" 
          value={formData.discount} 
          onChange={handleChange} 
          placeholder="Discount %" 
          className="w-full p-4 border rounded-md"
          required
        />

        <input 
          type="text" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          placeholder="Price" 
          className="w-full p-4 border rounded-md"
          required
        />

        <input 
          type="file" 
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)} 
          className="w-full p-4 border rounded-md"
        />

        <button 
          type="submit" 
          className="bg-orange-500 text-white w-full py-2 rounded-md"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Offer'}
        </button>
      </form>

      {/* Uploaded Image Preview */}
      {imageURL && (
        <div className="mt-4 text-center">
          <p>Uploaded Image:</p>
          <img src={imageURL} alt="Uploaded preview" className="w-64 mx-auto rounded-md shadow-md" />
        </div>
      )}
    </div>
  );
}