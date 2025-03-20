"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const gcpTechCategories = {
  "Compute Services": [
    { name: "Compute Engine", logo: "/images/tech/gcp-compute.svg" },
    { name: "Cloud Functions", logo: "/images/tech/gcp-functions.svg" },
    { name: "App Engine", logo: "/images/tech/gcp-appengine.svg" }
  ],
  "Storage & Databases": [
    { name: "Cloud Storage", logo: "/images/tech/gcp-storage.svg" },
    { name: "BigQuery", logo: "/images/tech/gcp-bigquery.svg" },
    { name: "Cloud SQL", logo: "/images/tech/gcp-sql.svg" }
  ],
  "AI & ML Services": [
    { name: "AI Platform", logo: "/images/tech/gcp-ai.svg" },
    { name: "Vision AI", logo: "/images/tech/gcp-vision.svg" },
    { name: "Natural Language AI", logo: "/images/tech/gcp-nlp.svg" }
  ],
  "Networking & Security": [
    { name: "VPC", logo: "/images/tech/gcp-vpc.svg" },
    { name: "Cloud DNS", logo: "/images/tech/gcp-dns.svg" },
    { name: "IAM & Security", logo: "/images/tech/gcp-iam.svg" }
  ],
  "Serverless & DevOps": [
    { name: "Cloud Build", logo: "/images/tech/gcp-build.svg" },
    { name: "Kubernetes Engine", logo: "/images/tech/gcp-kubernetes.svg" },
    { name: "Terraform on GCP", logo: "/images/tech/gcp-terraform.svg" }
  ]
}

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">GCP TOOL & TECHNOLOGY</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            GCP Tech Stack for Cloud Development
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We leverage Google Cloud&apos;s robust technology stack to create scalable, secure, and efficient cloud solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(gcpTechCategories).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl border border-black p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Array.isArray(items) ? (
                  items.map((item: TechItem, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center">
                      {typeof item === 'object' && item.logo ? (
                        <>
                          <div className="w-16 h-16 relative mb-2">
                            <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-black text-center">{item.name}</span>
                        </>
                      ) : (
                        <span className="text-sm text-black text-center px-3 py-2 bg-gray-200 rounded-full">
                          {typeof item === 'string' ? item : item.name}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-wrap gap-2">
                    {(items as TechItem[]).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-black px-3 py-2 bg-gray-200 rounded-full"
                      >
                        {typeof item === 'string' ? item : item.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
