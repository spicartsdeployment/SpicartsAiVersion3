import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ServiceDetailPage({ theme, onNavigate, service }) {
    const Icon = service.icon;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-300 page-transition`}>
            {/* Hero Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh opacity-50" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6"
                            >
                                <span className={`inline-block px-4 py-2 rounded-full text-xs uppercase font-semibold tracking-wider ${theme === 'dark' ? 'bg-[#4deeea]/10 text-[#4deeea]' : 'bg-[#4deeea]/10 text-[#2d9cdb]'
                                    }`}>
                                    {service.tagline}
                                </span>
                            </motion.div>

                            <h1 className={`text-6xl md:text-7xl mb-8 font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                {service.title}
                            </h1>

                            <p className={`text-xl md:text-2xl mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {service.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    onClick={() => onNavigate('demo')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-10 py-5 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-medium shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2`}
                                >
                                    <span>Get Started</span>
                                    <ArrowRight size={20} />
                                </motion.button>
                                <motion.button
                                    onClick={() => onNavigate('demo')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-10 py-5 rounded-2xl transition-all duration-300 font-medium ${theme === 'dark'
                                        ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20'
                                        : 'bg-white backdrop-blur-xl border border-black/10 text-black hover:bg-black/5 shadow-lg'
                                        }`}
                                >
                                    Schedule Demo
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className={`relative rounded-3xl p-16 backdrop-blur-2xl overflow-hidden ${theme === 'dark'
                                ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20'
                                : 'bg-gradient-to-br from-black/5 to-white border border-black/10 shadow-2xl'
                                }`}>
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
                                    style={{
                                        background: `radial-gradient(circle, ${theme === 'dark' ? '#4deeea' : '#2d9cdb'} 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px',
                                    }}
                                />
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className={`w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}
                                >
                                    <Icon size={96} className="text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-spacing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-5xl md:text-6xl mb-6 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Key Features
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                                    : 'bg-white border border-black/10 hover:border-[#4deeea]/50 shadow-lg'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <Check size={20} className="text-[#4deeea] flex-shrink-0 mt-1" />
                                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {feature}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={`section-spacing ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-5xl md:text-6xl mb-6 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Benefits
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => {
                            const BenefitIcon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className={`p-10 rounded-3xl backdrop-blur-xl transition-all duration-500 ${theme === 'dark'
                                        ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                                        : 'bg-white border border-black/10 hover:border-[#4deeea]/50 shadow-lg hover:shadow-2xl'
                                        }`}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <BenefitIcon size={32} className="text-white" />
                                    </motion.div>
                                    <h3 className={`text-2xl mb-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        {benefit.title}
                                    </h3>
                                    <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section-spacing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-5xl md:text-6xl mb-6 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Use Cases
                        </h2>
                    </motion.div>
                    <div className="space-y-8">
                        {service.useCases.map((useCase, index) => (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`p-10 rounded-3xl backdrop-blur-xl ${theme === 'dark'
                                    ? 'bg-white/5 border border-white/10'
                                    : 'bg-white border border-black/10 shadow-lg'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <h3 className={`text-3xl mb-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {useCase.title}
                                        </h3>
                                        <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {useCase.description}
                                        </p>
                                    </div>
                                    {useCase.stats && (
                                        <div className={`px-8 py-6 rounded-2xl ${theme === 'dark' ? 'bg-[#4deeea]/10' : 'bg-[#4deeea]/5'
                                            }`}>
                                            <div className="text-5xl font-bold bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-transparent bg-clip-text">
                                                {useCase.stats}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-spacing">
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
                            {service.cta.title}
                        </h2>
                        <p className={`text-xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {service.cta.description}
                        </p>
                        <motion.button
                            onClick={() => handleNavigate('/demo')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-12 py-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white hover:shadow-2xl transition-all duration-300 text-lg font-medium inline-flex items-center gap-3`}
                        >
                            <span>Get Started Today</span>
                            <ArrowRight size={22} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}