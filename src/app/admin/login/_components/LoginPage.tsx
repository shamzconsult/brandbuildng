'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-4 border rounded-md mt-4"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-4 border rounded-md mt-4"
          required
        />
        <button type="submit" className="bg-orange-500 text-white w-full py-2 mt-4 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;













