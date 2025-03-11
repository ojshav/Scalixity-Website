"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Core Technologies",
    items: [
      { name: "Express.js", logo: "/images/tech/express.svg" },
      { name: "Node.js", logo: "/images/tech/nodejs.svg" },
      { name: "JavaScript", logo: "/images/tech/javascript.svg" }
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
      { name: "JWT", logo: "/images/tech/jwt.svg" },
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
    category: "API & Middleware",
    items: [
      { name: "Axios", logo: "/images/tech/axios.svg" },
      { name: "CORS", logo: "/images/tech/cors.svg" },
      { name: "Helmet", logo: "/images/tech/helmet.svg" }
    ]
  },
  {
    category: "Deployment & Cloud",
    items: [
      { name: "Heroku", logo: "/images/tech/heroku.svg" },
      { name: "AWS", logo: "/images/tech/aws.svg" },
      { name: "Vercel", logo: "/images/tech/vercel.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#5b0bb5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Express.js Development Tech Stack
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore the robust technologies we use to build scalable, high-performance Express.js applications.
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
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#5b0bb5] mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-gray-600 text-sm text-center">{item.name}</span>
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
