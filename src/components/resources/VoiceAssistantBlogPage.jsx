import { motion } from 'motion/react';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Bookmark,
    Twitter,
    Linkedin,
    Facebook,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function VoiceAssistantBlogPage({ theme, onNavigate }) {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const relatedPosts = [
        {
            title: 'Generative AI: From GPT to Custom Language Models',
            category: 'AI Research',
            image:
                'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            date: 'Nov 1, 2025',
        },
        {
            title: 'Computer Vision Applications in Real-World Scenarios',
            category: 'Computer Vision',
            image:
                'https://images.unsplash.com/photo-1581093588401-22c5a1c89c71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            date: 'Oct 20, 2025',
        },
        {
            title: 'IoT and Smart Homes: The Connected Future',
            category: 'IoT',
            image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            date: 'Oct 10, 2025',
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

            {/* Blog Content */}
            <article className="pb-20 px-6">
                <div className="max-w-[900px] mx-auto">
                    {/* Header Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Voice AI', 'NLP', 'AI Assistants'].map((tag) => (
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
                            Building Voice Assistants with Natural Language Processing
                        </h1>

                        {/* Author & Meta */}
                        <div
                            className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'
                                }`}
                        >
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
                                    <div
                                        style={{
                                            fontWeight: 600,
                                            fontFamily: 'Space Grotesk, sans-serif',
                                        }}
                                    >
                                        Dr. Sarah Mitchell
                                    </div>
                                    <div
                                        className={
                                            theme === 'dark' ? 'text-white/50' : 'text-black/50'
                                        }
                                        style={{ fontSize: '13px' }}
                                    >
                                        AI Research Lead, SPicArts AI LLP
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'
                                    }`}
                            >
                                <Calendar size={16} />
                                <span style={{ fontSize: '14px' }}>November 5, 2025</span>
                            </div>

                            <div
                                className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'
                                    }`}
                            >
                                <Clock size={16} />
                                <span style={{ fontSize: '14px' }}>9 min read</span>
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
                                {[Twitter, Linkedin, Facebook].map((Icon, index) => (
                                    <button
                                        key={index}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 ${theme === 'dark'
                                            ? 'border-white/10 hover:border-[#4deeea]/50'
                                            : 'border-black/10 hover:border-[#4deeea]/50'
                                            }`}
                                        style={{
                                            background:
                                                theme === 'dark'
                                                    ? 'rgba(255,255,255,0.03)'
                                                    : 'rgba(0,0,0,0.03)',
                                        }}
                                    >
                                        <Icon size={16} className="text-[#4deeea]" />
                                    </button>
                                ))}
                                <button
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 ${theme === 'dark'
                                        ? 'border-white/10 hover:border-[#4deeea]/50'
                                        : 'border-black/10 hover:border-[#4deeea]/50'
                                        }`}
                                    style={{
                                        background:
                                            theme === 'dark'
                                                ? 'rgba(255,255,255,0.03)'
                                                : 'rgba(0,0,0,0.03)',
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
                            src="https://images.unsplash.com/photo-1581093588401-22c5a1c89c71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                            alt="Voice Assistant AI"
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
                            Voice assistants have become an integral part of modern technology, enabling people to interact with devices through speech instead of traditional interfaces. Assistants like Amazon Alexa, Apple’s Siri, and Google Assistant rely on Natural Language Processing (NLP) to interpret and respond to human speech intelligently.
                        </p>

                        <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', }}>
                            Core Components of a Voice Assistant
                        </h2>

                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            Building an effective voice assistant requires combining several AI components such as Speech Recognition, Natural Language Understanding, Dialogue Management, and Text-to-Speech synthesis.
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
                            <li style={{ marginBottom: '12px' }}>Speech Recognition (STT) – Converts voice to text.</li>
                            <li style={{ marginBottom: '12px' }}>Natural Language Understanding (NLU) – Determines intent.</li>
                            <li style={{ marginBottom: '12px' }}>Dialogue Management – Maintains conversation flow.</li>
                            <li style={{ marginBottom: '12px' }}>Text-to-Speech (TTS) – Generates spoken replies.</li>
                        </ul>

                        <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '48px' }}>
                            Real-World Applications
                        </h2>

                        <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            Voice assistants are transforming industries such as healthcare, e-commerce, and education by offering conversational access to digital services.
                        </p>

                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginTop: '24px' }}>Healthcare</h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            Used for appointment scheduling, patient triage, and medical assistance.
                        </p>

                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginTop: '24px' }}>Smart Homes</h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            Enable voice-based control over IoT devices such as lights, fans, and thermostats.
                        </p>

                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginTop: '24px' }}>Education</h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            Assist in tutoring, language learning, and personalized study experiences.
                        </p>

                        <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '48px' }}>
                            Benefits of Voice Assistants
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: 'Hands-Free Operation', desc: 'Convenient interaction without physical touch.' },
                                { title: 'Accessibility', desc: 'Helps visually impaired and elderly users.' },
                                { title: 'Personalization', desc: 'Adapts based on user habits and preferences.' },
                                { title: 'Productivity', desc: 'Speeds up tasks and information access.' },
                            ].map((benefit) => (
                                <div
                                    key={benefit.title}
                                    className="p-6 rounded-xl border"
                                    style={{
                                        background:
                                            theme === 'dark'
                                                ? 'rgba(255, 255, 255, 0.02)'
                                                : 'rgba(0, 0, 0, 0.02)',
                                        borderColor:
                                            theme === 'dark'
                                                ? 'rgba(255, 255, 255, 0.1)'
                                                : 'rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            marginBottom: '8px',
                                            color: '#4deeea',
                                        }}
                                    >
                                        {benefit.title}
                                    </h4>
                                    <p
                                        className={theme === 'dark' ? 'text-white/70' : 'text-black/70'}
                                        style={{ fontSize: '14px' }}
                                    >
                                        {benefit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '48px' }}>
                            Looking Ahead
                        </h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            As we progress through 2025 and beyond, voice assistants will become even more
                            capable and human-like. Continued breakthroughs in speech modeling, grounding,
                            and on-device inference will make assistants faster, more private, and more
                            context-aware.
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
                            <li style={{ marginBottom: '12px' }}>
                                <strong>Emotional AI</strong> that can detect stress or frustration and adapt tone and pacing in real time.
                            </li>
                            <li style={{ marginBottom: '12px' }}>
                                <strong>Hyper-personalization</strong> driven by user preferences, routines, and multi-turn memory.
                            </li>
                            <li style={{ marginBottom: '12px' }}>
                                <strong>Seamless handoffs</strong> between AI and human agents with full context transfer when needed.
                            </li>
                            <li style={{ marginBottom: '12px' }}>
                                <strong>Proactive assistance</strong> for reminders, follow-ups, and upsell/cross-sell in customer journeys.
                            </li>
                        </ul>

                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            The future of voice is ambient, conversational, and always available. Teams that
                            adopt NLP-powered assistants now will set the standard for accessibility,
                            responsiveness, and customer delight.
                        </p>
                    </motion.div>

                    {/* Author Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 rounded-2xl border"
                        style={{
                            background:
                                theme === 'dark'
                                    ? 'rgba(255, 255, 255, 0.02)'
                                    : 'rgba(0, 0, 0, 0.02)',
                            borderColor:
                                theme === 'dark'
                                    ? 'rgba(255, 255, 255, 0.1)'
                                    : 'rgba(0, 0, 0, 0.1)',
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
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 600,
                                        marginBottom: '8px',
                                        fontFamily: 'Space Grotesk, sans-serif',
                                    }}
                                >
                                    Dr. Sarah Mitchell
                                </h3>
                                <p
                                    className={theme === 'dark' ? 'text-white/70' : 'text-black/70'}
                                    style={{ fontSize: '14px', lineHeight: '1.6' }}
                                >
                                    Dr. Mitchell leads AI research at SPicArts AI LLP, specializing
                                    in conversational AI and NLP. She has published numerous papers
                                    and contributed to multiple AI-driven projects in the voice
                                    technology space.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* Related Articles */}
            <section
                className="pb-20 px-6"
                style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}
            >
                <div className="max-w-[1400px] mx-auto">
                    <h2
                        style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            marginBottom: '32px',
                            fontFamily: 'Space Grotesk, sans-serif',
                        }}
                    >
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
                                    background:
                                        theme === 'dark'
                                            ? 'rgba(255, 255, 255, 0.02)'
                                            : 'rgba(255, 255, 255, 0.8)',
                                    borderColor:
                                        theme === 'dark'
                                            ? 'rgba(255, 255, 255, 0.1)'
                                            : 'rgba(0, 0, 0, 0.1)',
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
                                    <div
                                        className={`flex items-center gap-2 mb-3 text-xs ${theme === 'dark' ? 'text-white/50' : 'text-black/50'
                                            }`}
                                    >
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
