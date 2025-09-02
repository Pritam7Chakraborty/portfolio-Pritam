// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <AlertTriangle className="w-20 h-20 text-orange-500 mb-6" />
      <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 mb-4">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-lg text-neutral-300 mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold transition-all duration-300 hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;