export default function TriangleAIDeveloperPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>
              Triangle Area's Premier AI Developer
            </h1>
            <h2 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>
              Custom AI Solutions for Research Triangle Businesses
            </h2>
            <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
              <div className="alert custom-alert p-4 mb-4 shadow-lg">
                Serving the entire Research Triangle area with secure, branded AI solutions. From Raleigh to Durham, Cary to Wake Forest, I help Triangle businesses leverage AI technology effectively.
              </div>
            </div>
          </section>

          {/* Triangle Area Coverage */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-gold text-center">Serving the Entire Triangle Area</h3>
            <div className="row justify-content-center">
              <div className="col-md-3 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                  <h5>Raleigh</h5>
                  <p>Capital city businesses and government agencies with custom AI solutions</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card purple-box credential-card">
                  <i className="fas fa-university fa-2x mb-3"></i>
                  <h5>Durham</h5>
                  <p>Duke University area and tech startups with innovative AI applications</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-building fa-2x mb-3"></i>
                  <h5>Cary</h5>
                  <p>Suburban businesses and corporate headquarters with AI automation</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card purple-box credential-card">
                  <i className="fas fa-home fa-2x mb-3"></i>
                  <h5>Wake Forest</h5>
                  <p>Local businesses and growing community with personalized AI solutions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-green text-center">Triangle AI Development Services</h3>
            <div className="row justify-content-center g-4">
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-robot"></i> Custom AI Chatbots</h5>
                  <p>Branded chatbots trained on your business data, customer interactions, and brand voice. Perfect for 24/7 customer support and lead qualification across the Triangle.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-brain"></i> AI Integration</h5>
                  <p>Custom implementations using ChatGPT, Claude, Gemini, and Mistral. Secure, scalable solutions tailored to your specific use cases and business needs.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-cogs"></i> AI Automation</h5>
                  <p>Workflow automation and AI-powered business processes. Integrate with your existing tools and systems for maximum efficiency and ROI.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-graduation-cap"></i> Training & Support</h5>
                  <p>Comprehensive training for your team and ongoing support to ensure successful AI implementation and adoption across your organization.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Triangle Expertise */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-blue text-center">Triangle Area Expertise</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card purple-box knowledge-card mb-4">
                  <h5 className="mb-3"><i className="fas fa-star"></i> Local Knowledge You Can Trust</h5>
                  <p>As a Triangle area AI developer, I understand the unique business landscape and opportunities across the Research Triangle:</p>
                  <ul className="mb-4">
                    <li><strong>Raleigh:</strong> Government contracts, healthcare, and financial services AI solutions</li>
                    <li><strong>Durham:</strong> University partnerships, biotech, and startup AI applications</li>
                    <li><strong>Cary:</strong> Corporate headquarters and suburban business AI automation</li>
                    <li><strong>Wake Forest:</strong> Local business growth and community-focused AI solutions</li>
                    <li><strong>Research Triangle Park:</strong> Tech company partnerships and innovation hub connections</li>
                  </ul>
                  <p>My deep understanding of the Triangle's diverse business ecosystem ensures AI solutions that truly fit your local market and competitive landscape.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-gold text-center">See Triangle AI in Action</h3>
            <div className="text-center my-4">
              <p className="mb-4">Experience how AI can transform Triangle area businesses. Try the live demo to see custom AI solutions in action.</p>
              <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
                Try the Live Demo
              </a>
            </div>
          </section>

          {/* Consultation CTA */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-blue text-center">Ready to Transform Your Triangle Business?</h3>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <p className="mb-4">Let's discuss how AI can accelerate your Triangle business growth. Schedule a free consultation to explore your AI opportunities.</p>
                <a 
                  href="https://tidycal.com/realadammatthew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn"
                >
                  Schedule Free Consultation
                </a>
                <p className="mt-3 text-secondary">Serving Raleigh, Durham, Cary, Wake Forest, and the entire Research Triangle area.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 