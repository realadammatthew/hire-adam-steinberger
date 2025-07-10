import Link from 'next/link';

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Expert AI Consulting</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Comprehensive AI Consulting for Triangle Area Businesses</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Transform your business with expert AI consulting services. I provide comprehensive AI consulting including strategy development, implementation guidance, and optimization services to help Triangle area businesses successfully adopt and leverage AI technology.
          </div>
        </div>
      </section>

      {/* AI Consulting Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Consulting Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-lightbulb fa-2x mb-3"></i>
              <h5>AI Strategy Consulting</h5>
              <p>Comprehensive AI strategy development, opportunity assessment, and implementation roadmap planning</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-cogs fa-2x mb-3"></i>
              <h5>AI Implementation Consulting</h5>
              <p>Expert guidance on AI implementation, technology selection, and technical architecture design</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h5>AI Optimization Consulting</h5>
              <p>AI system optimization, performance improvement, and ongoing enhancement consulting services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Consulting Areas</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-search"></i> AI Opportunity Assessment</h5>
              <p>Comprehensive analysis of your business to identify AI opportunities and potential ROI areas for implementation.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-road"></i> AI Strategy Development</h5>
              <p>Custom AI strategy creation with clear objectives, technology roadmap, and implementation timeline.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-cogs"></i> Technology Selection</h5>
              <p>Expert guidance on AI technology selection, vendor evaluation, and platform comparison for your needs.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-plug"></i> Integration Planning</h5>
              <p>Strategic planning for AI system integration with existing business tools and workflows.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-users"></i> Change Management</h5>
              <p>Consulting on organizational change management, team training, and AI adoption strategies.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Performance Optimization</h5>
              <p>AI system performance analysis and optimization consulting for maximum efficiency and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Consulting Benefits</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Expert Guidance for AI Success</h5>
              <p>AI consulting delivers powerful benefits for Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Risk Reduction:</strong> Expert guidance minimizes implementation risks and ensures proper planning</li>
                <li><strong>Cost Optimization:</strong> Strategic consulting helps optimize AI investments and technology choices</li>
                <li><strong>Faster Implementation:</strong> Professional guidance accelerates AI adoption and time-to-value</li>
                <li><strong>Better ROI:</strong> Strategic approach maximizes return on AI investments and technology decisions</li>
                <li><strong>Change Management:</strong> Expert consulting ensures smooth AI adoption and team buy-in</li>
                <li><strong>Ongoing Support:</strong> Continuous consulting support for optimization and enhancement</li>
              </ul>
              <p>My AI consulting approach ensures your AI initiatives deliver maximum business value and competitive advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Consulting Process</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-search"></i> Discovery & Analysis</h5>
              <p>Comprehensive analysis of your business needs, current systems, and AI opportunities for strategic planning.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-lightbulb"></i> Strategy Development</h5>
              <p>Custom AI strategy creation with implementation roadmap and ROI projections for business transformation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-rocket"></i> Implementation Support</h5>
              <p>Ongoing consulting support during AI implementation to ensure successful transformation and ROI achievement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Consulting in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience AI consulting results in action. Try the live demo to see strategic AI implementation.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Consulting Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Consulting Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transparent Consulting Pricing</h5>
              <p>AI consulting services are priced based on scope and complexity:</p>
              <ul className="mb-4">
                <li><strong>AI Strategy Assessment:</strong> $2K-5K for comprehensive business analysis and opportunity identification</li>
                <li><strong>AI Strategy Development:</strong> $5K-15K for complete AI strategy with implementation roadmap</li>
                <li><strong>AI Implementation Consulting:</strong> $8K-25K for execution support and change management</li>
                <li><strong>Ongoing Consulting Support:</strong> $150-300/hour for ongoing strategic guidance and optimization</li>
              </ul>
              <p>AI consulting investments typically deliver 3-5x ROI through improved efficiency and competitive positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready for AI Consulting?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your AI consulting needs and explore how expert AI guidance can transform your business.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule AI Consulting
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with expert AI consulting services and strategic guidance.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 