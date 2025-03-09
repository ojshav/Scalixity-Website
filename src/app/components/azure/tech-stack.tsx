"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const azureTechCategories = {
  "Compute Services": [
    { name: "Virtual Machines", logo: "/images/tech/azure-vm.svg" },
    { name: "Functions", logo: "/images/tech/azure-functions.svg" },
    { name: "App Services", logo: "/images/tech/azure-appservice.svg" }
  ],
  "Storage & Databases": [
    { name: "Blob Storage", logo: "/images/tech/azure-blob.svg" },
    { name: "Cosmos DB", logo: "/images/tech/azure-cosmosdb.svg" },
    { name: "SQL Database", logo: "/images/tech/azure-sqldb.svg" }
  ],
  "AI & ML Services": [
    { name: "Machine Learning", logo: "/images/tech/azure-ml.svg" },
    { name: "Cognitive Services", logo: "/images/tech/azure-cognitive.svg" },
    { name: "Bot Services", logo: "/images/tech/azure-bot.svg" }
  ],
  "Networking & Security": [
    { name: "Virtual Network", logo: "/images/tech/azure-vnet.svg" },
    { name: "Azure DNS", logo: "/images/tech/azure-dns.svg" },
    { name: "Active Directory", logo: "/images/tech/azure-ad.svg" }
  ],
  "Serverless & DevOps": [
    { name: "API Management", logo: "/images/tech/azure-apim.svg" },
    { name: "Azure DevOps", logo: "/images/tech/azure-devops.svg" },
    { name: "Terraform on Azure", logo: "/images/tech/azure-terraform.svg" }
  ]
}

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AZURE TOOL & TECHNOLOGY</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Azure Tech Stack for Cloud Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We utilize a powerful Azure technology stack to deliver scalable, secure, and innovative cloud solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(azureTechCategories).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category}</h3>
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
                          <span className="text-sm text-muted-foreground text-center">{item.name}</span>
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground text-center px-3 py-2 bg-muted rounded-full">
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
                        className="text-sm text-muted-foreground px-3 py-2 bg-muted rounded-full"
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
