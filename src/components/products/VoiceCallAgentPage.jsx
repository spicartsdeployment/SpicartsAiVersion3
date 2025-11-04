import { motion } from 'motion/react';
import { Phone, Bot, Zap, TrendingUp, Shield, Clock, ArrowRight, CheckCircle2, BarChart3, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function VoiceCallAgentPage({ theme, onNavigate }) {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(`/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const features = [
        {
            icon: Bot,
            title: '24/7 Availability',
            description: 'Never miss a call with AI agents that work around the clock',
        },
        {
            icon: Zap,
            title: 'Instant Response',
            description: 'Handle unlimited calls simultaneously with zero wait time',
        },
        {
            icon: TrendingUp,
            title: 'Scale Effortlessly',
            description: 'Grow your customer support without adding headcount',
        },
        {
            icon: Shield,
            title: 'Consistent Quality',
            description: 'Every call handled with the same high standard',
        },
        {
            icon: BarChart3,
            title: 'Analytics & Insights',
            description: 'Track performance and customer sentiment in real-time',
        },
        {
            icon: Users,
            title: 'Natural Conversations',
            description: 'Human-like interactions that feel authentic',
        },
    ];

    const benefits = [
        { icon: CheckCircle2, text: 'Reduce call center costs by up to 80%' },
        { icon: CheckCircle2, text: 'Handle 1000+ concurrent calls' },
        { icon: CheckCircle2, text: 'Support 50+ languages natively' },
        { icon: CheckCircle2, text: 'Integrate with existing CRM systems' },
        { icon: CheckCircle2, text: 'Custom voice personalities' },
        { icon: CheckCircle2, text: 'Real-time call transcription' },
    ];

    const useCases = [
        {
            title: 'Customer Support',
            description: 'Handle inquiries, troubleshooting, and order status checks automatically',
            metric: '85% resolution rate',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        },
        {
            title: 'Sales & Lead Qualification',
            description: 'Engage prospects, qualify leads, and book appointments seamlessly',
            metric: '3x more leads',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        },
        {
            title: 'Appointment Scheduling',
            description: 'Automated booking, reminders, and rescheduling with calendar integration',
            metric: '95% accuracy',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        },
    ];

    const stats = [
        { value: '10M+', label: 'Calls Handled' },
        { value: '98%', label: 'Customer Satisfaction' },
        { value: '<2s', label: 'Average Response' },
        { value: '50+', label: 'Languages Supported' },
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
                                <Phone size={16} className="text-[#4deeea]" />
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#4deeea',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                }}>
                                    AI-Powered Business Solutions
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
                                Voice Call Agent
                                <br />
                                <span className="text-[#4deeea]">for Business</span>
                            </h1>

                            <p
                                className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '1.7',
                                    maxWidth: '540px',
                                }}
                            >
                                Transform your business communications with AI voice agents that handle calls,
                                qualify leads, and provide 24/7 customer support with human-like conversations.
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
                                    Start Free Trial
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
                                    Schedule Demo
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
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                                    alt="Voice Call Agent"
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${theme === 'dark' ? 'rgba(77, 238, 234, 0.2)' : 'rgba(77, 238, 234, 0.1)'} 0%, transparent 100%)`,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-[#4deeea] mb-2" style={{ fontSize: '48px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {stat.value}
                                </div>
                                <div className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px', fontWeight: 500 }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
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
                            Enterprise-Grade Features
                        </h2>
                        <p className={`mt-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
                            Everything you need to automate your business calls
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

            {/* Use Cases */}
            <section className="py-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                            Built for Every Industry
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
                                className="rounded-2xl overflow-hidden border group"
                                style={{
                                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={useCase.image}
                                        alt={useCase.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-black"
                                        style={{
                                            background: '#4deeea',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            fontFamily: 'Space Grotesk, sans-serif',
                                        }}
                                    >
                                        {useCase.metric}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-2">
                                        {useCase.title}
                                    </h3>
                                    <p className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                        {useCase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits List */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: '42px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-6">
                                Why Choose Our Voice Call Agent?
                            </h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={benefit.text}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <Icon size={20} className="text-[#4deeea] flex-shrink-0" />
                                            <span style={{ fontSize: '16px', fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {benefit.text}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                                alt="Benefits"
                                className="w-full h-auto rounded-2xl"
                            />
                        </motion.div>
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
                            Ready to Scale Your Business?
                        </h2>
                        <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '18px' }}>
                            Start handling thousands of calls with AI-powered voice agents
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
                            Start Free Trial
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}