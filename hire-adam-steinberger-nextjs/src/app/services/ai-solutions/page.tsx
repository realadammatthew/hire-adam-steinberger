import Link from 'next/link';

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Comprehensive AI Solutions</h2>
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Custom AI Business Solutions for Triangle Area Companies</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            End-to-end AI solutions designed to transform your business. From chatbots to automation, integration to training, I provide comprehensive AI solutions that drive real business results for Triangle area companies.
          </div>
        </div>
      </section>

      {/* AI Solutions Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Complete AI Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-robot fa-2x mb-3"></i>
              <h5>Custom AI Chatbots</h5>
              <p>Branded chatbots trained on your business data, customer interactions, and brand voice for 24/7 customer support</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-cogs fa-2x mb-3"></i>
              <h5>AI Automation</h5>
              <p>Intelligent workflow automation and AI-powered business processes to streamline operations and reduce costs</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-plug fa-2x mb-3"></i>
              <h5>AI Integration</h5>
              <p>Seamless integration of AI systems with your existing tools and workflows for maximum efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Solution Categories</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-headset"></i> Customer Service Solutions</h5>
              <p>AI-powered customer support chatbots, ticket routing, and automated response systems to enhance customer experience.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Business Intelligence</h5>
              <p>AI-driven analytics, reporting, and data processing solutions to uncover insights and drive better business decisions.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-edit"></i> Content Generation</h5>
              <p>Automated content creation for marketing materials, reports, documentation, and social media using AI.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-database"></i> Data Processing</h5>
              <p>AI-powered data entry, validation, cleaning, and processing solutions to eliminate manual errors and save time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Benefits of AI Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transform Your Business with AI</h5>
              <p>Comprehensive AI solutions deliver powerful benefits for Triangle area businesses:</p>
              <ul className="mb-4">
                <li><strong>Cost Reduction:</strong> Automate repetitive tasks to reduce operational costs by 30-60%</li>
                <li><strong>Increased Efficiency:</strong> Streamline workflows and processes for faster, better results</li>
                <li><strong>24/7 Availability:</strong> AI systems that work around the clock without human intervention</li>
                <li><strong>Scalable Growth:</strong> AI solutions that grow with your business needs and demands</li>
                <li><strong>Competitive Advantage:</strong> Stay ahead of competitors with advanced AI capabilities</li>
                <li><strong>Data-Driven Insights:</strong> Uncover valuable business insights through AI-powered analytics</li>
              </ul>
              <p>My comprehensive AI solutions are designed to deliver measurable ROI and long-term business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">AI Solution Development Process</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-search"></i> Discovery & Analysis</h5>
              <p>Deep dive into your business needs, current processes, and goals to identify optimal AI solution opportunities.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-lightbulb"></i> Solution Design</h5>
              <p>Custom AI solution design tailored to your specific business requirements and technical constraints.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-cogs"></i> Development & Testing</h5>
              <p>Secure development and comprehensive testing of AI solutions to ensure reliability and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI Solutions in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience how comprehensive AI solutions can transform your business operations. Try the live demo to see AI solutions in action.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Solution Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Solution Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Transparent Solution Pricing</h5>
              <p>AI solution projects are priced based on complexity and scope:</p>
              <ul className="mb-4">
                <li><strong>Basic AI Solution:</strong> $8K-15K for single AI application with quick implementation</li>
                <li><strong>Comprehensive AI Platform:</strong> $15K-35K for multi-feature AI solutions with integration</li>
                <li><strong>Enterprise AI Suite:</strong> $35K+ for complete AI transformation with ongoing support</li>
                <li><strong>Ongoing Support:</strong> Monthly maintenance and optimization services available</li>
              </ul>
              <p>Most AI solution projects deliver ROI within 6-12 months through cost savings and efficiency gains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready for AI Solutions?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss your AI solution needs and explore how comprehensive AI can transform your business operations.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              Schedule Free Consultation
            </a>
            <p className="mt-3 text-secondary">Serving Triangle area businesses with comprehensive AI solutions and expert support.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 