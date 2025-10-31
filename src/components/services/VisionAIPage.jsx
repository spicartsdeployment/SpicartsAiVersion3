import { ServiceDetailPage } from '../ServiceDetailPage';
import { Eye, Scan, Camera, Image } from 'lucide-react';

function VisionAIPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Eye,
    title: 'Vision AI',
    tagline: 'See with Intelligence',
    description: 'Advanced computer vision solutions for object detection, image analysis, and visual intelligence. Transform how machines see and understand the world.',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Real-time object detection and tracking',
      'Image classification with 99%+ accuracy',
      'Facial recognition and analysis',
      'Scene understanding and segmentation',
      'OCR for text extraction from images',
      'Visual search and similarity matching',
      'Defect detection for quality control',
      'Pose estimation and gesture recognition',
      'Video analytics and event detection',
    ],
    benefits: [
      {
        title: 'Automated Inspection',
        description: 'Detect defects and quality issues faster than human inspection with AI-powered visual analysis.',
        icon: Scan,
      },
      {
        title: 'Enhanced Security',
        description: 'Implement facial recognition, anomaly detection, and surveillance analytics to improve safety and security.',
        icon: Camera,
      },
      {
        title: 'Visual Search',
        description: 'Enable customers to search for products using images. Improve discovery and conversion rates.',
        icon: Image,
      },
    ],
    useCases: [
      {
        title: 'Manufacturing Quality Control',
        description: 'Automate visual inspection on production lines to detect defects, ensure quality standards, and reduce waste. AI can spot micro-defects invisible to human eyes.',
        stats: '99.5%',
      },
      {
        title: 'Retail Analytics',
        description: 'Track customer behavior, optimize store layouts, and prevent theft with intelligent video analytics. Understand how customers interact with products.',
        stats: '30%',
      },
      {
        title: 'Healthcare Diagnostics',
        description: 'Assist medical professionals with image analysis for radiology, pathology, and diagnostics. Improve accuracy and speed of diagnosis.',
        stats: '95%',
      },
    ],
    cta: {
      title: 'See What Vision AI Can Do',
      description: 'Transform your visual data into actionable insights. Request a demo to see our vision AI in action.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default VisionAIPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\VisionAIPage.jsx