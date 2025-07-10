export default function CustomChatbotsPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>
              Custom Chatbots
            </h1>
            <h2 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>
              Bespoke AI Chatbot Development
            </h2>
            <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
              <div className="alert custom-alert p-4 mb-4 shadow-lg">
                I build custom chatbots tailored to your business needs. From customer support to lead generation, my chatbots are designed for your brand, data, and workflows.
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-gold text-center">Why Custom Chatbots?</h3>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-clock fa-2x mb-3"></i>
                  <h5>24/7 Availability</h5>
                  <p>Provide instant customer support around the clock, reducing response times and improving customer satisfaction</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card purple-box credential-card">
                  <i className="fas fa-brain fa-2x mb-3"></i>
                  <h5>Brand Voice</h5>
                  <p>Chatbots trained on your content and brand guidelines to maintain consistent messaging and tone</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-chart-line fa-2x mb-3"></i>
                  <h5>Cost Effective</h5>
                  <p>Reduce customer service costs while improving efficiency and scalability of your support operations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-green text-center">Custom Chatbot Features</h3>
            <div className="row justify-content-center g-4">
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-database"></i> Knowledge Base Integration</h5>
                  <p>Chatbots trained on your specific business data, FAQs, product information, and company policies</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-palette"></i> Brand Customization</h5>
                  <p>Custom styling, colors, and branding to match your website and company identity</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-plug"></i> System Integration</h5>
                  <p>Seamless integration with your existing CRM, helpdesk, and business systems</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-chart-bar"></i> Analytics & Insights</h5>
                  <p>Detailed analytics on customer interactions, common questions, and performance metrics</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-shield-alt"></i> Security & Privacy</h5>
                  <p>Enterprise-grade security with data encryption and privacy compliance for sensitive information</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-users"></i> Human Handoff</h5>
                  <p>Seamless escalation to human agents when complex issues require personal attention</p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-blue text-center">Common Use Cases</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card purple-box knowledge-card mb-4">
                  <h5 className="mb-3"><i className="fas fa-lightbulb"></i> Customer Support Automation</h5>
                  <p>Handle common customer inquiries, provide product information, and assist with basic troubleshooting:</p>
                  <ul className="mb-4">
                    <li>Answer frequently asked questions</li>
                    <li>Provide product specifications and pricing</li>
                    <li>Assist with order status and tracking</li>
                    <li>Guide customers through basic troubleshooting</li>
                    <li>Collect customer feedback and surveys</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-gold text-center">See a Custom Chatbot in Action</h3>
            <div className="text-center my-4">
              <p className="mb-4">Experience how a custom AI chatbot can transform your customer service. Try our live demo to see the technology in action.</p>
              <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
                Try the Live Demo
              </a>
            </div>
          </section>

          {/* Consultation CTA */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-blue text-center">Ready to Build Your Custom Chatbot?</h3>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <p className="mb-4">Let&apos;s discuss your custom chatbot project and build a solution that fits your business.</p>
                <a 
                  href="https://tidycal.com/realadammatthew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn"
                >
                  Schedule Free Consultation
                </a>
                <p className="mt-3 text-secondary">Serving Triangle area businesses with custom AI chatbot development.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 