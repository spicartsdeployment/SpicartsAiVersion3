import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, ChevronRight, Bot, Mic2, Sparkles, Eye, Atom, Zap, Wifi, Cpu, Globe, Smartphone, Code, FileText, Newspaper, BookOpen, Phone, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/images/logo-white.png';
import { div } from 'motion/react-client';

export function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
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
  ];

  // Products - Direct items (no categories)
  const productsItems = [
    { icon: Mic2, label: 'Voice Assistant Device', description: 'AI-powered smart speaker', path: '/voice-assistant' },
    { icon: Phone, label: 'Voice Call Agent', description: 'Business call automation', path: '/call-agent' },
    { icon: Code, label: 'Developer Platform', description: 'Complete API suite', path: '/developer-platform' },
  ];

  // Resources - Direct items with one having submenu
  const resourcesItems = [
    { icon: FileText, label: 'Documentation', description: 'Technical guides & API docs', path: '/documentation' },
    { icon: BookOpen, label: 'Case Studies', description: 'Customer success stories', path: '/case-studies' },
    { icon: Newspaper, label: 'Blog', description: 'Latest news and insights', path: '/blog' },
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



  // const ServicesDropdown = () => {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 8 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: 8 }}
  //       transition={{ duration: 0.15 }}
  //       className="absolute left-0 pt-2 z-50"
  //       style={{ top: '100%' }}
  //     >
  //       <div
  //         className="rounded-xl border overflow-visible flex"
  //         style={{
  //           background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
  //           borderColor:
  //             theme === 'dark'
  //               ? 'rgba(255, 255, 255, 0.08)'
  //               : 'rgba(0, 0, 0, 0.08)',
  //           boxShadow:
  //             theme === 'dark'
  //               ? '0 10px 40px rgba(0, 0, 0, 0.6)'
  //               : '0 10px 40px rgba(0, 0, 0, 0.15)',
  //           minWidth: '540px',
  //           minHeight: '330px',
  //         }}
  //       >
  //         {/* LEFT SIDE: main categories */}
  //         <div
  //           className="w-1/3 border-r flex flex-col gap-1 py-4 px-2 bg-gradient-to-b from-[#4deeea]/10 to-transparent"
  //           style={{
  //             borderColor:
  //               theme === 'dark'
  //                 ? 'rgba(255, 255, 255, 0.08)'
  //                 : 'rgba(0, 0, 0, 0.08)',
  //             minHeight: '330px',
  //             boxShadow: theme === 'dark'
  //               ? '0 2px 12px rgba(77,238,234,0.08)'
  //               : '0 2px 12px rgba(77,238,234,0.12)',
  //             borderRadius: '12px 0 0 12px',
  //           }}
  //         >
  //           {servicesCategories.map((category) => (
  //             <button
  //               key={category.label}
  //               onMouseEnter={() => setActiveSubmenu(category.label)}
  //               className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-colors duration-150 rounded-lg
  //               ${activeSubmenu === category.label
  //                   ? 'text-[#4deeea] bg-[#4deeea]/10 font-bold shadow-md'
  //                   : theme === 'dark'
  //                     ? 'text-white/80 hover:text-[#4deeea] hover:bg-white/[0.04]'
  //                     : 'text-black/80 hover:text-[#4deeea] hover:bg-black/[0.04]'
  //                 }`}
  //               style={{
  //                 fontFamily: 'Space Grotesk, sans-serif',
  //                 fontSize: '15px',
  //                 fontWeight: activeSubmenu === category.label ? 700 : 500,
  //                 letterSpacing: '0.01em',
  //                 marginBottom: '2px',
  //               }}
  //             >
  //               <span>{category.label}</span>
  //               <ChevronRight
  //                 size={16}
  //                 className={`transition-colors ${activeSubmenu === category.label
  //                   ? 'text-[#4deeea]'
  //                   : theme === 'dark'
  //                     ? 'text-white/40'
  //                     : 'text-black/40'
  //                   }`}
  //               />
  //             </button>
  //           ))}
  //         </div>

  //         {/* RIGHT SIDE: submenu (dynamic) */}
  //         {/* <div className="flex-1 relative px-4 py-6">
  //           { <AnimatePresence mode="wait">
  //             {activeSubmenu && (
  //               <motion.div
  //                 // key={activeSubmenu}
  //                 initial={{ opacity: 0, x: -10 }}
  //                 animate={{ opacity: 1, x: 0 }}
  //                 exit={{ opacity: 0, x: -10 }}
  //                 transition={{ duration: 0.15 }}
  //                 className="absolute inset-0"
  //               >
  //                 <div
  //                   className="rounded-lg border bg-gradient-to-br from-[#4deeea]/5 to-transparent shadow-lg py-1 px-3"
  //                   style={{
  //                     borderColor:
  //                       theme === 'dark'
  //                         ? 'rgba(255,255,255,0.08)'
  //                         : 'rgba(0,0,0,0.08)',
  //                     minHeight: '330px',
  //                     width: '100%',
  //                     maxWidth: '100%'
  //                   }}
  //                 >
  //                   <div className="py-2">
  //                     {servicesCategories
  //                       .find((cat) => cat.label === activeSubmenu)
  //                       ?.items.map((item) => {
  //                         const Icon = item.icon;
  //                         return (
  //                           <button
  //                             key={item.path}
  //                             onClick={() => handleItemClick(item.path)}
  //                             className={`w-full text-left px-5 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
  //                             ${theme === 'dark'
  //                                 ? 'hover:bg-white/[0.04]'
  //                                 : 'hover:bg-black/[0.04]'
  //                               }`}
  //                             style={{
  //                               marginBottom: '3px',
  //                             }}
  //                           >
  //                             <div
  //                               className={`w-9 h-9 rounded px-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
  //                               ${theme === 'dark'
  //                                   ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                                   : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                                 }`}
  //                             >
  //                               <Icon
  //                                 size={18}
  //                                 className={`transition-colors duration-150
  //                                 ${theme === 'dark'
  //                                     ? 'text-white/60 group-hover:text-[#4deeea]'
  //                                     : 'text-black/60 group-hover:text-[#4deeea]'
  //                                   }`}
  //                               />
  //                             </div>
  //                             <div className="flex-1 min-w-0">
  //                               <div
  //                                 className={`transition-colors duration-150
  //                                 ${theme === 'dark'
  //                                     ? 'text-white/90 group-hover:text-[#4deeea]'
  //                                     : 'text-black/90 group-hover:text-[#4deeea]'
  //                                   }`}
  //                                 style={{
  //                                   fontSize: '13px',
  //                                   fontWeight: 600,
  //                                   fontFamily: 'Space Grotesk, sans-serif',
  //                                   marginBottom: '2px',
  //                                 }}
  //                               >
  //                                 {item.label}
  //                               </div>
  //                               <p
  //                                 className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                                 style={{
  //                                   fontSize: '13px',
  //                                   lineHeight: '1.5',
  //                                 }}
  //                               >
  //                                 {item.description}
  //                               </p>
  //                             </div>
  //                           </button>
  //                         );
  //                       })}
  //                   </div>
  //                 </div>
  //               </motion.div>
  //             )}
  //           </AnimatePresence> }
  //         </div> */}
  //         <div className="flex-1 relative px-4 py-6">
  //           <div className="absolute inset-0">
  //             <div
  //               className="rounded-lg border bg-gradient-to-br from-[#4deeea]/5 to-transparent shadow-lg py-1 px-3"
  //               style={{
  //                 borderColor:
  //                   theme === 'dark'
  //                     ? 'rgba(255,255,255,0.08)'
  //                     : 'rgba(0,0,0,0.08)',
  //                 minHeight: '330px',
  //                 width: '100%',
  //                 maxWidth: '100%'
  //               }}
  //             >
  //               <div className="py-2">
  //                 {servicesCategories
  //                   .find((cat) => cat.label === activeSubmenu)
  //                   ?.items.map((item) => {
  //                     const Icon = item.icon;
  //                     return (
  //                       <button
  //                         key={item.path}
  //                         onClick={() => handleItemClick(item.path)}
  //                         className={`w-full text-left px-5 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
  //               ${theme === 'dark'
  //                             ? 'hover:bg-white/[0.04]'
  //                             : 'hover:bg-black/[0.04]'
  //                           }`}
  //                         style={{
  //                           marginBottom: '3px',
  //                         }}
  //                       >
  //                         <div
  //                           className={`w-9 h-9 rounded px-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
  //                 ${theme === 'dark'
  //                               ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                               : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                             }`}
  //                         >
  //                           <Icon
  //                             size={18}
  //                             className={`transition-colors duration-150
  //                   ${theme === 'dark'
  //                                 ? 'text-white/60 group-hover:text-[#4deeea]'
  //                                 : 'text-black/60 group-hover:text-[#4deeea]'
  //                               }`}
  //                           />
  //                         </div>
  //                         <div className="flex-1 min-w-0">
  //                           <div
  //                             className={`transition-colors duration-150
  //                   ${theme === 'dark'
  //                                 ? 'text-white/90 group-hover:text-[#4deeea]'
  //                                 : 'text-black/90 group-hover:text-[#4deeea]'
  //                               }`}
  //                             style={{
  //                               fontSize: '13px',
  //                               fontWeight: 600,
  //                               fontFamily: 'Space Grotesk, sans-serif',
  //                               marginBottom: '2px',
  //                             }}
  //                           >
  //                             {item.label}
  //                           </div>
  //                           <p
  //                             className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                             style={{
  //                               fontSize: '13px',
  //                               lineHeight: '1.5',
  //                             }}
  //                           >
  //                             {item.description}
  //                           </p>
  //                         </div>
  //                       </button>
  //                     );
  //                   })}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </motion.div>
  //   );
  // };



  // Direct Dropdown for Products and Resources


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




  // const DirectDropdown = ({ items, type }) => {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 8 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: 8 }}
  //       transition={{ duration: 0.15 }}
  //       className="absolute left-0 pt-2"
  //       style={{ top: '100%' }}
  //     >
  //       <div
  //         className="rounded-xl border "
  //         style={{
  //           background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
  //           borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
  //           boxShadow: theme === 'dark'
  //             ? '0 10px 40px rgba(0, 0, 0, 0.6)'
  //             : '0 10px 40px rgba(0, 0, 0, 0.15)',
  //           minWidth: '320px',
  //         }}
  //       >
  //         <div className="py-2 ">
  //           {items.map((item) => {
  //             const Icon = item.icon;
  //             const hasSubmenu = item.submenu && item.submenu.length > 0;

  //             return (
  //               <div
  //                 key={item.path}
  //                 className="relative"
  //                 onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.label)}
  //                 onMouseLeave={() => hasSubmenu && setActiveSubmenu(null)}
  //               >
  //                 <button
  //                   onClick={() => {
  //                     if (!hasSubmenu) handleItemClick(item.path);
  //                   }}
  //                   className={`w-full text-left px-4 py-2.5 flex items-start gap-3 group transition-all duration-150 ${theme === 'dark'
  //                     ? 'hover:bg-white/[0.04]'
  //                     : 'hover:bg-black/[0.04]'
  //                     }`}
  //                 >
  //                   <div
  //                     className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-150 ${theme === 'dark'
  //                       ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                       : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                       }`}
  //                   >
  //                     <Icon
  //                       size={14}
  //                       className={`transition-colors duration-150 ${theme === 'dark'
  //                         ? 'text-white/60 group-hover:text-[#4deeea]'
  //                         : 'text-black/60 group-hover:text-[#4deeea]'
  //                         }`}
  //                     />
  //                   </div>

  //                   <div className="flex-1 min-w-0">
  //                     <div className="flex items-center justify-between">
  //                       <div
  //                         className={`transition-colors duration-150 ${theme === 'dark'
  //                           ? 'text-white/90 group-hover:text-[#4deeea]'
  //                           : 'text-black/90 group-hover:text-[#4deeea]'
  //                           }`}
  //                         style={{
  //                           fontSize: '14px',
  //                           fontWeight: 500,
  //                           fontFamily: 'Space Grotesk, sans-serif',
  //                           marginBottom: '2px',
  //                         }}
  //                       >
  //                         {item.label}
  //                       </div>
  //                       {hasSubmenu && (
  //                         <ChevronRight
  //                           size={14}
  //                           className={`transition-colors ${activeSubmenu === item.label ? 'text-[#4deeea]' : 'text-white/40'
  //                             }`}
  //                         />
  //                       )}
  //                     </div>
  //                     <p
  //                       className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                       style={{
  //                         fontSize: '12px',
  //                         lineHeight: '1.4',
  //                       }}
  //                     >
  //                       {item.description}
  //                     </p>
  //                   </div>
  //                 </button>


  //                 {/* Submenu for Research & Development */}
  //                 {hasSubmenu && (
  //                   <AnimatePresence>
  //                     {activeSubmenu === item.label && (
  //                       <motion.div
  //                         initial={{ opacity: 0, x: -10 }}
  //                         animate={{ opacity: 1, x: 0 }}
  //                         exit={{ opacity: 0, x: -10 }}
  //                         transition={{ duration: 0.15 }}
  //                         className="absolute left-full top-0 ml-1"
  //                         style={{ minWidth: '280px' }}
  //                       >
  //                         <div
  //                           className="rounded-xl border overflow-visible"
  //                           style={{
  //                             background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
  //                             borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
  //                             boxShadow: theme === 'dark'
  //                               ? '0 10px 40px rgba(0, 0, 0, 0.6)'
  //                               : '0 10px 40px rgba(0, 0, 0, 0.15)',
  //                           }}
  //                         >
  //                           <div className="py-2">
  //                             {item.submenu.map((subitem) => {
  //                               const SubIcon = subitem.icon;
  //                               return (
  //                                 <button
  //                                   key={subitem.path}
  //                                   onClick={() => handleItemClick(subitem.path)}
  //                                   className={`w-full text-left px-3 py-1 flex items-start gap-3 group transition-all duration-150 ${theme === 'dark'
  //                                     ? 'hover:bg-white/[0.04]'
  //                                     : 'hover:bg-black/[0.04]'
  //                                     }`}
  //                                 >
  //                                   <div
  //                                     className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-150 ${theme === 'dark'
  //                                       ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                                       : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                                       }`}
  //                                   >
  //                                     <SubIcon
  //                                       size={14}
  //                                       className={`transition-colors duration-150 ${theme === 'dark'
  //                                         ? 'text-white/60 group-hover:text-[#4deeea]'
  //                                         : 'text-black/60 group-hover:text-[#4deeea]'
  //                                         }`}
  //                                     />
  //                                   </div>

  //                                   <div className="flex-1 min-w-0">
  //                                     <div
  //                                       className={`transition-colors duration-150 ${theme === 'dark'
  //                                         ? 'text-white/90 group-hover:text-[#4deeea]'
  //                                         : 'text-black/90 group-hover:text-[#4deeea]'
  //                                         }`}
  //                                       style={{
  //                                         fontSize: '14px',
  //                                         fontWeight: 500,
  //                                         fontFamily: 'Space Grotesk, sans-serif',
  //                                         marginBottom: '2px',
  //                                       }}
  //                                     >
  //                                       {subitem.label}
  //                                     </div>
  //                                     <p
  //                                       className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                                       style={{
  //                                         fontSize: '12px',
  //                                         lineHeight: '1.4',
  //                                       }}
  //                                     >
  //                                       {subitem.description}
  //                                     </p>
  //                                   </div>
  //                                 </button>
  //                               );
  //                             })}
  //                           </div>
  //                         </div>
  //                       </motion.div>
  //                     )}
  //                   </AnimatePresence>
  //                 )}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </motion.div>
  //   );
  // };

  // const DirectDropdown = ({ items, type }) => {
  //   return (
  //     <div
  //       className="absolute left-0 pt-2 z-50"
  //       style={{ top: '100%' }}
  //       onMouseEnter={() => setActiveDropdown(type)}
  //       onMouseLeave={() => {
  //         setActiveDropdown(null);
  //         setActiveSubmenu(null);
  //       }}
  //     >
  //       <div
  //         className="rounded-xl border overflow-visible flex"
  //         style={{
  //           background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
  //           borderColor:
  //             theme === 'dark'
  //               ? 'rgba(255, 255, 255, 0.08)'
  //               : 'rgba(0, 0, 0, 0.08)',
  //           boxShadow:
  //             theme === 'dark'
  //               ? '0 10px 40px rgba(0, 0, 0, 0.6)'
  //               : '0 10px 40px rgba(0, 0, 0, 0.15)',
  //           minWidth: '300px',
  //           minHeight: '180px',
  //         }}
  //       >
  //         {/* LEFT SIDE: Items list */}
  //         <div
  //           //className="flex-1 relative py-4 px-3"
  //           className=" w-1/2 border-r flex-1  flex-col gap-1 px-0 py-2 bg-gradient-to-b from-[#4deeea]/10 to-transparent"
  //           style={{
  //             //   borderColor:
  //             //     theme === 'dark'
  //             //       ? 'rgba(255, 255, 255, 0.08)'
  //             //       : 'rgba(0, 0, 0, 0.08)',
  //             //   minHeight: '180px',
  //             //   borderRadius: '12px 0 0 12px',
  //           }}
  //         >
  //           {items.map((item) => {
  //             const Icon = item.icon;
  //             const hasSubmenu = item.submenu && item.submenu.length > 0;
  //             return (
  //               <div
  //                 key={item.path}
  //                 className="relative"
  //                 onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.label)}
  //               >
  //                 <button
  //                   onClick={() => !hasSubmenu && handleItemClick(item.path)}
  //                   className={`w-full text-left px-4 py-2 flex items-start gap-3 group transition-all duration-150 
  //                   ${theme === 'dark'
  //                       ? 'hover:bg-white/[0.04]'
  //                       : 'hover:bg-black/[0.04]'
  //                     }`}
  //                 >

  //                   <div
  //                     className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
  //                     ${theme === 'dark'
  //                         ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                         : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                       }`}
  //                   >
  //                     <Icon
  //                       size={14}
  //                       className={`transition-colors duration-150
  //                       ${theme === 'dark'
  //                           ? 'text-white/60 group-hover:text-[#4deeea]'
  //                           : 'text-black/60 group-hover:text-[#4deeea]'
  //                         }`}
  //                     />
  //                   </div>

  //                   <div className="flex-1 min-w-0">
  //                     <div className="flex items-center justify-between">
  //                       <div
  //                         className={`transition-colors duration-150
  //                         ${theme === 'dark'
  //                             ? 'text-white/90 group-hover:text-[#4deeea]'
  //                             : 'text-black/90 group-hover:text-[#4deeea]'
  //                           }`}
  //                         style={{
  //                           fontSize: '14px',
  //                           fontWeight: 500,
  //                           fontFamily: 'Space Grotesk, sans-serif',
  //                         }}
  //                       >
  //                         {item.label}
  //                       </div>
  //                       {hasSubmenu && (
  //                         <ChevronRight
  //                           size={14}
  //                           className={`transition-colors ${activeSubmenu === item.label
  //                             ? 'text-[#4deeea]'
  //                             : theme === 'dark'
  //                               ? 'text-white/40'
  //                               : 'text-black/40'
  //                             }`}
  //                         />
  //                       )}
  //                     </div>
  //                     <p
  //                       className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                       style={{
  //                         fontSize: '12px',
  //                         lineHeight: '1.4',
  //                       }}
  //                     >
  //                       {item.description}
  //                     </p>
  //                   </div>
  //                 </button>
  //               </div>
  //             );
  //           })}
  //         </div>

  //         {/* RIGHT SIDE: Submenu (instant, no flicker) */}
  //         {/* {activeSubmenu && (
  //           <div
  //             className="absolute left-full top-2 ml-2 rounded-xl border bg-gradient-to-br from-[#4deeea]/5 to-transparent shadow-lg py-1 px-1"
  //             style={{
  //               borderColor:
  //                 theme === 'dark'
  //                   ? 'rgba(255, 255, 255, 0.08)'
  //                   : 'rgba(0, 0, 0, 0.08)',
  //               minWidth: '280px',
  //               width: '280px',
  //             }}
  //           >
  //             {items
  //               .find((it) => it.label === activeSubmenu)
  //               ?.submenu.map((subitem) => {
  //                 const SubIcon = subitem.icon;
  //                 return (
  //                   <button
  //                     key={subitem.path}
  //                     onClick={() => handleItemClick(subitem.path)}
  //                     className={`w-full text-left px-2 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
  //                     ${theme === 'dark'
  //                         ? 'hover:bg-white/[0.04]'
  //                         : 'hover:bg-black/[0.04]'
  //                       }`}
  //                   >
  //                     <div
  //                       className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
  //                       ${theme === 'dark'
  //                           ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                           : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                         }`}
  //                     >
  //                       <SubIcon
  //                         size={14}
  //                         className={`transition-colors duration-150
  //                         ${theme === 'dark'
  //                             ? 'text-white/60 group-hover:text-[#4deeea]'
  //                             : 'text-black/60 group-hover:text-[#4deeea]'
  //                           }`}
  //                       />
  //                     </div>

  //                     <div className="flex-1 min-w-0">
  //                       <div
  //                         className={`transition-colors duration-150
  //                         ${theme === 'dark'
  //                             ? 'text-white/90 group-hover:text-[#4deeea]'
  //                             : 'text-black/90 group-hover:text-[#4deeea]'
  //                           }`}
  //                         style={{
  //                           fontSize: '13px',
  //                           fontWeight: 600,
  //                           fontFamily: 'Space Grotesk, sans-serif',
  //                           marginBottom: '2px',
  //                         }}
  //                       >
  //                         {subitem.label}
  //                       </div>
  //                       <p
  //                         className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                         style={{
  //                           fontSize: '12px',
  //                           lineHeight: '1.4',
  //                         }}
  //                       >
  //                         {subitem.description}
  //                       </p>
  //                     </div>
  //                   </button>
  //                 );
  //               })}
  //           </div>
  //         )} */}
  //         <div
  //           className="flex-1 relative px-4 py-6 bg-gradient-to-br from-[#4deeea]/5 to-transparent"
  //           style={{
  //             minHeight: '330px',
  //             borderRadius: '0 12px 12px 0',
  //           }}
  //         >
  //           {activeSubmenu &&
  //             items
  //               .find((it) => it.label === activeSubmenu)
  //               ?.submenu.map((subitem) => {
  //                 const SubIcon = subitem.icon;
  //                 return (
  //                   <button
  //                     key={subitem.path}
  //                     onClick={() => handleItemClick(subitem.path)}
  //                     className={`w-full text-left px-5 py-2 flex items-start gap-3 group transition-all duration-150 rounded-lg
  //                     ${theme === 'dark'
  //                         ? 'hover:bg-white/[0.04]'
  //                         : 'hover:bg-black/[0.04]'
  //                       }`}
  //                   >
  //                     <div
  //                       className={`w-9 h-9 rounded px-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
  //                       ${theme === 'dark'
  //                           ? 'bg-white/[0.03] group-hover:bg-[#4deeea]/10'
  //                           : 'bg-black/[0.03] group-hover:bg-[#4deeea]/10'
  //                         }`}
  //                     >
  //                       <SubIcon
  //                         size={18}
  //                         className={`transition-colors duration-150
  //                         ${theme === 'dark'
  //                             ? 'text-white/60 group-hover:text-[#4deeea]'
  //                             : 'text-black/60 group-hover:text-[#4deeea]'
  //                           }`}
  //                       />
  //                     </div>

  //                     <div className="flex-1 min-w-0">
  //                       <div
  //                         className={`transition-colors duration-150
  //                         ${theme === 'dark'
  //                             ? 'text-white/90 group-hover:text-[#4deeea]'
  //                             : 'text-black/90 group-hover:text-[#4deeea]'
  //                           }`}
  //                         style={{
  //                           fontSize: '13px',
  //                           fontWeight: 600,
  //                           fontFamily: 'Space Grotesk, sans-serif',
  //                           marginBottom: '2px',
  //                         }}
  //                       >
  //                         {subitem.label}
  //                       </div>
  //                       <p
  //                         className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
  //                         style={{
  //                           fontSize: '12px',
  //                           lineHeight: '1.5',
  //                         }}
  //                       >
  //                         {subitem.description}
  //                       </p>
  //                     </div>
  //                   </button>
  //                 );
  //               })}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

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
                  onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.label)}
                  onClick={() => !hasSubmenu && handleItemClick(item.path)}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-all duration-150 rounded-lg
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

          {/* RIGHT SIDE: Submenu (merged visually, same background) */}
          <div
            className="flex-1 relative px-2 py-4 bg-gradient-to-br from-[#4deeea]/5 to-transparent"
            style={{
              minHeight: '200px',
              borderRadius: '0 12px 12px 0',
            }}
          >
            {activeSubmenu &&
              items
                .find((it) => it.label === activeSubmenu)
                ?.submenu.map((subitem) => {
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
                })}
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
          <div className="hidden lg:flex items-center gap-3">
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
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${activeDropdown === 'services'
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
                setActiveSubmenu(null);
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubmenu(null);
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
                {activeDropdown === 'products' && <DirectDropdown items={productsItems} type="products" />}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('resources');
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
            <button
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
            </button>

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
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${theme === 'dark'
                ? 'hover:bg-white/[0.05] text-white/80 hover:text-white'
                : 'hover:bg-black/[0.05] text-black/80 hover:text-black'
                }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

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
                            onClick={() => !hasSubmenu && handleItemClick(item.path)}
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
                          {hasSubmenu && item.submenu && item.submenu.map((subitem) => {
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