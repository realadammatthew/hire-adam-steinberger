
export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Comprehensive AI Services</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Complete AI Services for Triangle Area Businesses</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            From development to consulting, integration to training, I provide comprehensive AI services that help Triangle area businesses leverage artificial intelligence for growth, efficiency, and competitive advantage.
          </div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Complete AI Services Portfolio</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-code fa-2x mb-3"></i>
              <h5>AI Development Services</h5>
              <p>Custom AI chatbot development, machine learning systems, and AI application creation for your business needs</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h5>AI Consulting Services</h5>
              <p>Strategic AI consulting, implementation planning, and technical guidance for AI transformation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-plug fa-2x mb-3"></i>
              <h5>AI Integration Services</h5>
              <p>Seamless AI system integration with your existing tools and workflows for maximum efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Service Categories</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-robot"></i> AI Development</h5>
              <p>Custom AI chatbot development, machine learning systems, and AI application creation tailored to your business requirements.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-lightbulb"></i> AI Consulting</h5>
              <p>Strategic AI consulting, implementation planning, and technical guidance to ensure successful AI transformation.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-cogs"></i> AI Integration</h5>
              <p>Seamless integration of AI systems with your existing business tools and workflows for optimal performance.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-graduation-cap"></i> AI Training</h5>
              <p>Comprehensive AI education and training programs to empower your team with AI knowledge and skills.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-automation"></i> AI Automation</h5>
              <p>Intelligent workflow automation and AI-powered business processes to streamline operations and reduce costs.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-brain"></i> LLM Development</h5>
              <p>Custom language model development and integration for advanced AI applications and natural language processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Benefits of AI Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transform Your Business with AI Services</h5>
              <p>Comprehensive AI services deliver powerful benefits for Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Cost Reduction:</strong> AI automation and optimization reduce operational costs by 30-60%</li>
                <li><strong>Increased Efficiency:</strong> Streamlined workflows and automated processes improve productivity</li>
                <li><strong>Competitive Advantage:</strong> Advanced AI capabilities help you stay ahead of competitors</li>
                <li><strong>Data-Driven Insights:</strong> AI-powered analytics uncover valuable business intelligence</li>
                <li><strong>24/7 Availability:</strong> AI systems work around the clock without human intervention</li>
                <li><strong>Scalable Growth:</strong> AI solutions that grow with your business needs and demands</li>
              </ul>
              <p>My comprehensive AI services are designed to deliver measurable ROI and long-term business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Service Process</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-search"></i> Discovery & Analysis</h5>
              <p>Comprehensive analysis of your business needs, current systems, and AI opportunities for optimal service delivery.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-lightbulb"></i> Service Design</h5>
              <p>Custom AI service design tailored to your specific business requirements and technical constraints.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-cogs"></i> Implementation & Support</h5>
              <p>Professional implementation of AI services with ongoing support and optimization for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Services in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience comprehensive AI services in action. Try the live demo to see professional AI implementation.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Service Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Service Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transparent Service Pricing</h5>
              <p>AI services are priced based on complexity and scope:</p>
              <ul className="mb-4">
                <li><strong>AI Development Services:</strong> $8K-35K+ for custom AI development and chatbot creation</li>
                <li><strong>AI Consulting Services:</strong> $150-300/hour for strategic AI consulting and planning</li>
                <li><strong>AI Integration Services:</strong> $5K-25K for seamless AI system integration</li>
                <li><strong>AI Training Services:</strong> $2K-15K for comprehensive AI education programs</li>
                <li><strong>AI Automation Services:</strong> $8K-25K for intelligent workflow automation</li>
              </ul>
              <p>Most AI service projects deliver ROI within 6-12 months through cost savings and efficiency gains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready for AI Services?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your AI service needs and explore how comprehensive AI services can transform your business.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Free Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with comprehensive AI services and expert support.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 