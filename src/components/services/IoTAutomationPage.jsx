import { ServiceDetailPage } from '../ServiceDetailPage';
import { Wifi, Radio, Network, Activity } from 'lucide-react';

function IoTAutomationPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Wifi,
    title: 'IoT Automation',
    tagline: 'Connected Everything',
    description: 'Connect and control your devices seamlessly with our IoT automation platform. Build intelligent systems where devices communicate, learn, and work together.',
    gradient: 'from-indigo-500 to-purple-500',
    features: [
      'Multi-protocol device integration (WiFi, Bluetooth, Zigbee)',
      'Cloud and edge computing support',
      'Real-time data streaming',
      'Device monitoring and diagnostics',
      'Remote control and management',
      'Automated workflows and scenes',
      'Data analytics and insights',
      'Secure device authentication',
      'OTA firmware updates',
    ],
    benefits: [
      {
        title: 'Universal Connectivity',
        description: 'Connect any device from any manufacturer. Our platform supports all major IoT protocols and standards.',
        icon: Network,
      },
      {
        title: 'Real-time Monitoring',
        description: 'Monitor device status, performance, and health in real-time. Get instant alerts for issues or anomalies.',
        icon: Activity,
      },
      {
        title: 'Edge Intelligence',
        description: 'Process data at the edge for faster response times and reduced bandwidth. Run AI models directly on devices.',
        icon: Radio,
      },
    ],
    useCases: [
      {
        title: 'Smart Agriculture',
        description: 'Monitor soil conditions, weather, and crop health with IoT sensors. Automate irrigation, fertilization, and pest control for optimal yields.',
        stats: '30%',
      },
      {
        title: 'Fleet Management',
        description: 'Track vehicles in real-time, monitor driver behavior, optimize routes, and predict maintenance needs. Reduce fuel costs and improve efficiency.',
        stats: '25%',
      },
      {
        title: 'Industrial IoT',
        description: 'Connect factory equipment, monitor production metrics, and enable predictive maintenance. Transform manufacturing with connected intelligence.',
        stats: '40%',
      },
    ],
    cta: {
      title: 'Connect Your Devices Today',
      description: 'Build your IoT ecosystem with our comprehensive automation platform. Get started with a free consultation.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default IoTAutomationPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\IoTAutomationPage.jsx