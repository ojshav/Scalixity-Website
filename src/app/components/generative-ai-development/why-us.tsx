import Image from 'next/image'

const features = [
  {
    icon: "/icons/preprocess-data.svg",
    title: "Preprocess the data",
    description: "We streamline data preparation for businesses, employing advanced techniques to enhance data quality. Our AI engineers collaborate closely with client teams to eliminate noise and inconsistencies, ensuring your data is ready for effective use."
  },
  {
    icon: "/icons/data-security.svg",
    title: "Data security",
    description: "We recognize that data security is as important as the AI solutions themselves. Therefore, our AI engineers employ multi-factor authentication and robust encryption techniques to protect our clients' data. With encryption protocols for data transmission and AES for data retrieval, we ensure seamless and secure handling of client data."
  },
  {
    icon: "/icons/evaluation-models.svg",
    title: "Evaluation of Models",
    description: "To ensure our AI solutions meet your business needs, we employ rigorous evaluation methods. The techniques we use help us to test the model's effectiveness across different data subsets, focusing on key performance metrics such as accuracy and precision. We also fine-tune model to ensure optimal performance tailored to your specific requirements."
  },
  {
    icon: "/icons/mlops-management.svg",
    title: "MLOps Management",
    description: "Our MLOps team specializes in deploying solutions, ensuring the validation of outputs, and effectively reducing data processing costs. They employ a range of tools to continuously conduct cost-impact analyses, helping to optimize the financial efficiency of the solution. Additionally, they focus on maintaining consistent performance, reliability and scalability across different environments."
  },
  {
    icon: "/icons/production-grade.svg",
    title: "Production-grade model scalability",
    description: "We help in optimizing large language models to maintain high-quality outputs while managing computational costs. Using techniques like quantization and pruning, we ensure efficient scalability to meet growing demands of the business, all while keeping expenses in check to maximize the ROI."
  }
]

export function WhyUs() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How do we build a Generative AI solution for businesses?</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Scalixity leverages advanced algorithms and data-driven insights to deliver unparalleled
          accuracy and relevance. With a keen focus on data security, model architecture, model
          evaluation, data quality and MLOps management, we can develop highly competitive
          Generative AI applications for our clients.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <Image src={feature.icon} alt={feature.title} width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

