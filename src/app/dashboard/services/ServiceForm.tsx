'use client'
import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Plus, Trash2, Save } from 'lucide-react';
import Image from 'next/image';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string | null;
  heroImageUrl: string | null;
  features: Array<{
    id: string;
    feature: string;
    order: number;
  }>;
  technologies: Array<{
    id: string;
    technology: string;
    order: number;
  }>;
  benefits: Array<{
    id: string;
    benefit: string;
    order: number;
  }>;
  keywords?: Array<{
    id: string;
    keyword: string;
    order: number;
  }>;
  pricing?: {
    id: string;
    starting: string;
    description: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface ServiceFormData {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  keywords: string[];
  pricing: {
    starting: string;
    description: string;
  } | null;
}

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  service?: Service | null;
  mode: 'create' | 'edit';
}

export default function ServiceForm({ isOpen, onClose, onSuccess, service, mode }: ServiceFormProps) {
  const [formData, setFormData] = useState<ServiceFormData>({
    slug: '',
    title: '',
    description: '',
    shortDescription: '',
    features: [''],
    technologies: [''],
    benefits: [''],
    keywords: [''],
    pricing: null
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPricing, setHasPricing] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const heroImageInputRef = useRef<HTMLInputElement>(null);

  // Reset and populate form when service changes or mode changes
  useEffect(() => {
    if (mode === 'edit' && service) {
      setFormData({
        slug: service.slug,
        title: service.title,
        description: service.description,
        shortDescription: service.shortDescription,
        features: service.features.length > 0 ? service.features.map(f => f.feature) : [''],
        technologies: service.technologies.length > 0 ? service.technologies.map(t => t.technology) : [''],
        benefits: service.benefits.length > 0 ? service.benefits.map(b => b.benefit) : [''],
        keywords: service.keywords && service.keywords.length > 0 ? service.keywords.map(k => k.keyword) : [''],
        pricing: service.pricing ? {
          starting: service.pricing.starting,
          description: service.pricing.description
        } : null
      });
      setImagePreview(service.imageUrl);
      setHeroImagePreview(service.heroImageUrl);
      setHasPricing(service.pricing ? true : false);
    } else if (mode === 'create') {
      // Reset form for create mode
      setFormData({
        slug: '',
        title: '',
        description: '',
        shortDescription: '',
        features: [''],
        technologies: [''],
        benefits: [''],
        keywords: [''],
        pricing: null
      });
      setImagePreview(null);
      setHeroImagePreview(null);
      setHasPricing(false);
      setImageFile(null);
      setHeroImageFile(null);
    }
    setError(null);
  }, [service, mode, isOpen]);

  const handleInputChange = (field: keyof ServiceFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'features' | 'technologies' | 'benefits' | 'keywords', index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: 'features' | 'technologies' | 'benefits' | 'keywords') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'features' | 'technologies' | 'benefits' | 'keywords', index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleImageChange = (file: File | null, type: 'image' | 'heroImage') => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'image') {
          setImageFile(file);
          setImagePreview(result);
        } else {
          setHeroImageFile(file);
          setHeroImagePreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: mode === 'create' ? generateSlug(title) : prev.slug
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      // Create FormData for file upload
      const formDataObj = new FormData();
      
      // Add text fields
      formDataObj.append('slug', formData.slug);
      formDataObj.append('title', formData.title);
      formDataObj.append('description', formData.description);
      formDataObj.append('shortDescription', formData.shortDescription);
      
      // Add arrays as JSON strings
      formDataObj.append('features', JSON.stringify(formData.features.filter(f => f.trim())));
      formDataObj.append('technologies', JSON.stringify(formData.technologies.filter(t => t.trim())));
      formDataObj.append('benefits', JSON.stringify(formData.benefits.filter(b => b.trim())));
      formDataObj.append('keywords', JSON.stringify(formData.keywords.filter(k => k.trim())));
      
      // Add pricing if enabled
      if (hasPricing && formData.pricing) {
        formDataObj.append('pricing', JSON.stringify(formData.pricing));
      }
      
      // Add image files
      if (imageFile) {
        formDataObj.append('image', imageFile);
      }
      if (heroImageFile) {
        formDataObj.append('heroImage', heroImageFile);
      }

      const url = mode === 'create' 
        ? `${baseURL}/api/admin/services`
        : `${baseURL}/api/admin/services/${service?.id}`;
      
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        onSuccess();
        onClose();
      } else {
        setError(data.message || 'Operation failed');
      }
    } catch (error: any) {
      console.error(`Error ${mode === 'create' ? 'creating' : 'updating'} service:`, error);
      setError(error.message || `Failed to ${mode === 'create' ? 'create' : 'update'} service`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-4 mx-auto p-5 border max-w-4xl shadow-lg rounded-md bg-white mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {mode === 'create' ? 'Create New Service' : 'Edit Service'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description
            </label>
            <input
              type="text"
              value={formData.shortDescription}
              onChange={(e) => handleInputChange('shortDescription', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Brief one-line description"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Detailed description of the service"
              required
            />
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                {imagePreview ? (
                  <div className="relative">
                    <Image
                      src={imagePreview}
                      alt="Service preview"
                      width={200}
                      height={120}
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview(null);
                        if (imageInputRef.current) imageInputRef.current.value = '';
                      }}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    className="text-center cursor-pointer"
                    onClick={() => imageInputRef.current?.click()}
                  >
                    <Upload className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Click to upload image</p>
                  </div>
                )}
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e.target.files?.[0] || null, 'image')}
                  className="hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                {heroImagePreview ? (
                  <div className="relative">
                    <Image
                      src={heroImagePreview}
                      alt="Hero preview"
                      width={200}
                      height={120}
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setHeroImageFile(null);
                        setHeroImagePreview(null);
                        if (heroImageInputRef.current) heroImageInputRef.current.value = '';
                      }}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    className="text-center cursor-pointer"
                    onClick={() => heroImageInputRef.current?.click()}
                  >
                    <Upload className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Click to upload hero image</p>
                  </div>
                )}
                <input
                  ref={heroImageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e.target.files?.[0] || null, 'heroImage')}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features
            </label>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleArrayChange('features', index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter feature"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('features', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('features')}
                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Feature
              </button>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies
            </label>
            <div className="space-y-2">
              {formData.technologies.map((tech, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => handleArrayChange('technologies', index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter technology"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('technologies', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('technologies')}
                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Technology
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Benefits
            </label>
            <div className="space-y-2">
              {formData.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter benefit"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('benefits', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('benefits')}
                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Benefit
              </button>
            </div>
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords (Optional)
            </label>
            <div className="space-y-2">
              {formData.keywords.map((keyword, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => handleArrayChange('keywords', index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter keyword"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('keywords', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('keywords')}
                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Keyword
              </button>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="hasPricing"
                checked={hasPricing}
                onChange={(e) => setHasPricing(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasPricing" className="ml-2 block text-sm text-gray-900">
                Add pricing information
              </label>
            </div>
            {hasPricing && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Price
                  </label>
                  <input
                    type="text"
                    value={formData.pricing?.starting || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      pricing: {
                        starting: e.target.value,
                        description: prev.pricing?.description || ''
                      }
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., £5,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Description
                  </label>
                  <input
                    type="text"
                    value={formData.pricing?.description || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      pricing: {
                        starting: prev.pricing?.starting || '',
                        description: e.target.value
                      }
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Starting from £5,000"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 justify-end pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {mode === 'create' ? 'Creating...' : 'Updating...'}
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  {mode === 'create' ? 'Create Service' : 'Update Service'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}