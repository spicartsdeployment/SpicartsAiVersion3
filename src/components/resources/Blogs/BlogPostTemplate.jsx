import { motion } from 'motion/react';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Twitter,
    Linkedin,
    Facebook,
    Bookmark
} from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import { div } from 'motion/react-client';

export function BlogPostTemplate({ theme, onNavigate, post }) {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
            {/* Back Button */}
            <div className="pt-24 pb-8 px-6">
                <div className="max-w-[900px] mx-auto">
                    <button
                        onClick={() => handleNavigate('/blog')}
                        className={`flex items-center gap-2 hover:text-[#4deeea] transition-colors ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                        <ArrowLeft size={18} />
                        Back to Blog
                    </button>
                </div>
            </div>

            {/* Blog Header */}
            <article className="pb-20 px-6">
                <div className="max-w-[900px] mx-auto">
                    {/* Meta Tags */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags?.map((tag, i) => (
                                <span
                                    key={i}
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
                            {post.title}
                        </h1>

                        {/* Author & Meta */}
                        <div className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
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
                                    <div style={{ fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>{post.author?.name}</div>
                                    <div className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '13px' }}>{post.author?.role}</div>
                                </div>
                            </div>

                            <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                                <Calendar size={16} />
                                <span style={{ fontSize: '14px' }}>{post.date}</span>
                            </div>

                            <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                                <Clock size={16} />
                                <span style={{ fontSize: '14px' }}>{post.readTime}</span>
                            </div>
                        </div>

                        {/* Share Buttons */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px', fontWeight: 600 }}>
                                Share:
                            </span>

                            {[{ Icon: Twitter }, { Icon: Linkedin }, { Icon: Facebook }].map((s, index) => {
                                const Icon = s.Icon;
                                return (
                                    <button
                                        key={index}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 ${theme === 'dark' ? 'border-white/10 hover:border-[#4deeea]/50' : 'border-black/10 hover:border-[#4deeea]/50'}`}
                                        style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)' }}
                                    >
                                        <Icon size={16} className="text-[#4deeea]" />
                                    </button>
                                );
                            })}

                            <button
                                className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 ${theme === 'dark' ? 'border-white/10 hover:border-[#4deeea]/50' : 'border-black/10 hover:border-[#4deeea]/50'}`}
                                style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)' }}
                            >
                                <Bookmark size={16} className="text-[#4deeea]" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12 rounded-2xl overflow-hidden">
                        <ImageWithFallback src={post.featuredImage} alt={post.title} className="w-full h-[500px] object-cover" />
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="prose max-w-none">
                        {post.content?.map((block, i) => (
                            <div key={i} style={{ marginBottom: '24px' }}>
                                {block.type === 'paragraph' && (
                                    <p style={{
                                        fontSize: '18px',
                                        lineHeight: '1.8',
                                        marginBottom: '24px'
                                    }}>
                                        {block.text}</p>
                                )}

                                {block.type === 'heading' && (
                                    <h2 style={{
                                        fontSize: '32px',
                                        fontWeight: 700,
                                        marginTop: '48px',
                                        marginBottom: '16px',
                                        fontFamily: 'Space Grotesk, sans-serif'
                                    }}>
                                        {block.text}
                                    </h2>
                                )}

                                {block.type === 'subheading' && (
                                    <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>{block.text}</p>
                                )}

                                {block.type === 'list' && (
                                    <ul className={theme === 'dark' ? 'text-white/80' : 'text-black/80'} style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', listStyleType: 'disc', paddingLeft: '24px' }}>
                                        {block.items.map((item, j) => (
                                            <li key={j} style={{ marginBottom: '12px' }}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {block.type === 'quote' && (
                                    <div className="my-12 p-8 rounded-2xl border" style={{ background: theme === 'dark' ? 'rgba(77,238,234,0.05)' : 'rgba(77,238,234,0.1)', borderColor: 'rgba(77,238,234,0.3)' }}>
                                        <p className="text-[#4deeea] mb-0" style={{ fontSize: '20px', lineHeight: '1.6', fontStyle: 'italic', fontWeight: 500 }}>
                                            {block.text}
                                        </p>
                                        <p className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '14px', marginTop: '12px', marginBottom: 0 }}>
                                            {block.author}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>


                    <div>
                        {post.benefitsHeading && post.benefitsHeading.map((block, i) => (
                            <div key={i} style={{ marginBottom: '24px' }}>
                                {block.type === 'heading' && (
                                    <h2 style={{
                                        fontSize: '32px',
                                        fontWeight: 700,
                                        marginTop: '48px',
                                        marginBottom: '16px',
                                        fontFamily: 'Space Grotesk, sans-serif'
                                    }}>
                                        {block.text}
                                    </h2>
                                )}
                            </div>
                        ))}
                    </div>


                    {/* Benefits Section (NEW — matches original styles) */}
                    {post.benefits && post.benefits.length > 0 && (

                        <section className="my-12">
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                {post.benefits.map((benefit, idx) => {
                                    // const BenefitIcon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={benefit.title + idx}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.15 }}
                                            whileHover={{ y: -6 }}
                                            className={`p-6 rounded-xl border transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-black/10 hover:border-[#4deeea]/50 shadow-lg hover:shadow-2xl'}`}
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* <div
                                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-0 shadow-lg`}
                                                    style={{
                                                        background: `linear-gradient(135deg, rgba(45,156,219,1) 0%, rgba(77,238,234,1) 100%)`,
                                                    }}
                                                >
                                                    {BenefitIcon ? <BenefitIcon size={28} className="text-white" /> : null}
                                                </div> */}
                                                <div>
                                                    <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#4deeea', fontFamily: 'Space Grotesk, sans-serif' }}>
                                                        {benefit.title}
                                                    </h4>
                                                    <p className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} style={{ fontSize: '14px', marginBottom: 0 }}>
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Author Bio */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 p-8 rounded-2xl border" style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                        <div className="flex gap-6 items-start">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(77,238,234,0.2)', border: '1px solid rgba(77,238,234,0.3)' }}>
                                <User size={32} className="text-[#4deeea]" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', fontFamily: 'Space Grotesk, sans-serif' }}>{post.author?.name}</h3>
                                <p className={theme === 'dark' ? 'text-white/70' : 'text-black/70'} style={{ fontSize: '14px', lineHeight: '1.6' }}>{post.author?.bio}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="pb-20 px-6" style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafafa' }}>
                <div className="max-w-[1400px] mx-auto">
                    <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px', fontFamily: 'Space Grotesk, sans-serif' }}>Related Articles</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {post.relatedPosts?.map((related, index) => (
                            <motion.div
                                key={related.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => onNavigate(related.link)}
                                className="group cursor-pointer rounded-2xl overflow-hidden border hover:border-[#4deeea]/50 transition-all duration-300"
                                style={{
                                    background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.8)',
                                    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', fontSize: '11px', fontWeight: 600, color: '#4deeea' }}>
                                        {related.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className={`flex items-center gap-2 mb-3 text-xs ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                                        <Calendar size={12} />
                                        <span>{related.date}</span>
                                    </div>

                                    <h3 className="group-hover:text-[#4deeea] transition-colors" style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.3', fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {related.title}
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
