import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Send, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import "./Footer.css"

export function Footer({ theme, onNavigate }) {
    const [email, setEmail] = useState('');
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        setEmail('');
    };

    const footerLinks = {
        company: [
            { label: 'About Us', value: 'about' },
            { label: 'Services', value: 'services' },
            { label: 'Products', value: 'products' },
            { label: 'Pricing', value: 'pricing' },
        ],
        resources: [
            { label: 'Blog', value: 'resources' },
            { label: 'Research', value: 'resources' },
            { label: 'News & Articles', value: 'resources' },
            { label: 'Documentation', value: 'resources' },
        ],
        support: [
            { label: 'Help Center', value: 'resources' },
            { label: 'API Status', value: 'resources' },
            { label: 'Community', value: 'resources' },
            { label: 'Contact Us', value: 'demo' },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/spicarts-ai-llp-762169344/', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/spicarts_ai/', label: 'Instagram' },
        // { icon: Github, href: '#', label: 'GitHub' },
        { icon: Youtube, href: 'https://www.youtube.com/@SpicArtsAI', label: 'YouTube' },
    ];

    return (
        <footer
            className={`${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-black/5'
                } border-t transition-colors duration-300`}
        >
            {/* Newsletter Section */}
            <div className={`border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={`text-3xl md:text-4xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                Stay Updated
                            </h3>
                            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                Get the latest news, insights, and updates from SPicArts AI delivered to your inbox.
                            </p>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleNewsletterSubmit}
                            className="flex gap-3"
                        >
                            <div className="flex-1 relative">
                                <Mail
                                    size={20}
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                        }`}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-[#4deeea]'
                                        : 'bg-white border border-black/10 text-black placeholder-gray-400 focus:border-[#4deeea] shadow-sm'
                                        } outline-none`}
                                />
                            </div>
                            <button
                                type="submit"
                                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50 transition-all duration-300 flex items-center gap-2"
                            >
                                <span className="hidden sm:inline">Subscribe</span>
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4deeea] to-[#2d9cdb] flex items-center justify-center">
                                <span className="text-white text-xl">S</span>
                            </div> */}

                            <div>
                                {/* <span className={`text-xl block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                    SPicArts AI
                                </span> */}
                                <h2>
                                    <Link className="tubelight-text" to="/" onClick={() => handleNavigate("/")} aria-label="Go to homepage">SpicArts AI</Link>
                                    {/* <h1 className="tubelight-text">Spicarts AI</h1> */}
                                </h2>
                                <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                    Voice & AI Technology
                                </span>
                            </div>
                        </div>
                        <p
                            className={`text-sm mb-6 leading-relaxed max-w-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}
                        >
                            Building intelligent voice and generative AI systems that connect people and machines
                            naturally. Pioneering the future of human-AI interaction.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target='_blank'
                                        aria-label={social.label}
                                        className={`p-3 rounded-xl transition-all duration-300 ${theme === 'dark'
                                            ? 'bg-white/5 hover:bg-[#4deeea]/20 text-gray-400 hover:text-[#4deeea] border border-white/10 hover:border-[#4deeea]/50'
                                            : 'bg-black/5 hover:bg-[#4deeea]/10 text-gray-600 hover:text-[#4deeea] border border-black/10 hover:border-[#4deeea]/50'
                                            }`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.value}>
                                    <button
                                        onClick={() => handleNavigate(link.value)}
                                        className={`text-sm transition-colors ${theme === 'dark'
                                            ? 'text-gray-400 hover:text-[#4deeea]'
                                            : 'text-gray-600 hover:text-[#4deeea]'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => handleNavigate(link.value)}
                                        className={`text-sm transition-colors ${theme === 'dark'
                                            ? 'text-gray-400 hover:text-[#4deeea]'
                                            : 'text-gray-600 hover:text-[#4deeea]'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Contact */}
                    <div>
                        <h4 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => handleNavigate(link.value)}
                                        className={`text-sm transition-colors ${theme === 'dark'
                                            ? 'text-gray-400 hover:text-[#4deeea]'
                                            : 'text-gray-600 hover:text-[#4deeea]'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 space-y-3">
                            <a
                                href="mailto:info@spicartsai.com"
                                className={`flex items-center gap-2 text-sm transition-colors ${theme === 'dark'
                                    ? 'text-gray-400 hover:text-[#4deeea]'
                                    : 'text-gray-600 hover:text-[#4deeea]'
                                    }`}
                            >
                                <Mail size={16} className="text-[#4deeea]" />
                                services@spicarts.ai
                            </a>
                            <a
                                href="tel:+15551234567"
                                className={`flex items-center gap-2 text-sm transition-colors ${theme === 'dark'
                                    ? 'text-gray-400 hover:text-[#4deeea]'
                                    : 'text-gray-600 hover:text-[#4deeea]'
                                    }`}
                            >
                                <Phone size={16} className="text-[#4deeea]" />
                                +91 8328015851

                            </a>
                            <div
                                className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                            >
                                <MapPin size={16} className="text-[#4deeea] mt-0.5" />
                                Hyderabad, Telangana, 500085.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className={`pt-8 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/5'
                        }`}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            © {currentYear} SPicArts AI LLP. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a
                                href="#"
                                className={`text-sm transition-colors ${theme === 'dark'
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className={`text-sm transition-colors ${theme === 'dark'
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className={`text-sm transition-colors ${theme === 'dark'
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
