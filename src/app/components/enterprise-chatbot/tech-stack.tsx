"use client";

const techStack = {
  "Natural Language Processing (NLP)": [
    { name: "spaCy", logo: "/tech/spacy.svg" },
    { name: "NLTK", logo: "/tech/nltk.svg" },
    { name: "Transformers (Hugging Face)", logo: "/tech/transformers.svg" }
  ],
  "Machine Learning Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" }
  ],
  "Conversational AI Platforms": [
    { name: "Rasa", logo: "/tech/rasa.svg" },
    { name: "Google Dialogflow", logo: "/tech/dialogflow.svg" },
    { name: "Amazon Lex", logo: "/tech/aws-lex.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/tech/python.svg" },
    { name: "JavaScript", logo: "/tech/javascript.svg" },
    { name: "Node.js", logo: "/tech/nodejs.svg" }
  ],
  "Cloud & AI Services": [
    { name: "OpenAI GPT", logo: "/tech/openai.svg" },
    { name: "Azure AI", logo: "/tech/azure.svg" },
    { name: "Google AI", logo: "/tech/googleai.svg" }
  ],
  "MLOps & Deployment": [
    { name: "Docker", logo: "/tech/docker.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
    { name: "MLflow", logo: "/tech/mlflow.svg" }
  ],
  "Messaging & Integration": [
    { name: "WhatsApp API", logo: "/tech/whatsapp.svg" },
    { name: "Facebook Messenger API", logo: "/tech/messenger.svg" },
    { name: "Slack API", logo: "/tech/slack.svg" }
  ],
  "Database & Storage": [
    { name: "MongoDB", logo: "/tech/mongodb.svg" },
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "Firebase", logo: "/tech/firebase.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Technologies We Use for Enterprise Chatbot AI Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB]">
              <h3 className="text-xl font-semibold text-black mb-4">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-black text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
