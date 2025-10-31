import { motion } from 'motion/react';
import { ArrowLeft, Book, ChevronRight, Search, Copy, Check, Terminal, AlertCircle } from 'lucide-react';
import { useState } from 'react';

function DocArticlePage({ theme, onNavigate }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tableOfContents = [
    { id: 'installation', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'authentication', label: 'Authentication' },
    { id: 'basic-usage', label: 'Basic Usage' },
    { id: 'advanced', label: 'Advanced Features' },
    { id: 'error-handling', label: 'Error Handling' },
  ];

  const codeExample1 = `npm install @spicarts/voice-ai
# or
yarn add @spicarts/voice-ai`;

  const codeExample2 = `import { VoiceAI } from '@spicarts/voice-ai';

const config = {
  apiKey: 'your-api-key-here',
  model: 'voice-v2',
  language: 'en-US',
  voiceId: 'neural-sarah'
};

const voiceAI = new VoiceAI(config);`;

  const codeExample3 = `// Initialize the Voice AI agent
const agent = await voiceAI.createAgent({
  name: 'CustomerSupport',
  systemPrompt: 'You are a helpful customer support agent.',
  voice: {
    stability: 0.75,
    similarity: 0.85,
    style: 'professional'
  }
});

// Start a conversation
const response = await agent.speak({
  text: 'Hello! How can I help you today?',
  streamAudio: true
});`;

  const codeExample4 = `try {
  const response = await agent.speak(text);
  console.log('Success:', response);
} catch (error) {
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    // Handle rate limiting
    await delay(error.retryAfter);
  } else if (error.code === 'INVALID_API_KEY') {
    // Handle authentication error
    console.error('Invalid API key');
  }
}`;

  const CodeBlock = ({ code, language, id }) => (
    <div className="relative my-6 rounded-xl overflow-hidden border" style={{
      background: theme === 'dark' ? '#0d1117' : '#f6f8fa',
      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    }}>
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{
          background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#4deeea]" />
          <span
            className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
            style={{ fontSize: '12px', fontFamily: 'monospace' }}
          >
            {language}
          </span>
        </div>
        <button
          onClick={() => handleCopyCode(code, id)}
          className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all ${theme === 'dark'
              ? 'hover:bg-white/5 text-white/70 hover:text-white'
              : 'hover:bg-black/5 text-black/70 hover:text-black'
            }`}
          style={{ fontSize: '12px', fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {copiedCode === id ? (
            <>
              <Check size={14} className="text-[#4deeea]" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code
          className={theme === 'dark' ? 'text-white/90' : 'text-black/90'}
          style={{ fontSize: '14px', fontFamily: 'monospace', lineHeight: '1.6' }}
        >
          {code}
        </code>
      </pre>
    </div>
  );

  const InfoBox = ({ children, type = 'info' }) => (
    <div
      className="my-6 p-4 rounded-xl border flex gap-3"
      style={{
        background: type === 'warning'
          ? 'rgba(255, 193, 7, 0.05)'
          : 'rgba(77, 238, 234, 0.05)',
        borderColor: type === 'warning'
          ? 'rgba(255, 193, 7, 0.3)'
          : 'rgba(77, 238, 234, 0.3)',
      }}
    >
      <AlertCircle
        size={20}
        className={type === 'warning' ? 'text-yellow-500' : 'text-[#4deeea]'}
        style={{ flexShrink: 0, marginTop: '2px' }}
      />
      <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
        {children}
      </div>
    </div>
  );

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[280px,1fr,240px] gap-12">
            {/* Left Sidebar - Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <button
                  onClick={() => onNavigate('resources/docs')}
                  className={`flex items-center gap-2 mb-8 hover:text-[#4deeea] transition-colors ${theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  <ArrowLeft size={18} />
                  Documentation
                </button>

                <div className="space-y-1">
                  <div
                    className={`mb-2 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Getting Started
                  </div>
                  {['Quick Start', 'Installation', 'Configuration', 'First Agent'].map((item) => (
                    <button
                      key={item}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${item === 'Installation'
                          ? 'bg-[#4deeea]/10 text-[#4deeea] border border-[#4deeea]/30'
                          : theme === 'dark'
                            ? 'text-white/70 hover:text-white hover:bg-white/5'
                            : 'text-black/70 hover:text-black hover:bg-black/5'
                        }`}
                      style={{ fontSize: '14px', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {item}
                    </button>
                  ))}

                  <div
                    className={`mt-6 mb-2 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    API Reference
                  </div>
                  {['Voice AI', 'Agent Kit', 'Authentication', 'Webhooks'].map((item) => (
                    <button
                      key={item}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${theme === 'dark'
                          ? 'text-white/70 hover:text-white hover:bg-white/5'
                          : 'text-black/70 hover:text-black hover:bg-black/5'
                        }`}
                      style={{ fontSize: '14px', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Breadcrumb */}
                <div className={`flex items-center gap-2 mb-6 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  <span>Getting Started</span>
                  <ChevronRight size={14} />
                  <span className="text-[#4deeea]">Installation</span>
                </div>

                <h1
                  className="mb-4"
                  style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    lineHeight: '1.1',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Installation & Setup
                </h1>

                <p
                  className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                  style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '32px' }}
                >
                  Learn how to install and configure the SPicArts Voice AI SDK in your project
                </p>

                <div
                  className="h-px mb-12"
                  style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
                />

                {/* Installation */}
                <section id="installation" className="mb-12">
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Installation
                  </h2>

                  <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                    Install the Voice AI SDK using your preferred package manager:
                  </p>

                  <CodeBlock code={codeExample1} language="bash" id="install" />

                  <InfoBox>
                    <strong>Note:</strong> The Voice AI SDK requires Node.js version 16 or higher.
                  </InfoBox>
                </section>

                {/* Configuration */}
                <section id="configuration" className="mb-12">
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Configuration
                  </h2>

                  <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                    Import and configure the SDK with your API credentials:
                  </p>

                  <CodeBlock code={codeExample2} language="javascript" id="config" />

                  <InfoBox type="warning">
                    <strong>Security Warning:</strong> Never commit your API keys to version control. Use environment variables instead.
                  </InfoBox>
                </section>

                {/* Authentication */}
                <section id="authentication" className="mb-12">
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Authentication
                  </h2>

                  <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                    The SDK uses API key authentication. You can obtain your API key from the{' '}
                    <span
                      onClick={() => onNavigate('products/platform')}
                      className="text-[#4deeea] cursor-pointer hover:underline"
                    >
                      Developer Platform
                    </span>.
                  </p>

                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
                      API Key Permissions
                    </h4>
                    <ul style={{ fontSize: '14px', lineHeight: '1.7', paddingLeft: '20px' }}>
                      <li>Read/Write access to Voice AI API</li>
                      <li>Access to pre-trained voice models</li>
                      <li>Usage analytics and monitoring</li>
                    </ul>
                  </div>
                </section>

                {/* Basic Usage */}
                <section id="basic-usage" className="mb-12">
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Basic Usage
                  </h2>

                  <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                    Here's a simple example to create your first voice AI agent:
                  </p>

                  <CodeBlock code={codeExample3} language="javascript" id="usage" />
                </section>

                {/* Advanced Features */}
                <section id="advanced" className="mb-12">
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Advanced Features
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                        Custom Voice Cloning
                      </h4>
                      <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.8 }}>
                        Clone any voice with just 30 seconds of audio samples using our advanced neural network.
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                        Multi-language Support
                      </h4>
                      <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.8 }}>
                        Support for 40+ languages with automatic language detection and translation.
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                        Real-time Streaming
                      </h4>
                      <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.8 }}>
                        Stream audio in real-time with low latency for interactive conversations.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Error Handling */}
                <section id="error-handling" className="mb-12">
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    Error Handling
                  </h2>

                  <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                    Implement proper error handling to manage API rate limits and other errors:
                  </p>

                  <CodeBlock code={codeExample4} language="javascript" id="errors" />
                </section>

                {/* Next Steps */}
                <div
                  className="mt-16 p-8 rounded-2xl border"
                  style={{
                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>
                    Next Steps
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Building Your First Agent', desc: 'Complete tutorial on creating a voice AI agent' },
                      { title: 'API Reference', desc: 'Detailed API documentation and examples' },
                      { title: 'Best Practices', desc: 'Tips for optimizing voice AI performance' },
                      { title: 'Code Examples', desc: 'Real-world implementation examples' },
                    ].map((item) => (
                      <button
                        key={item.title}
                        className={`text-left p-4 rounded-xl border transition-all hover:border-[#4deeea]/50 ${theme === 'dark'
                            ? 'hover:bg-white/5'
                            : 'hover:bg-black/5'
                          }`}
                        style={{
                          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: '#4deeea' }}>
                          {item.title}
                        </div>
                        <div className={theme === 'dark' ? 'text-white/60' : 'text-black/60'} style={{ fontSize: '13px' }}>
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </article>

            {/* Right Sidebar - Table of Contents */}
            <aside className="hidden xl:block">
              <div className="sticky top-24">
                <div
                  className={`mb-3 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  On This Page
                </div>
                <div className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1 border-l-2 pl-3 transition-colors ${theme === 'dark'
                          ? 'border-white/10 text-white/60 hover:text-white hover:border-[#4deeea]'
                          : 'border-black/10 text-black/60 hover:text-black hover:border-[#4deeea]'
                        }`}
                      style={{ fontSize: '13px' }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocArticlePage;