import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Mic, Brain, Cpu, ArrowRight, Sparkles, Zap, Shield, Users, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function HomePage({ theme, onNavigate }) {

  const navigate = useNavigate();

  const containerRef = useRef(null);
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.98]);

  // Animated particles for background
  const ParticleField = () => {
    const particles = [...Array(40)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#4deeea]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    );
  };

  // Animated grid lines
  const GridBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      {/* Static grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(77, 238, 234, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(77, 238, 234, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
    </div>
  );

  const features = [
    {
      icon: Mic,
      title: 'AI Voice Technology',
      description: 'Emotionally expressive voice synthesis that brings human-like communication to your applications.',
      path: 'services/ai/voice-ai',
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Voice-interactive action-based assistants that understand context and execute tasks seamlessly.',
      path: 'services/ai/agent-kit',
    },
    {
      icon: Cpu,
      title: 'Quantum Machine Learning',
      description: 'Next-generation AI research pushing the boundaries of what\'s possible in machine intelligence.',
      path: 'resources/quantum-ml',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime', icon: Shield },
    { value: '<50ms', label: 'Response Time', icon: Zap },
    { value: '100+', label: 'Languages', icon: Sparkles },
    { value: '50+', label: 'Enterprises', icon: Users },
  ];

  return (
    <div ref={containerRef} className="transition-colors duration-500" style={{
      background: theme === 'dark'
        ? '#000000'
        : '#ffffff'
    }}>
      {/* ...existing code... */}
      {/* All your JSX content remains unchanged except for removed types */}
      {/* ...existing code... */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Background Layers */}
        <GridBackground />
        <ParticleField />

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(77, 238, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(77, 238, 234, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-[80px] text-center"
          style={{ opacity, scale }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
            style={{
              background: theme === 'dark' ? 'rgba(77, 238, 234, 0.05)' : 'rgba(77, 238, 234, 0.1)',
              borderColor: 'rgba(77, 238, 234, 0.3)',
            }}
          >
            <Sparkles size={16} className="text-[#4deeea]" />
            <span
              className={theme === 'dark' ? 'text-white/90' : 'text-gray-900'}
              style={{
                fontSize: '14px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
              }}
            >
              Introducing Next-Gen AI Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={theme === 'dark' ? 'text-white' : 'text-black'}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 7vw, 72px)',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Voice. Vision.{' '}
            <span className="text-[#4deeea] relative inline-block">
              Intelligence.
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#4deeea]"
                style={{ borderRadius: '2px' }}
                animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={theme === 'dark' ? 'text-white' : 'text-black'}
            style={{
              fontSize: '28px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              marginBottom: '16px',
              letterSpacing: '-0.01em',
            }}
          >
            Everything is Possible.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
            style={{
              fontSize: '18px',
              maxWidth: '800px',
              margin: '0 auto 48px',
              lineHeight: '1.7',
            }}
          >
            SPicArts AI builds intelligent voice and generative AI systems that connect people and machines naturally.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Request Demo Button */}
            <motion.button
              onClick={() => handleNavigate('demo')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-xl text-black overflow-hidden group"
              style={{
                background: '#4deeea',
                fontSize: '16px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                minWidth: '200px',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Shine effect */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.button>

            {/* Explore Technology Button */}
            <motion.button
              onClick={() => handleNavigate('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-4 rounded-xl overflow-hidden group ${theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              style={{
                border: '2px solid rgba(77, 238, 234, 0.5)',
                background: 'transparent',
                fontSize: '16px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                minWidth: '200px',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Technology
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Hover fill */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#4deeea]/10 origin-left"
              />
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <Icon size={24} className="text-[#4deeea]" />
                  </div>
                  <div
                    className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-1`}
                    style={{
                      fontSize: '32px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={theme === 'dark' ? 'text-white/50' : 'text-gray-600'}
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Scroll to explore
            </span>
            <div
              className="w-6 h-10 rounded-full border-2 flex justify-center"
              style={{ borderColor: 'rgba(77, 238, 234, 0.3)' }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#4deeea] mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 lg:px-[80px]" style={{
        background: theme === 'dark' ? '#000000' : '#ffffff',
      }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Build the Future with AI
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Powerful AI solutions designed to transform how you interact with technology
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  onClick={() => handleNavigate(feature.path)}
                  className="group cursor-pointer relative rounded-2xl p-8 border transition-all duration-500"
                  style={{
                    background: theme === 'dark' ? '#0a0a0a' : '#fafafa',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(77, 238, 234, 0.05), transparent)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl bg-[#4deeea]/10 border border-[#4deeea]/20 mb-6 group-hover:scale-110 group-hover:border-[#4deeea]/40 transition-all duration-500 flex items-center justify-center"
                  >
                    <Icon size={28} className="text-[#4deeea]" />
                  </div>

                  {/* Content */}
                  <h3
                    className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-3 group-hover:text-[#4deeea] transition-colors duration-300`}
                    style={{
                      fontSize: '24px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      marginBottom: '20px',
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#4deeea] group-hover:gap-3 transition-all duration-300">
                    <span style={{ fontSize: '14px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                      Learn More
                    </span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-[80px] overflow-hidden" style={{
        background: theme === 'dark' ? '#000000' : '#ffffff',
      }}>
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[800px] h-[800px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(77, 238, 234, 0.3), transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-6`}
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className={`${theme === 'dark' ? 'text-white/60' : 'text-gray-600'} mb-12`}
            style={{
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            Join hundreds of companies already using SPicArts AI to power their intelligent applications
          </p>

          <motion.button
            onClick={() => handleNavigate('demo')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-5 rounded-xl text-black overflow-hidden group"
            style={{
              background: '#4deeea',
              fontSize: '18px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>

            <motion.div
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.button>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={theme === 'dark' ? 'text-white' : 'text-black'}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Our <span className="text-[#4deeea]">Services</span>
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}
            >
              Comprehensive AI, Robotics, and Development solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Solutions',
                description: 'From voice AI to computer vision, we bring intelligence to your applications',
                items: ['Agentic Kit', 'Voice AI', 'Generative AI', 'Vision AI', 'Custom AI'],
                icon: Brain,
                path: 'services',
              },
              {
                title: 'Robotics & Automation',
                description: 'Smart automation for home and industry with IoT integration',
                items: ['AI Automation', 'IoT Solutions', 'Custom Robotics'],
                icon: Cpu,
                path: 'services',
              },
              {
                title: 'App Development',
                description: 'Full-stack development across all platforms and devices',
                items: ['Web Apps', 'Mobile Apps', 'Desktop Apps'],
                icon: Sparkles,
                path: 'services',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigate(service.path)}
                  className="group relative p-8 rounded-3xl border cursor-pointer transition-all duration-300 hover:border-[#4deeea]/50"
                  style={{
                    background: theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.02)'
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'rgba(77, 238, 234, 0.1)',
                      border: '1px solid rgba(77, 238, 234, 0.3)',
                    }}
                  >
                    <Icon size={32} className="text-[#4deeea]" />
                  </div>

                  <h3
                    className={theme === 'dark' ? 'text-white' : 'text-black'}
                    style={{
                      fontSize: '24px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 600,
                      marginBottom: '12px',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
                    style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}
                  >
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                        style={{ fontSize: '14px' }}
                      >
                        <ChevronRight size={16} className="text-[#4deeea]" />
                        <span className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[#4deeea] group-hover:gap-3 transition-all">
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={theme === 'dark' ? 'text-white' : 'text-black'}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Our <span className="text-[#4deeea]">Products</span>
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}
            >
              Ready-to-use AI-powered products for businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Voice Assistant Device',
                description: 'AI-powered smart speaker with natural conversation capabilities',
                features: ['Wake word detection', 'Multi-language support', 'Smart home control'],
                path: 'products/voice-assistant',
              },
              {
                title: 'Voice Call Agent',
                description: 'Automate customer service calls with intelligent AI agents',
                features: ['24/7 availability', 'Natural conversations', 'CRM integration'],
                path: 'products/call-agent',
              },
              {
                title: 'Developer Platform',
                description: 'Complete API suite for integrating AI into your applications',
                features: ['REST & WebSocket APIs', 'SDKs for all languages', '99.99% uptime'],
                path: 'products/platform',
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigate(product.path)}
                className="group relative p-8 rounded-3xl border cursor-pointer transition-all duration-300 hover:border-[#4deeea]/50 hover:shadow-2xl"
                style={{
                  background: theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.02)'
                    : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                <h3
                  className={`${theme === 'dark' ? 'text-white' : 'text-black'} group-hover:text-[#4deeea] transition-colors`}
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    marginBottom: '12px',
                  }}
                >
                  {product.title}
                </h3>

                <p
                  className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
                  style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}
                >
                  {product.description}
                </p>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                      style={{ fontSize: '14px' }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: 'rgba(77, 238, 234, 0.2)',
                          border: '1px solid rgba(77, 238, 234, 0.4)',
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#4deeea]" />
                      </div>
                      <span className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#4deeea] group-hover:gap-3 transition-all">
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Explore Product</span>
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={theme === 'dark' ? 'text-white' : 'text-black'}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              <span className="text-[#4deeea]">Industry</span> Solutions
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}
            >
              AI-powered solutions tailored for your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Healthcare', desc: 'Patient care automation' },
              { name: 'Finance', desc: 'Intelligent trading & analysis' },
              { name: 'Manufacturing', desc: 'Quality control & automation' },
              { name: 'Retail', desc: 'Customer service AI' },
              { name: 'Education', desc: 'Personalized learning' },
              { name: 'Real Estate', desc: 'Virtual assistants' },
              { name: 'Logistics', desc: 'Route optimization' },
              { name: 'Hospitality', desc: 'Guest experience AI' },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border text-center group hover:border-[#4deeea]/50 transition-all cursor-pointer"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                <h4
                  className={`${theme === 'dark' ? 'text-white' : 'text-black'} group-hover:text-[#4deeea] transition-colors`}
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {industry.name}
                </h4>
                <p
                  className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}
                  style={{ fontSize: '13px' }}
                >
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={theme === 'dark' ? 'text-white' : 'text-black'}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Powered by <span className="text-[#4deeea]">Cutting-Edge</span> Technology
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}
            >
              We leverage the latest in AI, machine learning, and cloud technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'GPT-4',
              'TensorFlow',
              'PyTorch',
              'AWS',
              'Azure',
              'Google Cloud',
              'Kubernetes',
              'Docker',
              'React',
              'Node.js',
              'Python',
              'Rust',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="p-6 rounded-xl border text-center group hover:border-[#4deeea]/50 hover:bg-[#4deeea]/5 transition-all"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.5)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                <span
                  className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-700'} group-hover:text-[#4deeea] transition-colors`}
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={theme === 'dark' ? 'text-white' : 'text-black'}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Trusted by <span className="text-[#4deeea]">Industry Leaders</span>
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{ fontSize: '18px' }}
            >
              See what our clients say about working with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SPicArts AI transformed our customer service. The voice AI system handles thousands of calls daily with 95% accuracy.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
              },
              {
                quote: "The automation solutions reduced our operational costs by 60% while improving quality. Absolutely game-changing.",
                author: "Michael Chen",
                role: "Operations Director, ManufactureX",
              },
              {
                quote: "Their developer platform is incredible. We integrated AI into our app in just days instead of months.",
                author: "Emily Rodriguez",
                role: "Lead Developer, StartupHub",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                <div
                  className="mb-6 text-[#4deeea]"
                  style={{ fontSize: '48px', lineHeight: '1', fontFamily: 'Georgia, serif' }}
                >
                  "
                </div>
                <p
                  className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}
                  style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}
                >
                  {testimonial.quote}
                </p>
                <div>
                  <div
                    className={theme === 'dark' ? 'text-white' : 'text-black'}
                    style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}
                    style={{ fontSize: '14px' }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Map - All Pages */}
      // Replace the entire sitemap section (around lines 1025-1065) with this updated version:

      {/* Site Map - All Pages */}
      {/* <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={theme === 'dark' ? 'text-white' : 'text-black'}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Explore All <span className="text-[#4deeea]">Pages</span>
            </h2>
            <p
              className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}
              style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}
            >
              Quick access to every page on our website
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'About', path: '/about' },
              { name: 'AI Agents', path: '/ai-agents' },
              { name: 'Automation', path: '/automation' },
              { name: 'Blog', path: '/blog' },
              { name: 'Case Studies', path: '/case-studies' },
              { name: 'Custom AI', path: '/custom-ai' },
              { name: 'Custom Robotics', path: '/custom-robotics' },
              { name: 'Desktop Development', path: '/desktop-development' },
              { name: 'Developer Platform', path: '/developer-platform' },
              { name: 'Documentation', path: '/documentation' },
              { name: 'Generative AI', path: '/generative-ai' },
              { name: 'Home', path: '/' },
              { name: 'IoT', path: '/iot' },
              { name: 'Login', path: '/login' },
              { name: 'Mobile Development', path: '/mobile-development' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'Products', path: '/products' },
              { name: 'Quantum ML Research', path: '/quantum-ml' },
              { name: 'Request Demo', path: '/demo' },
              { name: 'Research', path: '/research' },
              { name: 'Resources', path: '/resources' },
              { name: 'Services', path: '/services' },
              { name: 'Vision AI', path: '/vision-ai' },
              { name: 'Voice AI', path: '/voice-ai' },
              { name: 'Voice Assistant', path: '/voice-assistant' },
              { name: 'Voice Call Agent', path: '/call-agent' },
              { name: 'Web Development', path: '/web-development' },
            ].sort((a, b) => a.name.localeCompare(b.name)).map((page, index) => (
              <motion.button
                key={page.path}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate(page.path)}
                className="group relative p-4 rounded-xl border text-left transition-all duration-200"
                style={{
                  background: theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.02)'
                    : 'rgba(255, 255, 255, 0.5)',
                  borderColor: theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-200 group-hover:w-3 group-hover:h-3"
                    style={{
                      background: '#4deeea',
                      boxShadow: '0 0 8px rgba(77, 238, 234, 0.4)',
                    }}
                  />
                  <span
                    className={`${theme === 'dark' ? 'text-white/80 group-hover:text-white' : 'text-gray-700 group-hover:text-black'} transition-colors`}
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {page.name}
                  </span>
                </div>

                
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(77, 238, 234, 0.05), transparent)',
                    border: '1px solid rgba(77, 238, 234, 0.2)',
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}