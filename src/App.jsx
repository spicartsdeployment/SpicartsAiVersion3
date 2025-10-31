import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './components/HomePage';
import { PricingPage } from './components/PricingPage';
import { RequestDemoPage } from './components/RequestDemoPage';
import { ServicesPage } from './components/ServicesPage';
import { ProductsPage } from './components/ProductsPage';
import { ResourcesPage } from './components/ResourcesPage';
import { AboutPage } from './components/AboutPage';

// AI Services
import AIAgentKitPage from './components/services/AIAgentKitPage';
import VoiceAIPage from './components/services/VoiceAIPage';
import GenerativeAIPage from './components/services/GenerativeAIPage';
import VisionAIPage from './components/services/VisionAIPage';
import CustomAIDevelopmentPage from './components/services/CustomAIDevelopmentPage';

// Robotics Services
import AutomationPage from './components/services/AutomationPage';
import IoTAutomationPage from './components/services/IoTAutomationPage';
import CustomRoboticsPage from './components/services/CustomRoboticsPage';

// Development Services
import WebDevelopmentPage from './components/services/WebDevelopmentPage';
import MobileDevelopmentPage from './components/services/MobileDevelopmentPage';
import DesktopDevelopmentPage from './components/services/DesktopDevelopmentPage';
import EmbeddedDevelopmentPage from './components/services/EmbeddedDevelopmentPage';

// Product Pages
import { VoiceAssistantPage } from './components/products/VoiceAssistantPage';
import { VoiceCallAgentPage } from './components/products/VoiceCallAgentPage';
import { DeveloperPlatformPage } from './components/products/DeveloperPlatformPage';

// Resource Pages
import BlogPage from './components/resources/BlogPage';
import DocumentationPage from './components/resources/DocumentationPage';
import DocArticlePage from './components/resources/DocArticlePage';
import CaseStudiesPage from './components/resources/CaseStudiesPage';
import QuantumMLPage from './components/resources/QuantumMLPage';
import { BlogPostPage } from './components/resources/BlogPostPage';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-black' : 'bg-white'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="min-h-screen">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/home" element={<HomePage theme={theme} />} />
            <Route path="/services" element={<ServicesPage theme={theme} />} />
            <Route path="/products" element={<ProductsPage theme={theme} />} />
            <Route path="/resources" element={<ResourcesPage theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/pricing" element={<PricingPage theme={theme} />} />
            <Route path="/demo" element={<RequestDemoPage theme={theme} />} />
            <Route path="/login" element={<div>Login Page (Coming Soon)</div>} />

            {/* AI Services - Updated paths to match Navbar */}
            <Route path="/ai-agents" element={<AIAgentKitPage theme={theme} />} />
            <Route path="/voice-ai" element={<VoiceAIPage theme={theme} />} />
            <Route path="/generative-ai" element={<GenerativeAIPage theme={theme} />} />
            <Route path="/vision-ai" element={<VisionAIPage theme={theme} />} />
            <Route path="/custom-ai" element={<CustomAIDevelopmentPage theme={theme} />} />

            {/* Robotics Services - Updated paths */}
            <Route path="/automation" element={<AutomationPage theme={theme} />} />
            <Route path="/iot" element={<IoTAutomationPage theme={theme} />} />
            <Route path="/custom-robotics" element={<CustomRoboticsPage theme={theme} />} />

            {/* Development Services - Updated paths */}
            <Route path="/web-development" element={<WebDevelopmentPage theme={theme} />} />
            <Route path="/mobile-development" element={<MobileDevelopmentPage theme={theme} />} />
            <Route path="/desktop-development" element={<DesktopDevelopmentPage theme={theme} />} />

            {/* Product Pages - Updated paths */}
            <Route path="/voice-assistant" element={<VoiceAssistantPage theme={theme} />} />
            <Route path="/call-agent" element={<VoiceCallAgentPage theme={theme} />} />
            <Route path="/developer-platform" element={<DeveloperPlatformPage theme={theme} />} />

            {/* Resource Pages - Updated paths */}
            <Route path="/blog" element={<BlogPage theme={theme} />} />
            <Route path="/documentation" element={<DocumentationPage theme={theme} />} />
            <Route path="/case-studies" element={<CaseStudiesPage theme={theme} />} />
            <Route path="/research" element={<QuantumMLPage theme={theme} />} />
            <Route path="/quantum-ml" element={<QuantumMLPage theme={theme} />} />

            {/* Legacy routes for backward compatibility */}
            <Route path="/services/ai/agent-kit" element={<AIAgentKitPage theme={theme} />} />
            <Route path="/services/ai/voice-ai" element={<VoiceAIPage theme={theme} />} />
            <Route path="/services/ai/generative-ai" element={<GenerativeAIPage theme={theme} />} />
            <Route path="/services/ai/vision-ai" element={<VisionAIPage theme={theme} />} />
            <Route path="/services/ai/custom-development" element={<CustomAIDevelopmentPage theme={theme} />} />
            <Route path="/services/robotics/automation" element={<AutomationPage theme={theme} />} />
            <Route path="/services/robotics/iot" element={<IoTAutomationPage theme={theme} />} />
            <Route path="/services/robotics/custom" element={<CustomRoboticsPage theme={theme} />} />
            <Route path="/services/development/web" element={<WebDevelopmentPage theme={theme} />} />
            <Route path="/services/development/mobile" element={<MobileDevelopmentPage theme={theme} />} />
            <Route path="/services/development/desktop" element={<DesktopDevelopmentPage theme={theme} />} />
            <Route path="/products/voice-assistant" element={<VoiceAssistantPage theme={theme} />} />
            <Route path="/products/call-agent" element={<VoiceCallAgentPage theme={theme} />} />
            <Route path="/products/platform" element={<DeveloperPlatformPage theme={theme} />} />
            <Route path="/resources/blog/post" element={<BlogPostPage theme={theme} />} />
            <Route path="/resources/docs" element={<DocumentationPage theme={theme} />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage theme={theme} />} />
            <Route path="/resources/quantum-ml" element={<QuantumMLPage theme={theme} />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage theme={theme} />} />
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </Router>
  );
}