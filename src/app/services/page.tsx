import Link from 'next/link';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'Location-Based Services',
      description: 'AI development services tailored for specific Triangle area locations',
      services: [
        { name: 'Raleigh AI Developer', slug: 'ai-raleigh', description: 'Custom chatbots and LLM solutions for Raleigh businesses' },
        { name: 'Durham AI Developer', slug: 'ai-durham', description: 'AI development services for Durham companies' },
        { name: 'Cary AI Developer', slug: 'ai-cary', description: 'Custom AI solutions for Cary businesses' },
        { name: 'Wake Forest AI Developer', slug: 'ai-wake-forest', description: 'AI development services for Wake Forest companies' },
        { name: 'Triangle AI Developer', slug: 'triangle-ai-developer', description: 'Triangle area AI development services' },
        { name: 'AI Developer Near Me', slug: 'ai-developer-near-me', description: 'Local AI development services' }
      ]
    },
    {
      title: 'Industry-Specific Solutions',
      description: 'AI solutions tailored for specific industries and business types',
      services: [
        { name: 'Healthcare AI Solutions', slug: 'ai-healthcare', description: 'AI solutions for healthcare providers and medical practices' },
        { name: 'Financial Services AI', slug: 'ai-financial-services', description: 'AI automation for financial institutions and advisors' },
        { name: 'Real Estate AI', slug: 'ai-real-estate', description: 'AI tools for real estate professionals and agencies' },
        { name: 'Restaurant AI Solutions', slug: 'ai-restaurants', description: 'AI automation for restaurants and food service' },
        { name: 'Law Firm AI', slug: 'ai-law-firms', description: 'AI solutions for legal practices and law firms' },
        { name: 'Manufacturing AI', slug: 'ai-manufacturing', description: 'AI automation for manufacturing and industrial companies' },
        { name: 'Marketing Agency AI', slug: 'ai-marketing-agencies', description: 'AI tools for marketing agencies and professionals' },
        { name: 'Sales Team AI', slug: 'ai-sales-teams', description: 'AI automation for sales teams and professionals' },
        { name: 'Nonprofit AI', slug: 'ai-nonprofits', description: 'AI solutions for nonprofit organizations' },
        { name: 'Startup AI', slug: 'ai-startups', description: 'AI development for startups and emerging companies' },
        { name: 'Enterprise AI', slug: 'ai-enterprise', description: 'Enterprise-grade AI solutions for large organizations' },
        { name: 'Christian Organizations', slug: 'ai-churches', description: 'AI solutions for churches and Christian organizations' },
        { name: 'Christian Education', slug: 'ai-christian-education', description: 'AI tools for Christian schools and educational institutions' },
        { name: 'Christian Counseling', slug: 'ai-christian-counseling', description: 'AI solutions for Christian counseling practices' },
        { name: 'Ministries AI', slug: 'ai-ministries', description: 'AI tools for ministry organizations and religious groups' },
        { name: 'Missionaries AI', slug: 'ai-missionaries', description: 'AI solutions for missionary organizations and workers' },
        { name: 'Boutiques AI', slug: 'ai-boutiques', description: 'AI automation for boutique retail businesses' },
        { name: 'Privacy Tech AI', slug: 'ai-privacy-tech', description: 'Privacy-focused AI solutions for tech companies' },
        { name: 'Helpdesk AI', slug: 'ai-helpdesk', description: 'AI-powered helpdesk and customer support solutions' },
        { name: 'Copywriting AI', slug: 'ai-copywriting', description: 'AI tools for copywriters and content creators' },
        { name: 'Tutoring AI', slug: 'ai-tutoring', description: 'AI solutions for tutoring services and educational support' },
        { name: 'Vibe Coding AI', slug: 'ai-vibe-coding', description: 'AI development with a focus on creative coding solutions' }
      ]
    },
    {
      title: 'Technical Services',
      description: 'Specialized AI development and technical services',
      services: [
        { name: 'Custom Chatbots', slug: 'custom-chatbots', description: 'Custom AI chatbot development and implementation' },
        { name: 'ChatGPT Development', slug: 'chatgpt-developer', description: 'Custom ChatGPT integration and development' },
        { name: 'Claude AI Development', slug: 'claude-ai', description: 'Anthropic Claude AI integration and custom solutions' },
        { name: 'Gemini AI Development', slug: 'gemini-ai', description: 'Google Gemini AI integration and development' },
        { name: 'LLM Development', slug: 'llm-development', description: 'Large Language Model development and integration' },
        { name: 'RAG Development', slug: 'rag-development', description: 'Retrieval-Augmented Generation development' },
        { name: 'Chat Engine Development', slug: 'chat-engine-development', description: 'Custom chat engine development' },
        { name: 'Context Engineering', slug: 'context-engineering', description: 'AI context engineering and optimization' },
        { name: 'Prompt Engineering', slug: 'prompt-engineering', description: 'AI prompt engineering and optimization' },
        { name: 'LoRA Fine-Tuning', slug: 'lora-fine-tuning', description: 'LoRA fine-tuning for custom AI models' },
        { name: 'VLLM API Development', slug: 'vllm-api-development', description: 'VLLM API development and integration' },
        { name: 'AI Agents', slug: 'ai-agents', description: 'Autonomous AI agent development' },
        { name: 'AI Automation', slug: 'ai-automation', description: 'AI-powered workflow automation' },
        { name: 'AI Business Solutions', slug: 'ai-business', description: 'Comprehensive AI business solutions' },
        { name: 'AI Consulting', slug: 'ai-consulting', description: 'AI strategy consulting and advisory services' },
        { name: 'AI Consultant', slug: 'ai-consultant', description: 'Expert AI consulting services' },
        { name: 'AI Expert', slug: 'ai-expert', description: 'Expert AI development and consulting' },
        { name: 'AI Implementation', slug: 'ai-implementation', description: 'AI implementation and deployment services' },
        { name: 'AI Integration', slug: 'ai-integration', description: 'AI system integration services' },
        { name: 'AI Marketing', slug: 'ai-marketing', description: 'AI-powered marketing solutions' },
        { name: 'AI Solutions', slug: 'ai-solutions', description: 'Comprehensive AI solutions for businesses' },
        { name: 'AI Strategy', slug: 'ai-strategy', description: 'AI strategy development and planning' },
        { name: 'AI Training', slug: 'ai-training', description: 'AI training and education services' },
        { name: 'AI Services', slug: 'ai-services', description: 'Complete AI development services' },
      ]
    }
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="fw-bold headline-gradient text-center mb-5">AI Development Services</h1>
          <p className="lead text-center mb-5">
            Comprehensive AI development services tailored for Triangle area businesses. 
            From custom chatbots to enterprise AI solutions, I help businesses leverage AI technology effectively.
          </p>

          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-5">
              <h2 className="fw-bold section-headline-gold mb-4">{category.title}</h2>
              <p className="text-secondary mb-4">{category.description}</p>
              
              <div className="row g-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="col-md-6 col-lg-4">
                    <div className="card solution-card h-100">
                      <div className="card-body">
                        <h5 className="fw-bold mb-3">{service.name}</h5>
                        <p className="text-secondary mb-3">{service.description}</p>
                        <Link 
                          href={`/services/${service.slug}`} 
                          className="btn btn-outline-primary btn-sm"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-5">
            <div className="enhanced-cta">
              <h4>Ready to Get Started?</h4>
              <p>Schedule a free consultation to discuss your AI development needs.</p>
              <a 
                href="https://tidycal.com/realadammatthew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-lg fw-bold shadow-lg"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 