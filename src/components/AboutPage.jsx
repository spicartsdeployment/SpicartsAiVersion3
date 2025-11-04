import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Award, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function AboutPage({ theme, onNavigate }) {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(`/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We constantly push boundaries to create breakthrough AI solutions.',
        },
        {
            icon: Heart,
            title: 'Human-Centric',
            description: 'Technology should empower people, not complicate their lives.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We maintain the highest standards in everything we do.',
        },
        {
            icon: TrendingUp,
            title: 'Impact',
            description: 'Creating solutions that make a real difference in the world.',
        },
    ];

    const team = [
        {
            name: 'Venkat',
            role: 'Co-Founder & MD',
            bio: 'Former Business Head at Tech Giants',
        },
        {
            name: 'Prakash',
            role: 'Co-Founder & CEO',
            bio: 'AI Visionary and Tech Entrepreneur',
        },
        {
            name: 'Dr. Jagan Mohan',
            role: 'Head of Research',
            bio: 'Ph.D. in Medical AI and Publications in Top Journals',
        },
        {
            name: 'Surya',
            role: 'Chief Operating Officer',
            bio: 'Operations Expert and Management Specialist',
        },
    ];

    const milestones = [
        {
            year: '2024',
            title: 'Company Founded',
            description: 'SPicArts AI LLP established with a vision to revolutionize AI technology.',
        },
        {
            year: '2024',
            title: 'First Product Launch',
            description: 'Released our groundbreaking Voice AI platform to enterprise customers.',
        },
        {
            year: '2025',
            title: 'Research Initiative in Healthcare AI',
            description: 'Started pioneering research in AI applications for healthcare and medical imaging.',
        },
        {
            year: '2025',
            title: 'Quantum Research Lab',
            description: 'Established dedicated quantum machine learning research division.',
        },
        {
            year: '2025',
            title: 'Advanced Robotics Division',
            description: 'Launched new division focused on AI-driven robotics and automation solutions.',
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
                        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#4deeea]/20 blur-3xl"
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
                                🌟 Our Story
                            </span>
                        </div>

                        <h1 className={`text-5xl md:text-7xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            About <span className="bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-transparent bg-clip-text">SPicArts AI</span>
                        </h1>

                        <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            We're on a mission to make AI accessible, intelligent, and human-centric
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="SPicArts AI Team"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4deeea] to-[#2d9cdb] flex items-center justify-center">
                                        <Target size={24} className="text-white" />
                                    </div>
                                    <h2 className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        Our Mission
                                    </h2>
                                </div>
                                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    To democratize artificial intelligence by creating accessible, powerful, and human-centric AI solutions that enhance how people live, work, and communicate.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2d9cdb] to-[#4deeea] flex items-center justify-center">
                                        <Users size={24} className="text-white" />
                                    </div>
                                    <h2 className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        Our Vision
                                    </h2>
                                </div>
                                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    A world where AI technology seamlessly integrates into everyday life, empowering individuals and organizations to achieve more while maintaining the human touch that matters most.
                                </p>
                            </div>

                            <div className={`p-6 rounded-2xl border-l-4 border-[#4deeea] ${theme === 'dark' ? 'bg-white/5' : 'bg-white shadow-lg'
                                }`}>
                                <p className={`text-lg italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    "We believe that the best technology is invisible – it just works, naturally and intuitively."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={`py-24 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Our Core Values
                        </h2>
                        <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className={`p-8 rounded-3xl text-center transition-all duration-300 ${theme === 'dark'
                                        ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
                                        : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-2xl'
                                        }`}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4deeea] to-[#2d9cdb] flex items-center justify-center mx-auto mb-6">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className={`text-2xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        {value.title}
                                    </h3>
                                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Leadership Team
                        </h2>
                        <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Meet the visionaries behind SPicArts AI
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`rounded-3xl overflow-hidden transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
                                    : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-2xl'
                                    }`}
                            >
                                <div className="h-64 bg-gradient-to-br from-[#4deeea] to-[#2d9cdb] flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-xl border-4 border-white/50" />
                                </div>
                                <div className="p-6">
                                    <h3 className={`text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        {member.name}
                                    </h3>
                                    <p className="text-[#4deeea] mb-3">{member.role}</p>
                                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className={`py-24 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-4xl md:text-5xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Our Journey
                        </h2>
                        <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Key milestones in our mission to revolutionize AI
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative pl-8 pb-12 border-l-2 border-[#4deeea] last:pb-0"
                            >
                                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-[#4deeea] ring-4 ring-[#4deeea]/20" />
                                <div className={`p-6 rounded-2xl ${theme === 'dark'
                                    ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                                    : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg'
                                    }`}>
                                    <div className="text-[#4deeea] mb-2">{milestone.year}</div>
                                    <h3 className={`text-2xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        {milestone.title}
                                    </h3>
                                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                        {milestone.description}
                                    </p>
                                </div>
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
                            Join Our Team
                        </h2>
                        <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            We're always looking for talented individuals who share our passion for AI innovation
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleNavigate('demo')}
                                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50 transition-all duration-300"
                            >
                                View Open Positions
                            </button>
                            <button
                                onClick={() => handleNavigate('demo')}
                                className={`px-8 py-4 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20'
                                    : 'bg-white backdrop-blur-xl border border-black/10 text-black hover:bg-black/5 shadow-lg'
                                    }`}
                            >
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}