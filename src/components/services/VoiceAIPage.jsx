import { ServiceDetailPage } from '../ServiceDetailPage';
import { Mic2, Volume2, Headphones, Radio } from 'lucide-react';

function VoiceAIPage({ theme, onNavigate }) {
  const serviceData = {
    icon: Mic2,
    title: 'Voice AI',
    tagline: 'Natural Voice Synthesis',
    description: 'Create emotionally expressive voice experiences with our advanced voice AI technology. From text-to-speech to voice cloning, we bring natural human-like communication to your applications.',
    gradient: 'from-[#4deeea] to-[#2d9cdb]',
    features: [
      'Real-time voice synthesis with <50ms latency',
      'Emotion and tone control for natural expression',
      '100+ languages and regional accents',
      'Custom voice cloning and branding',
      'Voice-to-text transcription with 98% accuracy',
      'Speaker diarization (multi-speaker detection)',
      'Background noise cancellation',
      'Streaming audio support',
      'On-device processing for privacy',
    ],
    benefits: [
      {
        title: 'Natural Conversations',
        description: 'Create voice experiences that feel human with emotion detection, natural pauses, and context-aware intonation.',
        icon: Volume2,
      },
      {
        title: 'Brand Voice',
        description: 'Develop a unique voice identity for your brand. Clone voices or create entirely new personas that represent your company.',
        icon: Radio,
      },
      {
        title: 'Accessibility',
        description: 'Make your content accessible to everyone with high-quality text-to-speech in multiple languages and accents.',
        icon: Headphones,
      },
    ],
    useCases: [
      {
        title: 'Voice Assistants',
        description: 'Power smart speakers, mobile apps, and automotive systems with natural voice interaction. Users can control devices, get information, and complete tasks using only their voice.',
        stats: '4.9/5',
      },
      {
        title: 'Content Accessibility',
        description: 'Convert written content into spoken audio for podcasts, audiobooks, e-learning, and accessibility features. Reach audiences who prefer or require audio content.',
        stats: '10x',
      },
      {
        title: 'Call Centers',
        description: 'Enhance IVR systems and automate call handling with natural-sounding voice responses. Reduce wait times and improve customer satisfaction.',
        stats: '70%',
      },
    ],
    cta: {
      title: 'Experience the Power of Voice AI',
      description: 'Transform your applications with natural voice interaction. Get started with a free demo today.',
    },
  };

  return <ServiceDetailPage theme={theme} onNavigate={onNavigate} service={serviceData} />;
}

export default VoiceAIPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\VoiceAIPage.jsx