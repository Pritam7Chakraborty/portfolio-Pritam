// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react'; // Import icons

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || 'Failed to login');
      }
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl overflow-hidden
                      bg-neutral-900/50 backdrop-blur-md border border-neutral-800">
        
        {/* --- Left Side: Welcome Message --- */}
        <div className="p-12 flex-col justify-center bg-gradient-to-br from-purple-900/50 to-orange-900/30 hidden md:flex">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome Back,</h1>
            <p className="text-neutral-300 text-lg">
                This is your creative cockpit. Log in to manage your projects and showcase your best work to the world.
            </p>
        </div>

        {/* --- Right Side: Login Form --- */}
        <div className="p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">Admin Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Username Input with Icon */}
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full h-12 pl-10 pr-4 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-200 focus:outline-none focus:border-purple-600 transition"
                    />
                </div>
                {/* Password Input with Icon */}
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full h-12 pl-10 pr-4 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-200 focus:outline-none focus:border-purple-600 transition"
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="mt-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Verifying...' : 'Login Securely'}
                </button>
                
                {error && (
                    <p className="text-red-500 text-center mt-2 text-sm">{error}</p>
                )}
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;