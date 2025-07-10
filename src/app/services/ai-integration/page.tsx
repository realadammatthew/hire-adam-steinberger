import Link from 'next/link';

export default function AIIntegrationPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Expert AI Integration</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Custom AI System Integration for Triangle Area Businesses</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Seamlessly integrate AI systems with your existing tools and workflows. My AI integration services help Triangle area businesses connect ChatGPT, Claude, Gemini, and Mistral to their current systems.
          </div>
        </div>
      </section>

      {/* AI Integration Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Integration Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fab fa-openai fa-2x mb-3"></i>
              <h5>ChatGPT Integration</h5>
              <p>Custom ChatGPT API integration for customer service, content generation, and business automation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-brain fa-2x mb-3"></i>
              <h5>Claude Integration</h5>
              <p>Anthropic Claude API integration for complex reasoning, analysis, and safety-focused applications</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fab fa-google fa-2x mb-3"></i>
              <h5>Gemini Integration</h5>
              <p>Google Gemini API integration for multimodal applications, text, and visual content processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Integration Process</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-search"></i> System Analysis</h5>
              <p>Comprehensive analysis of your existing systems, APIs, and workflows to identify optimal integration points.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-cogs"></i> API Development</h5>
              <p>Custom API development and integration with ChatGPT, Claude, Gemini, and Mistral APIs for your specific use cases.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-shield-alt"></i> Security Implementation</h5>
              <p>Enterprise-grade security measures including authentication, data encryption, and access controls for safe AI integration.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Testing & Deployment</h5>
              <p>Comprehensive testing and seamless deployment of AI integrations with ongoing monitoring and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Benefits of AI Integration</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transform Your Business Systems</h5>
              <p>AI integration delivers powerful benefits for Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Seamless Workflow:</strong> Integrate AI into existing tools without disrupting current processes</li>
                <li><strong>Data Security:</strong> Enterprise-grade security measures protect sensitive business information</li>
                <li><strong>Scalable Solutions:</strong> AI integrations that grow with your business needs</li>
                <li><strong>Cost Efficiency:</strong> Leverage existing infrastructure while adding AI capabilities</li>
                <li><strong>Custom Functionality:</strong> Tailored AI features that match your specific business requirements</li>
                <li><strong>24/7 Availability:</strong> AI systems that work around the clock without human intervention</li>
              </ul>
              <p>My AI integration approach ensures your existing systems work smarter, not harder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Technologies */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Integration Technologies</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-code"></i> REST APIs</h5>
              <p>Custom REST API development for seamless integration with your existing web applications and services.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-database"></i> Database Integration</h5>
              <p>Direct database integration for real-time AI processing of your business data and customer information.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-cloud"></i> Cloud Services</h5>
              <p>Cloud-based AI integration with AWS, Azure, and Google Cloud for scalable, reliable AI services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Integration in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience how AI integration can transform your business systems. Try the live demo to see seamless AI integration in action.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Integration Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Integration Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transparent Integration Pricing</h5>
              <p>AI integration projects are priced based on complexity and scope:</p>
              <ul className="mb-4">
                <li><strong>Basic Integration:</strong> $5K-12K for single AI model integration with existing systems</li>
                <li><strong>Multi-Model Integration:</strong> $12K-25K for comprehensive AI platform integration</li>
                <li><strong>Enterprise Integration:</strong> $25K+ for complex enterprise AI system integration</li>
                <li><strong>Ongoing Support:</strong> Monthly maintenance and optimization services available</li>
              </ul>
              <p>All integration projects include security implementation, testing, and deployment support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready for AI Integration?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your AI integration needs and explore how to seamlessly connect AI with your existing business systems.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Free Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with expert AI integration services.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 