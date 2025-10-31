import { ServiceDetailPage } from '../ServiceDetailPage';
import { Code, Cpu, Radio, Lock } from 'lucide-react';

function EmbeddedDevelopmentPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Code,
    title: 'Embedded / IoT Software',
    tagline: 'Hardware Integration',
    description: 'Develop robust firmware and embedded software for IoT devices and hardware products. Bridge the gap between hardware and software with expert embedded development.',
    gradient: 'from-violet-500 to-purple-500',
    features: [
      'Firmware development (C/C++, Rust)',
      'RTOS and bare-metal programming',
      'Device driver development',
      'Wireless connectivity (WiFi, BLE, LoRa)',
      'Power optimization',
      'Bootloader and OTA updates',
      'Hardware abstraction layers',
      'Testing and debugging',
      'Certification support (FCC, CE)',
    ],
    benefits: [
      {
        title: 'Reliable Performance',
        description: 'Rock-solid firmware that runs 24/7 without failure. Optimized for stability and efficiency.',
        icon: Cpu,
      },
      {
        title: 'Wireless Connectivity',
        description: 'Seamlessly connect devices to the cloud. Support for all major wireless protocols.',
        icon: Radio,
      },
      {
        title: 'Secure by Design',
        description: 'Built-in security from boot to cloud. Protect your devices and user data.',
        icon: Lock,
      },
    ],
    useCases: [
      {
        title: 'Smart Home Devices',
        description: 'Develop firmware for smart lights, thermostats, locks, and sensors. Create products that integrate seamlessly with major platforms.',
        stats: '99.9%',
      },
      {
        title: 'Wearable Technology',
        description: 'Build low-power firmware for fitness trackers, smartwatches, and health monitoring devices. Optimize battery life and performance.',
        stats: '7 days',
      },
      {
        title: 'Industrial Sensors',
        description: 'Create embedded solutions for industrial monitoring, asset tracking, and environmental sensing. Reliable operation in harsh conditions.',
        stats: '5 years',
      },
    ],
    cta: {
      title: 'Bring Your Hardware to Life',
      description: "Expert embedded software development for your hardware products. Let's discuss your project.",
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default EmbeddedDevelopmentPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\EmbeddedDevelopmentPage.jsx