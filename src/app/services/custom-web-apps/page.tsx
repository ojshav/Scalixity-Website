import { CTA } from "../../components/cta";
import { ServiceHero } from "../../components/service-hero";

const featureHighlights = [
  {
    title: "Tailored User Journeys",
    description:
      "We map every interaction to your audience’s needs so experiences feel intuitive and brand-consistent across devices.",
  },
  {
    title: "Scalable Foundations",
    description:
      "Modular architecture, clean APIs, and cloud-native deployments ensure your app grows without rewrites.",
  },
  {
    title: "Security Baked In",
    description:
      "OWASP best practices, automated testing, and observability keep your data protected end-to-end.",
  },
];

const deliveryProcess = [
  {
    title: "Discovery & Strategy",
    description:
      "Stakeholder interviews, user research, and technical audits that define goals, KPIs, and the product roadmap.",
  },
  {
    title: "Experience Design",
    description:
      "Wireframes, design systems, and prototyping sessions to validate flows before a single line of code ships.",
  },
  {
    title: "Agile Engineering",
    description:
      "Frontend, backend, and integrations built in short, transparent sprints with CI/CD coverage.",
  },
  {
    title: "Launch & Optimization",
    description:
      "Production hardening, analytics instrumentation, and iterative enhancements post launch.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Vercel",
];

export default function CustomWebAppsPage() {
  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      {/* <ServiceHero
        title="Custom Web Applications & Website Development"
        description="We build high-performance websites and web apps — from marketing sites to SaaS MVPs — with responsive design, secure authentication, analytics, and full deployment pipelines."
      /> */}



      <CTA />
    </main>
  );
}

