import Link from 'next/link';

export default function AIConsultantPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Expert AI Consultant</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>AI Strategy & Implementation for Triangle Area Businesses</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Navigate the complex world of AI with expert guidance. From strategy development to implementation, I help Triangle area businesses leverage AI technology effectively and responsibly.
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Consulting Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h5>AI Strategy Development</h5>
              <p>Comprehensive AI roadmaps tailored to your business goals, resources, and competitive landscape</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-cogs fa-2x mb-3"></i>
              <h5>Implementation Guidance</h5>
              <p>Technical consulting and project management for successful AI deployment and integration</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-graduation-cap fa-2x mb-3"></i>
              <h5>Team Training</h5>
              <p>Comprehensive training programs to ensure your team can effectively use and maintain AI systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">My AI Consulting Process</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-search"></i> Assessment & Discovery</h5>
              <p>Deep dive into your business processes, data infrastructure, and AI readiness. Identify opportunities and potential challenges for AI implementation.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-route"></i> Strategy Development</h5>
              <p>Create a comprehensive AI roadmap with clear milestones, resource requirements, and success metrics tailored to your business objectives.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-tools"></i> Implementation Support</h5>
              <p>Provide technical guidance, vendor selection, and project management to ensure successful AI deployment and integration.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-bar"></i> Optimization & Scaling</h5>
              <p>Monitor performance, optimize systems, and develop scaling strategies to maximize AI ROI and business impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Consulting */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Why Choose AI Consulting?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-lightbulb"></i> Avoid Common AI Pitfalls</h5>
              <p>Many businesses rush into AI implementation without proper strategy, leading to:</p>
              <ul className="mb-4">
                <li>Wasted resources on ineffective solutions</li>
                <li>Security vulnerabilities from improper implementation</li>
                <li>Frustrated teams dealing with unreliable systems</li>
                <li>Inconsistent results and poor ROI</li>
              </ul>
              <p>My consulting approach helps you avoid these pitfalls and build AI solutions that truly benefit your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Expertise */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Consulting Expertise</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-robot"></i> Custom AI Solutions</h5>
              <p>Strategic guidance for developing custom AI chatbots, automation systems, and intelligent business processes.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-shield-alt"></i> Security & Compliance</h5>
              <p>Expert advice on AI security best practices, data privacy, and regulatory compliance for your industry.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-users"></i> Change Management</h5>
              <p>Guidance on managing organizational change, team training, and cultural adoption of AI technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Consulting Results</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience how strategic AI consulting can transform your business operations. Try the live demo to see AI solutions in action.</p>
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
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transparent Consulting Rates</h5>
              <p>AI consulting services are priced to reflect the strategic value and expertise provided:</p>
              <ul className="mb-4">
                <li><strong>Strategy Sessions:</strong> $150/hr for comprehensive AI strategy development</li>
                <li><strong>Implementation Consulting:</strong> $120/hr for technical guidance and project management</li>
                <li><strong>Team Training:</strong> Custom pricing for comprehensive AI education programs</li>
                <li><strong>Ongoing Advisory:</strong> Retainer options for continuous AI strategy support</li>
              </ul>
              <p>Most consulting engagements range from $3K to $15K depending on scope and complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready for AI Strategy Consulting?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your AI strategy needs and explore how expert consulting can accelerate your AI journey.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Free Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with expert AI consulting services.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 