import { ServiceDetailPage } from '../ServiceDetailPage';
import { Smartphone, Layers, Gauge, Users } from 'lucide-react';

function MobileDevelopmentPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Mobile Excellence',
    description: 'Create stunning native and cross-platform mobile applications for iOS and Android. Deliver exceptional mobile experiences that users love.',
    gradient: 'from-teal-500 to-cyan-500',
    features: [
      'Native iOS (Swift/SwiftUI)',
      'Native Android (Kotlin/Jetpack Compose)',
      'Cross-platform (React Native, Flutter)',
      'Offline-first architecture',
      'Push notifications',
      'In-app purchases and subscriptions',
      'Analytics and crash reporting',
      'CI/CD pipelines',
      'App Store optimization',
    ],
    benefits: [
      {
        title: 'Native Performance',
        description: 'Apps that feel smooth and responsive. Optimized for each platform to deliver the best possible experience.',
        icon: Gauge,
      },
      {
        title: 'Cross-Platform',
        description: 'Build once, deploy everywhere. Reduce development costs while maintaining quality across iOS and Android.',
        icon: Layers,
      },
      {
        title: 'User Engagement',
        description: 'Keep users coming back with push notifications, personalization, and seamless experiences.',
        icon: Users,
      },
    ],
    useCases: [
      {
        title: 'Consumer Apps',
        description: 'Build engaging consumer apps for entertainment, social networking, productivity, and lifestyle. Reach millions of users on their favorite devices.',
        stats: '4.8/5',
      },
      {
        title: 'On-Demand Services',
        description: 'Create platforms for food delivery, ride-sharing, home services, and more. Real-time tracking and instant booking.',
        stats: '3x',
      },
      {
        title: 'Enterprise Mobile',
        description: 'Empower your workforce with mobile apps for field service, sales, inventory management, and collaboration.',
        stats: '45%',
      },
    ],
    cta: {
      title: 'Launch Your Mobile App',
      description: 'Turn your app idea into reality. Schedule a consultation to get started.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default MobileDevelopmentPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\MobileDevelopmentPage.jsx