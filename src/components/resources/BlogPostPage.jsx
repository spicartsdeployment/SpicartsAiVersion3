import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Twitter, Linkedin, Facebook, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';


export function BlogPostPage({ theme, onNavigate }) {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };


    const relatedPosts = [
        {
            title: 'The Future of Voice AI in Healthcare',
            category: 'Healthcare AI',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            date: 'Oct 15, 2025',
        },
        {
            title: 'Building Scalable AI Agents',
            category: 'Development',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            date: 'Oct 10, 2025',
        },
        {
            title: 'IoT and Robotics Integration',
            category: 'Robotics',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            date: 'Oct 5, 2025',
        },
    ];

    return (
        <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
            {/* Back Button */}
            <div className="pt-24 pb-8 px-6">
                <div className="max-w-[900px] mx-auto">
                    <button
                        onClick={() => handleNavigate('/blog')}
                        className={`flex items-center gap-2 hover:text-[#4deeea] transition-colors ${theme === 'dark' ? 'text-white/70' : 'text-black/70'
                            }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                        <ArrowLeft size={18} />
                        Back to Blog
                    </button>
                </div>
            </div>

            {/* Article Header */}
            <article className="pb-20 px-6">
                <div className="max-w-[900px] mx-auto">
                    {/* Meta Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span
                                className="px-3 py-1 rounded-full text-[#4deeea] border border-[#4deeea]/30"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    background: 'rgba(77, 238, 234, 0.1)',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                }}
                            >
                                AI Technology
                            </span>
                            <span
                                className="px-3 py-1 rounded-full text-[#4deeea] border border-[#4deeea]/30"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    background: 'rgba(77, 238, 234, 0.1)',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                }}
                            >
                                Voice AI
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="mb-6"
                            style={{
                                fontSize: '48px',
                                fontWeight: 700,
                                lineHeight: '1.1',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            How AI Voice Agents Are Transforming Customer Service in 2025
                        </h1>

                        {/* Author & Meta */}
                        <div className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'
                            }`}>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{
                                        background: 'rgba(77, 238, 234, 0.2)',
                                        border: '1px solid rgba(77, 238, 234, 0.3)',
                                    }}
                                >
                                    <User size={20} className="text-[#4deeea]" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                                        Dr. Sarah Mitchell
                                    </div>
                                    <div className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '13px' }}>
                                        Head of AI Research
                                    </div>
                                </div>
                            </div>

                            <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                                <Calendar size={16} />
                                <span style={{ fontSize: '14px' }}>October 20, 2025</span>
                            </div>

                            <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                                <Clock size={16} />
                                <span style={{ fontSize: '14px' }}>8 min read</span>
                            </div>
                        </div>

                        {/* Share Buttons */}
                        <div className="flex items-center gap-4 mb-8">
                            <span
                                className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                                style={{ fontSize: '14px', fontWeight: 600 }}
                            >
                                Share:
                            </span>
                            <div className="flex gap-2">
                                {[
                                    { icon: Twitter, color: '#1DA1F2' },
                                    { icon: Linkedin, color: '#0A66C2' },
                                    { icon: Facebook, color: '#1877F2' },
                                ].map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <button
                                            key={index}
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 ${theme === 'dark'
                                                ? 'border-white/10 hover:border-[#4deeea]/50'
                                                : 'border-black/10 hover:border-[#4deeea]/50'
                                                }`}
                                            style={{
                                                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                                            }}
                                        >
                                            <Icon size={16} className="text-[#4deeea]" />
                                        </button>
                                    );
                                })}
                                <button
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 ${theme === 'dark'
                                        ? 'border-white/10 hover:border-[#4deeea]/50'
                                        : 'border-black/10 hover:border-[#4deeea]/50'
                                        }`}
                                    style={{
                                        background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                                    }}
                                >
                                    <Bookmark size={16} className="text-[#4deeea]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 rounded-2xl overflow-hidden"
                    >
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                            alt="AI Voice Agents"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="prose max-w-none"
                    >
                        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '24px' }}>
                            The landscape of customer service is undergoing a revolutionary transformation, driven by advances in artificial intelligence and natural language processing. Voice AI agents are no longer a futuristic concept—they're here, and they're reshaping how businesses interact with their customers.
                        </p>

                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 700,
                                marginTop: '48px',
                                marginBottom: '16px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            The Rise of Conversational AI
                        </h2>

                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            In 2025, AI voice agents have matured from simple interactive voice response (IVR) systems to sophisticated conversational partners capable of understanding context, emotion, and intent. These systems leverage cutting-edge technologies including:
                        </p>

                        <ul
                            className={theme === 'dark' ? 'text-white/80' : 'text-black/80'}
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                marginBottom: '24px',
                                listStyleType: 'disc',
                                paddingLeft: '24px',
                            }}
                        >
                            <li style={{ marginBottom: '12px' }}>Large Language Models (LLMs) for natural conversation flow</li>
                            <li style={{ marginBottom: '12px' }}>Real-time speech-to-text and text-to-speech synthesis</li>
                            <li style={{ marginBottom: '12px' }}>Sentiment analysis for emotional intelligence</li>
                            <li style={{ marginBottom: '12px' }}>Multi-language support with cultural context awareness</li>
                        </ul>

                        <div
                            className="my-12 p-8 rounded-2xl border"
                            style={{
                                background: theme === 'dark'
                                    ? 'rgba(77, 238, 234, 0.05)'
                                    : 'rgba(77, 238, 234, 0.1)',
                                borderColor: 'rgba(77, 238, 234, 0.3)',
                            }}
                        >
                            <p
                                className="text-[#4deeea] mb-0"
                                style={{
                                    fontSize: '20px',
                                    lineHeight: '1.6',
                                    fontStyle: 'italic',
                                    fontWeight: 500,
                                }}
                            >
                                "By 2025, 75% of customer service interactions will be handled by AI agents, with customer satisfaction rates exceeding traditional call centers by 40%."
                            </p>
                            <p
                                className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                                style={{ fontSize: '14px', marginTop: '12px', marginBottom: 0 }}
                            >
                                — Gartner Research, 2024
                            </p>
                        </div>

                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 700,
                                marginTop: '48px',
                                marginBottom: '16px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            Real-World Applications
                        </h2>

                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            Companies across industries are deploying voice AI agents to handle various customer service scenarios:
                        </p>

                        <h3
                            style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                marginTop: '32px',
                                marginBottom: '12px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            Healthcare
                        </h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            Medical facilities use AI voice agents for appointment scheduling, prescription refill requests, and basic health triage. These systems can handle thousands of simultaneous calls, reducing wait times and freeing medical staff for critical care.
                        </p>

                        <h3
                            style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                marginTop: '32px',
                                marginBottom: '12px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            E-commerce
                        </h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            Online retailers deploy voice agents for order tracking, product recommendations, and returns processing. The AI can access customer history to provide personalized service that rivals human agents.
                        </p>

                        <h3
                            style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                marginTop: '32px',
                                marginBottom: '12px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            Financial Services
                        </h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            Banks and fintech companies use voice AI for account inquiries, fraud detection alerts, and basic financial guidance. Advanced security measures ensure customer data remains protected.
                        </p>

                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 700,
                                marginTop: '48px',
                                marginBottom: '16px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            The Benefits
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: '24/7 Availability', desc: 'Always-on service with no wait times' },
                                { title: 'Cost Efficiency', desc: 'Reduce operational costs by up to 60%' },
                                { title: 'Scalability', desc: 'Handle unlimited concurrent conversations' },
                                { title: 'Consistency', desc: 'Uniform service quality across all interactions' },
                            ].map((benefit) => (
                                <div
                                    key={benefit.title}
                                    className="p-6 rounded-xl border"
                                    style={{
                                        background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#4deeea' }}>
                                        {benefit.title}
                                    </h4>
                                    <p className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} style={{ fontSize: '14px', marginBottom: 0 }}>
                                        {benefit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 700,
                                marginTop: '48px',
                                marginBottom: '16px',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            Looking Ahead
                        </h2>

                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            As we progress through 2025 and beyond, voice AI agents will become even more sophisticated. We anticipate developments in:
                        </p>

                        <ul
                            className={theme === 'dark' ? 'text-white/80' : 'text-black/80'}
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                marginBottom: '24px',
                                listStyleType: 'disc',
                                paddingLeft: '24px',
                            }}
                        >
                            <li style={{ marginBottom: '12px' }}>Emotional AI that can detect and respond to customer stress levels</li>
                            <li style={{ marginBottom: '12px' }}>Hyper-personalization based on individual customer preferences</li>
                            <li style={{ marginBottom: '12px' }}>Seamless handoffs between AI and human agents when needed</li>
                            <li style={{ marginBottom: '12px' }}>Proactive outreach for customer retention and upselling</li>
                        </ul>

                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            The future of customer service is conversational, intelligent, and always available. Companies that embrace voice AI agents now will be well-positioned to meet rising customer expectations and stay ahead of the competition.
                        </p>
                    </motion.div>
                    {/* Author Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 rounded-2xl border"
                        style={{
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div className="flex gap-6 items-start">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: 'rgba(77, 238, 234, 0.2)',
                                    border: '1px solid rgba(77, 238, 234, 0.3)',
                                }}
                            >
                                <User size={32} className="text-[#4deeea]" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', fontFamily: 'Space Grotesk, sans-serif' }}>
                                    Dr. Sarah Mitchell
                                </h3>
                                <p className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    Dr. Mitchell leads AI research at SPicArts AI LLP, specializing in conversational AI and natural language processing. With over 15 years of experience in machine learning, she has published numerous papers on voice technology and holds several patents in the field.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="pb-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
                <div className="max-w-[1400px] mx-auto">
                    <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px', fontFamily: 'Space Grotesk, sans-serif' }}>
                        Related Articles
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedPosts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => onNavigate('resources/blog/post')}
                                className="group cursor-pointer rounded-2xl overflow-hidden border hover:border-[#4deeea]/50 transition-all duration-300"
                                style={{
                                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={post.image}
                                        alt={post.title}
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
                                        }}
                                    >
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className={`flex items-center gap-2 mb-3 text-xs ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                                        <Calendar size={12} />
                                        {post.date}
                                    </div>

                                    <h3
                                        className="group-hover:text-[#4deeea] transition-colors"
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '1.3',
                                            fontFamily: 'Space Grotesk, sans-serif',
                                        }}
                                    >
                                        {post.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}