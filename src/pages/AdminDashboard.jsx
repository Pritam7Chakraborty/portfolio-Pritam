// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PackageOpen } from 'lucide-react'; // Icon for empty state

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // --- NEW: Loading state ---
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://pritam-portfolio-api.onrender.com/api/projects');
        const data = await response.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const token = localStorage.getItem('token');
      await fetch(`https://pritam-portfolio-api.onrender.com/api/projects/${id}`, {
        method: 'DELETE',
        headers: { 'x-auth-token': token },
      });
      setProjects(projects.filter(p => p._id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // --- NEW: Loading State UI ---
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        <p className="text-2xl">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 sm:p-8 text-white">
      <div className="w-full max-w-6xl">
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-800">
          <h1 className="text-3xl sm:text-4xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Logout
          </button>
        </header>

        <div className="flex justify-end mb-6">
          <button 
            onClick={() => navigate('/admin/new')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            + Add New Project
          </button>
        </div>

        {/* --- Glassmorphism Project Cards --- */}
        <div className="flex flex-col gap-6">
          {projects.length > 0 ? projects.map((project) => (
            <div 
              key={project._id} 
              className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-xl shadow-lg p-6 
                         flex flex-col md:flex-row md:items-start md:space-x-8
                         transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50"
            >
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full rounded-lg object-cover aspect-video md:aspect-square shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-between mt-4 md:mt-0">
                <div>
                  <h3 className="font-bold text-2xl text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="bg-purple-900/50 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <button 
                    onClick={() => navigate(`/admin/edit/${project._id}`)} 
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-base hover:scale-105 transition-transform"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(project._id)} 
                    className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-base"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-16 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-xl flex flex-col items-center gap-4">
              <PackageOpen className="w-16 h-16 text-purple-500" />
              <h3 className="text-2xl font-bold">No Projects Found</h3>
              <p className="text-neutral-400">Click "Add New Project" to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;