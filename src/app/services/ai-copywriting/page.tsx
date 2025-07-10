import Link from 'next/link';

export default function AICopywritingPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>AI Solutions for Copywriters</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Content Creation & Writing Enhancement Automation</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Specialized AI solutions for copywriters and content creators in the Triangle area. From content generation and copywriting automation to brand voice consistency and writing enhancement. Built for creative efficiency and content quality.
          </div>
        </div>
      </section>

      {/* Copywriting AI Solutions */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Copywriting AI Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-pen-fancy fa-2x mb-3"></i>
              <h5>Content Generation</h5>
              <p>AI-powered content generation and copywriting automation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-microphone fa-2x mb-3"></i>
              <h5>Brand Voice Consistency</h5>
              <p>Intelligent brand voice maintenance and style guide automation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-magic fa-2x mb-3"></i>
              <h5>Writing Enhancement</h5>
              <p>AI-powered writing enhancement and content optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copywriting AI Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Copywriting AI Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-pen-fancy"></i> Content Generation</h5>
              <p>AI-powered content generation with copywriting automation and creative assistance.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-microphone"></i> Brand Voice Consistency</h5>
              <p>Intelligent brand voice maintenance with style guide automation and tone consistency.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-magic"></i> Writing Enhancement</h5>
              <p>AI-powered writing enhancement with content optimization and quality improvement.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-search"></i> SEO Copywriting</h5>
              <p>AI-powered SEO copywriting with keyword optimization and search engine targeting.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-bullhorn"></i> Ad Copy Creation</h5>
              <p>AI-powered ad copy creation with conversion optimization and A/B testing.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-envelope"></i> Email Copywriting</h5>
              <p>AI-powered email copywriting with personalization and engagement optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copywriting Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Copywriting Benefits</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-pen-fancy"></i> Copywriting Transformation</h5>
              <p>Comprehensive AI solutions designed specifically for copywriting and content creation challenges:</p>
              <ul className="mb-4">
                <li><strong>Content Creation:</strong> 80% faster content generation with AI copywriting</li>
                <li><strong>Brand Consistency:</strong> 90% improvement in brand voice consistency with AI</li>
                <li><strong>Writing Quality:</strong> 60% enhancement in writing quality with AI optimization</li>
                <li><strong>SEO Performance:</strong> 50% improvement in SEO rankings with AI copywriting</li>
                <li><strong>Conversion Rates:</strong> 40% increase in conversion rates with AI-optimized copy</li>
                <li><strong>Creative Efficiency:</strong> 70% reduction in writer&apos;s block with AI assistance</li>
                <li><strong>Client Satisfaction:</strong> 45% improvement in client satisfaction with AI-enhanced content</li>
                <li><strong>Scalability:</strong> AI systems that grow with your copywriting business</li>
              </ul>
              <p>All copywriting AI solutions include comprehensive training, support, and creative optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copywriting Use Cases */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Copywriting AI Use Cases</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-globe"></i> Website Copy</h5>
              <p>Website content creation, landing page copy, and conversion optimization.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-ad"></i> Advertising Copy</h5>
              <p>Ad copy creation, campaign messaging, and creative concept development.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-envelope"></i> Email Marketing</h5>
              <p>Email copywriting, newsletter content, and email campaign automation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-blog"></i> Blog Content</h5>
              <p>Blog post creation, article writing, and content marketing automation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-hashtag"></i> Social Media</h5>
              <p>Social media copy, post creation, and engagement optimization.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-book"></i> Technical Writing</h5>
              <p>Technical documentation, user manuals, and complex content creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See Copywriting AI in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience copywriting AI capabilities in action. Try the live demo to see content generation and writing enhancement.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Copywriting Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Copywriting AI Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Copywriting Pricing</h5>
              <p>Copywriting AI solutions are priced based on business size and complexity:</p>
              <ul className="mb-4">
                <li><strong>Individual Copywriters:</strong> $3K-8K for essential copywriting AI tools</li>
                <li><strong>Small Agencies (2-5 writers):</strong> $8K-20K for comprehensive copywriting AI</li>
                <li><strong>Medium Agencies (6-15 writers):</strong> $20K-50K for enterprise copywriting AI</li>
                <li><strong>Large Agencies (15+ writers):</strong> $50K-150K+ for multi-writer copywriting AI</li>
                <li><strong>Specialized Solutions:</strong> $5K-15K for specific copywriting automation needs</li>
              </ul>
              <p>All copywriting AI solutions include comprehensive training, support, and creative optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container my-5">
        <div className="text-center">
          <h4 className="fw-bold mb-4 section-headline-gold">Ready to Enhance Your Copywriting?</h4>
          <p className="mb-4">Let&apos;s discuss how AI can enhance your copywriting and content creation.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="mailto:adam@matthewsteinberger.com" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3">
              Get Started Today
            </a>
            <a href="tel:+18645174117" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 