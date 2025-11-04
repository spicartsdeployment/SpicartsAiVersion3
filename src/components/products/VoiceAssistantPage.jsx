import { motion } from 'motion/react';
import { Mic2, Sparkles, Zap, Shield, Globe, ArrowRight, CheckCircle2, Volume2, Brain, Wifi } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function VoiceAssistantPage({ theme, onNavigate }) {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(`/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const features = [
        {
            icon: Brain,
            title: 'Advanced AI Processing',
            description: 'Powered by state-of-the-art neural networks for natural conversations',
        },
        {
            icon: Volume2,
            title: 'Natural Voice Synthesis',
            description: 'Crystal-clear, human-like voice output with emotional intelligence',
        },
        {
            icon: Wifi,
            title: 'IoT Integration',
            description: 'Seamlessly control all your smart home devices with voice commands',
        },
        {
            icon: Shield,
            title: 'Privacy First',
            description: 'End-to-end encryption with on-device processing for sensitive data',
        },
        {
            icon: Sparkles,
            title: 'Personalized Learning',
            description: 'Adapts to your preferences and learns from every interaction',
        },
        {
            icon: Globe,
            title: 'Multi-Language Support',
            description: 'Communicate in over 50 languages with native pronunciation',
        },
    ];

    const specs = [
        { label: 'Processor', value: 'Quad-core AI Neural Engine' },
        { label: 'Microphones', value: '6-mic far-field array' },
        { label: 'Speakers', value: '360° premium audio system' },
        { label: 'Connectivity', value: 'Wi-Fi 6, Bluetooth 5.2, Zigbee' },
        { label: 'Voice Recognition', value: '99.8% accuracy' },
        { label: 'Response Time', value: '<200ms latency' },
    ];

    const useCases = [
        {
            title: 'Smart Home Control',
            description: 'Control lights, thermostats, security systems, and more with natural voice commands',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        },
        {
            title: 'Personal Assistant',
            description: 'Manage schedules, set reminders, make calls, and get real-time information',
            image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        },
        {
            title: 'Entertainment Hub',
            description: 'Stream music, podcasts, audiobooks, and control your entertainment systems',
            image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        },
    ];

    return (
        <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                                style={{
                                    background: theme === 'dark' ? 'rgba(77, 238, 234, 0.1)' : 'rgba(77, 238, 234, 0.1)',
                                    border: '1px solid rgba(77, 238, 234, 0.3)',
                                }}
                            >
                                <Mic2 size={16} className="text-[#4deeea]" />
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#4deeea',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                }}>
                                    Next-Gen Voice AI
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
                                Voice Assistant
                                <br />
                                <span className="text-[#4deeea]">Device</span>
                            </h1>

                            <p
                                className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '1.7',
                                    maxWidth: '540px',
                                }}
                            >
                                Experience the future of home automation with our AI-powered smart speaker.
                                Advanced voice recognition, natural conversations, and seamless smart home integration.
                            </p>

                            <div className="flex flex-wrap gap-4">
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
                                    Order Now
                                    <ArrowRight size={18} />
                                </button>

                                <button
                                    onClick={() => handleNavigate('demo')}
                                    className={`px-8 py-4 rounded-xl border transition-all duration-300 flex items-center gap-2 ${theme === 'dark'
                                        ? 'border-white/20 hover:border-[#4deeea]/50 hover:bg-white/5'
                                        : 'border-black/20 hover:border-[#4deeea]/50 hover:bg-black/5'
                                        }`}
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        fontFamily: 'Space Grotesk, sans-serif',
                                    }}
                                >
                                    Watch Demo
                                    <Sparkles size={18} />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1589492477829-403d8c6da8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                                    alt="Voice Assistant Device"
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${theme === 'dark' ? 'rgba(77, 238, 234, 0.2)' : 'rgba(77, 238, 234, 0.1)'} 0%, transparent 100%)`,
                                    }}
                                />
                            </div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -bottom-6 -left-6 p-6 rounded-2xl border backdrop-blur-xl"
                                style={{
                                    background: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="text-[#4deeea] mb-1" style={{ fontSize: '32px', fontWeight: 700 }}>99.8%</div>
                                <div className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px' }}>
                                    Voice Recognition Accuracy
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                            Powerful Features
                        </h2>
                        <p className={`mt-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
                            Everything you need in a smart voice assistant
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: 'rgba(77, 238, 234, 0.1)',
                                            border: '1px solid rgba(77, 238, 234, 0.3)',
                                        }}
                                    >
                                        <Icon size={24} className="text-[#4deeea]" />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-6">
                                Technical Specifications
                            </h2>
                            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '16px', lineHeight: '1.7' }}>
                                Built with cutting-edge hardware and software for the best voice assistant experience
                            </p>

                            <div className="space-y-4">
                                {specs.map((spec, index) => (
                                    <motion.div
                                        key={spec.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between p-4 rounded-xl border"
                                        style={{
                                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                                            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <span className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px', fontWeight: 500 }}>
                                            {spec.label}
                                        </span>
                                        <span style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {spec.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                                alt="Technical Specs"
                                className="w-full h-auto rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                            Perfect For Every Need
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-2xl overflow-hidden mb-4">
                                    <ImageWithFallback
                                        src={useCase.image}
                                        alt={useCase.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                        }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                                    {useCase.title}
                                </h3>
                                <p className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    {useCase.description}
                                </p>
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
                            Ready to Transform Your Home?
                        </h2>
                        <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
                            Join thousands of satisfied customers experiencing the future of voice AI
                        </p>
                        <button
                            onClick={() => handleNavigate('demo')}
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