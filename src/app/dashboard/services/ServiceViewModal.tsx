'use client'
import React from 'react';
import { X, ExternalLink, Globe } from 'lucide-react';
import Image from 'next/image';

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

interface ServiceViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceViewModal({ isOpen, onClose, service }: ServiceViewModalProps) {
  if (!isOpen || !service) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-4 mx-auto p-0 border max-w-4xl shadow-lg rounded-lg bg-white mb-8">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              /{service.slug}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.open(`http://localhost:3000/services/${service.slug}`, '_blank')}
              className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
            >
              <Globe className="h-4 w-4 mr-1" />
              View Live
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-6">
            {/* Images Section */}
            {(service.imageUrl || service.heroImageUrl) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.imageUrl && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Service Image</h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={service.imageUrl}
                        alt={`${service.title} image`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                )}
                {service.heroImageUrl && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Hero Image</h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={service.heroImageUrl}
                        alt={`${service.title} hero`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Description Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Short Description</h4>
              <p className="text-gray-900 bg-gray-50 rounded-md p-3">
                {service.shortDescription}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Full Description</h4>
              <div className="text-gray-900 bg-gray-50 rounded-md p-3 whitespace-pre-wrap">
                {service.description}
              </div>
            </div>

            {/* Features Section */}
            {service.features.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Features ({service.features.length})</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features
                    .sort((a, b) => a.order - b.order)
                    .map((feature, index) => (
                      <div key={feature.id} className="flex items-center space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 text-xs font-medium rounded-full flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-gray-900">{feature.feature}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Technologies Section */}
            {service.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Technologies ({service.technologies.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies
                    .sort((a, b) => a.order - b.order)
                    .map((tech) => (
                      <span
                        key={tech.id}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {tech.technology}
                      </span>
                    ))}
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {service.benefits.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Benefits ({service.benefits.length})</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.benefits
                    .sort((a, b) => a.order - b.order)
                    .map((benefit, index) => (
                      <div key={benefit.id} className="flex items-center space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center justify-center">
                          ✓
                        </span>
                        <span className="text-gray-900">{benefit.benefit}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Keywords Section */}
            {service.keywords && service.keywords.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Keywords ({service.keywords.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {service.keywords
                    .sort((a, b) => a.order - b.order)
                    .map((keyword) => (
                      <span
                        key={keyword.id}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {keyword.keyword}
                      </span>
                    ))}
                </div>
              </div>
            )}

            {/* Pricing Section */}
            {service.pricing && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Pricing Information</h4>
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="text-lg font-semibold text-green-900 mb-1">
                    {service.pricing.starting}
                  </div>
                  <div className="text-sm text-green-700">
                    {service.pricing.description}
                  </div>
                </div>
              </div>
            )}

            {/* Metadata Section */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Metadata</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Service ID:</span>
                  <span className="ml-2 text-gray-900 font-mono">{service.id}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Slug:</span>
                  <span className="ml-2 text-gray-900">/{service.slug}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Created:</span>
                  <span className="ml-2 text-gray-900">{formatDate(service.createdAt)}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Last Updated:</span>
                  <span className="ml-2 text-gray-900">{formatDate(service.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => window.open(`http://localhost:3000/services/${service.slug}`, '_blank')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View on Website
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}