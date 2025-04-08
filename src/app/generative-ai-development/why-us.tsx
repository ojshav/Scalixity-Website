import Image from 'next/image';

const features = [
  {
    icon: "/icons/preprocess-data.svg",
    title: "Preprocess the Data",
    description: "We streamline data preparation for businesses, employing advanced techniques to enhance data quality. Our AI engineers collaborate closely with client teams to eliminate noise and inconsistencies, ensuring your data is ready for effective use."
  },
  {
    icon: "/icons/data-security.svg",
    title: "Data Security",
    description: "We recognize that data security is as important as the AI solutions themselves. Our AI engineers employ multi-factor authentication and robust encryption techniques, including AES encryption and secure transmission protocols, ensuring seamless data protection."
  },
  {
    icon: "/icons/evaluation-models.svg",
    title: "Evaluation of Models",
    description: "To ensure our AI solutions meet business needs, we employ rigorous evaluation methods. Our techniques assess model effectiveness across diverse data subsets, focusing on key metrics like accuracy and precision while fine-tuning for optimal performance."
  },
  {
    icon: "/icons/mlops-management.svg",
    title: "MLOps Management",
    description: "Our MLOps team specializes in deploying solutions, validating outputs, and reducing data processing costs. By continuously analyzing cost impacts and optimizing computational resources, we ensure reliable, scalable, and cost-efficient AI solutions."
  },
  {
    icon: "/icons/production-grade.svg",
    title: "Production-Grade Model Scalability",
    description: "We optimize large AI models to maintain high-quality outputs while managing computational costs. Techniques like quantization and pruning help us ensure seamless scalability, allowing businesses to scale AI solutions efficiently without excessive expenses."
  }
];

export function WhyUs() {
  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          How Do We Build a Generative AI Solution for Businesses?
        </h2>
        <p className="text-center text-black mb-12 max-w-3xl mx-auto">
          Scalixity leverages advanced algorithms and data-driven insights to deliver unparalleled accuracy and relevance.
          With a focus on data security, model architecture, evaluation, data quality, and MLOps management, we develop
          highly competitive Generative AI applications tailored for our clients.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black"> {/* Beige card with black border */}
              <Image src={feature.icon} alt={feature.title} width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
