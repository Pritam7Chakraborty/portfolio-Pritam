// src/components/ProjectForm.jsx
import React, { useState, useEffect } from 'react';

const ProjectForm = ({ onSubmit, initialData = {}, isEditing }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    techStack: '',
    githubLink: '',
    liveLink: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditing && initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        imageUrl: initialData.imageUrl || '',
        techStack: (initialData.techStack || []).join(', '),
        githubLink: initialData.githubLink || '',
        liveLink: initialData.liveLink || ''
      });
    }
  }, [initialData, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const projectData = {
      ...formData,
      techStack: formData.techStack.split(',').map(tech => tech.trim()).filter(Boolean)
    };
    await onSubmit(projectData);
    setIsLoading(false);
  };

  return (
    // --- REMOVED BACKGROUND AND PADDING FROM HERE ---
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-neutral-800/50 text-neutral-200 border border-neutral-700 focus:outline-none focus:border-purple-600 transition" required />
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-300">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full p-4 rounded-lg bg-neutral-800/50 text-neutral-200 border border-neutral-700 resize-none focus:outline-none focus:border-purple-600 transition" required></textarea>
      </div>
      <div>
        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-300">Image URL</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="e.g., /project-images/my-image.png" className="w-full h-12 px-4 rounded-lg bg-neutral-800/50 text-neutral-200 border border-neutral-700 focus:outline-none focus:border-purple-600 transition" required />
      </div>
      <div>
        <label htmlFor="techStack" className="block mb-2 text-sm font-medium text-gray-300">Tech Stack (comma-separated)</label>
        <input type="text" name="techStack" value={formData.techStack} onChange={handleChange} placeholder="e.g., React, Node.js, Tailwind CSS" className="w-full h-12 px-4 rounded-lg bg-neutral-800/50 text-neutral-200 border border-neutral-700 focus:outline-none focus:border-purple-600 transition" />
      </div>
      <div>
        <label htmlFor="githubLink" className="block mb-2 text-sm font-medium text-gray-300">GitHub Link</label>
        <input type="text" name="githubLink" value={formData.githubLink} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-neutral-800/50 text-neutral-200 border border-neutral-700 focus:outline-none focus:border-purple-600 transition" />
      </div>
      <div>
        <label htmlFor="liveLink" className="block mb-2 text-sm font-medium text-gray-300">Live Demo Link</label>
        <input type="text" name="liveLink" value={formData.liveLink} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-neutral-800/50 text-neutral-200 border border-neutral-700 focus:outline-none focus:border-purple-600 transition" />
      </div>
      <button type="submit" disabled={isLoading} className="w-full py-3 mt-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
        {isLoading ? 'Saving...' : (isEditing ? 'Update Project' : 'Create Project')}
      </button>
    </form>
  );
};

export default ProjectForm;