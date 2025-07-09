import Link from 'next/link';

export default function SitemapPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Complete AI Services Directory</h2>
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Explore All AI Solutions for Triangle Area Businesses</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Discover comprehensive AI services tailored to your business needs. From development to consulting, training to integration, find the perfect AI solution for your Triangle area business.
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Core AI Services</h4>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-home fa-2x mb-3"></i>
              <h5>Main Landing Page</h5>
              <p>Comprehensive overview of all AI services and expertise</p>
              <Link href="/" className="btn btn-outline-light mt-3">Visit Main Page</Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-robot fa-2x mb-3"></i>
              <h5>Custom Chatbots</h5>
              <p>Branded AI chatbots trained on your business data</p>
              <Link href="/services/custom-chatbots" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Based Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Location-Based AI Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-map-marker-alt"></i> Wake Forest AI Developer</h5>
              <p>Local AI development services for Wake Forest businesses</p>
              <Link href="/services/ai-wake-forest" className="btn btn-outline-light mt-3">Explore Wake Forest Services</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-building"></i> Raleigh AI Developer</h5>
              <p>AI development and consulting for Raleigh businesses</p>
              <Link href="/services/ai-raleigh" className="btn btn-outline-light mt-3">Explore Raleigh Services</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-university"></i> Durham AI Developer</h5>
              <p>AI solutions for Durham and Duke University area</p>
              <Link href="/services/ai-durham" className="btn btn-outline-light mt-3">Explore Durham Services</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-home"></i> Cary AI Developer</h5>
              <p>AI development services for Cary businesses</p>
              <Link href="/services/ai-cary" className="btn btn-outline-light mt-3">Explore Cary Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Series */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">AI Education & Learning</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card blue-box solution-card">
              <h5><i className="fas fa-graduation-cap"></i> Novice to Navigator Series</h5>
              <p>A comprehensive 33-article series designed to take you from complete beginner to confident decision-maker. Learn what AI chatbots are, how they work, and what to look for when hiring an expert.</p>
              <Link href="/novice-to-navigator" className="btn btn-outline-light mt-3">Start Learning</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-purple text-center">Technical AI Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-brain"></i> RAG Development</h5>
              <p>Retrieval Augmented Generation systems for business-specific knowledge</p>
              <Link href="/services/rag-development" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-cogs"></i> LLM Development</h5>
              <p>Large Language Model integration and fine-tuning services</p>
              <Link href="/services/llm-development" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-edit"></i> Prompt Engineering</h5>
              <p>Optimize AI responses through expert prompt design</p>
              <Link href="/services/prompt-engineering" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-robot"></i> Chat Engine Development</h5>
              <p>Custom chatbot engines and conversation flows</p>
              <Link href="/services/chat-engine-development" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platform Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">AI Platform Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card green-box solution-card">
              <h5><i className="fas fa-comments"></i> ChatGPT Development</h5>
              <p>Custom ChatGPT integrations and GPT development</p>
              <Link href="/services/chatgpt-developer" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card green-box solution-card">
              <h5><i className="fas fa-robot"></i> Claude AI Services</h5>
              <p>Anthropic Claude AI integration and development</p>
              <Link href="/services/claude-ai" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card green-box solution-card">
              <h5><i className="fas fa-gem"></i> Gemini AI Services</h5>
              <p>Google Gemini AI integration and development</p>
              <Link href="/services/gemini-ai" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card green-box solution-card">
              <h5><i className="fas fa-triangle"></i> Triangle AI Developer</h5>
              <p>Comprehensive AI services for the entire Triangle area</p>
              <Link href="/services/triangle-ai-developer" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Industry-Specific AI Solutions</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-hospital"></i> Healthcare AI</h5>
              <p>HIPAA-compliant AI solutions for healthcare organizations</p>
              <Link href="/services/ai-healthcare" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-church"></i> Ministry AI</h5>
              <p>AI solutions for churches and religious organizations</p>
              <Link href="/services/ai-ministries" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-store"></i> Restaurant AI</h5>
              <p>AI solutions for restaurants and food service</p>
              <Link href="/services/ai-restaurants" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-building"></i> Manufacturing AI</h5>
              <p>AI solutions for manufacturing and industrial companies</p>
              <Link href="/services/ai-manufacturing" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-home"></i> Real Estate AI</h5>
              <p>AI solutions for real estate professionals</p>
              <Link href="/services/ai-real-estate" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-graduation-cap"></i> Education AI</h5>
              <p>AI solutions for educational institutions</p>
              <Link href="/services/ai-christian-education" className="btn btn-outline-light mt-3">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready to Get Started?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Choose your next step based on your needs:</p>
            <div className="row">
              <div className="col-md-6 mb-3">
                <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
                   className="btn-custom btn btn-lg fw-bold shadow-lg px-4 py-3 consultation-btn w-100">
                  <i className="fas fa-calendar"></i> Schedule Free Consultation
                </a>
                <p className="mt-2 text-secondary">For businesses ready to explore AI solutions</p>
              </div>
              <div className="col-md-6 mb-3">
                <a href="mailto:adam@matthewsteinberger.com" 
                   className="btn-custom btn btn-lg fw-bold shadow-lg px-4 py-3 employer-btn w-100">
                  <i className="fas fa-envelope"></i> Contact for Employment
                </a>
                <p className="mt-2 text-secondary">For employers looking to hire AI talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 