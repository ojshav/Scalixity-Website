import { CheckCircle } from "lucide-react";

const reasons = [
  "Expertise in cutting-edge LLM technologies",
  "Customized solutions for your specific business needs",
  "Scalable and efficient LLM implementations",
  "Continuous support and model fine-tuning",
  "Ethical AI practices and data security",
  "Integration with existing systems and workflows",
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Why Choose Our LLM Development Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-1" />
              <p className="text-black text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
