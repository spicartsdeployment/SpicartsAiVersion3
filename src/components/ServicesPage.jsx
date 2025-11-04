import { motion } from 'motion/react';
import {
    Bot,
    Mic2,
    Sparkles,
    Eye,
    Atom,
    Home,
    Wifi,
    Cpu,
    Globe,
    Smartphone,
    Database,
    Zap,
    ArrowRight,
    Check,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { div, path } from 'motion/react-client';

export function ServicesPage({ theme, onNavigate }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const navigate = useNavigate();

    const handleNavigatetoTop = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const aiServices = [
        {
            icon: Bot,
            title: 'AI Agent Kit',
            tagline: 'Intelligent Automation',
            description:
                'Build intelligent conversational agents that understand context, take actions, and learn from interactions.',
            features: ['Natural Language Processing', 'Context-Aware Responses', 'Multi-Platform Integration'],
            gradient: 'from-blue-500 to-cyan-500',
            path: '/services/ai/agent-kit',
        },
        {
            icon: Mic2,
            title: 'Voice AI',
            tagline: 'Build with Voice AI',
            description:
                'Emotionally expressive voice synthesis with natural speech patterns and multilingual support.',
            features: ['Real-time Voice Synthesis', '100+ Languages', 'Emotion Detection'],
            gradient: 'from-[#4deeea] to-[#2d9cdb]',
            path: '/services/ai/voice-ai',
        },
        {
            icon: Sparkles,
            title: 'Generative AI & LLMs',
            tagline: 'Next-Gen Intelligence',
            description:
                'State-of-the-art large language models for content generation, analysis, and automation.',
            features: ['Custom Model Training', 'API Integration', 'Fine-tuning Support'],
            gradient: 'from-purple-500 to-pink-500',
            path: '/services/ai/generative-ai',
        },
        {
            icon: Eye,
            title: 'Vision AI',
            tagline: 'See with Intelligence',
            description:
                'Advanced computer vision for object detection, image analysis, and visual intelligence.',
            features: ['Real-time Object Detection', 'Image Classification', 'Visual Search'],
            gradient: 'from-green-500 to-emerald-500',
            path: '/services/ai/vision-ai',
        },
        {
            icon: Atom,
            title: 'Quantum Machine Learning',
            tagline: 'Power with Quantum ML',
            description:
                'Cutting-edge research in quantum computing applications for AI and machine learning.',
            features: ['Quantum Algorithms', 'Hybrid Models', 'Research Collaboration'],
            gradient: 'from-orange-500 to-red-500',
            path: '/resources/quantum-ml',
        },
    ];

    const roboticsServices = [
        {
            icon: Zap,
            title: 'Advanced AI Automation',
            tagline: 'Smart Living',
            description: 'Smart automation solutions for home and industrial applications powered by AI.',
            features: ['Voice-Controlled Systems', 'Predictive Maintenance', 'Energy Optimization'],
            gradient: 'from-yellow-500 to-orange-500',
            path: '/automation',
        },
        {
            icon: Wifi,
            title: 'IoT Automation',
            tagline: 'Connected Everything',
            description: 'Connect and control your devices seamlessly with our IoT automation platform.',
            features: ['Device Integration', 'Remote Monitoring', 'Cloud Connectivity'],
            gradient: 'from-indigo-500 to-purple-500',
            path: '/iot',
        },
        {
            icon: Cpu,
            title: 'Custom Robotics Development',
            tagline: 'Tailored Solutions',
            description: 'Tailored robotics solutions designed specifically for your unique requirements.',
            features: ['Custom Hardware', 'AI Integration', 'Prototype to Production'],
            gradient: 'from-pink-500 to-rose-500',
            path: '/custom-robotics',
        },
    ];

    const developmentServices = [
        {
            icon: Globe,
            title: 'Web Development',
            tagline: 'Modern Web Apps',
            description: 'Modern, responsive web applications built with cutting-edge technologies.',
            features: ['Full-Stack Development', 'Progressive Web Apps', 'API Development'],
            gradient: 'from-blue-500 to-indigo-500',
            path: '/services/development/web',
        },
        {
            icon: Smartphone,
            title: 'App Development',
            tagline: 'Mobile Excellence',
            description: 'Native and cross-platform mobile applications for iOS and Android.',
            features: ['Native Performance', 'Cross-Platform', 'Cloud Integration'],
            gradient: 'from-teal-500 to-cyan-500',
            path: '/services/development/mobile',
        },
        {
            icon: Database,
            title: 'ERP/CRM Solutions',
            tagline: 'Enterprise Power',
            description: 'Enterprise resource planning and customer relationship management systems.',
            features: ['Custom Workflows', 'Analytics Dashboard', 'Third-party Integration'],
            gradient: 'from-violet-500 to-purple-500',
            path: '/services/erp-crm-solutions',
        },
        {
            icon: Home,
            title: 'Advanced Home Automation',
            tagline: 'Smart Homes',
            description: 'Voice-controlled smart home systems with AI-powered automation and learning.',
            features: ['Voice Control', 'AI Learning', 'Scene Automation'],
            gradient: 'from-emerald-500 to-green-500',
            path: '/services/advanced-home-automation',
        },
    ];

    const ServiceCard = ({ service, index, category }) => {
        const Icon = service.icon;
        const cardId = `${category}-${index}`;
        const isHovered = hoveredCard === cardId;

        return (
            <div onClick={() => { handleNavigatetoTop(service.path) }}>
                <motion.div
                    // initial={{ opacity: 0, y: 30 }}
                    // //whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true, margin: '-50px', amount: 0.5 }}
                    // transition={{ delay: index * 0.1, duration: 0.6 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    // onMouseEnter={() => setHoveredCard(cardId)}
                    // onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative p-8 rounded-3xl transition-all duration-500 overflow-hidden ${theme === 'dark'
                        ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-[#4deeea]/50'
                        : 'bg-white backdrop-blur-xl border border-black/10 hover:border-[#4deeea]/50 shadow-lg hover:shadow-2xl'
                        }`}
                >
                    {/* Animated background gradient */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 0.1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                    />

                    {/* Tagline Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4"
                    >
                        <span
                            className={`inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-wider ${theme === 'dark' ? 'bg-[#4deeea]/10 text-[#4deeea]' : 'bg-[#4deeea]/10 text-[#2d9cdb]'
                                }`}
                        >
                            {service.tagline}
                        </span>
                    </motion.div>

                    {/* Icon with hover animation */}
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                        <Icon size={32} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex-shrink-0">
                                    <Check size={16} className="text-[#4deeea]" />
                                </div>
                                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                        onClick={() => handleNavigatetoTop('demo')}
                        whileHover={{ x: 5 }}
                        className={`group/btn flex items-center gap-2 transition-all duration-300 ${theme === 'dark'
                            ? 'text-[#4deeea] hover:text-white'
                            : 'text-[#4deeea] hover:text-[#2d9cdb]'
                            }`}
                    >
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        );
    };

    const CategoryHeader = ({
        title,
        subtitle,
        emoji,
    }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            // viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                // viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="text-6xl mb-6"
            >
                {emoji}
            </motion.div>
            <h2 className={`text-5xl md:text-6xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {title}
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
            </p>
        </motion.div>
    );

    return (
        <div
            className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-300`}
        >
            {/* Hero Section */}
            <section className="py-32 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#4deeea]/20 blur-3xl"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div
                            className={`inline-block px-6 py-3 rounded-full mb-8 ${theme === 'dark'
                                ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                                : 'bg-black/5 backdrop-blur-xl border border-black/10'
                                }`}
                        >
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                🚀 Comprehensive AI Solutions
                            </span>
                        </div>

                        <h1 className={`text-6xl md:text-8xl mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Our{' '}
                            <span className="bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-transparent bg-clip-text">
                                Services
                            </span>
                        </h1>

                        <p
                            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                        >
                            From AI-powered voice technology to quantum machine learning, we deliver cutting-edge solutions tailored
                            to your needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Services */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CategoryHeader
                        title="AI Services"
                        subtitle="Harness the power of artificial intelligence to transform your business"
                        emoji="🤖"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aiServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} category="ai" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Robotics & Automation */}
            <section className={`py-24 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CategoryHeader
                        title="Robotics & Automation"
                        subtitle="Smart automation solutions for modern living and industry"
                        emoji="⚙️"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roboticsServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} category="robotics" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Services */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CategoryHeader
                        title="Development"
                        subtitle="Full-stack development services from web to mobile to enterprise"
                        emoji="💻"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {developmentServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} category="dev" />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        // viewport={{ once: true }}
                        className={`relative p-16 md:p-24 rounded-3xl text-center overflow-hidden ${theme === 'dark'
                            ? 'bg-gradient-to-br from-[#4deeea]/10 to-[#2d9cdb]/10 backdrop-blur-xl border border-[#4deeea]/20'
                            : 'bg-gradient-to-br from-[#4deeea]/5 to-[#2d9cdb]/5 border border-[#4deeea]/20'
                            }`}
                    >
                        {/* Background Animation */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute inset-0 opacity-10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4deeea] to-[#2d9cdb]" />
                        </motion.div>

                        <div className="relative z-10">
                            <h2 className={`text-5xl md:text-6xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                Ready to Get Started?
                            </h2>
                            <p
                                className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}
                            >
                                Let's discuss how our AI solutions can transform your business
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => handleNavigatetoTop('/demo')}
                                    className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50 transition-all duration-300 text-lg"
                                >
                                    Request a Demo
                                </button>
                                <button
                                    onClick={() => handleNavigatetoTop('/pricing')}
                                    className={`px-10 py-5 rounded-2xl transition-all duration-300 text-lg ${theme === 'dark'
                                        ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20'
                                        : 'bg-white backdrop-blur-xl border border-black/10 text-black hover:bg-black/5 shadow-lg'
                                        }`}
                                >
                                    View Pricing
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}