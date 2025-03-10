import { Briefcase, HeartPulse, ShoppingCart, Banknote, GraduationCap, Headphones } from 'lucide-react';

const industries = [
  {
    icon: Briefcase,
    title: "Enterprise & Business",
    description: "Enhance operational efficiency with AI chatbots for workflow automation, employee support, and seamless communication."
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "AI chatbots assist in patient engagement, appointment scheduling, symptom checking, and medical inquiry handling."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "Provide personalized shopping experiences, instant customer support, and order tracking with AI-powered chatbots."
  },
  {
    icon: Banknote,
    title: "Banking & Finance",
    description: "Automate financial inquiries, fraud detection, loan processing, and customer assistance with secure AI chatbots."
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    description: "AI chatbots support students with learning assistance, course recommendations, and administrative queries."
  },
  {
    icon: Headphones,
    title: "Customer Support & Service",
    description: "Reduce response times and improve customer satisfaction with 24/7 AI-driven customer support chatbots."
  }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI chatbot solutions cater to diverse industries, helping businesses optimize communication and automate processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <industry.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{industry.title}</h3>
              <p className="text-black">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
