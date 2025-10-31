import { ServiceDetailPage } from '../ServiceDetailPage';
import { Atom, Code, Cog, Zap } from 'lucide-react';

function CustomAIDevelopmentPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Atom,
    title: 'Custom AI Development',
    tagline: 'Tailored Solutions',
    description: 'Build bespoke AI solutions designed specifically for your unique business needs. From ideation to deployment, we create custom AI systems that give you a competitive edge.',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'End-to-end AI solution development',
      'Custom model architecture design',
      'Proprietary algorithm development',
      'Integration with existing systems',
      'On-premise or cloud deployment',
      'Model monitoring and maintenance',
      'Performance optimization',
      'Compliance and security (GDPR, HIPAA)',
      'Dedicated engineering team',
    ],
    benefits: [
      {
        title: 'Competitive Advantage',
        description: "Get AI capabilities uniquely tailored to your business that competitors can't replicate.",
        icon: Zap,
      },
      {
        title: 'Full Control',
        description: 'Own your AI models and data. Deploy on-premise or in your cloud environment with complete control.',
        icon: Cog,
      },
      {
        title: 'Expert Team',
        description: 'Work with experienced AI engineers, data scientists, and ML specialists dedicated to your success.',
        icon: Code,
      },
    ],
    useCases: [
      {
        title: 'Predictive Maintenance',
        description: 'Build custom models that predict equipment failures before they happen. Reduce downtime and maintenance costs with AI-powered forecasting.',
        stats: '45%',
      },
      {
        title: 'Fraud Detection',
        description: 'Develop specialized AI systems to detect fraudulent transactions, identity theft, and suspicious patterns specific to your industry.',
        stats: '98%',
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Create custom AI solutions for demand forecasting, inventory management, and logistics optimization tailored to your supply chain.',
        stats: '25%',
      },
    ],
    cta: {
      title: 'Ready to Build Your Custom AI Solution?',
      description: "Let's discuss your unique requirements and how we can create the perfect AI solution for your business.",
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default CustomAIDevelopmentPage;