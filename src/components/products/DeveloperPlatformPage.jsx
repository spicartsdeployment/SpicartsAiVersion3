import { motion } from 'motion/react';
import { Code, Zap, Shield, Cloud, Terminal, BookOpen, Users, TrendingUp, CheckCircle2, ArrowRight, Lock, Gauge, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function DeveloperPlatformPage({ theme, onNavigate }) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const features = [
    {
      icon: Code,
      title: 'Complete API Suite',
      description: 'RESTful APIs, WebSocket support, and SDKs for all major languages',
      highlights: ['REST & GraphQL', 'Real-time WebSocket', 'Python, Node.js, Go SDKs'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with OAuth 2.0, API keys, and end-to-end encryption',
      highlights: ['OAuth 2.0', 'API Key Management', 'E2E Encryption'],
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Sub-100ms latency with 99.99% uptime SLA and auto-scaling',
      highlights: ['<100ms Latency', '99.99% Uptime', 'Auto-scaling'],
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deploy across 25+ regions worldwide with edge computing support',
      highlights: ['25+ Regions', 'Edge Computing', 'CDN Integration'],
    },
  ];

  const apiEndpoints = [
    { method: 'POST', endpoint: '/v1/voice/synthesize', description: 'Text-to-speech synthesis' },
    { method: 'POST', endpoint: '/v1/voice/transcribe', description: 'Speech-to-text transcription' },
    { method: 'POST', endpoint: '/v1/agents/create', description: 'Create AI agent' },
    { method: 'GET', endpoint: '/v1/agents/:id', description: 'Get agent details' },
  ];

  const sdks = [
    { name: 'Python', version: '2.4.0', downloads: '50K+' },
    { name: 'Node.js', version: '2.4.0', downloads: '45K+' },
    { name: 'Go', version: '1.2.0', downloads: '20K+' },
    { name: 'Java', version: '1.8.0', downloads: '15K+' },
  ];

  const codeExample = `import { VoiceAI } from '@spicarts/voice-ai';

const client = new VoiceAI({
  apiKey: process.env.SPICARTS_API_KEY,
});

// Create a voice agent
const agent = await client.agents.create({
  name: 'CustomerSupport',
  model: 'gpt-4-voice',
  voice: 'neural-sarah',
  systemPrompt: 'You are a helpful assistant.'
});

// Start conversation
const response = await agent.speak({
  text: 'How can I help you today?',
  streamAudio: true
});`;

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                background: 'rgba(77, 238, 234, 0.1)',
                border: '1px solid rgba(77, 238, 234, 0.3)',
              }}>
                <Code size={16} className="text-[#4deeea]" />
                <span className="text-[#4deeea]" style={{ fontSize: '13px', fontWeight: 600 }}>
                  Developer Platform
                </span>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontSize: '56px',
                  fontWeight: 700,
                  lineHeight: '1.1',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Build AI-Powered Apps in{' '}
                <span className="text-[#4deeea]">Minutes</span>
              </h1>

              <p
                className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                }}
              >
                Complete developer platform with APIs, SDKs, and tools to integrate voice AI, vision AI, and intelligent agents into your applications.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => handleNavigate('demo')}
                  className="px-8 py-4 rounded-xl text-black transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{
                    background: '#4deeea',
                    fontWeight: 600,
                    fontSize: '16px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Get API Key
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleNavigate('resources/docs')}
                  className={`px-8 py-4 rounded-xl border transition-all duration-300 ${theme === 'dark'
                    ? 'border-white/20 hover:border-[#4deeea]/50 hover:bg-white/5'
                    : 'border-black/20 hover:border-[#4deeea]/50 hover:bg-black/5'
                    }`}
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  View Docs
                </button>
              </div>

              <div className="flex items-center gap-8">
                {[
                  { label: 'API Calls/mo', value: '10B+' },
                  { label: 'Developers', value: '50K+' },
                  { label: 'Uptime', value: '99.99%' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[#4deeea]" style={{ fontSize: '24px', fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '12px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border" style={{
                background: theme === 'dark' ? '#0d1117' : '#f6f8fa',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className={theme === 'dark' ? 'text-white/40' : 'text-black/40'} style={{ fontSize: '12px', marginLeft: '12px' }}>
                    example.js
                  </span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code
                    className={theme === 'dark' ? 'text-white/90' : 'text-black/90'}
                    style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.7' }}
                  >
                    {codeExample}
                  </code>
                </pre>
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 p-4 rounded-xl backdrop-blur-xl border"
                style={{
                  background: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    background: 'rgba(77, 238, 234, 0.2)',
                  }}>
                    <Zap size={20} className="text-[#4deeea]" />
                  </div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>82ms</div>
                    <div className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '11px' }}>
                      Avg Response Time
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Everything You Need to Build
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Production-ready infrastructure and tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border group hover:border-[#4deeea]/50 transition-all duration-300"
                  style={{
                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'rgba(77, 238, 234, 0.1)',
                      border: '1px solid rgba(77, 238, 234, 0.3)',
                    }}
                  >
                    <Icon size={28} className="text-[#4deeea]" />
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-3">
                    {feature.title}
                  </h3>

                  <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#4deeea]" />
                        <span style={{ fontSize: '14px' }}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Powerful API Endpoints
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              RESTful APIs with comprehensive documentation
            </p>
          </motion.div>

          <div className="space-y-3">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl border flex items-center justify-between hover:border-[#4deeea]/50 transition-all cursor-pointer"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="px-3 py-1 rounded-lg"
                    style={{
                      background: endpoint.method === 'POST' ? 'rgba(77, 238, 234, 0.2)' : 'rgba(77, 238, 234, 0.1)',
                      color: '#4deeea',
                      fontSize: '12px',
                      fontWeight: 700,
                      fontFamily: 'monospace',
                    }}
                  >
                    {endpoint.method}
                  </span>
                  <code
                    className={theme === 'dark' ? 'text-white/90' : 'text-black/90'}
                    style={{ fontSize: '14px', fontFamily: 'monospace' }}
                  >
                    {endpoint.endpoint}
                  </code>
                </div>
                <span className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '14px' }}>
                  {endpoint.description}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => handleNavigate('resources/docs')}
              className="text-[#4deeea] hover:underline"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              View Full API Reference →
            </button>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Official SDKs
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Choose your favorite programming language
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border text-center group hover:border-[#4deeea]/50 transition-all cursor-pointer"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'rgba(77, 238, 234, 0.1)',
                    border: '1px solid rgba(77, 238, 234, 0.3)',
                  }}
                >
                  <Code size={32} className="text-[#4deeea]" />
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                  {sdk.name}
                </h3>

                <div className={`mb-3 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`} style={{ fontSize: '13px' }}>
                  v{sdk.version}
                </div>

                <div className="text-[#4deeea]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {sdk.downloads} downloads
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-12 overflow-hidden text-center"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
                : 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            }}
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Start Building Today
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
              Get your API key and start integrating AI in minutes
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleNavigate('demo')}
                className="px-10 py-4 rounded-xl text-black transition-all duration-300 hover:scale-105"
                style={{
                  background: '#4deeea',
                  fontWeight: 600,
                  fontSize: '16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Get Free API Key
              </button>

              <button
                onClick={() => handleNavigate('pricing')}
                className={`px-10 py-4 rounded-xl border transition-all duration-300 ${theme === 'dark'
                  ? 'border-white/20 hover:border-[#4deeea]/50 hover:bg-white/5'
                  : 'border-black/20 hover:border-[#4deeea]/50 hover:bg-black/5'
                  }`}
                style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}