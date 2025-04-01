"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Core Technologies",
    items: [
      { name: "Node.js", logo: "/images/tech/nodejs.svg" },
      { name: "JavaScript", logo: "/images/tech/javascript.svg" },
      { name: "TypeScript", logo: "/images/tech/typescript.svg" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Express.js", logo: "/images/tech/express.svg" },
      { name: "NestJS", logo: "/images/tech/nestjs.svg" },
      { name: "Koa", logo: "/images/tech/koa.svg" }
    ]
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
      { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
      { name: "Prisma", logo: "/images/tech/prisma.svg" }
    ]
  },
  {
    category: "Authentication & Security",
    items: [
      { name: "JWT", logo: "/images/tech/jwt.webp" },
      { name: "OAuth", logo: "/images/tech/oauth.svg" },
      { name: "bcrypt", logo: "/images/tech/bcrypt.svg" }
    ]
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "Jest", logo: "/images/tech/jest.svg" },
      { name: "Mocha", logo: "/images/tech/mocha.svg" },
      { name: "Postman", logo: "/images/tech/postman.svg" }
    ]
  },
  {
    category: "Deployment & Cloud",
    items: [
      { name: "AWS", logo: "/images/tech/aws.svg" },
      { name: "Heroku", logo: "/images/tech/heroku.svg" },
      { name: "Vercel", logo: "/images/tech/vercel.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Node.js Development Tech Stack
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Explore the powerful technologies we use to build fast, scalable, and secure Node.js applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-black text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
