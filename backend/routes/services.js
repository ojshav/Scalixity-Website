// routes/services.js
const express = require('express');
const router = express.Router();


// Simulated route list from your input (you provided this earlier)
const routes = [
  // '/industries',
  // '/industries/construction',
  // '/industries/fintech',
  // '/industries/fintech/ai-agents',
  // '/industries/fintech/ai-solutions',
  // '/industries/fintech/credit-risk',
  // '/industries/fintech/document-automation',
  // '/industries/fintech/personalized-engines',
  // '/industries/fintech/regulatory-compliance',
  // '/industries/fintech/risk-management',
  // '/industries/fintech/underwriting-pricing',
  // '/industries/fitness',
  // '/industries/food',
  // '/industries/healthcare',
  // '/industries/healthcare/ai-agents',
  // '/industries/healthcare/ai-solutions',
  // '/industries/healthcare/clinical-decision-support',
  // '/industries/healthcare/documentation-intelligence',
  // '/industries/healthcare/fraud-detection',
  // '/industries/healthcare/medical-imaging',
  // '/industries/healthcare/patient-data-analytics',
  // '/industries/healthcare/personalized-medicine',
  // '/industries/insurance',
  // '/industries/manufacturing',
  // '/industries/retail',
  // '/industries/retail/ai-agents',
  // '/industries/retail/ai-solutions',
  // '/industries/retail/customer-segmentation',
  // '/industries/retail/dynamic-pricing',
  // '/industries/retail/personalized-engagement',
  // '/industries/retail/product-discovery',
  // '/industries/retail/sentiment-analysis',
  // '/industries/retail/voice-ordering',
  // '/industries/saas',
  // '/industries/saas/ai-agents',
  // '/industries/saas/ai-analytics',
  // '/industries/saas/ai-automation',
  // '/industries/saas/ai-chatbots',
  // '/industries/saas/ai-copilots',
  // '/industries/saas/ai-integration',
  // '/industries/saas/ai-personalization',
  // '/industries/saas/ai-solutions',
  // '/industries/travel',
  '/services',
  '/services/adaptive-ai',
  '/services/ai-agent',
  '/services/ai-agent-development',
  '/services/ai-consulting',
  '/services/ai-development',
  '/services/android',
  '/services/aws',
  '/services/azure',
  '/services/blueprint',
  '/services/cardano',
  '/services/chatbot',
  '/services/chatgpt',
  '/services/chatgpt-integration',
  '/services/computer-vision',
  '/services/conversational-ai',
  '/services/copilot',
  '/services/dapps',
  '/services/engineers',
  '/services/enterprise',
  '/services/enterprise-ai',
  '/services/enterprise-chatbot',
  '/services/enterprise-gen-ai',
  '/services/expressjs',
  '/services/flutter',
  '/services/gcp',
  '/services/gen-ai-integration',
  '/services/generative-ai',
  '/services/generative-ai/generative-ai-development',
  '/services/hedera',
  '/services/hybrid',
  '/services/ionic',
  '/services/ios',
  '/services/iot',
  '/services/llm',
  '/services/llm-pricing',
  '/services/metaverse',
  '/services/midjourney',
  '/services/ml',
  '/services/mlops',
  '/services/mobile-design',
  '/services/modernization',
  '/services/native',
  '/services/nft',
  '/services/nodejs',
  '/services/poc',
  '/services/product',
  '/services/prompt-engineers',
  '/services/pwa',
  '/services/react-native',
  '/services/reactjs',
  '/services/smart-contracts',
  '/services/stable-diffusion',
  '/services/stellar',
  '/services/web-design',
  '/services/web3',
  '/services/xamarin'
];

// Extract industries and services
function extractIndustries() {
  const industries = [];
  const seen = new Set();

  routes.forEach(route => {
    if (route.startsWith('/industries/') && route.split('/').length === 3) {
      const name = route.split('/')[2];
      const id = name;
      if (!seen.has(id)) {
        industries.push({ id, name: capitalize(name.replace(/-/g, ' ')) });
        seen.add(id);
      }
    }
  });

  return industries;
}

function extractServices() {
  const services = [];
  const industryServices = new Map();

  // Collect services under industries
  routes.forEach(route => {
    const parts = route.split('/');
    if (route.startsWith('/industries/') && parts.length > 3) {
      const industryId = parts[2];
      const serviceName = parts.slice(3).join('/');
      const id = serviceName;
      const url = route;
      if (!industryServices.has(industryId)) {
        industryServices.set(industryId, []);
      }
      industryServices.get(industryId).push({
        id,
        name: capitalize(serviceName.replace(/-/g, ' ')),
        industryId,
        url
      });
    }
  });

  // Add top-level services
  routes.forEach(route => {
    if (route.startsWith('/services/') && route.split('/').length === 3) {
      const name = route.split('/')[2];
      const id = name;
      const url = route;
      services.push({
        id,
        name: capitalize(name.replace(/-/g, ' ')),
        industryId: null,
        url
      });
    }
  });

  // Merge industry-specific services
  industryServices.forEach((industryServicesList, industryId) => {
    services.push(...industryServicesList);
  });

  return services;
}

function capitalize(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Cache the data
let industries = extractIndustries();
let services = extractServices();

router.get('/industries', (req, res) => {
  res.json(industries);
});

router.get('/services', (req, res) => {
  res.json(services);
});


module.exports = router;