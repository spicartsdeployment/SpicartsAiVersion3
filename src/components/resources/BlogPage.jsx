import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, TrendingUp, Search } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

function BlogPage({ theme }) {
  const onNavigate = useNavigate();
  const featuredPost = {
    title: 'The Future of AI Voice Technology: Trends and Predictions for 2025',
    excerpt: 'Explore how voice AI is transforming industries and what innovations are on the horizon for the next generation of conversational.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'AI Insights',
    date: 'Oct 20, 2025',
    readTime: '8 min read',
    author: 'Dr. Sarah Chen',
  };

  const blogPosts = [
    {
      title: 'Building Voice Assistants with Natural Language Processing',
      excerpt: 'A comprehensive guide to creating intelligent voice assistants using state-of-the-art NLP techniques.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      category: 'Tutorial',
      date: 'Oct 18, 2025',
      readTime: '12 min read',
    },
    {
      title: 'How AI Automation is Revolutionizing Manufacturing',
      excerpt: 'Discover how robotics and AI are reshaping the future of industrial automation and production.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      category: 'Robotics',
      date: 'Oct 15, 2025',
      readTime: '6 min read',
    },
    {
      title: 'Generative AI: From GPT to Custom Language Models',
      excerpt: 'Learn how to leverage large language models for your business applications and build custom AI solutions.',
      image: 'https://images.unsplash.com/photo-1655720032566-8b6d21c2c2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      category: 'AI Development',
      date: 'Oct 12, 2025',
      readTime: '10 min read',
    },
    {
      title: 'Computer Vision Applications in Real-World Scenarios',
      excerpt: 'Exploring practical use cases of vision AI in healthcare, retail, security, and beyond.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      category: 'Vision AI',
      date: 'Oct 10, 2025',
      readTime: '7 min read',
    },
    {
      title: 'IoT and Smart Homes: The Connected Future',
      excerpt: 'How IoT automation is creating seamless smart home experiences with voice control and AI.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      category: 'IoT',
      date: 'Oct 8, 2025',
      readTime: '5 min read',
    },
    {
      title: 'Quantum Machine Learning: The Next Frontier',
      excerpt: 'Understanding the intersection of quantum computing and machine learning for breakthrough AI capabilities.',
      image: 'https://images.unsplash.com/photo-1758549885423-819fd86e04f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      category: 'Research',
      date: 'Oct 5, 2025',
      readTime: '15 min read',
    },
  ];

  const categories = ['All', 'AI Insights', 'Tutorial', 'Robotics', 'AI Development', 'Vision AI', 'IoT', 'Research'];

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1
              className="mb-6"
              style={{
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: '1.1',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Blog & <span className="text-[#4deeea]">Insights</span>
            </h1>

            <p
              className={`mb-8 mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '640px',
              }}
            >
              Stay updated with the latest trends, tutorials, and insights in AI, robotics, and voice technology
            </p>

            {/* Search Bar */}
            <div className="max-w-[600px] mx-auto">
              <div
                className="flex items-center gap-3 px-6 py-4 rounded-xl border"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Search size={20} className={theme === 'dark' ? 'text-white/40' : 'text-black/40'} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="flex-1 bg-transparent outline-none"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-2.5 rounded-xl transition-all duration-200 ${index === 0
                  ? 'bg-[#4deeea] text-black'
                  : theme === 'dark'
                    ? 'border border-white/10 hover:border-[#4deeea]/50 hover:bg-white/5'
                    : 'border border-black/10 hover:border-[#4deeea]/50 hover:bg-black/5'
                  }`}
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border p-8"
            style={{
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              onClick={() => onNavigate('/resources/blog/post')}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-black"
                style={{
                  background: '#4deeea',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Featured
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="text-[#4deeea]"
                  style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-4 text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <h2
                className="mb-4 cursor-pointer hover:text-[#4deeea] transition-colors"
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {featuredPost.title}
              </h2>

              <p
                className={`mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
                style={{ fontSize: '16px', lineHeight: '1.7' }}
              >
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className={theme === 'dark' ? 'text-white/50' : 'text-black/50'} style={{ fontSize: '14px' }}>
                  By {featuredPost.author}
                </span>
                <button className="flex items-center gap-2 text-[#4deeea] hover:gap-3 transition-all">
                  <span style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                    Read Article
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate('/resources/blog/post')}
                className="group cursor-pointer rounded-2xl overflow-hidden border hover:border-[#4deeea]/50 transition-all duration-300"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="relative h-56 overflow-hidden">
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
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="mb-3 group-hover:text-[#4deeea] transition-colors"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className={`mb-4 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}
                    style={{ fontSize: '14px', lineHeight: '1.6' }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[#4deeea] group-hover:gap-3 transition-all">
                    <span style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                      Read More
                    </span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-12 overflow-hidden text-center"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
                : 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            }}
          >
            <TrendingUp size={48} className="text-[#4deeea] mx-auto mb-6" />
            <h2 style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }} className="mb-4">
              Stay Updated
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} style={{ fontSize: '16px' }}>
              Get the latest AI insights, tutorials, and updates delivered to your inbox
            </p>

            <div className="flex gap-3 max-w-[500px] mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border outline-none"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  fontSize: '15px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              />
              <button
                className="px-8 py-3 rounded-xl text-black transition-all duration-300 hover:scale-105"
                style={{
                  background: '#4deeea',
                  fontWeight: 600,
                  fontSize: '15px',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;