import { ServiceDetailPage } from '../ServiceDetailPage';
import { Globe, Rocket, Smartphone, Zap } from 'lucide-react';

function WebDevelopmentPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Modern Web Apps',
    description: 'Build fast, scalable, and beautiful web applications with cutting-edge technologies. From SPAs to full-stack platforms, we create web experiences that delight users.',
    gradient: 'from-blue-500 to-indigo-500',
    features: [
      'React, Next.js, and modern frameworks',
      'Responsive and mobile-first design',
      'Progressive Web Apps (PWA)',
      'Server-side rendering (SSR)',
      'API development and integration',
      'Database design and optimization',
      'Cloud deployment and DevOps',
      'Performance optimization',
      'SEO and accessibility',
    ],
    benefits: [
      {
        title: 'Lightning Fast',
        description: 'Build web apps that load instantly and respond immediately. Optimized for performance and user experience.',
        icon: Zap,
      },
      {
        title: 'Mobile-First',
        description: 'Responsive designs that work beautifully on any device. Mobile users are prioritized from day one.',
        icon: Smartphone,
      },
      {
        title: 'Scalable Architecture',
        description: 'Build for growth. Our architecture scales effortlessly from hundreds to millions of users.',
        icon: Rocket,
      },
    ],
    useCases: [
      {
        title: 'E-Commerce Platforms',
        description: 'Build high-converting online stores with smooth checkout flows, personalized recommendations, and seamless payment integration.',
        stats: '2.5x',
      },
      {
        title: 'SaaS Applications',
        description: 'Create feature-rich web applications with user management, subscriptions, analytics, and integrations.',
        stats: '99.9%',
      },
      {
        title: 'Enterprise Portals',
        description: 'Develop secure internal platforms for employee collaboration, data management, and business operations.',
        stats: '60%',
      },
    ],
    cta: {
      title: 'Build Your Web Application',
      description: "Transform your idea into a powerful web application. Let's discuss your project today.",
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default WebDevelopmentPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\WebDevelopmentPage.jsx