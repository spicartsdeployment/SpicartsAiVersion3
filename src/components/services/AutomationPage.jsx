import { ServiceDetailPage } from '../ServiceDetailPage';
import { Zap, Home, Building2, TrendingUp } from 'lucide-react';

function AutomationPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Zap,
    title: 'Advanced AI Automation',
    tagline: 'Smart Living & Industry',
    description: 'Transform homes and industries with intelligent automation powered by AI. From smart homes to industrial facilities, we make automation intelligent, adaptive, and efficient.',
    gradient: 'from-yellow-500 to-orange-500',
    features: [
      'Voice-controlled smart home systems',
      'Predictive maintenance for equipment',
      'Energy optimization algorithms',
      'Automated climate control',
      'Intelligent lighting systems',
      'Security and surveillance automation',
      'Industrial process automation',
      'Workflow optimization',
      'Real-time monitoring and alerts',
    ],
    benefits: [
      {
        title: 'Energy Savings',
        description: 'Reduce energy consumption by 30-40% with AI-powered optimization that learns your patterns and adjusts automatically.',
        icon: TrendingUp,
      },
      {
        title: 'Smart Home Comfort',
        description: 'Create the perfect environment automatically. AI learns your preferences and adjusts temperature, lighting, and more.',
        icon: Home,
      },
      {
        title: 'Industrial Efficiency',
        description: 'Optimize production processes, reduce downtime, and improve output with intelligent automation systems.',
        icon: Building2,
      },
    ],
    useCases: [
      {
        title: 'Smart Home Ecosystem',
        description: 'Create an intelligent home that anticipates your needs. Control lighting, temperature, security, entertainment, and appliances with voice or automatically based on learned behaviors.',
        stats: '40%',
      },
      {
        title: 'Manufacturing Automation',
        description: 'Streamline production with AI-driven automation. Optimize workflows, predict maintenance needs, and improve quality control across your facility.',
        stats: '50%',
      },
      {
        title: 'Building Management',
        description: 'Automate commercial building operations including HVAC, lighting, security, and energy management. Reduce costs while improving occupant comfort.',
        stats: '35%',
      },
    ],
    cta: {
      title: 'Automate Your World with AI',
      description: 'Discover how our advanced automation solutions can transform your home or business. Schedule a consultation today.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default AutomationPage;