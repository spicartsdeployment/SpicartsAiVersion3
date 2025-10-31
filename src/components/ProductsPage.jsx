import { motion, useMotionValue, useTransform } from 'motion/react';
import { Smartphone, Phone, CheckCircle2, ArrowRight, Star, Zap, Shield, Play } from 'lucide-react';
import { useState } from 'react';

export function ProductsPage({ theme, onNavigate }) {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            name: 'Voice Assistant Device',
            tagline: 'Your AI companion for everyday tasks',
            description:
                'A premium smart speaker with advanced AI capabilities, natural voice interaction, and seamless integration with your smart home ecosystem.',
            icon: Smartphone,
            features: [
                'Natural language understanding',
                'Multi-room audio support',
                'Smart home integration',
                'Privacy-focused design',
                'Offline voice processing',
                '24/7 AI assistance',
            ],
            highlights: [
                { icon: Zap, label: 'Fast Response', value: '<50ms' },
                { icon: Shield, label: 'Privacy First', value: 'On-device AI' },
                { icon: Star, label: 'User Rating', value: '4.9/5' },
            ],
            pricing: {
                monthly: '$29.99',
                oneTime: '$299',
            },
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Voice Call Agent',
            tagline: 'AI-powered call automation for businesses',
            description:
                'Transform your customer service with intelligent voice agents that handle calls naturally, understand context, and resolve issues efficiently at scale.',
            icon: Phone,
            features: [
                'Intelligent call routing',
                'Natural conversation flow',
                'CRM integration',
                'Real-time analytics',
                'Multilingual support',
                'Custom voice training',
            ],
            highlights: [
                { icon: Zap, label: 'Efficiency', value: '70% automation' },
                { icon: Shield, label: 'Uptime', value: '99.9%' },
                { icon: Star, label: 'Satisfaction', value: '95%' },
            ],
            pricing: {
                monthly: '$499',
                perCall: '$0.12',
            },
            gradient: 'from-[#4deeea] to-[#2d9cdb]',
        },
    ];

    return (
        <div
            className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-300 page-transition`}
        >
            {/* Hero Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh opacity-50" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`inline-block px-8 py-3 rounded-full mb-8 ${theme === 'dark'
                                    ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                                    : 'bg-black/5 backdrop-blur-xl border border-black/10'
                                }`}
                        >
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                🎯 Premium AI Products
                            </span>
                        </motion.div>

                        <h1 className={`text-7xl md:text-8xl mb-8 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Our{' '}
                            <span className="bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-transparent bg-clip-text">
                                Products
                            </span>
                        </h1>

                        <p
                            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                        >
                            Innovative AI-powered products designed to enhance your life and business
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        const isEven = index % 2 === 0;
                        const isHovered = hoveredProduct === index;

                        return (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                onMouseEnter={() => setHoveredProduct(index)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'
                                    }`}
                            >
                                {/* Product Mockup */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                        transition={{ duration: 0.5 }}
                                        className={`relative rounded-3xl overflow-hidden backdrop-blur-2xl ${theme === 'dark'
                                                ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl shadow-[#4deeea]/20'
                                                : 'bg-gradient-to-br from-white to-gray-50 border border-black/10 shadow-2xl'
                                            }`}
                                        style={{ perspective: '1000px' }}
                                    >
                                        {/* Device Mockup Frame */}
                                        <div className="p-12">
                                            <div
                                                className={`relative aspect-square rounded-2xl bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center overflow-hidden`}
                                            >
                                                {/* Animated Background Pattern */}
                                                <motion.div
                                                    animate={{
                                                        rotate: isHovered ? 360 : 0,
                                                        scale: isHovered ? 1.2 : 1,
                                                    }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                                    className="absolute inset-0 opacity-20"
                                                >
                                                    <div
                                                        className="w-full h-full"
                                                        style={{
                                                            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                                            backgroundSize: '30px 30px',
                                                        }}
                                                    />
                                                </motion.div>

                                                {/* Product Icon */}
                                                <motion.div
                                                    animate={{
                                                        y: isHovered ? -10 : 0,
                                                        scale: isHovered ? 1.1 : 1,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="relative z-10"
                                                >
                                                    <Icon size={120} className="text-white drop-shadow-2xl" />
                                                </motion.div>

                                                {/* Play Demo Button */}
                                                <motion.button
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{
                                                        opacity: isHovered ? 1 : 0,
                                                        scale: isHovered ? 1 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group"
                                                >
                                                    <Play size={32} className="text-white ml-1" />
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Floating Stats */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-4"
                                        >
                                            <div
                                                className={`grid grid-cols-3 gap-4 p-6 rounded-2xl backdrop-blur-2xl ${theme === 'dark'
                                                        ? 'bg-black/80 border border-white/20 shadow-2xl'
                                                        : 'bg-white border border-black/10 shadow-2xl'
                                                    }`}
                                            >
                                                {product.highlights.map((highlight) => {
                                                    const HighlightIcon = highlight.icon;
                                                    return (
                                                        <div key={highlight.label} className="text-center">
                                                            <div className="flex justify-center mb-2">
                                                                <motion.div
                                                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                                                    transition={{ duration: 0.5 }}
                                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
                                                                >
                                                                    <HighlightIcon size={20} className="text-white" />
                                                                </motion.div>
                                                            </div>
                                                            <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                                                {highlight.value}
                                                            </div>
                                                            <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                                {highlight.label}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                {/* Product Details */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 3 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-8 shadow-lg`}
                                    >
                                        <Icon size={36} className="text-white" />
                                    </motion.div>

                                    <h2 className={`text-5xl md:text-6xl mb-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        {product.name}
                                    </h2>

                                    <p className={`text-xl mb-6 ${theme === 'dark' ? 'text-[#4deeea]' : 'text-[#2d9cdb]'} font-medium`}>
                                        {product.tagline}
                                    </p>

                                    <p
                                        className={`text-lg mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                            }`}
                                    >
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {product.features.map((feature, idx) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 size={20} className="text-[#4deeea] flex-shrink-0 mt-1" />
                                                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Pricing */}
                                    <div
                                        className={`p-8 rounded-2xl mb-10 backdrop-blur-xl ${theme === 'dark'
                                                ? 'bg-white/5 border border-white/10'
                                                : 'bg-black/5 border border-black/10'
                                            }`}
                                    >
                                        <div className="flex items-end gap-4 mb-4">
                                            <div>
                                                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    Starting at
                                                </div>
                                                <div className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                                    {product.pricing.monthly || product.pricing.perCall}
                                                </div>
                                            </div>
                                            <div className={`text-lg mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {product.pricing.monthly ? '/month' : '/call'}
                                            </div>
                                        </div>
                                        {product.pricing.oneTime && (
                                            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                Or {product.pricing.oneTime} one-time purchase
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <motion.button
                                            onClick={() => onNavigate('demo')}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`group flex-1 px-8 py-5 rounded-2xl bg-gradient-to-r ${product.gradient} text-white hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 font-medium`}
                                        >
                                            <span>Request Demo</span>
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                        <motion.button
                                            onClick={() => onNavigate('pricing')}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex-1 px-8 py-5 rounded-2xl transition-all duration-300 font-medium ${theme === 'dark'
                                                    ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20'
                                                    : 'bg-white backdrop-blur-xl border border-black/10 text-black hover:bg-black/5 shadow-lg'
                                                }`}
                                        >
                                            View Pricing
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className={`section-spacing ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`relative p-16 md:p-24 rounded-3xl text-center overflow-hidden ${theme === 'dark'
                                ? 'bg-gradient-to-br from-[#4deeea]/10 to-[#2d9cdb]/10 backdrop-blur-xl border border-[#4deeea]/20'
                                : 'bg-gradient-to-br from-[#4deeea]/5 to-[#2d9cdb]/5 border border-[#4deeea]/20'
                            }`}
                    >
                        <h2 className={`text-5xl md:text-6xl mb-6 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Custom Solutions Available
                        </h2>
                        <p
                            className={`text-xl mb-10 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                        >
                            Need a tailored solution? We can customize our products to meet your specific requirements.
                        </p>
                        <motion.button
                            onClick={() => onNavigate('demo')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 rounded-2xl bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50 transition-all duration-300 text-lg font-medium"
                        >
                            Contact Sales
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}