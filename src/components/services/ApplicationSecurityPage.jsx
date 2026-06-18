import { ServiceDetailPage } from '../ServiceDetailPage';
import { Shield, Code, Smartphone, Globe } from 'lucide-react';

function ApplicationSecurityPage({ theme, onNavigate }) {
    const serviceData = {
        icon: Shield,
        title: 'Application Security',
        tagline: 'Secure Applications & APIs',
        description:
            'Protect your web, mobile, and enterprise applications from cyber threats with comprehensive application security solutions. We help identify vulnerabilities, secure APIs, and implement best practices throughout the development lifecycle.',

        gradient: 'from-cyan-500 to-blue-500',

        features: [
            'Web application security assessments',
            'Mobile application security testing',
            'API security implementation',
            'Secure code reviews',
            'Authentication and authorization security',
            'OWASP Top 10 protection',
            'Security architecture reviews',
            'DevSecOps integration',
            'Continuous security monitoring',
        ],

        benefits: [
            {
                title: 'Secure Applications',
                description:
                    'Protect applications from vulnerabilities, data breaches, and unauthorized access with enterprise-grade security practices.',
                icon: Globe,
            },
            {
                title: 'Secure APIs',
                description:
                    'Safeguard APIs with proper authentication, authorization, and data protection mechanisms.',
                icon: Code,
            },
            {
                title: 'Mobile Security',
                description:
                    'Ensure mobile applications remain secure against reverse engineering, malware, and data leaks.',
                icon: Smartphone,
            },
        ],

        useCases: [
            {
                title: 'Secure E-Commerce Platforms',
                description:
                    'Protect customer data, payment transactions, and business operations from cyber threats and attacks.',
                stats: '99.9%',
            },
            {
                title: 'Enterprise Applications',
                description:
                    'Secure internal business applications and ensure compliance with industry security standards.',
                stats: '100%',
            },
            {
                title: 'API Protection',
                description:
                    'Implement robust API security measures to protect services and prevent unauthorized access.',
                stats: '95%',
            },
        ],

        cta: {
            title: 'Secure Your Applications Today',
            description:
                'Protect your applications, APIs, and business data with our comprehensive application security solutions.',
        },
    };

    return (
        <ServiceDetailPage
            theme={theme}
            onNavigate={onNavigate}
            service={serviceData}
        />
    );
}

export default ApplicationSecurityPage;