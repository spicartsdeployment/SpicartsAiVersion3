import { motion } from 'motion/react';
import { Atom, Cpu, Zap, TrendingUp, Users, BookOpen, ArrowRight, CheckCircle2, GitBranch, Brain, Layers } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function QuantumMLPage({ theme, onNavigate }) {
  const researchAreas = [
    {
      icon: Atom,
      title: 'Quantum Neural Networks',
      description: 'Exploring quantum circuits for machine learning tasks with exponential speedup',
      status: 'Active Research',
      publications: 12,
    },
    {
      icon: Brain,
      title: 'Quantum NLP',
      description: 'Natural language processing using quantum algorithms and quantum-enhanced embeddings',
      status: 'Active Research',
      publications: 8,
    },
    {
      icon: Layers,
      title: 'Hybrid Quantum-Classical ML',
      description: 'Combining classical deep learning with quantum computing for real-world applications',
      status: 'Production Testing',
      publications: 15,
    },
    {
      icon: GitBranch,
      title: 'Quantum Optimization',
      description: 'Using quantum annealing and QAOA for hyperparameter optimization',
      status: 'Active Research',
      publications: 10,
    },
  ];

  const publications = [
    {
      title: 'Quantum-Enhanced Voice Synthesis Using Variational Circuits',
      authors: 'Dr. Mitchell et al.',
      journal: 'Nature Quantum Information',
      year: '2025',
      citations: 245,
    },
    {
      title: 'Scalable Quantum Machine Learning for Natural Language Understanding',
      authors: 'Dr. Chen et al.',
      journal: 'Quantum Science and Technology',
      year: '2025',
      citations: 189,
    },
    {
      title: 'Hybrid Quantum-Classical Neural Networks for Real-Time AI Applications',
      authors: 'Dr. Patel et al.',
      journal: 'Physical Review Applied',
      year: '2024',
      citations: 312,
    },
  ];

  const milestones = [
    { year: '2023', achievement: 'Established Quantum ML Research Lab' },
    { year: '2024', achievement: 'First quantum-enhanced voice model deployment' },
    { year: '2024', achievement: 'Partnership with leading quantum computing providers' },
    { year: '2025', achievement: 'Quantum NLP breakthrough - 100x speedup achieved' },
  ];

  const partners = [
    { name: 'IBM Quantum', logo: 'IBM' },
    { name: 'Google Quantum AI', logo: 'Google' },
    { name: 'AWS Braket', logo: 'AWS' },
    { name: 'IonQ', logo: 'IonQ' },
  ];

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(77, 238, 234, 0.3) 0%, transparent 70%)',
              top: '10%',
              left: '10%',
              animation: 'float 20s ease-in-out infinite',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 70%)',
              bottom: '10%',
              right: '10%',
              animation: 'float 15s ease-in-out infinite reverse',
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
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
                <Atom size={16} className="text-[#4deeea]" />
                <span className="text-[#4deeea]" style={{ fontSize: '13px', fontWeight: 600 }}>
                  Research & Development
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
                Quantum Machine Learning{' '}
                <span className="text-[#4deeea]">Research</span>
              </h1>

              <p
                className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                }}
              >
                Pioneering the next frontier of artificial intelligence by combining quantum computing with machine learning to solve previously intractable problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
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
                  Collaborate With Us
                  <ArrowRight size={18} />
                </button>

                <button
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
                  Read Papers
                </button>
              </div>

              <div className="flex items-center gap-8">
                {[
                  { label: 'Research Papers', value: '45+' },
                  { label: 'Citations', value: '2.5K+' },
                  { label: 'Researchers', value: '20+' },
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
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717501217912-933d2792d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Quantum Computing Research"
                  className="w-full h-[500px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl backdrop-blur-xl border"
                style={{
                  background: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{
                    background: 'rgba(77, 238, 234, 0.2)',
                  }}>
                    <Zap size={24} className="text-[#4deeea]" />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700 }}>100x</div>
                    <div className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '12px' }}>
                      Performance Gain
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Research Focus Areas
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Pushing the boundaries of quantum-enhanced AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
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
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'rgba(77, 238, 234, 0.1)',
                        border: '1px solid rgba(77, 238, 234, 0.3)',
                      }}
                    >
                      <Icon size={28} className="text-[#4deeea]" />
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: area.status === 'Production Testing'
                          ? 'rgba(77, 238, 234, 0.2)'
                          : 'rgba(138, 43, 226, 0.2)',
                        color: area.status === 'Production Testing' ? '#4deeea' : '#8a2be2',
                        fontWeight: 600,
                      }}
                    >
                      {area.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-3">
                    {area.title}
                  </h3>

                  <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
                    {area.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#4deeea]" />
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>
                      {area.publications} Publications
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Recent Publications
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Our latest contributions to quantum machine learning
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border hover:border-[#4deeea]/50 transition-all cursor-pointer"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3
                  className="mb-3 hover:text-[#4deeea] transition-colors"
                  style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {pub.title}
                </h3>

                <div className={`flex flex-wrap gap-4 mb-3 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '14px' }}>
                  <span>{pub.authors}</span>
                  <span>•</span>
                  <span className="italic">{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>

                <div className="flex items-center gap-2 text-[#4deeea]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  <TrendingUp size={16} />
                  {pub.citations} Citations
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="text-[#4deeea] hover:underline" style={{ fontSize: '15px', fontWeight: 600 }}>
              View All Publications →
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Research Milestones
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Our journey in quantum ML research
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5"
              style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="inline-block p-6 rounded-2xl border" style={{
                      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    }}>
                      <div className="text-[#4deeea] mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>
                        {milestone.year}
                      </div>
                      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                        {milestone.achievement}
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-4 h-4 rounded-full border-4 flex-shrink-0 z-10"
                    style={{
                      background: '#4deeea',
                      borderColor: theme === 'dark' ? '#000' : '#fff',
                    }}
                  />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Research Partners
            </h2>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '18px' }}>
              Collaborating with leading quantum computing providers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border flex items-center justify-center hover:border-[#4deeea]/50 transition-all"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: 'rgba(77, 238, 234, 0.1)',
                      border: '1px solid rgba(77, 238, 234, 0.3)',
                    }}
                  >
                    <Cpu size={32} className="text-[#4deeea]" />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>
                    {partner.name}
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
            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Join Our Research Team
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
              Collaborate with us on cutting-edge quantum ML research
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
                Get Involved
              </button>

              <button
                onClick={() => onNavigate('about')}
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
                About Our Lab
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default QuantumMLPage;