import { BlogPostTemplate } from "./BlogPostTemplate";

export function BlogPost_GenerativeAI({ theme, onNavigate }) {

    const postData = {

        /* ---------------------------
           BASIC INFORMATION
        --------------------------- */
        title: "Generative AI: From GPT to Custom Language Models",
        tags: ["Generative AI", "LLMs", "Custom Models"],

        author: {
            name: "Dr. Sarah Mitchell",
            role: "AI Research Lead, SPicArts AI LLP",
            bio: "Dr. Mitchell leads NLP research at SPicArts AI LLP, focusing on LLM alignment, domain adaptation, and safe deployment of custom language models."
        },

        date: "November 8, 2025",
        readTime: "10 min read",

        featuredImage:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",

        /* ---------------------------
           ARTICLE CONTENT (BLOCKS)
        --------------------------- */
        content: [

            /* INTRO */
            {
                type: "paragraph",
                text: "Generative AI creates new content—text, images, audio, even code—by learning patterns from massive datasets. At the forefront are Large Language Models (LLMs) like GPT, which have redefined how machines understand and generate language. Today, organizations are moving from generic models to custom language models tailored to domain data and tasks."
            },

            /* Understanding Generative AI */
            { type: "heading", text: "Understanding Generative AI" },
            {
                type: "paragraph",
                text: "Generative AI uses deep learning—especially Transformer architectures—to learn semantics and world knowledge from large corpora. It then produces coherent, context-aware outputs from user prompts."
            },
            {
                type: "list",
                items: [
                    "Learns from vast datasets without task-specific code.",
                    "Generates novel, human-like outputs across modalities.",
                    "Improves via fine-tuning and reinforcement learning.",
                    "Customizable for specific domains and industries."
                ]
            },

            /* Evolution */
            {
                type: "heading",
                text: "The Evolution: From GPT to Custom Models"
            },
            {
                type: "list",
                items: [
                    "GPT-1 (2018): Introduced Transformer pre-training (117M).",
                    "GPT-2 (2019): 1.5B params, coherent multi-paragraph text.",
                    "GPT-3 (2020): 175B params, strong zero-/few-shot skills.",
                    "GPT-4 (2023): Multimodal; improved reasoning and alignment.",
                    "Custom GPTs (2024+): Domain-tuned models for industry use."
                ]
            },

            /* How it works */
            // { type: "heading", text: "How Generative AI Works" },

            // { type: "subheading", text: "1) Pre-training" },
            // { type: "paragraph", text: "Train on diverse text to learn grammar, semantics, and world patterns." },

            // { type: "subheading", text: "2) Fine-tuning" },
            // { type: "paragraph", text: "Refine with domain data or human feedback (e.g., RLHF) to align behavior." },

            // { type: "subheading", text: "3) Generation" },
            // { type: "paragraph", text: "Predict the next token probabilistically to produce coherent responses." },

            // /* Custom Models */
            // { type: "heading", text: "From GPT to Custom Language Models" },

            // { type: "subheading", text: "a) Fine-tuning" },
            // { type: "paragraph", text: "Start with a general LLM and adapt it with domain corpora (legal, medical, support)." },

            // { type: "subheading", text: "b) RAG" },
            // { type: "paragraph", text: "Retrieval-Augmented Generation fetches relevant documents before answering to boost accuracy." },

            // { type: "subheading", text: "c) Instruction Tuning" },
            // { type: "paragraph", text: "Train models to follow natural instructions for better task completion." },

            // { type: "subheading", text: "d) Custom Architectures" },
            // { type: "paragraph", text: "Lightweight models (e.g., LLaMA, Mistral, Falcon) offer strong performance with lower cost." },

            /* Applications */
            { type: "heading", text: "Applications of Generative AI" },
            {
                type: "list",
                items: [
                    "Healthcare: Clinical summaries, research assistance.",
                    "Education: Tutoring, content generation, grading support.",
                    "Manufacturing: Design assistance, maintenance notes.",
                    "Finance: Report drafting, insights, risk narratives.",
                    "Entertainment: Script ideas, music/asset generation.",
                    "Software: Code generation and refactoring aids."
                ]
            },

            /* Benefits */
            // { type: "heading", text: "Benefits of Generative AI" },
            // {
            //     type: "benefits",
            //     items: [
            //         { title: "Creativity & Innovation", description: "Generates new ideas, designs, and solutions." },
            //         { title: "Productivity", description: "Automates repetitive drafting and content tasks." },
            //         { title: "Personalization", description: "Tailors outputs to users and contexts." },
            //         { title: "Scalability", description: "Serves many users with consistent quality." }
            //     ]
            // },

            /* Challenges */
            { type: "heading", text: "Challenges & Ethics" },
            {
                type: "list",
                items: [
                    "Bias and fairness in training data and outputs.",
                    "Misinformation and hallucinations.",
                    "Privacy and governance over sensitive data.",
                    "IP concerns for generated content.",
                    "Workforce shifts and reskilling needs."
                ]
            },

            /* Future */
            { type: "heading", text: "The Future of Generative AI" },
            {
                type: "paragraph",
                text: "Generative AI is moving toward customization, trustworthiness, and efficiency, evolving from chat to autonomous reasoning systems that can plan and act."
            },
            {
                type: "list",
                items: [
                    "Smaller, private domain LLMs for enterprises.",
                    "Multimodal models (text, image, audio, video).",
                    "Tool-using AI agents with planning and memory.",
                    "Edge deployments for speed and privacy.",
                    "Stronger governance, safety, and auditing."
                ]
            },

            {
                type: "paragraph",
                text: "From GPT’s foundation to specialized custom models, Generative AI has shifted AI from task automation to creativity and reasoning. The next wave will prioritize ethical, reliable, and domain-precise systems that augment human potential."
            }
        ],

        benefitsHeading: [{
            type: "heading",
            text: "Benefits of Generative AI"
        },],

        benefits: [
            { title: "Creativity & Innovation", description: "Generates new ideas, designs, and solutions." },
            { title: "Productivity", description: "Automates repetitive drafting and content tasks." },
            { title: "Personalization", description: "Tailors outputs to users and contexts." },
            { title: "Scalability", description: "Serves many users with consistent quality." }
        ],

        /* ---------------------------
           RELATED POSTS
        --------------------------- */
        relatedPosts: [
            {
                title: "Building Voice Assistants with Natural Language Processing",
                category: "AI & NLP",
                image:
                    "https://images.unsplash.com/photo-1581093588401-22c5a1c89c71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                date: "Nov 5, 2025",
                link: "/resources/blog/post/voice-assistants"
            },
            {
                title: "How AI Automation is Revolutionizing Manufacturing",
                category: "Industry 4.0",
                image:
                    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                date: "Nov 10, 2025",
                link: "/resources/blog/post/manufacturing-ai"
            },
            {
                title: "Computer Vision Applications in Real-World Scenarios",
                category: "Computer Vision",
                image:
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                date: "Oct 28, 2025",
                link: "/resources/blog/post/computer-vision"
            }
        ]
    };

    return <BlogPostTemplate theme={theme} onNavigate={onNavigate} post={postData} />;
}
