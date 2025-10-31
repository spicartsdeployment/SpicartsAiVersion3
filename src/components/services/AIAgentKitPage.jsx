import { ServiceDetailPage } from '../ServiceDetailPage';
import { Bot, Sparkles, Zap, Brain } from 'lucide-react';

function AIAgentKitPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Bot,
    title: 'AI Agent Kit',
    tagline: 'Intelligent Automation',
    description: 'Build intelligent conversational agents that understand context, take actions, and learn from interactions. Our AI Agent Kit provides everything you need to create sophisticated AI assistants.',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Natural Language Processing with advanced understanding',
      'Context-aware responses across multiple conversations',
      'Multi-platform integration (Web, Mobile, Voice)',
      'Custom training on your data',
      'Real-time learning and adaptation',
      'Sentiment analysis and emotion detection',
      'Multi-language support (100+ languages)',
      'API-first architecture for easy integration',
      'Analytics dashboard with insights',
    ],
    benefits: [
      {
        title: 'Boost Efficiency',
        description: 'Automate repetitive tasks and free up your team to focus on high-value work. Our AI agents can handle thousands of conversations simultaneously.',
        icon: Zap,
      },
      {
        title: 'Enhance Customer Experience',
        description: 'Provide instant, 24/7 support with human-like interactions. Our agents understand context and deliver personalized responses.',
        icon: Sparkles,
      },
      {
        title: 'Scale Intelligently',
        description: 'Grow your operations without proportional cost increases. AI agents scale effortlessly to handle any volume.',
        icon: Brain,
      },
    ],
    useCases: [
      {
        title: 'Customer Support Automation',
        description: 'Deploy AI agents to handle common customer inquiries, troubleshoot issues, and escalate complex cases to human agents. Reduce response times by 80% while maintaining high satisfaction scores.',
        stats: '80%',
      },
      {
        title: 'Sales Assistant',
        description: 'Guide customers through product selection, answer questions, and facilitate purchases. Our AI agents can qualify leads, schedule appointments, and follow up automatically.',
        stats: '3x',
      },
      {
        title: 'Internal Operations',
        description: 'Streamline HR processes, IT support, and administrative tasks. Employees can get instant answers to policy questions, submit requests, and access information without waiting.',
        stats: '60%',
      },
    ],
    cta: {
      title: 'Ready to Build Your AI Agent?',
      description: 'Get started with our AI Agent Kit today and transform how you interact with customers and employees.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default AIAgentKitPage;