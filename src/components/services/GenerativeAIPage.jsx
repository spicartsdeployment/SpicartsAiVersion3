import { ServiceDetailPage } from '../ServiceDetailPage';
import { Sparkles, Cpu, Brain, Lightbulb } from 'lucide-react';

function GenerativeAIPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Sparkles,
    title: 'Generative AI & LLMs',
    tagline: 'Next-Gen Intelligence',
    description: 'Leverage state-of-the-art large language models for content generation, analysis, and automation. Our generative AI solutions help you create, understand, and transform text at scale.',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Custom model training on your data',
      'Fine-tuning for domain-specific tasks',
      'Prompt engineering and optimization',
      'Multi-modal understanding (text, images, code)',
      'Content generation with brand voice',
      'Summarization and extraction',
      'Translation across 100+ languages',
      'Code generation and debugging',
      'API integration with popular LLMs',
    ],
    benefits: [
      {
        title: 'Accelerate Content Creation',
        description: 'Generate high-quality content in seconds. From marketing copy to technical documentation, our AI helps you create faster.',
        icon: Lightbulb,
      },
      {
        title: 'Deep Understanding',
        description: 'Extract insights from unstructured data, analyze sentiment, and understand customer intent with advanced NLP capabilities.',
        icon: Brain,
      },
      {
        title: 'Custom Models',
        description: 'Train models on your proprietary data for domain-specific expertise. Get better results than generic solutions.',
        icon: Cpu,
      },
    ],
    useCases: [
      {
        title: 'Content Marketing',
        description: 'Generate blog posts, social media content, email campaigns, and ad copy that resonates with your audience. Maintain brand consistency while producing content at scale.',
        stats: '5x',
      },
      {
        title: 'Customer Insights',
        description: 'Analyze customer feedback, reviews, and support tickets to understand sentiment and identify trends. Make data-driven decisions to improve products and services.',
        stats: '95%',
      },
      {
        title: 'Development Assistance',
        description: 'Accelerate software development with AI-powered code generation, bug detection, and documentation. Help developers write better code faster.',
        stats: '40%',
      },
    ],
    cta: {
      title: 'Unlock the Power of Generative AI',
      description: 'Start creating, analyzing, and automating with our generative AI platform. Schedule a demo to see it in action.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default GenerativeAIPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\GenerativeAIPage.jsx