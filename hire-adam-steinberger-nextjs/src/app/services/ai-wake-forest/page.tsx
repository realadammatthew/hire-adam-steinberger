export default function WakeForestAIPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>
              Wake Forest's Premier AI Developer
            </h1>
            <h2 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>
              Custom Chatbots & AI Solutions for Triangle Area Businesses
            </h2>
            <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
              <div className="alert custom-alert p-4 mb-4 shadow-lg">
                Serving Wake Forest and the Triangle area with secure, branded AI solutions. From custom chatbots to enterprise AI integration, I help local businesses leverage AI technology effectively.
              </div>
            </div>
          </section>

          {/* Local Expertise Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-gold text-center">Why Choose a Local Wake Forest AI Developer?</h3>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                  <h5>Triangle Area Expert</h5>
                  <p>Deep understanding of Wake Forest's tech ecosystem and business landscape, serving the entire Triangle area</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card purple-box credential-card">
                  <i className="fas fa-handshake fa-2x mb-3"></i>
                  <h5>Personal Service</h5>
                  <p>Face-to-face consultations and ongoing support for Wake Forest businesses and surrounding communities</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-shield-alt fa-2x mb-3"></i>
                  <h5>Security Focus</h5>
                  <p>Privacy-first AI solutions built with enterprise-grade security for sensitive business data</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-green text-center">AI Development Services in Wake Forest</h3>
            <div className="row justify-content-center g-4">
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-robot"></i> Custom AI Chatbots</h5>
                  <p>Branded chatbots trained on your business data, customer interactions, and brand voice. Perfect for 24/7 customer support and lead qualification.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-brain"></i> AI Integration</h5>
                  <p>Custom implementations using ChatGPT, Claude, Gemini, and Mistral. Secure, scalable solutions tailored to your specific use cases.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-cogs"></i> AI Automation</h5>
                  <p>Workflow automation and AI-powered business processes. Integrate with your existing tools and systems for maximum efficiency.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-graduation-cap"></i> Training & Support</h5>
                  <p>Comprehensive training for your team and ongoing support to ensure successful AI implementation and adoption.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Success Stories */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-blue text-center">Serving Wake Forest & Triangle Area</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card purple-box knowledge-card mb-4">
                  <h5 className="mb-3"><i className="fas fa-star"></i> Local Expertise You Can Trust</h5>
                  <p>As a Triangle area AI developer, I understand the unique challenges and opportunities facing Wake Forest businesses. My solutions are designed with local business needs in mind:</p>
                  <ul className="mb-4">
                    <li>Compliance with North Carolina business regulations</li>
                    <li>Integration with popular Triangle area business tools</li>
                    <li>Understanding of Wake Forest's tech ecosystem and market dynamics</li>
                    <li>Personal, hands-on support and consultation</li>
                  </ul>
                  <p>Whether you're in Wake Forest, Raleigh, Durham, or Cary, I provide the same high-quality AI development services with local expertise.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-gold text-center">See AI in Action</h3>
            <div className="text-center my-4">
              <p className="mb-4">Experience a live demo of a custom AI assistant. See how Wake Forest businesses can leverage AI technology effectively.</p>
              <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
                Try the Live Demo
              </a>
            </div>
          </section>

          {/* Consultation CTA */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-blue text-center">Ready to Get Started?</h3>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <p className="mb-4">Let's discuss how AI can transform your Wake Forest business. Schedule a free consultation to explore your options.</p>
                <a 
                  href="https://tidycal.com/realadammatthew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn"
                >
                  Schedule Free Consultation
                </a>
                <p className="mt-3 text-secondary">Serving Wake Forest, Raleigh, Durham, Cary, and the entire Triangle area.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 