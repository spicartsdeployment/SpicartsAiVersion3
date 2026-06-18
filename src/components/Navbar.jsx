import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  Bot,
  Mic2,
  Sparkles,
  Eye,
  Atom,
  Zap,
  Wifi,
  Cpu,
  Globe,
  Smartphone,
  Code,
  FileText,
  Newspaper,
  BookOpen,
  Phone,
  Monitor,
  Shield,
  Cloud,
  Lock,
  Server,
  Search,
  UserCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/images/logo-white.png';
// import { div, img } from 'motion/react-client';

export function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeProductsSubmenu, setActiveProductsSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services categories with nested items
  const servicesCategories = [
    {
      label: 'AI',
      items: [
        { icon: Bot, label: 'Agentic Kit (AI Agents)', description: 'Intelligent conversational agents', path: '/ai-agents' },
        { icon: Mic2, label: 'Voice AI', description: 'Natural voice synthesis & recognition', path: '/voice-ai' },
        { icon: Sparkles, label: 'Generative AI & LLM\'s', description: 'Large language models & generation', path: '/generative-ai' },
        { icon: Eye, label: 'Vision AI', description: 'Computer vision & image recognition', path: '/vision-ai' },
        { icon: Atom, label: 'Custom AI', description: 'Tailored AI solutions', path: '/custom-ai' },
      ],
    },
    {
      label: 'Robotics',
      items: [
        { icon: Zap, label: 'AI Automation (Home & Industry)', description: 'Smart automation solutions', path: '/automation' },
        { icon: Wifi, label: 'IoT', description: 'Connected devices & IoT ecosystems', path: '/iot' },
        { icon: Cpu, label: 'Custom Robotics', description: 'Bespoke robotics systems', path: '/custom-robotics' },
      ],
    },
    {
      label: 'Development',
      items: [
        { icon: Globe, label: 'Web App Development', description: 'Modern web applications', path: '/web-development' },
        { icon: Smartphone, label: 'Mobile App Development', description: 'iOS & Android apps', path: '/mobile-development' },
        { icon: Monitor, label: 'Desktop App Development', description: 'Windows, macOS & Linux apps', path: '/desktop-development' },
      ],
    },
    {
      label: 'Cybersecurity',
      items: [
        {
          icon: Shield,
          label: 'Application Security',
          description: 'Secure web and mobile applications',
          path: '/application-security',
        },
        {
          icon: Cloud,
          label: 'Cloud Security',
          description: 'Protect cloud infrastructure and services',
          path: '/cloud-security',
        },
        {
          icon: Lock,
          label: 'Penetration Testing',
          description: 'Identify and remediate security vulnerabilities',
          path: '/penetration-testing',
        },
      ],
    }
  ];

  // Products - Direct items (no categories)
  const productsItems = [
    {
      icon: Mic2, label: 'Voice Assistant Device', description: 'AI-powered smart speaker', path: '/voice-assistant',
      submenu: [
        {
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        }
      ]
    },
    {
      icon: Phone, label: 'Voice Call Agent', description: 'Business call automation', path: '/call-agent',
      submenu: [
        {
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        }
      ]
    },
    {
      icon: Code, label: 'Developer Platform', description: 'Complete API suite', path: '/developer-platform',
      submenu: [
        {
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        }
      ]
    },
  ];

  // Resources - Direct items with one having submenu
  const resourcesItems = [
    // {
    //   icon: FileText, label: 'Documentation', description: 'Technical guides & API docs', path: '/documentation',
    //   submenu: [
    //     {
    //       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    //     }

    //   ]

    // },
    {
      icon: BookOpen, label: 'Case Studies', description: 'Customer success stories', path: '/case-studies',
      submenu: [
        {
          image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        }

      ]
    },
    {
      icon: Newspaper, label: 'Blog', description: 'Latest news and insights', path: '/blog',
      submenu: [
        {
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        }

      ]
    },
    {
      icon: Atom,
      label: 'Research & Development',
      description: 'Cutting-edge innovations',
      path: '/research',
      submenu: [
        { icon: Sparkles, label: 'Quantum ML Research', description: 'Quantum computing research', path: '/quantum-ml' },
      ],
    },
  ];

  const navigatetoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleItemClick = (path) => {
    navigate(path);
    navigatetoTop();
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };




  const ServicesDropdown = () => {
    return (
      <div
        className="absolute left-0 pt-2 z-50"
        style={{ top: '100%' }}
        onMouseEnter={() => setActiveDropdown('services')}
        onMouseLeave={() => {
          setActiveDropdown(null);
          setActiveSubmenu(null);
        }}
      >
        <div
          className="rounded-xl border overflow-visible flex"
          style={{
            background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
            borderColor:
              theme === 'dark'
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.08)',
            boxShadow:
              theme === 'dark'
                ? '0 10px 40px rgba(0, 0, 0, 0.6)'
                : '0 10px 40px rgba(0, 0, 0, 0.15)',
            minWidth: '540px',
            minHeight: '310px',
          }}
        >
          {/* LEFT SIDE: categories */}
          <div
            className="w-1/3 border-r flex flex-col gap-1 py-4 px-2 bg-gradient-to-b from-[#4deeea]/10 to-transparent"
            style={{
              borderColor:
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.08)',
              minHeight: '30px',
              borderRadius: '12px 0 0 12px',
            }}
          >
            {servicesCategories.map((category) => (
              <button
                key={category.label}
                onMouseEnter={() => setActiveSubmenu(category.label)}
                className={`w-full text-left px-4 py-3 flex items-center justify-between rounded-lg transition-all duration-100
                ${activeSubmenu === category.label
                    ? 'text-[#4deeea] bg-[#4deeea]/10 font-bold shadow-md'
                    : theme === 'dark'
                      ? 'text-white/80 hover:text-[#4deeea] hover:bg-white/[0.04]'
                      : 'text-black/80 hover:text-[#4deeea] hover:bg-black/[0.04]'
                  }`}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '15px',
                }}
              >
                <span>{category.label}</span>
                <ChevronRight
                  size={16}
                  className={`transition-colors ${activeSubmenu === category.label
                    ? 'text-[#4deeea]'
                    : theme === 'dark'
                      ? 'text-white/40'
                      : 'text-black/40'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: dynamic content (no flicker, no animation) */}
          <div className="flex-1 relative px-0 py-0">
            <div
              className="rounded-lg border bg-gradient-to-br from-[#4deeea]/5 to-transparent shadow-lg py-2 px-3"
              style={{
                borderColor:
                  theme === 'dark'
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(0,0,0,0.08)',
                minHeight: '310px',
                width: '100%',
              }}
            >
              {(servicesCategories.find(cat => cat.label === activeSubmenu) ||
                servicesCategories[0]  // fallback to first category (AI)
              ).items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleItemClick(item.path)}
                    className={`w-full text-left px-5 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
                    ${theme === 'dark'
                        ? 'hover:bg-white/[0.04]'
                        : 'hover:bg-black/[0.04]'
                      }`}
                  >
                    <div
                      className={`w-9 h-9 rounded px-2 flex items-center justify-center flex-shrink-0
                      ${theme === 'dark'
                          ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
                          : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
                        }`}
                    >
                      <Icon
                        size={18}
                        className={`transition-colors duration-150
                        ${theme === 'dark'
                            ? 'text-white/60 group-hover:text-[#4deeea]'
                            : 'text-black/60 group-hover:text-[#4deeea]'
                          }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`transition-colors duration-150
                        ${theme === 'dark'
                            ? 'text-white/90 group-hover:text-[#4deeea]'
                            : 'text-black/90 group-hover:text-[#4deeea]'
                          }`}
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          fontFamily: 'Space Grotesk, sans-serif',
                          marginBottom: '2px',
                        }}
                      >
                        {item.label}
                      </div>
                      <p
                        className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
                        style={{
                          fontSize: '13px',
                          lineHeight: '1.5',
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };





  const DirectDropdown = ({ items, type }) => {
    return (
      <div
        className="absolute left-0 pt-2 z-50"
        style={{ top: '100%' }}
        onMouseEnter={() => setActiveDropdown(type)}
        onMouseLeave={() => {
          setActiveDropdown(null);
          setActiveSubmenu(null);
        }}
      >
        <div
          className="rounded-xl border overflow-visible flex"
          style={{
            background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
            borderColor:
              theme === 'dark'
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.08)',
            boxShadow:
              theme === 'dark'
                ? '0 10px 40px rgba(0, 0, 0, 0.6)'
                : '0 10px 40px rgba(0, 0, 0, 0.15)',
            minWidth: '580px',
            maxHeight: '230px',
          }}
        >
          {/* LEFT SIDE: main items */}
          <div
            className="w-1/2 border-r flex flex-col gap-1 py-2 px-2 bg-gradient-to-b from-[#4deeea]/10 to-transparent"
            style={{
              borderColor:
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.08)',
              minHeight: '190px',
              borderRadius: '12px 0 0 12px',
            }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              return (
                <button
                  key={item.path}
                  onMouseEnter={() => setActiveSubmenu(item.label)}
                  onClick={() => handleItemClick(item.path)}
                  className={`w-full text-left px-3 py-2 flex gap-2 items-center justify-between group transition-all duration-150 rounded-lg
                  ${activeSubmenu === item.label
                      ? 'text-[#4deeea] bg-[#4deeea]/10 font-semibold shadow-md'
                      : theme === 'dark'
                        ? 'text-white/80 hover:text-[#4deeea] hover:bg-white/[0.04]'
                        : 'text-black/80 hover:text-[#4deeea] hover:bg-black/[0.04]'
                    }`}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '14.5px',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-150
                      ${theme === 'dark'
                          ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
                          : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
                        }`}
                    >
                      <Icon
                        size={14}
                        className={`transition-colors duration-150
                        ${theme === 'dark'
                            ? 'text-white/60 group-hover:text-[#4deeea]'
                            : 'text-black/60 group-hover:text-[#4deeea]'
                          }`}
                      />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  {hasSubmenu && (
                    <ChevronRight
                      size={14}
                      className={`transition-colors ${activeSubmenu === item.label
                        ? 'text-[#4deeea]'
                        : theme === 'dark'
                          ? 'text-white/40'
                          : 'text-black/40'
                        }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: show image or submenu */}
          <div
            className="flex-1 relative px-2 py-2 bg-gradient-to-br from-[#4deeea]/5 to-transparent flex"
            style={{
              minHeight: '190px',
              borderRadius: '0 12px 12px 0',
            }}
          >
            {(() => {
              const activeItem = items.find(it => it.label === activeSubmenu);
              // If the item has an image, show it
              if (activeItem && activeItem.submenu && activeItem.submenu[0]?.image) {
                return (
                  <img
                    src={activeItem.submenu[0].image}
                    alt={activeItem.label}
                    className="rounded-r-xl object-cover w-full max-h-[200px] max-w-[320px] shadow"
                    style={{
                      background: '#eee', borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem',
                      height: '200px',
                    }}
                  />
                );
              }
              // If the item is Research & Development, show its submenu as before
              if (activeItem && activeItem.submenu && activeItem.submenu[0]?.label) {
                return activeItem.submenu.map((subitem) => {
                  const SubIcon = subitem.icon;
                  return (
                    <button
                      key={subitem.path}
                      onClick={() => handleItemClick(subitem.path)}
                      className={`w-full text-left px-5 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
                      ${theme === 'dark'
                          ? 'hover:bg-white/[0.04]'
                          : 'hover:bg-black/[0.04]'
                        }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg px-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
                        ${theme === 'dark'
                            ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
                            : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
                          }`}
                      >
                        <SubIcon
                          size={18}
                          className={`transition-colors duration-150
                          ${theme === 'dark'
                              ? 'text-white/60 group-hover:text-[#4deeea]'
                              : 'text-black/60 group-hover:text-[#4deeea]'
                            }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`transition-colors duration-150
                          ${theme === 'dark'
                              ? 'text-white/90 group-hover:text-[#4deeea]'
                              : 'text-black/90 group-hover:text-[#4deeea]'
                            }`}
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            fontFamily: 'Space Grotesk, sans-serif',
                            marginBottom: '2px',
                          }}
                        >
                          {subitem.label}
                        </div>
                        <p
                          className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
                          style={{
                            fontSize: '12px',
                            lineHeight: '1.5',
                          }}
                        >
                          {subitem.description}
                        </p>
                      </div>
                    </button>
                  );
                });
              }
              // Default fallback
              return null;
            })()}
          </div>
        </div>
      </div>
    );
  };


  const ProductsDropdown = ({ items, type }) => {

    return (
      <div
        className="absolute left-0 pt-2 z-50"
        style={{ top: '100%' }}
        onMouseEnter={() => setActiveDropdown(type)}
        onMouseLeave={() => {
          setActiveDropdown(null);
          setActiveProductsSubmenu(null);
        }}
      >
        <div
          className="rounded-xl border overflow-visible flex"
          style={{
            background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
            borderColor:
              theme === 'dark'
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.08)',
            boxShadow:
              theme === 'dark'
                ? '0 10px 40px rgba(0, 0, 0, 0.6)'
                : '0 10px 40px rgba(0, 0, 0, 0.15)',
            minWidth: '580px',
            minHeight: '200px',
          }}
        >
          {/* LEFT SIDE: main items */}
          <div
            className="w-1/2 border-r flex flex-col gap-1 py-4 px-2 bg-gradient-to-b from-[#4deeea]/10 to-transparent"
            style={{
              borderColor:
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.08)',
              minHeight: '200px',
              borderRadius: '12px 0 0 12px',
            }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              return (
                <button
                  key={item.path}
                  onMouseEnter={() => setActiveProductsSubmenu(item.label)}
                  onClick={() => handleItemClick(item.path)}
                  className={`w-full text-left px-3 py-2 flex gap-2 items-center justify-between group transition-all duration-150 rounded-lg
                  ${activeProductsSubmenu === item.label
                      ? 'text-[#4deeea] bg-[#4deeea]/10 font-semibold shadow-md'
                      : theme === 'dark'
                        ? 'text-white/80 hover:text-[#4deeea] hover:bg-white/[0.04]'
                        : 'text-black/80 hover:text-[#4deeea] hover:bg-black/[0.04]'
                    }`}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '14.5px',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-150
                      ${theme === 'dark'
                          ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
                          : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
                        }`}
                    >
                      <Icon
                        size={14}
                        className={`transition-colors duration-150
                        ${theme === 'dark'
                            ? 'text-white/60 group-hover:text-[#4deeea]'
                            : 'text-black/60 group-hover:text-[#4deeea]'
                          }`}
                      />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  {hasSubmenu && (
                    <ChevronRight
                      size={14}
                      className={`transition-colors ${activeProductsSubmenu === item.label
                        ? 'text-[#4deeea]'
                        : theme === 'dark'
                          ? 'text-white/40'
                          : 'text-black/40'
                        }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: show image or submenu */}
          <div
            className="flex-1 relative px-2 py-2 bg-gradient-to-br from-[#4deeea]/5 to-transparent flex"
            style={{
              minHeight: '200px',
              borderRadius: '0 12px 12px 0',
            }}
          >
            {(() => {
              const activeItem = items.find(it => it.label === activeProductsSubmenu);
              // If the item has an image, show it
              if (activeItem && activeItem.submenu && activeItem.submenu[0]?.image) {
                return (
                  <img
                    src={activeItem.submenu[0].image}
                    alt={activeItem.label}
                    className="rounded-r-xl object-cover w-full max-h-[180px] max-w-[320px] shadow"
                    style={{
                      background: '#eee', borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem',
                      height: '200px',
                    }}
                  />
                );
              }
              // If the item is Research & Development, show its submenu as before
              if (activeItem && activeItem.submenu && activeItem.submenu[0]?.label) {
                return activeItem.submenu.map((subitem) => {
                  const SubIcon = subitem.icon;
                  return (
                    <button
                      key={subitem.path}
                      onClick={() => handleItemClick(subitem.path)}
                      className={`w-full text-left px-5 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
                      ${theme === 'dark'
                          ? 'hover:bg-white/[0.04]'
                          : 'hover:bg-black/[0.04]'
                        }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg px-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
                        ${theme === 'dark'
                            ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
                            : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
                          }`}
                      >
                        <SubIcon
                          size={18}
                          className={`transition-colors duration-150
                          ${theme === 'dark'
                              ? 'text-white/60 group-hover:text-[#4deeea]'
                              : 'text-black/60 group-hover:text-[#4deeea]'
                            }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`transition-colors duration-150
                          ${theme === 'dark'
                              ? 'text-white/90 group-hover:text-[#4deeea]'
                              : 'text-black/90 group-hover:text-[#4deeea]'
                            }`}
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            fontFamily: 'Space Grotesk, sans-serif',
                            marginBottom: '2px',
                          }}
                        >
                          {subitem.label}
                        </div>
                        <p
                          className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
                          style={{
                            fontSize: '12px',
                            lineHeight: '1.5',
                          }}
                        >
                          {subitem.description}
                        </p>
                      </div>
                    </button>
                  );
                });
              }
              // Default fallback
              return null;
            })()}
          </div>
        </div>
      </div>
    );
  };




  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? (theme === 'dark' ? 'rgba(0, 0, 0, 0.98)' : 'rgba(255, 255, 255, 0.98)')
          : (theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'),
        backdropFilter: 'blur(20px)',
        borderBottom: theme === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid rgba(0, 0, 0, 0.08)',
        height: scrolled ? '64px' : '72px',
        transition: 'height 0.3s ease, background 0.3s ease',
      }}
    >
      <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center group"
            onClick={() => handleItemClick('/')}
            style={{ marginLeft: "-80px" }}
          >
            <div
              className="relative transition-all duration-300 hover:scale-105"
              style={{
                width: '240px',
                height: '64px',
              }}
            >
              <img
                src={logoImage}
                alt="SPicArts AI Logo"
                className="w-full h-full object-contain"
                style={{
                  filter: theme === 'dark' ? 'brightness(1.1)' : 'brightness(1)',
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('services');
                if (!activeSubmenu) setActiveSubmenu("AI");
              }}
            // onMouseLeave={() => {
            //   setActiveDropdown(null);
            //   setActiveSubmenu(null);
            // }}
            >
              <button
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${activeDropdown === 'services'
                  ? 'text-[#4deeea]'
                  : theme === 'dark'
                    ? 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                    : 'text-black/80 hover:text-black hover:bg-black/[0.05]'
                  }`}
                style={{
                  fontWeight: 500,
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '15px',
                }}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && <ServicesDropdown />}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('products');
                if (!activeProductsSubmenu) setActiveProductsSubmenu(productsItems[0].label);
                //setActiveSubmenu(null);
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveProductsSubmenu(null);
              }}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${activeDropdown === 'products'
                  ? 'text-[#4deeea]'
                  : theme === 'dark'
                    ? 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                    : 'text-black/80 hover:text-black hover:bg-black/[0.05]'
                  }`}
                style={{
                  fontWeight: 500,
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '15px',
                }}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && <ProductsDropdown items={productsItems} type="products" />}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('resources');
                if (!activeSubmenu) setActiveSubmenu(resourcesItems[0].label);
                // setActiveSubmenu(null);
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubmenu(null);
              }}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${activeDropdown === 'resources'
                  ? 'text-[#4deeea]'
                  : theme === 'dark'
                    ? 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                    : 'text-black/80 hover:text-black hover:bg-black/[0.05]'
                  }`}
                style={{
                  fontWeight: 500,
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '15px',
                }}
              >
                <span>Resources</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && <DirectDropdown items={resourcesItems} type="resources" />}
              </AnimatePresence>
            </div>

            {/* Regular nav items */}
            {/* <button
              onClick={() => handleItemClick('/pricing')}
              className={`px-3 py-2 rounded-lg transition-colors duration-200 ${theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                : 'text-black/80 hover:text-black hover:bg-black/[0.05]'
                }`}
              style={{
                fontWeight: 500,
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '15px',
              }}
            >
              Pricing
            </button> */}

            <button
              onClick={() => handleItemClick('/about')}
              className={`px-3 py-2 rounded-lg transition-colors duration-200 ${theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                : 'text-black/80 hover:text-black hover:bg-black/[0.05]'
                }`}
              style={{
                fontWeight: 500,
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '15px',
              }}
            >
              About
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${theme === 'dark'
                ? 'hover:bg-white/[0.05] text-white/80 hover:text-white'
                : 'hover:bg-black/[0.05] text-black/80 hover:text-black'
                }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            {/* <button
              onClick={() => handleItemClick('/login')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                : 'text-black/80 hover:text-black hover:bg-black/[0.05]'
                }`}
              style={{
                fontWeight: 500,
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '15px',
              }}
            >
              Login
            </button> */}

            <button
              onClick={() => handleItemClick('/demo')}
              className="px-5 py-2 rounded-lg text-black hover:scale-105 transition-transform duration-200"
              style={{
                fontWeight: 600,
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '15px',
                background: '#4deeea',
              }}
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={theme === 'dark' ? 'text-white' : 'text-black'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
              borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {/* Services */}
              <div className="mb-4">
                <div
                  className={` w-full flex items-center justify-between px-3 py-2 mb-1 rounded-lg transistion-colors duration-200
                     ${theme === 'dark' ? 'text-white/90 hover:text-[#4deeea] hover:bg-white/[0.04]' : 'text-black/90 hover:text-[#4deeea] hover:bg-black/[0.04]'}`}
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'Space Grotesk, sans-serif',
                    // textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                  onClick={() => setActiveMobileSection(activeMobileSection === "services" ? null : "services")}
                >
                  Services
                  <ChevronDown size={14} className={activeMobileSection === 'services' ? 'rotate-180' : ''} />
                </div>
                {activeMobileSection === "services" && (<>
                  {servicesCategories.map((category) => (
                    <div key={category.label} className="mb-3">
                      <div
                        className={`px-3 py-1 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          fontFamily: 'Space Grotesk, sans-serif',
                        }}
                      >
                        {category.label}
                      </div>
                      <div className="space-y-0.5">
                        {category.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.path}
                              onClick={() => handleItemClick(item.path)}
                              className={`w-full text-left px-3 py-2 rounded-lg hover:text-[#4deeea] flex items-center gap-3 ${theme === 'dark'
                                ? 'text-white/70 hover:bg-white/[0.04]'
                                : 'text-black/70 hover:bg-black/[0.04]'
                                }`}
                            >
                              <Icon size={14} className="text-[#4deeea]" />
                              <span className="text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                {item.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </>)}
              </div>

              {/* Products */}
              <div className="mb-4">
                <div
                  className={` w-full flex items-center justify-between px-3 py-2 mb-1 rounded-lg transistion-colors duration-200
                     ${theme === 'dark' ? 'text-white/90 hover:text-[#4deeea] hover:bg-white/[0.04]' : 'text-black/90 hover:text-[#4deeea] hover:bg-black/[0.04]'}`}

                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'Space Grotesk, sans-serif',
                    // textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                  onClick={() => setActiveMobileSection(activeMobileSection === "products" ? null : "products")}
                >
                  Products
                  <ChevronDown size={14} className={activeMobileSection === 'products' ? 'rotate-180' : ''} />
                </div>
                <div className="space-y-0.5">
                  {activeMobileSection === "products" && (
                    <>
                      {productsItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.path}
                            onClick={() => handleItemClick(item.path)}
                            className={`w-full text-left px-3 py-2 rounded-lg hover:text-[#4deeea] flex items-center gap-3 ${theme === 'dark'
                              ? 'text-white/70 hover:bg-white/[0.04]'
                              : 'text-black/70 hover:bg-black/[0.04]'
                              }`}
                          >
                            <Icon size={14} className="text-[#4deeea]" />
                            <span className="text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </>)}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-4">
                <div
                  className={` w-full flex items-center justify-between px-3 py-2 mb-1 rounded-lg transistion-colors duration-200
                     ${theme === 'dark' ? 'text-white/90 hover:text-[#4deeea] hover:bg-white/[0.04]' : 'text-black/90 hover:text-[#4deeea] hover:bg-black/[0.04]'}`}

                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'Space Grotesk, sans-serif',
                    // textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                  onClick={() => setActiveMobileSection(activeMobileSection === "resources" ? null : "resources")}
                >
                  Resources
                  <ChevronDown size={14} className={activeMobileSection === 'resources' ? 'rotate-180' : ''} />
                </div>
                <div className="space-y-0.5">
                  {activeMobileSection === "resources" && (<>
                    {resourcesItems.map((item) => {
                      const Icon = item.icon;
                      const hasSubmenu = item.submenu && item.submenu.length > 0;

                      return (
                        <div key={item.path}>
                          <button
                            onClick={() => hasSubmenu && handleItemClick(item.path)}
                            className={`w-full text-left px-3 py-2 rounded-lg hover:text-[#4deeea] flex items-center gap-3 ${theme === 'dark'
                              ? 'text-white/70 hover:bg-white/[0.04]'
                              : 'text-black/70 hover:bg-black/[0.04]'
                              }`}
                          >
                            <Icon size={14} className="text-[#4deeea]" />
                            <span className="text-sm flex-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {item.label}
                            </span>
                          </button>

                          {/* Submenu for Research & Development */}
                          {hasSubmenu && item.submenu && item.submenu.map((subitem, idx) => {
                            if (subitem.icon && subitem.label && subitem.path) {
                              const SubIcon = subitem.icon;
                              return (
                                <button
                                  key={subitem.path}
                                  onClick={() => handleItemClick(subitem.path)}
                                  className={`w-full text-left px-3 py-2 rounded-lg hover:text-[#4deeea] flex items-center gap-3 ml-6 ${theme === 'dark'
                                    ? 'text-white/60 hover:bg-white/[0.04]'
                                    : 'text-black/60 hover:bg-black/[0.04]'
                                    }`}
                                >
                                  <SubIcon size={12} className="text-[#4deeea]" />
                                  <span className="text-xs" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {subitem.label}
                                  </span>
                                </button>
                              );
                            }
                          })}
                        </div>
                      );
                    })}
                  </>)}
                </div>
              </div>

              {/* Other nav items */}
              {['Pricing', 'About'].map((item) => (
                <div className='mb-4' key={item}>
                  <button

                    onClick={() => handleItemClick(`/${item.toLowerCase()}`)}
                    className={`w-full px-3 py-2 rounded-lg text-left hover:text-[#4deeea] ${theme === 'dark'
                      ? 'text-white/90 hover:bg-white/[0.04]'
                      : 'text-black/90 hover:bg-black/[0.04]'
                      }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {item}
                  </button>
                </div>
              ))}

              <div className="pt-3 space-y-2 border-t mt-2" style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
              }}>
                {/* <button
                  onClick={() => handleItemClick('/login')}
                  className={`w-full px-3 py-2 rounded-lg text-left ${theme === 'dark'
                    ? 'text-white/90 hover:bg-white/[0.04]'
                    : 'text-black/90 hover:bg-black/[0.04]'
                    }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  Login
                </button> */}
                <button
                  onClick={() => handleItemClick('/demo')}
                  className="w-full px-3 py-2 rounded-lg text-black"
                  style={{
                    background: '#4deeea',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}