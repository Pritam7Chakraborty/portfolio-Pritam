// src/pages/AddEditProjectPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import { ArrowLeft } from 'lucide-react';

const AddEditProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isEditing) {
      const fetchProject = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`https://pritam-portfolio-api.onrender.com/api/projects/${id}`);
          const data = await response.json();
          setProjectData(data);
        } catch (error) {
          console.error("Failed to fetch project data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProject();
    } else {
      setIsLoading(false); // If creating a new project, no data to load
    }
  }, [id, isEditing]);

  const handleFormSubmit = async (formData) => {
    const token = localStorage.getItem('token');
    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing
      ? `https://pritam-portfolio-api.onrender.com/api/projects/${id}`
      : 'https://pritam-portfolio-api.onrender.com/api/projects';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
        body: JSON.stringify(formData),
      });
      navigate('/admin');
    } catch (error) {
      console.error("Failed to submit project:", error);
      alert('An error occurred. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading Form...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 text-white">
      <div className="w-full max-w-3xl">
        <header className="flex items-center justify-between mb-8">
          <Link to="/admin" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
        </header>
        
        <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            {isEditing ? 'Edit Project' : 'Create New Project'}
          </h1>
          <ProjectForm 
            onSubmit={handleFormSubmit}
            initialData={projectData}
            isEditing={isEditing}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEditProjectPage;