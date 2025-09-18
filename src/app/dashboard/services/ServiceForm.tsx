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
    iconUrl?: string | null;
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
  pricingPlans?: {
    beginner: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
    professional: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
    pro: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
  } | null;
  createdAt: string;
  updatedAt: string;
}

interface ServiceFormData {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  technologies: Array<{
    name: string;
    iconUrl?: string;
    iconFile?: File;
  }>;
  benefits: string[];
  keywords: string[];
  pricing: {
    starting: string;
    description: string;
  } | null;
  pricingPlans: {
    beginner: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
    professional: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
    pro: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
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
    technologies: [{ name: '', iconUrl: '', iconFile: undefined }],
    benefits: [''],
    keywords: [''],
    pricing: null,
    pricingPlans: null
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPricing, setHasPricing] = useState(false);
  const [hasPricingPlans, setHasPricingPlans] = useState(false);

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
        technologies: service.technologies.length > 0 ? service.technologies.map(t => ({
          name: t.technology,
          iconUrl: t.iconUrl || '',
          iconFile: undefined
        })) : [{ name: '', iconUrl: '', iconFile: undefined }],
        benefits: service.benefits.length > 0 ? service.benefits.map(b => b.benefit) : [''],
        keywords: service.keywords && service.keywords.length > 0 ? service.keywords.map(k => k.keyword) : [''],
        pricing: service.pricing ? {
          starting: service.pricing.starting,
          description: service.pricing.description
        } : null,
        pricingPlans: service.pricingPlans || null
      });
      setImagePreview(service.imageUrl);
      setHeroImagePreview(service.heroImageUrl);
      setHasPricing(service.pricing ? true : false);
      setHasPricingPlans(service.pricingPlans ? true : false);
    } else if (mode === 'create') {
      // Reset form for create mode
      setFormData({
        slug: '',
        title: '',
        description: '',
        shortDescription: '',
        features: [''],
        technologies: [{ name: '', iconUrl: '', iconFile: undefined }],
        benefits: [''],
        keywords: [''],
        pricing: null,
        pricingPlans: null
      });
      setImagePreview(null);
      setHeroImagePreview(null);
      setHasPricing(false);
      setHasPricingPlans(false);
      setImageFile(null);
      setHeroImageFile(null);
    }
    setError(null);
  }, [service, mode, isOpen]);

  const handleInputChange = (field: keyof ServiceFormData, value: string | number | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'features' | 'benefits' | 'keywords', index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleTechnologyChange = (index: number, field: 'name' | 'iconUrl', value: string) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = { ...newTechnologies[index], [field]: value };
    setFormData(prev => ({ ...prev, technologies: newTechnologies }));
  };

  const handleTechnologyIconChange = (index: number, file: File | null) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = { ...newTechnologies[index], iconFile: file || undefined };
    setFormData(prev => ({ ...prev, technologies: newTechnologies }));
  };

  const handlePricingPlanChange = (plan: 'beginner' | 'professional' | 'pro', field: 'priceRange' | 'description', value: string) => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          [field]: value
        }
      }
    }));
  };

  const handlePricingPlanBulletChange = (plan: 'beginner' | 'professional' | 'pro', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          bulletPoints: prev.pricingPlans![plan].bulletPoints.map((bullet, i) => i === index ? value : bullet)
        }
      }
    }));
  };

  const addPricingPlanBullet = (plan: 'beginner' | 'professional' | 'pro') => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          bulletPoints: [...prev.pricingPlans![plan].bulletPoints, '']
        }
      }
    }));
  };

  const removePricingPlanBullet = (plan: 'beginner' | 'professional' | 'pro', index: number) => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          bulletPoints: prev.pricingPlans![plan].bulletPoints.filter((_, i) => i !== index)
        }
      }
    }));
  };

  const addArrayItem = (field: 'features' | 'benefits' | 'keywords') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const addTechnology = () => {
    setFormData(prev => ({
      ...prev,
      technologies: [...prev.technologies, { name: '', iconUrl: '', iconFile: undefined }]
    }));
  };

  const removeArrayItem = (field: 'features' | 'benefits' | 'keywords', index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const removeTechnology = (index: number) => {
    const newTechnologies = formData.technologies.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, technologies: newTechnologies }));
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
      formDataObj.append('technologies', JSON.stringify(formData.technologies
        .filter(t => t.name.trim())
        .map(t => ({ 
          name: t.name, 
          iconUrl: t.iconUrl && t.iconUrl.trim() ? t.iconUrl : null 
        }))
      ));
      formDataObj.append('benefits', JSON.stringify(formData.benefits.filter(b => b.trim())));
      formDataObj.append('keywords', JSON.stringify(formData.keywords.filter(k => k.trim())));
      
      // Add pricing if enabled
      if (hasPricing && formData.pricing) {
        formDataObj.append('pricing', JSON.stringify(formData.pricing));
      }

      // Add pricing plans if enabled
      if (hasPricingPlans && formData.pricingPlans) {
        formDataObj.append('pricingPlans', JSON.stringify(formData.pricingPlans));
      }
      
          {/* Add image files */}
          if (imageFile) {
            formDataObj.append('image', imageFile);
          }
          if (heroImageFile) {
            formDataObj.append('heroImage', heroImageFile);
          }

          // Add technology icon files
          formData.technologies.forEach((tech, index) => {
            if (tech.iconFile) {
              formDataObj.append(`techIcon-${index}`, tech.iconFile);
            }
          });      const url = mode === 'create' 
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
    } catch (error: unknown) {
      console.error(`Error ${mode === 'create' ? 'creating' : 'updating'} service:`, error);
      setError(error instanceof Error ? error.message : `Failed to ${mode === 'create' ? 'create' : 'update'} service`);
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
            <div className="space-y-4">
              {formData.technologies.map((tech, index) => (
                <div key={index} className="flex gap-2 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={tech.name}
                      onChange={(e) => handleTechnologyChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter technology name"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-2">
                      {tech.iconUrl || tech.iconFile ? (
                        <div className="relative">
                          <Image
                            src={tech.iconFile ? URL.createObjectURL(tech.iconFile) : tech.iconUrl || ''}
                            alt="Technology icon"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-cover rounded mx-auto"
                          />
                          <button
                            type="button"
                            onClick={() => handleTechnologyIconChange(index, null)}
                            className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div
                          className="text-center cursor-pointer"
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = 'image/*';
                            input.onchange = (e) => {
                              const file = (e.target as HTMLInputElement).files?.[0];
                              handleTechnologyIconChange(index, file || null);
                            };
                            input.click();
                          }}
                        >
                          <Upload className="mx-auto h-6 w-6 text-gray-400" />
                          <p className="mt-1 text-xs text-gray-600">Click to upload icon</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeTechnology(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addTechnology}
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

          {/* Pricing Plans */}
          <div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="hasPricingPlans"
                checked={hasPricingPlans}
                onChange={(e) => {
                  setHasPricingPlans(e.target.checked);
                  if (e.target.checked && !formData.pricingPlans) {
                    setFormData(prev => ({
                      ...prev,
                      pricingPlans: {
                        beginner: { priceRange: '', description: '', bulletPoints: [''] },
                        professional: { priceRange: '', description: '', bulletPoints: [''] },
                        pro: { priceRange: '', description: '', bulletPoints: [''] }
                      }
                    }));
                  }
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasPricingPlans" className="ml-2 block text-sm text-gray-900">
                Add dynamic pricing plans (Beginner, Professional, Pro)
              </label>
            </div>
            {hasPricingPlans && formData.pricingPlans && (
              <div className="space-y-6">
                {(['beginner', 'professional', 'pro'] as const).map((plan) => (
                  <div key={plan} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-4 capitalize">{plan} Plan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price Range
                        </label>
                        <input
                          type="text"
                          value={formData.pricingPlans![plan].priceRange}
                          onChange={(e) => handlePricingPlanChange(plan, 'priceRange', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., $25k - $50k"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <input
                          type="text"
                          value={formData.pricingPlans![plan].description}
                          onChange={(e) => handlePricingPlanChange(plan, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., Perfect for startups and small projects"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bullet Points
                      </label>
                      <div className="space-y-2">
                        {formData.pricingPlans![plan].bulletPoints.map((bullet, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={bullet}
                              onChange={(e) => handlePricingPlanBulletChange(plan, index, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter bullet point"
                            />
                            <button
                              type="button"
                              onClick={() => removePricingPlanBullet(plan, index)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addPricingPlanBullet(plan)}
                          className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add Bullet Point
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Legacy Pricing */}
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