import { ServiceDetailPage } from '../ServiceDetailPage';
import { Cloud, Server, Shield, Database } from 'lucide-react';

function CloudSecurityPage({ theme, onNavigate }) {
    const serviceData = {
        icon: Cloud,
        title: 'Cloud Security',
        tagline: 'Secure Cloud Infrastructure',
        description:
            'Protect your cloud environments with advanced security solutions for AWS, Azure, and Google Cloud. Secure workloads, data, and applications while maintaining compliance and operational excellence.',

        gradient: 'from-blue-500 to-indigo-500',

        features: [
            'Cloud security assessments',
            'Identity and access management',
            'Data encryption and protection',
            'Cloud configuration reviews',
            'Container and Kubernetes security',
            'Cloud monitoring and threat detection',
            'Compliance management',
            'Disaster recovery planning',
            'Multi-cloud security architecture',
        ],

        benefits: [
            {
                title: 'Protected Infrastructure',
                description:
                    'Secure cloud resources against unauthorized access and cyber threats.',
                icon: Server,
            },
            {
                title: 'Data Protection',
                description:
                    'Safeguard sensitive business data using encryption and advanced security controls.',
                icon: Database,
            },
            {
                title: 'Compliance Ready',
                description:
                    'Maintain industry compliance requirements while leveraging cloud technologies.',
                icon: Shield,
            },
        ],

        useCases: [
            {
                title: 'Multi-Cloud Security',
                description:
                    'Implement unified security policies across AWS, Azure, and Google Cloud environments.',
                stats: '100%',
            },
            {
                title: 'Container Security',
                description:
                    'Secure Docker and Kubernetes environments with continuous monitoring and protection.',
                stats: '90%',
            },
            {
                title: 'Cloud Migration Security',
                description:
                    'Ensure secure migration of applications and data to the cloud without compromising business operations.',
                stats: '95%',
            },
        ],

        cta: {
            title: 'Secure Your Cloud Environment',
            description:
                'Build a resilient and secure cloud infrastructure that protects your applications and business data.',
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

export default CloudSecurityPage;