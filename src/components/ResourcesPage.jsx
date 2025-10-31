import { motion } from 'motion/react';
import { BookOpen, Newspaper, Atom, ArrowRight, Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function ResourcesPage({ theme, onNavigate }) {
    const blogs = [
        {
            title: 'The Future of Voice AI in Customer Service',
            excerpt: 'Exploring how voice AI is transforming customer interactions and support systems across industries.',
            category: 'Voice AI',
            date: 'Oct 20, 2025',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1720962158812-d16549f1e5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMHdhdmVmb3JtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMzQ1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Building Intelligent AI Agents: A Comprehensive Guide',
            excerpt: 'Learn how to create AI agents that understand context, take actions, and provide value to users.',
            category: 'AI Development',
            date: 'Oct 15, 2025',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcm9ib3QlMjBBSXxlbnwxfHx8fDE3NjEyMzQ1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Quantum Machine Learning: The Next Frontier',
            excerpt: 'An introduction to quantum computing applications in machine learning and AI research.',
            category: 'Quantum ML',
            date: 'Oct 10, 2025',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1641926489586-dd5dae881415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwY2lyY3VpdHxlbnwxfHx8fDE3NjEyMzQ1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Smart Home Automation with Voice Control',
            excerpt: 'Discover how voice-controlled automation is making homes smarter and more efficient.',
            category: 'Smart Home',
            date: 'Oct 5, 2025',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2MTIzMzEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
    ];

    const news = [
        {
            title: 'SPicArts AI Secures Series A Funding',
            excerpt: 'Leading venture capital firms invest in our vision for the future of AI technology.',
            date: 'Oct 18, 2025',
            source: 'TechCrunch',
        },
        {
            title: 'New Partnership with Global Tech Leaders',
            excerpt: 'Collaborating with industry giants to bring AI solutions to enterprise customers.',
            date: 'Oct 12, 2025',
            source: 'Forbes',
        },
        {
            title: 'Award-Winning Voice AI Technology',
            excerpt: 'SPicArts AI receives recognition for innovation in voice synthesis technology.',
            date: 'Oct 1, 2025',
            source: 'AI Magazine',
        },
    ];

    const research = [
        {
            title: 'Quantum-Enhanced Neural Networks',
            description: 'Investigating the application of quantum computing to enhance neural network training and inference.',
            status: 'Ongoing',
            team: 'Quantum AI Lab',
        },
        {
            title: 'Emotion-Aware Voice Synthesis',
            description: 'Developing voice AI that can detect and express human emotions naturally.',
            status: 'Published',
            team: 'Voice AI Research',
        },
        {
            title: 'Context-Preserving AI Agents',
            description: 'Creating AI agents that maintain long-term context across multiple interactions.',
            status: 'In Review',
            team: 'Agent Development',
        },
    ];

    const ArticleCard = ({ article, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className={`group rounded-3xl overflow-hidden transition-all duration-300 ${theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
                    : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-2xl'
                }`}
        >
            <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white text-sm">
                        {article.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className={`flex items-center gap-4 text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                    </div>
                </div>

                <h3 className={`text-xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {article.title}
                </h3>

                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {article.excerpt}
                </p>

                <button className={`flex items-center gap-2 transition-colors ${theme === 'dark'
                        ? 'text-[#4deeea] hover:text-white'
                        : 'text-[#4deeea] hover:text-[#2d9cdb]'
                    }`}>
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );

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
                        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#4deeea]/20 blur-3xl"
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
                                📚 Knowledge Hub
                            </span>
                        </div>

                        <h1 className={`text-5xl md:text-7xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Resources & <span className="bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-transparent bg-clip-text">Research</span>
                        </h1>

                        <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Stay updated with the latest insights, research, and news from the world of AI
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Tabs */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="blogs" className="w-full">
                        <TabsList className={`grid w-full max-w-md mx-auto grid-cols-3 mb-12 p-2 rounded-2xl ${theme === 'dark'
                                ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                                : 'bg-black/5 backdrop-blur-xl border border-black/10'
                            }`}>
                            <TabsTrigger value="blogs" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4deeea] data-[state=active]:to-[#2d9cdb] data-[state=active]:text-white">
                                <BookOpen size={16} className="mr-2" />
                                Blogs
                            </TabsTrigger>
                            <TabsTrigger value="news" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4deeea] data-[state=active]:to-[#2d9cdb] data-[state=active]:text-white">
                                <Newspaper size={16} className="mr-2" />
                                News
                            </TabsTrigger>
                            <TabsTrigger value="research" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4deeea] data-[state=active]:to-[#2d9cdb] data-[state=active]:text-white">
                                <Atom size={16} className="mr-2" />
                                Research
                            </TabsTrigger>
                        </TabsList>

                        {/* Blogs Tab */}
                        <TabsContent value="blogs">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {blogs.map((article, index) => (
                                    <ArticleCard key={article.title} article={article} index={index} />
                                ))}
                            </div>
                        </TabsContent>

                        {/* News Tab */}
                        <TabsContent value="news">
                            <div className="max-w-4xl mx-auto space-y-6">
                                {news.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className={`p-6 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
                                                : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-xl'
                                            }`}
                                    >
                                        <div className={`flex items-center gap-4 text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                            <span>{item.date}</span>
                                            <span>•</span>
                                            <span className="text-[#4deeea]">{item.source}</span>
                                        </div>
                                        <h3 className={`text-2xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {item.excerpt}
                                        </p>
                                        <button className={`flex items-center gap-2 transition-colors ${theme === 'dark'
                                                ? 'text-[#4deeea] hover:text-white'
                                                : 'text-[#4deeea] hover:text-[#2d9cdb]'
                                            }`}>
                                            <span>Read Full Article</span>
                                            <ArrowRight size={16} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Research Tab */}
                        <TabsContent value="research">
                            {/* Quantum ML Featured Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`p-12 rounded-3xl mb-12 ${theme === 'dark'
                                        ? 'bg-gradient-to-br from-[#4deeea]/10 to-[#2d9cdb]/10 backdrop-blur-xl border border-[#4deeea]/20'
                                        : 'bg-gradient-to-br from-[#4deeea]/5 to-[#2d9cdb]/5 border border-[#4deeea]/20'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4deeea] to-[#2d9cdb] flex items-center justify-center">
                                        <Atom size={32} className="text-white" />
                                    </div>
                                    <div>
                                        <h2 className={`text-3xl md:text-4xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            Quantum Machine Learning
                                        </h2>
                                        <p className="text-[#4deeea]">Advanced Research Division</p>
                                    </div>
                                </div>
                                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Our quantum machine learning research explores the intersection of quantum computing and artificial intelligence, pushing the boundaries of what's possible in AI.
                                </p>
                                <button
                                    onClick={() => onNavigate('demo')}
                                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#4deeea] to-[#2d9cdb] text-white hover:shadow-2xl hover:shadow-[#4deeea]/50 transition-all duration-300"
                                >
                                    Learn More About Our Research
                                </button>
                            </motion.div>

                            {/* Research Projects */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {research.map((project, index) => (
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className={`p-6 rounded-2xl ${theme === 'dark'
                                                ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                                                : 'bg-white backdrop-blur-xl border border-black/10 shadow-lg'
                                            }`}
                                    >
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${project.status === 'Published'
                                                ? 'bg-green-500/20 text-green-400'
                                                : project.status === 'Ongoing'
                                                    ? 'bg-blue-500/20 text-blue-400'
                                                    : 'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                            {project.status}
                                        </div>
                                        <h3 className={`text-xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {project.title}
                                        </h3>
                                        <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {project.description}
                                        </p>
                                        <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                                            Team: {project.team}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
}