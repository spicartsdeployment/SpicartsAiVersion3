import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, ArrowRight, Quote, CheckCircle2, Building2, Factory, Hospital } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function CaseStudiesPage({ theme, onNavigate }) {
  const caseStudies = [
    {
      company: 'TechCorp Industries',
      industry: 'Manufacturing',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      challenge: 'Manual quality control processes causing production delays',
      solution: 'Implemented Vision AI for automated defect detection',
      results: [
        { metric: '85%', label: 'Reduction in defects' },
        { metric: '3x', label: 'Faster inspection' },
        { metric: '$2M', label: 'Annual savings' },
      ],
      testimonial: 'SPicArts AI transformed our manufacturing process. The vision AI system catches defects we used to miss.',
      author: 'John Smith, CTO',
      tags: ['Vision AI', 'Automation', 'Manufacturing'],
    },
    {
      company: 'HealthPlus Medical',
      industry: 'Healthcare',
      icon: Hospital,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      challenge: 'High volume of patient inquiries overwhelming staff',
      solution: 'Deployed Voice Call Agent for 24/7 patient support',
      results: [
        { metric: '10K+', label: 'Calls handled monthly' },
        { metric: '92%', label: 'Patient satisfaction' },
        { metric: '60%', label: 'Cost reduction' },
      ],
      testimonial: 'The AI voice agent handles routine inquiries perfectly, letting our staff focus on critical care.',
      author: 'Dr. Sarah Johnson, Director',
      tags: ['Voice AI', 'Healthcare', 'Call Agent'],
    },
    {
      company: 'SmartHome Solutions',
      industry: 'Consumer Tech',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      challenge: 'Complex IoT device setup frustrating customers',
      solution: 'Integrated Voice Assistant for seamless device control',
      results: [
        { metric: '95%', label: 'Setup success rate' },
        { metric: '4.8★', label: 'Customer rating' },
        { metric: '45%', label: 'Support tickets reduced' },
      ],
      testimonial: 'Our customers love the voice control. It made our smart home products accessible to everyone.',
      author: 'Michael Chen, CEO',
      tags: ['Voice Assistant', 'IoT', 'Smart Home'],
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Increased Efficiency', description: 'Average 75% improvement in operations' },
    { icon: Users, title: 'Better Customer Experience', description: '90%+ customer satisfaction rates' },
    { icon: Zap, title: 'Faster ROI', description: 'Most clients see ROI within 6 months' },
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
              Customer <span className="text-[#4deeea]">Success Stories</span>
            </h1>

            <p
              className={`mb-8 mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '640px',
              }}
            >
              See how leading companies are transforming their businesses with SPicArts AI
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl border"
                  style={{
                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: 'rgba(77, 238, 234, 0.1)',
                      border: '1px solid rgba(77, 238, 234, 0.3)',
                    }}
                  >
                    <Icon size={24} className="text-[#4deeea]" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                    {benefit.title}
                  </h3>
                  <p className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '13px' }}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 px-6">
        <div className="max-w-[1400px] mx-auto space-y-20">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.company}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                      }}
                    />
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: 'rgba(77, 238, 234, 0.2)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(77, 238, 234, 0.3)',
                          }}
                        >
                          <Icon size={24} className="text-[#4deeea]" />
                        </div>
                        <div>
                          <h3 className="text-white" style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                            {study.company}
                          </h3>
                          <p className="text-white/70" style={{ fontSize: '14px' }}>
                            {study.industry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[#4deeea] border border-[#4deeea]/30"
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          background: 'rgba(77, 238, 234, 0.1)',
                          fontFamily: 'Space Grotesk, sans-serif',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4
                      className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                      style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}
                    >
                      Challenge
                    </h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4
                      className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                      style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}
                    >
                      Solution
                    </h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="p-4 rounded-xl border text-center"
                        style={{
                          background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <div className="text-[#4deeea] mb-1" style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                          {result.metric}
                        </div>
                        <div className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '12px' }}>
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div
                    className="p-6 rounded-xl border"
                    style={{
                      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Quote size={24} className="text-[#4deeea] mb-4" />
                    <p
                      className="mb-4"
                      style={{ fontSize: '16px', lineHeight: '1.7', fontStyle: 'italic' }}
                    >
                      "{study.testimonial}"
                    </p>
                    <p
                      className={theme === 'dark' ? 'text-white/70' : 'text-black/70'}
                      style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      — {study.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              Ready to Write Your Success Story?
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
              Join hundreds of companies transforming their business with AI
            </p>
            <button
              onClick={() => onNavigate('demo')}
              className="px-10 py-4 rounded-xl text-black transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{
                background: '#4deeea',
                fontWeight: 600,
                fontSize: '16px',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Get Started Today
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudiesPage;