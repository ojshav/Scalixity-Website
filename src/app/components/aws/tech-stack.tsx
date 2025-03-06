"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const awsTechCategories = {
  "Compute Services": [
    { name: "EC2", logo: "/tech/aws-ec2.svg" },
    { name: "Lambda", logo: "/tech/aws-lambda.svg" },
    { name: "Elastic Beanstalk", logo: "/tech/aws-eb.svg" }
  ],
  "Storage & Databases": [
    { name: "S3", logo: "/tech/aws-s3.svg" },
    { name: "DynamoDB", logo: "/tech/aws-dynamodb.svg" },
    { name: "RDS", logo: "/tech/aws-rds.svg" }
  ],
  "AI & ML Services": [
    { name: "SageMaker", logo: "/tech/aws-sagemaker.svg" },
    { name: "Comprehend", logo: "/tech/aws-comprehend.svg" },
    { name: "Rekognition", logo: "/tech/aws-rekognition.svg" }
  ],
  "Networking & Security": [
    { name: "VPC", logo: "/tech/aws-vpc.svg" },
    { name: "Route 53", logo: "/tech/aws-route53.svg" },
    { name: "IAM", logo: "/tech/aws-iam.svg" }
  ],
  "Serverless & DevOps": [
    { name: "API Gateway", logo: "/tech/aws-apigateway.svg" },
    { name: "CloudFormation", logo: "/tech/aws-cloudformation.svg" },
    { name: "CodePipeline", logo: "/tech/aws-codepipeline.svg" }
  ]
}

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AWS TOOL & TECHNOLOGY</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            AWS Tech Stack for Cloud Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage a comprehensive AWS technology stack to build scalable, secure, and efficient cloud solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(awsTechCategories).map(([category, items], index) => (
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
