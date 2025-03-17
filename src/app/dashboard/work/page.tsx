'use client'
import { useState, useEffect, useRef } from 'react';
import { Trash2, Edit, Plus, X, Save, Upload } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
}

export default function AdminWorkPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    image: '',
    liveUrl: ''
  })
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://kea.mywire.org:5000/api/work/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  function handleInputChange(e: { target: { name: string; value: string | number | boolean } }) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
}


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedImage(file);
      
      // Create a preview URL
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(filePreviewUrl);
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!uploadedImage) {
      // If no new file was selected, return the existing image URL
      return formData.image;
    }
    
    setIsUploading(true);
    
    try {
      // Convert the file to a base64 string for Cloudinary
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(uploadedImage);
        reader.onload = () => {
          // The result is a base64 string that can be sent to the server
          const base64Image = reader.result as string;
          resolve(base64Image);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
    } catch (error) {
      console.error('Error preparing image for upload:', error);
      setIsUploading(false);
      return null;
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const openAddForm = () => {
    setFormData({
      id: 0,
      title: '',
      description: '',
      image: '',
      liveUrl: ''
    })
    setUploadedImage(null);
    setPreviewUrl('');
    setIsEditing(false)
    setIsFormOpen(true)
  }

  const openEditForm = (project: { id: number; title: string; description: string; image: string; liveUrl: string }) => {
    setFormData({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      liveUrl: project.liveUrl
    })
    setUploadedImage(null);
    setPreviewUrl(project.image);
    setIsEditing(true)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    // Clean up preview URL to prevent memory leaks
    if (previewUrl && !previewUrl.startsWith('http')) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl('');
    setIsUploading(false);
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      // First upload the image if there is one
      const base64Image = uploadedImage ? await uploadImageToCloudinary() : formData.image;
      
      if (!base64Image) {
        alert("Please provide an image for the project");
        return;
      }
      
      const url = isEditing 
        ? `http://kea.mywire.org:5000/api/work/projects/${formData.id}`
        : 'http://kea.mywire.org:5000/api/work/projects';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          image: base64Image,
          live_url: formData.liveUrl
        })
      });

      if (response.ok) {
        fetchProjects();
        closeForm();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to save project'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to save project. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`http://kea.mywire.org:5000/api/work/projects/${id}`, {
          method: 'DELETE',
          headers: {
            // Add authorization header if needed
          }
        });

        if (response.ok) {
          fetchProjects();
        }
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Admin - Manage Projects</h1>
        <button 
          className="px-4 py-2 bg-black text-white rounded-md flex items-center"
          onClick={openAddForm}
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Project
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative w-16 h-16">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{project.title}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 truncate max-w-xs">{project.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-blue-500 truncate max-w-xs">{project.liveUrl}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                    onClick={() => openEditForm(project)}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isEditing ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={closeForm}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Project Image
                </label>
                
                <div className="flex items-center space-x-4">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  {/* Upload button */}
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
                    disabled={isUploading}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {isUploading ? 'Processing...' : 'Upload Image'}
                  </button>
                  
                  {/* For existing images */}
                  {!uploadedImage && formData.image && (
                    <span className="text-sm text-gray-600">
                      {isEditing ? 'Current image will be used unless you upload a new one' : ''}
                    </span>
                  )}
                  
                  {/* For new uploads */}
                  {uploadedImage && (
                    <span className="text-sm text-gray-600">
                      Selected: {uploadedImage.name}
                    </span>
                  )}
                </div>
                
                {/* Image preview */}
                {previewUrl && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                    <div className="relative w-32 h-32 border border-gray-200 rounded overflow-hidden">
                      <Image 
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <p className="text-gray-500 text-xs mt-1">
                  Upload an image to be stored in Cloudinary. The image will be uploaded when you save the project.
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="liveUrl">
                  Live URL
                </label>
                <input
                  type="url"
                  id="liveUrl"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="https://example.com/project"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  onClick={closeForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center"
                  disabled={isUploading}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isUploading ? 'Processing...' : (isEditing ? 'Update Project' : 'Save Project')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}