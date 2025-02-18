import { useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function EnterpriseAIHero() {
  const canvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (node !== null) {
      const ctx = node.getContext('2d');
      if (ctx) {
        node.width = 600;
        node.height = 600;

        const centerX = node.width / 2;
        const centerY = node.height / 2;

        function drawInfographic() {
          ctx.clearRect(0, 0, node.width, node.height);

          // Draw central circle
          ctx.beginPath();
          ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
          ctx.fillStyle = '#3B82F6';
          ctx.fill();

          ctx.fillStyle = 'white';
          ctx.font = 'bold 16px Inter';
          ctx.textAlign = 'center';
          ctx.fillText('Generative', centerX, centerY - 10);
          ctx.fillText('AI Core', centerX, centerY + 10);

          // Connecting nodes
          const aiApplications = [
            { label: 'NLP', x: centerX - 150, y: centerY - 150 },
            { label: 'Computer Vision', x: centerX + 150, y: centerY - 150 },
            { label: 'Chatbots', x: centerX - 150, y: centerY + 150 },
            { label: 'Predictive Analytics', x: centerX + 150, y: centerY + 150 },
            { label: 'Automation', x: centerX, y: centerY - 200 }
          ];

          aiApplications.forEach(type => {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(type.x, type.y);
            ctx.strokeStyle = '#9CA3AF';
            ctx.stroke();

            ctx.fillStyle = '#1E293B';
            ctx.fillRect(type.x - 50, type.y - 20, 100, 40);
            ctx.strokeStyle = '#6B7280';
            ctx.strokeRect(type.x - 50, type.y - 20, 100, 40);

            ctx.fillStyle = 'white';
            ctx.font = '14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(type.label, type.x, type.y + 5);
          });
        }

        drawInfographic();
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1F] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Generative AI Development
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Unlock the power of Generative AI with Scalixity. We build AI-driven applications that enhance automation, optimize workflows, and create innovative solutions tailored to your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
          <div className="relative">
            <canvas ref={canvasRef} className="w-full max-w-[600px] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
