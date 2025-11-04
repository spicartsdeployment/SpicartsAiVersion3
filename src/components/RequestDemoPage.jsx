import { motion } from 'motion/react';
import { Mail, User, Building2, Phone, MessageSquare, Sparkles, Calendar, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export function RequestDemoPage({ theme, onNavigate }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: '',
    });



    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            console.log('Form is valid', formData);
            emailjs.
                send(
                    "service_02sm0em",
                    "template_pqr1ds9",
                    formData,
                    "QT2nZabQfeH43CO2l"
                ).then(
                    (result) => {
                        console.log('Email successfully sent!');
                        const phone = '8328015851';
                        const whatsappURL = ` https://wa.me/${phone}?text=Hi, I am ${formData.name}. My email is ${formData.email}. Company is ${formData.company}. Contact number is ${formData.phone}.Required service is ${formData.interest}. Message: ${formData.message}. `;
                        window.open(whatsappURL, "_blank");

                    },
                    (error) => {
                        console.error('Error sending email:', error);
                        alert('There was an error submitting the form. Please try again later.');
                    }
                )
            setFormData({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
            e.target.reset();


        }

        console.log('Form submitted:', formData);
        alert('Thank you! We\'ll be in touch shortly.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const features = [
        {
            icon: Sparkles,
            title: 'Live Demo',
            description: 'See our AI solutions in action with a personalized walkthrough',
        },
        {
            icon: User,
            title: 'Expert Consultation',
            description: 'Discuss your specific needs with our AI specialists',
        },
        {
            icon: Calendar,
            title: 'Flexible Scheduling',
            description: 'Choose a time that works best for your team',
        },
    ];

    const benefits = [
        'Access to all premium features',
        'Personalized implementation plan',
        'Technical architecture review',
        'ROI analysis and projections',
        'Dedicated support team',
        'Custom integration guidance',
    ];

    return (
        <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-500 page-transition`}>
            {/* Hero Section with gradient mesh */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 gradient-mesh opacity-50" />
                {/* Ambient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#4deeea]/20 to-[#2d9cdb]/20 blur-[100px]"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className={`px-6 py-3 rounded-full text-sm ${theme === 'dark' ? 'bg-[#4deeea]/10 text-[#4deeea]' : 'bg-[#4deeea]/10 text-[#2d9cdb]'
                                }`} style={{ fontWeight: 600 }}>
                                Schedule Your Demo
                            </span>
                        </motion.div>

                        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                            Experience the{' '}
                            <span className="bg-gradient-to-r from-[#4deeea] via-[#00b7c2] to-[#4deeea] text-transparent bg-clip-text">
                                Future
                            </span>
                        </h1>

                        <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Get a personalized demo and discover how SPicArts AI can transform your business with intelligent automation
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
                        {/* Left Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="lg:col-span-3"
                        >
                            <div className={`p-8 md:p-12 rounded-3xl glass-layer-2 shadow-depth-3`}>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label className={`block text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontWeight: 500 }}>
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 ${focusedField === 'name' ? 'text-[#4deeea]' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                } transition-colors duration-300`} />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 input-focus-glow ${theme === 'dark'
                                                    ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10'
                                                    : 'bg-white border border-black/10 text-black placeholder-gray-400 focus:bg-gray-50'
                                                    }`}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className={`block text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontWeight: 500 }}>
                                            Work Email *
                                        </label>
                                        <div className="relative">
                                            <Mail size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 ${focusedField === 'email' ? 'text-[#4deeea]' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                } transition-colors duration-300`} />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 input-focus-glow ${theme === 'dark'
                                                    ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10'
                                                    : 'bg-white border border-black/10 text-black placeholder-gray-400 focus:bg-gray-50'
                                                    }`}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Company & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={`block text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontWeight: 500 }}>
                                                Company *
                                            </label>
                                            <div className="relative">
                                                <Building2 size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 ${focusedField === 'company' ? 'text-[#4deeea]' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                    } transition-colors duration-300`} />
                                                <input
                                                    type="text"
                                                    name="company"
                                                    required
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('company')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 input-focus-glow ${theme === 'dark'
                                                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10'
                                                        : 'bg-white border border-black/10 text-black placeholder-gray-400 focus:bg-gray-50'
                                                        }`}
                                                    placeholder="Acme Inc."
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className={`block text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontWeight: 500 }}>
                                                Phone
                                            </label>
                                            <div className="relative">
                                                <Phone size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 ${focusedField === 'phone' ? 'text-[#4deeea]' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                    } transition-colors duration-300`} />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 input-focus-glow ${theme === 'dark'
                                                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10'
                                                        : 'bg-white border border-black/10 text-black placeholder-gray-400 focus:bg-gray-50'
                                                        }`}
                                                    placeholder="+91 999-999-9999"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interest */}
                                    <div>
                                        <label className={`block text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontWeight: 500 }}>
                                            Primary Interest *
                                        </label>
                                        <select
                                            name="interest"
                                            required
                                            value={formData.interest}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('interest')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-4 rounded-2xl transition-all duration-300 input-focus-glow ${theme === 'dark'
                                                ? 'bg-white/5 border border-white/10 text-white focus:bg-white/10'
                                                : 'bg-white border border-black/10 text-black focus:bg-gray-50'
                                                }`}

                                            style={theme !== 'dark' ? { color: 'black' } : {}}

                                        >
                                            <option value="" style={{ color: "black" }}>Select an option</option>
                                            <option value="voice-ai" style={{ color: "black" }}>Voice AI</option>
                                            <option value="ai-agents" style={{ color: "black" }}>AI Agents</option>
                                            <option value="generative-ai" style={{ color: "black" }}>Generative AI</option>
                                            <option value="vision-ai" style={{ color: "black" }}>Vision AI</option>
                                            <option value="robotics" style={{ color: "black" }}>Robotics & Automation</option>
                                            <option value="iot" style={{ color: "black" }}>IoT Solutions</option>
                                            <option value="custom" style={{ color: "black" }}>Custom Development</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className={`block text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontWeight: 500 }}>
                                            Tell us about your project
                                        </label>
                                        <div className="relative">
                                            <MessageSquare size={20} className={`absolute left-4 top-4 ${focusedField === 'message' ? 'text-[#4deeea]' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                } transition-colors duration-300`} />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                rows={4}
                                                className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 resize-none input-focus-glow ${theme === 'dark'
                                                    ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10'
                                                    : 'bg-white border border-black/10 text-black placeholder-gray-400 focus:bg-gray-50'
                                                    }`}
                                                placeholder="Share details about your use case, team size, and goals..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#4deeea] via-[#00b7c2] to-[#2d9cdb] text-white transition-all duration-300 button-physics shadow-depth-glow flex items-center justify-center gap-3"
                                        style={{ fontWeight: 600 }}
                                    >
                                        <span className="text-lg">Request Demo</span>
                                        <ArrowRight size={20} />
                                    </motion.button>

                                    <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                                        By submitting this form, you agree to our Privacy Policy and Terms of Service
                                    </p>
                                </form>
                            </div>
                        </motion.div>

                        {/* Right Column - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* What to Expect */}
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                                        whileHover={{ x: 4 }}
                                        className={`p-6 rounded-2xl glass-layer-1 transition-all duration-300 shadow-depth-1 hover:shadow-depth-2`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4deeea] to-[#2d9cdb] flex items-center justify-center flex-shrink-0 shadow-depth-glow">
                                                <Icon size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className={`text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={{ fontWeight: 600 }}>
                                                    {feature.title}
                                                </h3>
                                                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
                                className={`p-6 rounded-2xl glass-layer-1 shadow-depth-1`}
                            >
                                <h3 className={`text-lg mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={{ fontWeight: 600 }}>
                                    What You'll Get
                                </h3>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <motion.li
                                            key={benefit}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 + index * 0.05 }}
                                            className="flex items-center gap-3"
                                        >
                                            <Check size={18} className="text-[#4deeea] flex-shrink-0" />
                                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {benefit}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}