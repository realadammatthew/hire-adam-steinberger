import Link from 'next/link';

export default function AIMarketingPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>AI Marketing Solutions</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>AI-Powered Marketing Solutions for Triangle Area Businesses</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Transform your marketing with AI-powered solutions that automate campaigns, generate content, and drive leads. My AI marketing solutions help Triangle area businesses increase efficiency, improve ROI, and scale their marketing efforts.
          </div>
        </div>
      </section>

      {/* AI Marketing Solutions */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Marketing Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-cogs fa-2x mb-3"></i>
              <h5>AI Marketing Automation</h5>
              <p>Intelligent marketing automation for email campaigns, social media, and lead nurturing with AI-powered optimization</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-edit fa-2x mb-3"></i>
              <h5>AI Content Generation</h5>
              <p>AI-powered content creation for blog posts, social media, email campaigns, and marketing materials</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-users fa-2x mb-3"></i>
              <h5>AI Lead Generation</h5>
              <p>AI-powered lead qualification, scoring, and nurturing systems to improve conversion rates and sales efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Applications */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Marketing Applications</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-envelope"></i> Email Marketing AI</h5>
              <p>AI-powered email marketing automation, personalization, and optimization for improved open rates and conversions.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-share-alt"></i> Social Media AI</h5>
              <p>AI-powered social media content creation, scheduling, and engagement optimization for better brand presence.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-blog"></i> Content Marketing AI</h5>
              <p>AI-powered blog post creation, SEO optimization, and content strategy development for better search rankings.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Marketing Analytics AI</h5>
              <p>AI-powered marketing analytics and insights to optimize campaigns and improve marketing ROI.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-bullseye"></i> Ad Campaign AI</h5>
              <p>AI-powered ad campaign optimization, targeting, and performance analysis for better advertising results.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-user-plus"></i> Lead Nurturing AI</h5>
              <p>AI-powered lead scoring, qualification, and automated nurturing sequences for improved conversion rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Marketing Benefits</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transform Your Marketing with AI</h5>
              <p>AI marketing solutions deliver powerful benefits for Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Increased Efficiency:</strong> AI automation reduces manual marketing tasks by 70-80%</li>
                <li><strong>Better ROI:</strong> AI optimization improves marketing campaign performance and conversion rates</li>
                <li><strong>Personalization:</strong> AI enables hyper-personalized marketing experiences for better engagement</li>
                <li><strong>Content Creation:</strong> AI generates high-quality marketing content at scale</li>
                <li><strong>Lead Quality:</strong> AI lead scoring improves lead quality and sales conversion rates</li>
                <li><strong>24/7 Marketing:</strong> AI systems work around the clock to nurture leads and engage customers</li>
              </ul>
              <p>My AI marketing solutions are designed to deliver measurable ROI and long-term marketing success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Marketing Implementation Process</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-search"></i> Marketing Analysis</h5>
              <p>Comprehensive analysis of your current marketing processes, goals, and AI opportunities for optimal solution design.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-lightbulb"></i> Solution Design</h5>
              <p>Custom AI marketing solution design tailored to your specific marketing needs and business objectives.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-rocket"></i> Implementation & Optimization</h5>
              <p>Professional implementation of AI marketing solutions with ongoing optimization and performance monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Marketing in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience AI marketing solutions in action. Try the live demo to see how AI transforms marketing operations.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Marketing Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Marketing Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transparent Marketing Pricing</h5>
              <p>AI marketing solutions are priced based on complexity and scope:</p>
              <ul className="mb-4">
                <li><strong>Basic AI Marketing:</strong> $5K-12K for single AI marketing application with automation</li>
                <li><strong>Comprehensive AI Marketing Platform:</strong> $12K-30K for multi-channel AI marketing solutions</li>
                <li><strong>Enterprise AI Marketing Suite:</strong> $30K+ for complete AI marketing transformation</li>
                <li><strong>Ongoing Support:</strong> Monthly maintenance and optimization services available</li>
              </ul>
              <p>Most AI marketing solutions deliver ROI within 3-6 months through improved efficiency and conversion rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready for AI Marketing?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your AI marketing needs and explore how AI marketing solutions can transform your business growth.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Marketing Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with comprehensive AI marketing solutions and expert support.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 