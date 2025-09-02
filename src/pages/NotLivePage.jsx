// src/pages/NotLivePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Home } from 'lucide-react'; // Import icons

const NotLivePage = () => {
  const location = useLocation();
  const githubLink = location.state?.githubLink; // Safely get the githubLink from state

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 mb-4">
        Under Construction
      </h1>
      <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-lg">
        This project isn't live on the web just yet, but the code is ready for you to explore.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/#work" 
          className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold flex items-center justify-center gap-2
                     transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
        >
          <Home size={20} />
          Back to Portfolio
        </Link>
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold 
                       flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Code size={20} />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default NotLivePage;