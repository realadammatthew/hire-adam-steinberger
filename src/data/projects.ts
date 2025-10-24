export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryDescription: string;
  order: number;
  heroTitle?: string;
  heroSubtitle?: string;
  technologies?: string[];
  duration?: string;
  status?: 'completed' | 'ongoing' | 'archived';
  featured?: boolean;
}

export const projects: Project[] = [
  // Enterprise Projects
  {
    slug: 'enterprise-ai-payroll-processor',
    title: 'Enterprise AI Payroll Processor',
    description: 'Complete redesign of AI payroll processing system for enterprise client using Azure microservices',
    category: 'Enterprise Solutions',
    categoryDescription: 'Large-scale enterprise AI implementations',
    order: 1,
    heroTitle: 'Enterprise AI Payroll Processor',
    heroSubtitle: 'Scalable Microservices Architecture on Azure',
    technologies: ['Azure', 'Microservices', 'AI/ML', 'TypeScript'],
    duration: '45 days',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'privacy-first-rag-chatbot',
    title: 'Privacy-First RAG Chatbot',
    description: 'Self-hosted RAG chatbot for non-profit with Mistral-7B ensuring complete data privacy',
    category: 'Non-Profit Solutions',
    categoryDescription: 'Custom AI solutions for non-profit organizations',
    order: 2,
    heroTitle: 'Privacy-First RAG Chatbot',
    heroSubtitle: 'Self-Hosted AI with Mistral-7B for Complete Data Privacy',
    technologies: ['Mistral-7B', 'RAG', 'Self-Hosted', 'Python'],
    duration: '30 days',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'cloud-based-rag-chatbot',
    title: 'Custom Cloud-Based RAG Chatbot',
    description: 'Cloud-based RAG chatbot for sales agency with responsive web interface and CRM integration',
    category: 'Sales & Marketing',
    categoryDescription: 'AI solutions for sales and marketing teams',
    order: 3,
    heroTitle: 'Custom Cloud-Based RAG Chatbot',
    heroSubtitle: 'Responsive Interface with CRM Integration',
    technologies: ['Cloud', 'RAG', 'React', 'CRM Integration'],
    duration: '60 days',
    status: 'completed',
    featured: true,
  },
  // Open Source Projects
  {
    slug: 'ai-development-toolkit',
    title: 'AI Development Toolkit',
    description: 'Open-source toolkit for rapid AI chatbot development and deployment',
    category: 'Open Source',
    categoryDescription: 'Community-driven AI development tools',
    order: 4,
    heroTitle: 'AI Development Toolkit',
    heroSubtitle: 'Open-Source Tools for Rapid AI Development',
    technologies: ['TypeScript', 'Node.js', 'Docker', 'Open Source'],
    duration: 'Ongoing',
    status: 'ongoing',
    featured: false,
  },
  // Research Projects
  {
    slug: 'llm-fine-tuning-research',
    title: 'LLM Fine-Tuning Research',
    description: 'Research into LoRA fine-tuning techniques for domain-specific AI models',
    category: 'Research & Development',
    categoryDescription: 'Cutting-edge AI research and experimental projects',
    order: 5,
    heroTitle: 'LLM Fine-Tuning Research',
    heroSubtitle: 'Advanced LoRA Techniques for Domain-Specific Models',
    technologies: ['LoRA', 'Fine-Tuning', 'PyTorch', 'Transformers'],
    duration: 'Ongoing',
    status: 'ongoing',
    featured: false,
  },
];

export const projectCategories = [
  'Enterprise Solutions',
  'Non-Profit Solutions',
  'Sales & Marketing',
  'Open Source',
  'Research & Development',
];