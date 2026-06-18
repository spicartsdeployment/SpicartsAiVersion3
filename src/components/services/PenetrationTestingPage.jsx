import { ServiceDetailPage } from '../ServiceDetailPage';
import { Lock, Search, Bug, ShieldAlert } from 'lucide-react';

function PenetrationTestingPage({ theme, onNavigate }) {
    const serviceData = {
        icon: Lock,
        title: 'Penetration Testing',
        tagline: 'Find Vulnerabilities Before Attackers Do',
        description:
            'Identify and eliminate security weaknesses through comprehensive penetration testing services. Our experts simulate real-world attacks to uncover vulnerabilities and strengthen your security posture.',

        gradient: 'from-red-500 to-orange-500',

        features: [
            'Web application penetration testing',
            'Network security testing',
            'API penetration testing',
            'Mobile application testing',
            'Vulnerability assessments',
            'Security configuration reviews',
            'Detailed remediation reports',
            'Compliance testing support',
            'Retesting and verification',
        ],

        benefits: [
            {
                title: 'Proactive Security',
                description:
                    'Discover vulnerabilities before attackers exploit them and reduce business risks.',
                icon: Search,
            },
            {
                title: 'Threat Identification',
                description:
                    'Simulate real-world attack scenarios to uncover hidden security weaknesses.',
                icon: Bug,
            },
            {
                title: 'Improved Security Posture',
                description:
                    'Strengthen your organization’s defenses with actionable remediation guidance.',
                icon: ShieldAlert,
            },
        ],

        useCases: [
            {
                title: 'Web Application Testing',
                description:
                    'Identify vulnerabilities such as SQL injection, XSS, and authentication flaws.',
                stats: '99%',
            },
            {
                title: 'Network Security Assessment',
                description:
                    'Evaluate network configurations and identify potential attack vectors.',
                stats: '95%',
            },
            {
                title: 'Compliance Validation',
                description:
                    'Meet security compliance requirements with regular penetration testing and assessments.',
                stats: '100%',
            },
        ],

        cta: {
            title: 'Test Your Security Defenses',
            description:
                'Discover vulnerabilities and strengthen your security posture with professional penetration testing services.',
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

export default PenetrationTestingPage;