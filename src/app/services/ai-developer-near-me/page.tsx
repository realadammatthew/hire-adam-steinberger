import Link from 'next/link';

export default function AIDeveloperNearMePage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Local AI Developer Near You</h2>
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Serving Triangle Area Businesses with Custom AI Solutions</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Looking for an AI developer near you? I&apos;m based in Wake Forest and serve the entire Triangle area—Raleigh, Durham, Cary, and beyond. Get local expertise with personal service.
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Serving Your Local Area</h4>
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
              <h5>Wake Forest</h5>
              <p>Based in Wake Forest, NC with deep understanding of local business needs and regulations</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-city fa-2x mb-3"></i>
              <h5>Raleigh</h5>
              <p>Serving Raleigh&apos;s tech ecosystem with custom AI solutions for growing businesses</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-university fa-2x mb-3"></i>
              <h5>Durham</h5>
              <p>Supporting Durham&apos;s innovative businesses with AI automation and chatbot solutions</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-building fa-2x mb-3"></i>
              <h5>Cary</h5>
              <p>Helping Cary businesses leverage AI technology for competitive advantage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Why Choose a Local AI Developer?</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-handshake"></i> Personal Service</h5>
              <p>Face-to-face consultations, ongoing support, and direct communication. No overseas outsourcing or impersonal service.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-map-marker-alt"></i> Local Knowledge</h5>
              <p>Understanding of Triangle area business landscape, regulations, and market dynamics that affect your AI implementation.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-clock"></i> Quick Response</h5>
              <p>Same timezone support and rapid response times for urgent issues or questions about your AI systems.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-shield-alt"></i> Trust & Security</h5>
              <p>Local accountability and security standards that protect your sensitive business data and AI systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Local AI Development Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-star"></i> Comprehensive AI Solutions</h5>
              <p>As your local AI developer, I provide end-to-end AI solutions tailored to Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Custom AI Chatbots:</strong> Trained on your business data and brand voice</li>
                <li><strong>LLM Integration:</strong> ChatGPT, Claude, Gemini, and Mistral implementations</li>
                <li><strong>AI Automation:</strong> Workflow automation and business process optimization</li>
                <li><strong>Security & Compliance:</strong> North Carolina business regulation compliance</li>
                <li><strong>Training & Support:</strong> Team training and ongoing local support</li>
              </ul>
              <p>Whether you&apos;re in Wake Forest, Raleigh, Durham, Cary, or anywhere in the Triangle area, you get the same high-quality AI development with local expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Success Stories */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Local Business Success</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Real Estate Platform</h5>
              <p>Helped a Triangle area real estate platform reduce support tickets by 40% and increase lead capture by 3x using custom AI chatbots.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-heart"></i> Nonprofit Organization</h5>
              <p>Built AI solutions for a local nonprofit, saving staff over 30 hours/month in repetitive email responses and improving grant application processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See Local AI in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience how local AI development can transform your Triangle area business. Try the live demo to see custom AI solutions in action.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready to Work with a Local AI Developer?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss how local AI expertise can benefit your Triangle area business. Schedule a free consultation to explore your options.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Free Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Wake Forest, Raleigh, Durham, Cary, and the entire Triangle area with local AI expertise.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 