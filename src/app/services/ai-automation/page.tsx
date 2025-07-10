import Link from 'next/link';

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Intelligent AI Automation</h2>
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Streamline Your Business Processes with AI-Powered Automation</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Transform repetitive tasks into intelligent workflows. My AI automation solutions help Triangle area businesses reduce costs, improve efficiency, and focus on what matters most.
          </div>
        </div>
      </section>

      {/* AI Automation Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Automation Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-cogs fa-2x mb-3"></i>
              <h5>Workflow Automation</h5>
              <p>Intelligent automation of business processes, data entry, and repetitive tasks using AI</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-edit fa-2x mb-3"></i>
              <h5>Content Generation</h5>
              <p>Automated content creation for emails, reports, marketing materials, and documentation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-headset fa-2x mb-3"></i>
              <h5>Customer Service</h5>
              <p>AI-powered customer support automation, ticket routing, and response generation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Use Cases */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Automation Use Cases</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-envelope"></i> Email Automation</h5>
              <p>Automatically generate personalized emails, follow-ups, and responses based on customer interactions and business rules.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-file-alt"></i> Document Processing</h5>
              <p>Automate document creation, form filling, report generation, and data extraction from various sources.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-database"></i> Data Entry & Processing</h5>
              <p>Automate data entry, validation, cleaning, and processing tasks to eliminate manual errors and save time.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Reporting & Analytics</h5>
              <p>Automatically generate reports, dashboards, and analytics insights from your business data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Benefits of AI Automation</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transform Your Business Efficiency</h5>
              <p>AI automation delivers measurable benefits for Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Cost Reduction:</strong> Reduce manual labor costs by 60-80% on automated tasks</li>
                <li><strong>Time Savings:</strong> Free up hours of repetitive work for strategic activities</li>
                <li><strong>Error Reduction:</strong> Eliminate human errors in data entry and processing</li>
                <li><strong>Scalability:</strong> Handle increased workload without proportional staff increases</li>
                <li><strong>Consistency:</strong> Ensure uniform quality and compliance across all processes</li>
                <li><strong>24/7 Operation:</strong> Run automated processes around the clock</li>
              </ul>
              <p>My AI automation solutions are designed to integrate seamlessly with your existing systems and workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Technologies */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Automation Technologies</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-robot"></i> n8n Workflows</h5>
              <p>Powerful automation platform for connecting apps, services, and APIs with intelligent decision-making.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-brain"></i> LLM Integration</h5>
              <p>Integrate ChatGPT, Claude, and other LLMs for intelligent content generation and decision-making.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-code"></i> Custom APIs</h5>
              <p>Build custom automation APIs and webhooks to connect your systems and data sources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Automation in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience how AI automation can transform your business processes. Try the live demo to see intelligent automation in action.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Automation Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Automation Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> ROI-Focused Automation</h5>
              <p>AI automation projects are designed to deliver rapid ROI and long-term value:</p>
              <ul className="mb-4">
                <li><strong>Small Automation:</strong> $3K-8K for single-process automation with quick setup</li>
                <li><strong>Workflow Automation:</strong> $8K-15K for multi-process automation systems</li>
                <li><strong>Enterprise Automation:</strong> $15K+ for comprehensive automation platforms</li>
                <li><strong>Ongoing Support:</strong> Monthly maintenance and optimization services available</li>
              </ul>
              <p>Most automation projects pay for themselves within 3-6 months through time and cost savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready to Automate Your Business?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your automation needs and explore how AI can streamline your business processes.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Free Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with intelligent AI automation solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 