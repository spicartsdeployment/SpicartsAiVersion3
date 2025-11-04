import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles, Zap, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export function PricingPage({ theme, onNavigate }) {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(`/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const plans = [
        {
            name: 'Starter',
            icon: Sparkles,
            price: '$299',
            period: '/month',
            description: 'Perfect for small teams and startups exploring AI capabilities',
            features: [
                'Voice AI integration',
                'Up to 10,000 API calls/month',
                'Basic AI agent kit',
                'Email support',
                '99.5% uptime SLA',
                'Standard documentation',
            ],
            highlighted: false,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Professional',
            icon: Zap,
            price: '$899',
            period: '/month',
            description: 'Advanced features for growing businesses and enterprise teams',
            features: [
                'Everything in Starter',
                'Up to 100,000 API calls/month',
                'Advanced AI agents',
                'Priority support (24/7)',
                '99.9% uptime SLA',
                'Custom voice training',
                'CRM/ERP integrations',
                'Dedicated account manager',
            ],
            highlighted: true,
            color: 'from-[#4deeea] to-[#2d9cdb]',
        },
        {
            name: 'Enterprise',
            icon: Crown,
            price: 'Custom',
            period: '',
            description: 'Tailored solutions for large organizations with specific needs',
            features: [
                'Everything in Professional',
                'Unlimited API calls',
                'Quantum ML research access',
                'White-label solutions',
                '99.99% uptime SLA',
                'On-premise deployment options',
                'Custom development',
                'Dedicated engineering team',
            ],
            highlighted: false,
            color: 'from-purple-500 to-pink-500',
        },
    ];

    const addOns = [
        {
            name: 'Quantum ML Research Access',
            price: '$2,500/month',
            description: 'Early access to quantum machine learning research and beta features',
        },
        {
            name: 'Custom Voice Training',
            price: '$1,200/voice',
            description: 'Train custom voice models with your specific requirements',
        },
        {
            name: 'On-Premise Deployment',
            price: 'Custom pricing',
            description: 'Deploy AI solutions within your infrastructure',
        },
    ];

    return (
        <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
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
                        className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#4deeea]/20 blur-3xl"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`inline-block px-6 py-2 rounded-full mb-6 ${theme === 'dark'
                            ? 'bg-white/10 backdrop-blur-xl border border-white/20'
                            : 'bg-black/5 backdrop-blur-xl border border-black/10'
                            }`}>
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                💎 Transparent Pricing
                            </span>
                        </div>

                        <h1 className={`text-5xl md:text-7xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Choose Your <span className="bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-transparent bg-clip-text">Plan</span>
                        </h1>

                        <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Flexible pricing options designed to scale with your business
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className={`relative rounded-3xl transition-all duration-300 ${plan.highlighted
                                        ? `${theme === 'dark'
                                            ? 'bg-gradient-to-br from-[#4deeea]/20 to-[#2d9cdb]/20 backdrop-blur-xl border-2 border-[#4deeea]'
                                            : 'bg-gradient-to-br from-[#4deeea]/10 to-[#2d9cdb]/10 backdrop-blur-xl border-2 border-[#4deeea] shadow-2xl'
                                        } scale-105`
                                        : theme === 'dark'
                                            ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
                                            : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-2xl'
                                        }`}
                                >
                                    {plan.highlighted && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white text-sm">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                                            <Icon size={32} className="text-white" />
                                        </div>

                                        <h3 className={`text-3xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {plan.name}
                                        </h3>

                                        <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {plan.description}
                                        </p>

                                        <div className="mb-6">
                                            <div className={`text-5xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                                {plan.price}
                                            </div>
                                            {plan.period && (
                                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {plan.period}
                                                </div>
                                            )}
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <Check size={20} className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-[#4deeea]' : 'text-gray-400'}`} />
                                                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() => handleNavigate('demo')}
                                            className={`w-full py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${plan.highlighted
                                                ? 'bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50'
                                                : theme === 'dark'
                                                    ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                                                    : 'bg-black/5 border border-black/10 text-black hover:bg-black/10'
                                                }`}
                                        >
                                            <span>{plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}</span>
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className={`py-24 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-4xl md:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Add-ons & Extensions
                        </h2>
                        <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Enhance your plan with specialized features and services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {addOns.map((addon, index) => (
                            <motion.div
                                key={addon.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`p-6 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
                                    : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                <h3 className={`text-xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                    {addon.name}
                                </h3>
                                <div className="text-[#4deeea] mb-3">{addon.price}</div>
                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {addon.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-4xl md:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'Can I switch plans later?',
                                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
                            },
                            {
                                q: 'Is there a free trial available?',
                                a: 'We offer a 14-day free trial for all our plans. No credit card required to start.',
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise customers.',
                            },
                            {
                                q: 'Do you offer custom solutions?',
                                a: 'Absolutely! Our Enterprise plan includes custom development and tailored solutions for your specific needs.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={faq.q}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`p-6 rounded-2xl ${theme === 'dark'
                                    ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                                    : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg'
                                    }`}
                            >
                                <h3 className={`text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                    {faq.q}
                                </h3>
                                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`p-12 md:p-16 rounded-3xl text-center ${theme === 'dark'
                            ? 'bg-gradient-to-br from-[#4deeea]/10 to-[#2d9cdb]/10 backdrop-blur-xl border border-[#4deeea]/20'
                            : 'bg-gradient-to-br from-[#4deeea]/5 to-[#2d9cdb]/5 border border-[#4deeea]/20'
                            }`}
                    >
                        <h2 className={`text-4xl md:text-5xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Need Help Choosing?
                        </h2>
                        <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Our team is here to help you find the perfect plan for your needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleNavigate('demo')}
                                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50 transition-all duration-300"
                            >
                                Schedule a Consultation
                            </button>
                            <button
                                onClick={() => handleNavigate('demo')}
                                className={`px-8 py-4 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20'
                                    : 'bg-white backdrop-blur-xl border border-black/10 text-black hover:bg-black/5 shadow-lg'
                                    }`}
                            >
                                Contact Sales
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}