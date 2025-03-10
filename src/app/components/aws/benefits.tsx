"use client"

const benefits = [
  {
    title: "Scalable and Reliable Infrastructure",
    description: "AWS provides a global network of data centers, ensuring high availability, fault tolerance, and seamless scalability."
  },
  {
    title: "Cost-Effective Cloud Solutions",
    description: "Optimize costs with AWS's pay-as-you-go pricing model, allowing businesses to only pay for the resources they use."
  },
  {
    title: "Advanced Security and Compliance",
    description: "AWS offers enterprise-grade security, compliance certifications, and encryption features to protect your applications and data."
  },
  {
    title: "Seamless Integration with DevOps",
    description: "Leverage AWS DevOps tools like CI/CD pipelines, automation, and container orchestration for efficient deployment and management."
  },
  {
    title: "AI & ML Capabilities for Innovation",
    description: "Utilize AWS AI/ML services like SageMaker, Lex, and Rekognition to build intelligent applications and enhance decision-making."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of AWS Development
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
