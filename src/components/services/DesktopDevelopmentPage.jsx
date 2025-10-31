import { motion } from 'motion/react';
import { Monitor, Zap, Shield, Layers, Code, Users, CheckCircle2, ArrowRight, Database, Cpu, Lock, GitBranch } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function DesktopDevelopmentPage({ theme, onNavigate }) {
  const platforms = [
    {
      name: 'Windows',
      technologies: ['WPF', '.NET', 'Electron', 'C#'],
      icon: Monitor,
    },
    {
      name: 'macOS',
      technologies: ['Swift', 'Objective-C', 'AppKit', 'SwiftUI'],
      icon: Monitor,
    },
    {
      name: 'Linux',
      technologies: ['Qt', 'GTK', 'Electron', 'Java'],
      icon: Monitor,
    },
    {
      name: 'Cross-Platform',
      technologies: ['Electron', 'Qt', 'Flutter Desktop', 'Tauri'],
      icon: Layers,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Native performance with optimized code for resource-intensive operations',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced encryption, secure data storage, and compliance-ready solutions',
    },
    {
      icon: Database,
      title: 'Offline Capability',
      description: 'Full functionality without internet with local data synchronization',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'On-premise data storage with enterprise-grade security protocols',
    },
    {
      icon: Cpu,
      title: 'System Integration',
      description: 'Deep OS integration, hardware access, and system-level features',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Auto-update systems, versioning, and rollback capabilities',
    },
  ];

  const services = [
    {
      title: 'Enterprise Applications',
      description: 'Custom desktop solutions for business processes, ERP, CRM, and productivity tools',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['Multi-user support', 'Role-based access', 'Audit logging', 'Reporting tools'],
    },
    {
      title: 'Creative Tools',
      description: 'Professional design, editing, and creative software with advanced capabilities',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['GPU acceleration', 'Plugin system', 'Custom workflows', 'Export options'],
    },
    {
      title: 'Data Analysis Tools',
      description: 'Powerful desktop applications for data processing, visualization, and analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['Real-time processing', 'Advanced charts', 'Data import/export', 'Automation'],
    },
    {
      title: 'Security Applications',
      description: 'Secure desktop apps for encryption, VPN, authentication, and privacy tools',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['End-to-end encryption', 'Biometric auth', 'Secure vault', 'Network protection'],
    },
  ];

  const techStack = [
    { name: 'Electron', category: 'Cross-Platform' },
    { name: '.NET / WPF', category: 'Windows' },
    { name: 'Swift / SwiftUI', category: 'macOS' },
    { name: 'Qt Framework', category: 'Cross-Platform' },
    { name: 'Flutter Desktop', category: 'Cross-Platform' },
    { name: 'Tauri', category: 'Lightweight' },
  ];

  const process = [
    { step: '01', title: 'Requirements Analysis', desc: 'Understanding your needs and defining specifications' },
    { step: '02', title: 'UI/UX Design', desc: 'Creating intuitive  following platform guidelines' },
    { step: '03', title: 'Development', desc: 'Building with best practices and clean architecture' },
    { step: '04', title: 'Testing & QA', desc: 'Comprehensive testing across different OS versions' },
    { step: '05', title: 'Deployment', desc: 'Distribution, installation, and auto-update setup' },
    { step: '06', title: 'Support', desc: 'Ongoing maintenance, updates, and feature additions' },
  ];

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
                <Monitor size={16} className="text-[#4deeea]" />
                <span className="text-[#4deeea]" style={{ fontSize: '13px', fontWeight: 600 }}>
                  Development Services
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
                Desktop App{' '}
                <span className="text-[#4deeea]">Development</span>
              </h1>

              <p
                className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                }}
              >
                Build powerful, native desktop applications for Windows, macOS, and Linux with exceptional performance, offline capabilities, and deep system integration.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-8 py-4 rounded-xl text-black transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{
                    background: '#4deeea',
                    fontWeight: 600,
                    fontSize: '16px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => onNavigate('resources/case-studies')}
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
                  View Case Studies
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[{ label: 'Apps Delivered', value: '200+' }, { label: 'Active Users', value: '5M+' }, { label: 'Platforms', value: '3+' }].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[#4deeea]" style={{ fontSize: '32px', fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '13px' }}>
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
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Desktop Development"
                  className="w-full h-[600px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Multi-Platform Expertise
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Native and cross-platform solutions for all major operating systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border text-center group hover:border-[#4deeea]/50 transition-all duration-300"
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
                    <Icon size={32} className="text-[#4deeea]" />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-3">
                    {platform.name}
                  </h3>

                  <div className="space-y-1">
                    {platform.technologies.map((tech) => (
                      <div
                        key={tech}
                        className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                        style={{ fontSize: '13px' }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Why Choose Desktop Apps
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Advantages of native desktop applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border group hover:border-[#4deeea]/50 transition-all duration-300"
                  style={{
                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{
                      background: 'rgba(77, 238, 234, 0.1)',
                      border: '1px solid rgba(77, 238, 234, 0.3)',
                    }}
                  >
                    <Icon size={24} className="text-[#4deeea]" />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                    {feature.title}
                  </h3>

                  <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              What We Build
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Specialized desktop application development services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border hover:border-[#4deeea]/50 transition-all duration-300"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 style={{ fontSize: '24px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-3">
                    {service.title}
                  </h3>

                  <p className={`mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#4deeea]" />
                        <span style={{ fontSize: '14px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Technologies We Use
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Modern frameworks and tools for desktop development
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl border text-center hover:border-[#4deeea]/50 transition-all"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                  {tech.name}
                </div>
                <div className="text-[#4deeea]" style={{ fontSize: '12px' }}>
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Our Development Process
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              From concept to deployment and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-[#4deeea] mb-4" style={{ fontSize: '48px', fontWeight: 700, opacity: 0.2 }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                  {item.title}
                </h3>
                <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Build Your Desktop App?
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
              Let's discuss your project and create a powerful desktop application
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => onNavigate('demo')}
                className="px-10 py-4 rounded-xl text-black transition-all duration-300 hover:scale-105"
                style={{
                  background: '#4deeea',
                  fontWeight: 600,
                  fontSize: '16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Request Consultation
              </button>

              <button
                onClick={() => onNavigate('pricing')}
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

export default DesktopDevelopmentPage;
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\services\DesktopDevelopmentPage.jsx