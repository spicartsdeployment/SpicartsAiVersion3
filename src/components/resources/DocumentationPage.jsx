import { motion } from 'motion/react';
import { FileText, Search, Book, Code, Zap, Settings, Database, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

function DocumentationPage({ theme, onNavigate }) {

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const sections = [
    {
      icon: Zap,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials',
      links: ['Installation', 'First Steps', 'Basic Concepts', 'Quick Tutorial'],
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation',
      links: ['REST API', 'WebSocket API', 'SDK Reference', 'Authentication'],
    },
    {
      icon: Book,
      title: 'Guides',
      description: 'In-depth guides and best practices',
      links: ['Voice Agent Setup', 'IoT Integration', 'Custom Models', 'Security'],
    },
    {
      icon: Settings,
      title: 'Configuration',
      description: 'Setup and configuration options',
      links: ['Environment Setup', 'Config Files', 'Advanced Options', 'Deployment'],
    },
    {
      icon: Database,
      title: 'Data & Storage',
      description: 'Working with data and storage',
      links: ['Database Setup', 'Data Models', 'Storage Options', 'Backup'],
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security and authentication',
      links: ['Authentication', 'Authorization', 'API Keys', 'Best Practices'],
    },
  ];

  const popularDocs = [
    {
      title: 'Building Your First AI Voice Agent',
      category: 'Tutorial',
      time: '15 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      title: 'Voice AI API Complete Reference',
      category: 'API Reference',
      time: '25 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      title: 'Integrating IoT Devices with Voice Control',
      category: 'Guide',
      time: '20 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1
              className="mb-6"
              style={{
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: '1.1',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              <span className="text-[#4deeea]">Documentation</span> Center
            </h1>

            <p
              className={`mb-8 mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '640px',
              }}
            >
              Everything you need to build with SPicArts AI platform
            </p>

            {/* Search Bar */}
            <div className="max-w-[700px] mx-auto">
              <div
                className="flex items-center gap-4 px-6 py-4 rounded-xl border"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Search size={20} className={theme === 'dark' ? 'text-white/40' : 'text-black/40'} />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="flex-1 bg-transparent outline-none"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                />
                <button
                  className="px-6 py-2 rounded-lg text-black"
                  style={{
                    background: '#4deeea',
                    fontWeight: 600,
                    fontSize: '14px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'rgba(77, 238, 234, 0.1)',
                      border: '1px solid rgba(77, 238, 234, 0.3)',
                    }}
                  >
                    <Icon size={24} className="text-[#4deeea]" />
                  </div>

                  <h3
                    style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}
                    className="mb-2"
                  >
                    {section.title}
                  </h3>
                  <p
                    className={`mb-4 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}
                    style={{ fontSize: '14px', lineHeight: '1.6' }}
                  >
                    {section.description}
                  </p>

                  <div className="space-y-2">
                    {section.links.map((link) => (
                      <button
                        key={link}
                        onClick={() => handleNavigate('resources/docs/article')}
                        className={`flex items-center gap-2 text-sm hover:text-[#4deeea] transition-colors ${theme === 'dark' ? 'text-white/70' : 'text-black/70'
                          }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        <ArrowRight size={14} />
                        {link}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="pb-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
              Popular Documentation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigate('/resources/docs/article')}
                className="group cursor-pointer rounded-2xl overflow-hidden border hover:border-[#4deeea]/50 transition-all duration-300"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(10px)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#4deeea',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {doc.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                    <FileText size={12} />
                    {doc.time}
                  </div>

                  <h3
                    className="mb-3 group-hover:text-[#4deeea] transition-colors"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {doc.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[#4deeea] group-hover:gap-3 transition-all">
                    <span style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                      Read Docs
                    </span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6">
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
            <h2 style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Need Help?
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '16px' }}>
              Can't find what you're looking for? Our team is here to help
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleNavigate('demo')}
                className="px-8 py-3 rounded-xl text-black transition-all duration-300 hover:scale-105"
                style={{
                  background: '#4deeea',
                  fontWeight: 600,
                  fontSize: '15px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Contact Support
              </button>
              <button
                className={`px-8 py-3 rounded-xl border transition-all duration-300 ${theme === 'dark'
                  ? 'border-white/20 hover:border-[#4deeea]/50 hover:bg-white/5'
                  : 'border-black/20 hover:border-[#4deeea]/50 hover:bg-black/5'
                  }`}
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DocumentationPage;