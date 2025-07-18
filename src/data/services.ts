export interface Service {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryDescription: string;
  order: number;
  heroTitle?: string;
  heroSubtitle?: string;
  features?: string[];
  benefits?: string[];
}

export const services: Service[] = [
  // Location-Based Services
  {
    slug: 'ai-raleigh',
    title: 'Raleigh AI Developer',
    description: 'Custom chatbots and LLM solutions for Raleigh businesses',
    category: 'Location-Based Services',
    categoryDescription: 'AI development services tailored for specific Triangle area locations',
    order: 1,
    heroTitle: "Raleigh's Premier AI Developer",
    heroSubtitle: "Custom Chatbots & AI Solutions for Triangle Area Businesses",
    features: [
      'Custom AI Chatbots',
      'LLM Integration',
      'AI Automation',
      'Training & Support'
    ],
    benefits: [
      'Triangle Area Expert',
      'Personal Service',
      'Security Focus'
    ]
  },
  {
    slug: 'ai-durham',
    title: 'Durham AI Developer',
    description: 'AI development services for Durham companies',
    category: 'Location-Based Services',
    categoryDescription: 'AI development services tailored for specific Triangle area locations',
    order: 2,
    heroTitle: "Durham's Premier AI Developer",
    heroSubtitle: "Custom Chatbots & AI Solutions for Durham Businesses",
    features: [
      'Custom AI Chatbots',
      'LLM Integration',
      'AI Automation',
      'Training & Support'
    ],
    benefits: [
      'Triangle Area Expert',
      'Personal Service',
      'Security Focus'
    ]
  },
  {
    slug: 'ai-cary',
    title: 'Cary AI Developer',
    description: 'Custom AI solutions for Cary businesses',
    category: 'Location-Based Services',
    categoryDescription: 'AI development services tailored for specific Triangle area locations',
    order: 3,
    heroTitle: "Cary's Premier AI Developer",
    heroSubtitle: "Custom Chatbots & AI Solutions for Cary Businesses",
    features: [
      'Custom AI Chatbots',
      'LLM Integration',
      'AI Automation',
      'Training & Support'
    ],
    benefits: [
      'Triangle Area Expert',
      'Personal Service',
      'Security Focus'
    ]
  },
  {
    slug: 'ai-wake-forest',
    title: 'Wake Forest AI Developer',
    description: 'AI development services for Wake Forest companies',
    category: 'Location-Based Services',
    categoryDescription: 'AI development services tailored for specific Triangle area locations',
    order: 4,
    heroTitle: "Wake Forest's Premier AI Developer",
    heroSubtitle: "Custom Chatbots & AI Solutions for Wake Forest Businesses",
    features: [
      'Custom AI Chatbots',
      'LLM Integration',
      'AI Automation',
      'Training & Support'
    ],
    benefits: [
      'Triangle Area Expert',
      'Personal Service',
      'Security Focus'
    ]
  },
  {
    slug: 'triangle-ai-developer',
    title: 'Triangle AI Developer',
    description: 'Triangle area AI development services',
    category: 'Location-Based Services',
    categoryDescription: 'AI development services tailored for specific Triangle area locations',
    order: 5,
    heroTitle: "Triangle Area's Premier AI Developer",
    heroSubtitle: "Custom Chatbots & AI Solutions for Triangle Businesses",
    features: [
      'Custom AI Chatbots',
      'LLM Integration',
      'AI Automation',
      'Training & Support'
    ],
    benefits: [
      'Triangle Area Expert',
      'Personal Service',
      'Security Focus'
    ]
  },
  {
    slug: 'ai-developer-near-me',
    title: 'AI Developer Near Me',
    description: 'Local AI development services',
    category: 'Location-Based Services',
    categoryDescription: 'AI development services tailored for specific Triangle area locations',
    order: 6,
    heroTitle: "Local AI Development Services",
    heroSubtitle: "Custom Chatbots & AI Solutions Near You",
    features: [
      'Custom AI Chatbots',
      'LLM Integration',
      'AI Automation',
      'Training & Support'
    ],
    benefits: [
      'Local Expertise',
      'Personal Service',
      'Security Focus'
    ]
  },

  // Industry-Specific Solutions
  {
    slug: 'ai-healthcare',
    title: 'Healthcare AI Solutions',
    description: 'AI solutions for healthcare providers and medical practices',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 7,
    heroTitle: "Healthcare AI Solutions",
    heroSubtitle: "Custom AI for Healthcare Providers & Medical Practices",
    features: [
      'Patient Data Analysis',
      'Appointment Scheduling',
      'Medical Documentation',
      'Compliance & Security'
    ],
    benefits: [
      'HIPAA Compliant',
      'Improved Efficiency',
      'Better Patient Care'
    ]
  },
  {
    slug: 'ai-financial-services',
    title: 'Financial Services AI',
    description: 'AI automation for financial institutions and advisors',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 8,
    heroTitle: "Financial Services AI",
    heroSubtitle: "AI Automation for Financial Institutions & Advisors",
    features: [
      'Risk Assessment',
      'Customer Service',
      'Document Processing',
      'Compliance Monitoring'
    ],
    benefits: [
      'Regulatory Compliance',
      'Cost Reduction',
      'Enhanced Security'
    ]
  },
  {
    slug: 'ai-real-estate',
    title: 'Real Estate AI',
    description: 'AI tools for real estate professionals and agencies',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 9,
    heroTitle: "Real Estate AI",
    heroSubtitle: "AI Tools for Real Estate Professionals & Agencies",
    features: [
      'Property Analysis',
      'Lead Qualification',
      'Market Research',
      'Client Communication'
    ],
    benefits: [
      'Faster Deal Closure',
      'Better Market Insights',
      'Improved Client Experience'
    ]
  },
  {
    slug: 'ai-restaurants',
    title: 'Restaurant AI Solutions',
    description: 'AI automation for restaurants and food service',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 10,
    heroTitle: "Restaurant AI Solutions",
    heroSubtitle: "AI Automation for Restaurants & Food Service",
    features: [
      'Order Management',
      'Customer Service',
      'Inventory Optimization',
      'Marketing Automation'
    ],
    benefits: [
      'Reduced Wait Times',
      'Increased Orders',
      'Better Customer Experience'
    ]
  },
  {
    slug: 'ai-law-firms',
    title: 'Law Firm AI',
    description: 'AI solutions for legal practices and law firms',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 11,
    heroTitle: "Law Firm AI",
    heroSubtitle: "AI Solutions for Legal Practices & Law Firms",
    features: [
      'Document Review',
      'Legal Research',
      'Client Communication',
      'Case Management'
    ],
    benefits: [
      'Faster Research',
      'Reduced Costs',
      'Better Client Service'
    ]
  },
  {
    slug: 'ai-manufacturing',
    title: 'Manufacturing AI',
    description: 'AI automation for manufacturing and industrial companies',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 12,
    heroTitle: "Manufacturing AI",
    heroSubtitle: "AI Automation for Manufacturing & Industrial Companies",
    features: [
      'Predictive Maintenance',
      'Quality Control',
      'Supply Chain Optimization',
      'Production Planning'
    ],
    benefits: [
      'Reduced Downtime',
      'Improved Quality',
      'Cost Savings'
    ]
  },
  {
    slug: 'ai-marketing-agencies',
    title: 'Marketing Agency AI',
    description: 'AI tools for marketing agencies and professionals',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 13,
    heroTitle: "Marketing Agency AI",
    heroSubtitle: "AI Tools for Marketing Agencies & Professionals",
    features: [
      'Content Creation',
      'Campaign Optimization',
      'Lead Generation',
      'Analytics & Reporting'
    ],
    benefits: [
      'Faster Content Creation',
      'Better ROI',
      'Improved Targeting'
    ]
  },
  {
    slug: 'ai-sales-teams',
    title: 'Sales Team AI',
    description: 'AI automation for sales teams and professionals',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 14,
    heroTitle: "Sales Team AI",
    heroSubtitle: "AI Automation for Sales Teams & Professionals",
    features: [
      'Lead Qualification',
      'Follow-up Automation',
      'Sales Forecasting',
      'Customer Insights'
    ],
    benefits: [
      'Increased Conversions',
      'Time Savings',
      'Better Pipeline Management'
    ]
  },
  {
    slug: 'ai-nonprofits',
    title: 'Nonprofit AI',
    description: 'AI solutions for nonprofit organizations',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 15,
    heroTitle: "Nonprofit AI",
    heroSubtitle: "AI Solutions for Nonprofit Organizations",
    features: [
      'Donor Management',
      'Volunteer Coordination',
      'Grant Writing',
      'Impact Measurement'
    ],
    benefits: [
      'Increased Donations',
      'Better Resource Allocation',
      'Enhanced Impact'
    ]
  },
  {
    slug: 'ai-startups',
    title: 'Startup AI',
    description: 'AI development for startups and emerging companies',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 16,
    heroTitle: "Startup AI",
    heroSubtitle: "AI Development for Startups & Emerging Companies",
    features: [
      'MVP Development',
      'Customer Acquisition',
      'Product Optimization',
      'Scaling Solutions'
    ],
    benefits: [
      'Faster Time to Market',
      'Cost-Effective Solutions',
      'Competitive Advantage'
    ]
  },
  {
    slug: 'ai-enterprise',
    title: 'Enterprise AI',
    description: 'Enterprise-grade AI solutions for large organizations',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 17,
    heroTitle: "Enterprise AI",
    heroSubtitle: "Enterprise-Grade AI Solutions for Large Organizations",
    features: [
      'Scalable Architecture',
      'Security & Compliance',
      'Integration Services',
      'Custom Development'
    ],
    benefits: [
      'Enterprise Security',
      'Scalable Solutions',
      'ROI Focused'
    ]
  },
  {
    slug: 'ai-churches',
    title: 'Christian Organizations',
    description: 'AI solutions for churches and Christian organizations',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 18,
    heroTitle: "Christian Organizations AI",
    heroSubtitle: "AI Solutions for Churches & Christian Organizations",
    features: [
      'Member Communication',
      'Event Management',
      'Content Creation',
      'Community Engagement'
    ],
    benefits: [
      'Enhanced Communication',
      'Better Engagement',
      'Resource Optimization'
    ]
  },
  {
    slug: 'ai-christian-education',
    title: 'Christian Education',
    description: 'AI tools for Christian schools and educational institutions',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 19,
    heroTitle: "Christian Education AI",
    heroSubtitle: "AI Tools for Christian Schools & Educational Institutions",
    features: [
      'Student Support',
      'Administrative Tasks',
      'Content Creation',
      'Parent Communication'
    ],
    benefits: [
      'Improved Learning',
      'Administrative Efficiency',
      'Better Communication'
    ]
  },
  {
    slug: 'ai-christian-counseling',
    title: 'Christian Counseling',
    description: 'AI solutions for Christian counseling practices',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 20,
    heroTitle: "Christian Counseling AI",
    heroSubtitle: "AI Solutions for Christian Counseling Practices",
    features: [
      'Appointment Scheduling',
      'Resource Management',
      'Client Communication',
      'Administrative Support'
    ],
    benefits: [
      'Better Client Care',
      'Reduced Administrative Burden',
      'Enhanced Privacy'
    ]
  },
  {
    slug: 'ai-ministries',
    title: 'Ministries AI',
    description: 'AI tools for ministry organizations and religious groups',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 21,
    heroTitle: "Ministries AI",
    heroSubtitle: "AI Tools for Ministry Organizations & Religious Groups",
    features: [
      'Outreach Management',
      'Content Creation',
      'Volunteer Coordination',
      'Resource Management'
    ],
    benefits: [
      'Expanded Reach',
      'Better Resource Use',
      'Enhanced Impact'
    ]
  },
  {
    slug: 'ai-missionaries',
    title: 'Missionaries AI',
    description: 'AI solutions for missionary organizations and workers',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 22,
    heroTitle: "Missionaries AI",
    heroSubtitle: "AI Solutions for Missionary Organizations & Workers",
    features: [
      'Communication Tools',
      'Resource Management',
      'Cultural Adaptation',
      'Support Coordination'
    ],
    benefits: [
      'Better Communication',
      'Resource Optimization',
      'Enhanced Effectiveness'
    ]
  },
  {
    slug: 'ai-boutiques',
    title: 'Boutiques AI',
    description: 'AI automation for boutique retail businesses',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 23,
    heroTitle: "Boutiques AI",
    heroSubtitle: "AI Automation for Boutique Retail Businesses",
    features: [
      'Inventory Management',
      'Customer Service',
      'Marketing Automation',
      'Sales Optimization'
    ],
    benefits: [
      'Reduced Overhead',
      'Better Customer Experience',
      'Increased Sales'
    ]
  },
  {
    slug: 'ai-privacy-tech',
    title: 'Privacy Tech AI',
    description: 'Privacy-focused AI solutions for tech companies',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 24,
    heroTitle: "Privacy Tech AI",
    heroSubtitle: "Privacy-Focused AI Solutions for Tech Companies",
    features: [
      'Privacy-Preserving AI',
      'Data Protection',
      'Compliance Tools',
      'Secure Development'
    ],
    benefits: [
      'Enhanced Privacy',
      'Regulatory Compliance',
      'Customer Trust'
    ]
  },
  {
    slug: 'ai-helpdesk',
    title: 'Helpdesk AI',
    description: 'AI-powered helpdesk and customer support solutions',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 25,
    heroTitle: "Helpdesk AI",
    heroSubtitle: "AI-Powered Helpdesk & Customer Support Solutions",
    features: [
      '24/7 Support',
      'Ticket Management',
      'Knowledge Base',
      'Escalation Handling'
    ],
    benefits: [
      'Faster Resolution',
      'Reduced Costs',
      'Better Customer Satisfaction'
    ]
  },
  {
    slug: 'ai-copywriting',
    title: 'Copywriting AI',
    description: 'AI tools for copywriters and content creators',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 26,
    heroTitle: "Copywriting AI",
    heroSubtitle: "AI Tools for Copywriters & Content Creators",
    features: [
      'Content Generation',
      'SEO Optimization',
      'Brand Voice Consistency',
      'Performance Analytics'
    ],
    benefits: [
      'Faster Content Creation',
      'Better SEO Performance',
      'Consistent Brand Voice'
    ]
  },
  {
    slug: 'ai-tutoring',
    title: 'Tutoring AI',
    description: 'AI solutions for tutoring services and educational support',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 27,
    heroTitle: "Tutoring AI",
    heroSubtitle: "AI Solutions for Tutoring Services & Educational Support",
    features: [
      'Personalized Learning',
      'Progress Tracking',
      'Resource Management',
      'Student Communication'
    ],
    benefits: [
      'Improved Learning Outcomes',
      'Better Student Engagement',
      'Administrative Efficiency'
    ]
  },
  {
    slug: 'ai-vibe-coding',
    title: 'Vibe Coding AI',
    description: 'AI development with a focus on creative coding solutions',
    category: 'Industry-Specific Solutions',
    categoryDescription: 'AI solutions tailored for specific industries and business types',
    order: 28,
    heroTitle: "Vibe Coding AI",
    heroSubtitle: "AI Development with Creative Coding Solutions",
    features: [
      'Creative AI Solutions',
      'Custom Development',
      'Innovation Focus',
      'Technical Excellence'
    ],
    benefits: [
      'Unique Solutions',
      'Technical Innovation',
      'Creative Problem Solving'
    ]
  },

  // Technical Services
  {
    slug: 'custom-chatbots',
    title: 'Custom Chatbots',
    description: 'Custom AI chatbot development and implementation',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 29,
    heroTitle: "Custom Chatbots",
    heroSubtitle: "Custom AI Chatbot Development & Implementation",
    features: [
      'Branded Chatbots',
      'Custom Training',
      'Integration Services',
      'Ongoing Support'
    ],
    benefits: [
      '24/7 Availability',
      'Consistent Service',
      'Cost Reduction'
    ]
  },
  {
    slug: 'chatgpt-developer',
    title: 'ChatGPT Development',
    description: 'Custom ChatGPT integration and development',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 30,
    heroTitle: "ChatGPT Development",
    heroSubtitle: "Custom ChatGPT Integration & Development",
    features: [
      'Custom Integrations',
      'API Development',
      'Prompt Engineering',
      'Security Implementation'
    ],
    benefits: [
      'Advanced AI Capabilities',
      'Custom Solutions',
      'Scalable Architecture'
    ]
  },
  {
    slug: 'claude-ai',
    title: 'Claude AI Development',
    description: 'Anthropic Claude AI integration and custom solutions',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 31,
    heroTitle: "Claude AI Development",
    heroSubtitle: "Anthropic Claude AI Integration & Custom Solutions",
    features: [
      'Claude Integration',
      'Custom Applications',
      'Safety Implementation',
      'Performance Optimization'
    ],
    benefits: [
      'Advanced Safety',
      'High Performance',
      'Custom Solutions'
    ]
  },
  {
    slug: 'gemini-ai',
    title: 'Gemini AI Development',
    description: 'Google Gemini AI integration and development',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 32,
    heroTitle: "Gemini AI Development",
    heroSubtitle: "Google Gemini AI Integration & Development",
    features: [
      'Gemini Integration',
      'Multimodal Solutions',
      'Custom Applications',
      'Performance Optimization'
    ],
    benefits: [
      'Multimodal Capabilities',
      'Google Integration',
      'Advanced AI Features'
    ]
  },
  {
    slug: 'llm-development',
    title: 'LLM Development',
    description: 'Large Language Model development and integration',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 33,
    heroTitle: "LLM Development",
    heroSubtitle: "Large Language Model Development & Integration",
    features: [
      'Custom LLM Training',
      'Model Integration',
      'Performance Optimization',
      'Scalable Architecture'
    ],
    benefits: [
      'Custom AI Models',
      'Optimized Performance',
      'Scalable Solutions'
    ]
  },
  {
    slug: 'rag-development',
    title: 'RAG Development',
    description: 'Retrieval-Augmented Generation development',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 34,
    heroTitle: "RAG Development",
    heroSubtitle: "Retrieval-Augmented Generation Development",
    features: [
      'Vector Database Setup',
      'Embedding Generation',
      'Retrieval Systems',
      'Custom Training'
    ],
    benefits: [
      'Accurate Information',
      'Custom Knowledge Base',
      'Real-time Updates'
    ]
  },
  {
    slug: 'chat-engine-development',
    title: 'Chat Engine Development',
    description: 'Custom chat engine development',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 35,
    heroTitle: "Chat Engine Development",
    heroSubtitle: "Custom Chat Engine Development",
    features: [
      'Custom Architecture',
      'Real-time Processing',
      'Scalable Design',
      'Integration Services'
    ],
    benefits: [
      'Custom Solutions',
      'High Performance',
      'Scalable Architecture'
    ]
  },
  {
    slug: 'context-engineering',
    title: 'Context Engineering',
    description: 'AI context engineering and optimization',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 36,
    heroTitle: "Context Engineering",
    heroSubtitle: "AI Context Engineering & Optimization",
    features: [
      'Context Optimization',
      'Prompt Engineering',
      'Performance Tuning',
      'Custom Solutions'
    ],
    benefits: [
      'Better AI Responses',
      'Improved Accuracy',
      'Custom Optimization'
    ]
  },
  {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'AI prompt engineering and optimization',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 37,
    heroTitle: "Prompt Engineering",
    heroSubtitle: "AI Prompt Engineering & Optimization",
    features: [
      'Prompt Design',
      'Optimization Testing',
      'Performance Analysis',
      'Custom Solutions'
    ],
    benefits: [
      'Better AI Performance',
      'Improved Accuracy',
      'Cost Optimization'
    ]
  },
  {
    slug: 'lora-fine-tuning',
    title: 'LoRA Fine-Tuning',
    description: 'LoRA fine-tuning for custom AI models',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 38,
    heroTitle: "LoRA Fine-Tuning",
    heroSubtitle: "LoRA Fine-Tuning for Custom AI Models",
    features: [
      'Model Fine-tuning',
      'Custom Training',
      'Performance Optimization',
      'Deployment Services'
    ],
    benefits: [
      'Custom AI Models',
      'Improved Performance',
      'Cost-Effective Training'
    ]
  },
  {
    slug: 'vllm-api-development',
    title: 'vLLM API Development',
    description: 'vLLM API development and integration',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 39,
    heroTitle: "vLLM API Development",
    heroSubtitle: "vLLM API Development & Integration",
    features: [
      'API Development',
      'Performance Optimization',
      'Scalable Architecture',
      'Integration Services'
    ],
    benefits: [
      'High Performance',
      'Scalable Solutions',
      'Custom APIs'
    ]
  },
  {
    slug: 'ai-agents',
    title: 'AI Agents',
    description: 'Autonomous AI agent development',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 40,
    heroTitle: "AI Agents",
    heroSubtitle: "Autonomous AI Agent Development",
    features: [
      'Autonomous Agents',
      'Task Automation',
      'Decision Making',
      'Custom Development'
    ],
    benefits: [
      'Automated Processes',
      'Improved Efficiency',
      'Custom Solutions'
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'AI-powered workflow automation',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 41,
    heroTitle: "AI Automation",
    heroSubtitle: "AI-Powered Workflow Automation",
    features: [
      'Workflow Automation',
      'Process Optimization',
      'Integration Services',
      'Custom Development'
    ],
    benefits: [
      'Increased Efficiency',
      'Cost Reduction',
      'Error Reduction'
    ]
  },
  {
    slug: 'ai-business',
    title: 'AI Business Solutions',
    description: 'Comprehensive AI business solutions',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 42,
    heroTitle: "AI Business Solutions",
    heroSubtitle: "Comprehensive AI Business Solutions",
    features: [
      'Strategic Planning',
      'Implementation Services',
      'Training & Support',
      'Ongoing Optimization'
    ],
    benefits: [
      'Strategic Advantage',
      'ROI Focused',
      'Comprehensive Support'
    ]
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    description: 'AI strategy consulting and advisory services',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 43,
    heroTitle: "AI Consulting",
    heroSubtitle: "AI Strategy Consulting & Advisory Services",
    features: [
      'Strategic Assessment',
      'Technology Selection',
      'Implementation Planning',
      'ROI Analysis'
    ],
    benefits: [
      'Strategic Guidance',
      'Risk Mitigation',
      'Cost Optimization'
    ]
  },
  {
    slug: 'ai-consultant',
    title: 'AI Consultant',
    description: 'Expert AI consulting services',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 44,
    heroTitle: "AI Consultant",
    heroSubtitle: "Expert AI Consulting Services",
    features: [
      'Expert Guidance',
      'Technology Assessment',
      'Implementation Support',
      'Ongoing Advisory'
    ],
    benefits: [
      'Expert Knowledge',
      'Strategic Planning',
      'Risk Management'
    ]
  },
  {
    slug: 'ai-expert',
    title: 'AI Expert',
    description: 'Expert AI development and consulting',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 45,
    heroTitle: "AI Expert",
    heroSubtitle: "Expert AI Development & Consulting",
    features: [
      'Expert Development',
      'Strategic Consulting',
      'Implementation Services',
      'Ongoing Support'
    ],
    benefits: [
      'Expert Knowledge',
      'Custom Solutions',
      'Strategic Guidance'
    ]
  },
  {
    slug: 'ai-implementation',
    title: 'AI Implementation',
    description: 'AI implementation and deployment services',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 46,
    heroTitle: "AI Implementation",
    heroSubtitle: "AI Implementation & Deployment Services",
    features: [
      'Implementation Planning',
      'Deployment Services',
      'Training & Support',
      'Ongoing Maintenance'
    ],
    benefits: [
      'Successful Deployment',
      'Reduced Risk',
      'Ongoing Support'
    ]
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    description: 'AI system integration services',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 47,
    heroTitle: "AI Integration",
    heroSubtitle: "AI System Integration Services",
    features: [
      'System Integration',
      'API Development',
      'Data Synchronization',
      'Custom Connectors'
    ],
    benefits: [
      'Seamless Integration',
      'Reduced Complexity',
      'Improved Efficiency'
    ]
  },
  {
    slug: 'ai-marketing',
    title: 'AI Marketing',
    description: 'AI-powered marketing solutions',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 48,
    heroTitle: "AI Marketing",
    heroSubtitle: "AI-Powered Marketing Solutions",
    features: [
      'Content Creation',
      'Campaign Optimization',
      'Lead Generation',
      'Analytics & Insights'
    ],
    benefits: [
      'Improved ROI',
      'Better Targeting',
      'Automated Processes'
    ]
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Comprehensive AI solutions for businesses',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 49,
    heroTitle: "AI Solutions",
    heroSubtitle: "Comprehensive AI Solutions for Businesses",
    features: [
      'Custom Development',
      'Strategic Planning',
      'Implementation Services',
      'Ongoing Support'
    ],
    benefits: [
      'Custom Solutions',
      'Strategic Advantage',
      'Comprehensive Support'
    ]
  },
  {
    slug: 'ai-strategy',
    title: 'AI Strategy',
    description: 'AI strategy development and planning',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 50,
    heroTitle: "AI Strategy",
    heroSubtitle: "AI Strategy Development & Planning",
    features: [
      'Strategic Assessment',
      'Technology Roadmap',
      'Implementation Planning',
      'ROI Analysis'
    ],
    benefits: [
      'Strategic Clarity',
      'Risk Mitigation',
      'Cost Optimization'
    ]
  },
  {
    slug: 'ai-training',
    title: 'AI Training',
    description: 'AI training and education services',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 51,
    heroTitle: "AI Training",
    heroSubtitle: "AI Training & Education Services",
    features: [
      'Custom Training Programs',
      'Workshop Development',
      'Ongoing Education',
      'Certification Support'
    ],
    benefits: [
      'Skill Development',
      'Knowledge Transfer',
      'Improved Adoption'
    ]
  },
  {
    slug: 'ai-services',
    title: 'AI Services',
    description: 'Complete AI development services',
    category: 'Technical Services',
    categoryDescription: 'Specialized AI development and technical services',
    order: 52,
    heroTitle: "AI Services",
    heroSubtitle: "Complete AI Development Services",
    features: [
      'Full-Service Development',
      'Strategic Consulting',
      'Implementation Services',
      'Ongoing Support'
    ],
    benefits: [
      'One-Stop Solution',
      'Expert Knowledge',
      'Comprehensive Support'
    ]
  }
];

export const serviceCategories = [
  {
    title: 'Location-Based Services',
    description: 'AI development services tailored for specific Triangle area locations',
    services: services.filter(service => service.category === 'Location-Based Services')
  },
  {
    title: 'Industry-Specific Solutions',
    description: 'AI solutions tailored for specific industries and business types',
    services: services.filter(service => service.category === 'Industry-Specific Solutions')
  },
  {
    title: 'Technical Services',
    description: 'Specialized AI development and technical services',
    services: services.filter(service => service.category === 'Technical Services')
  }
]; 