

export default function Home() {
  return (
    <main>
      {/* Hero Section - Problem Statement */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>
          The AI Implementation Crisis:<br />Why 73% of Businesses Fail
        </h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>
          And How I'm Solving It for Triangle Area Businesses
        </h3>
        <div className="mx-auto mb-4" style={{maxWidth: '800px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            <strong>Reality Check:</strong> Most businesses are losing money on AI. They're either stuck with generic chatbots that don't understand their business, or they're paralyzed by security concerns and technical complexity. Meanwhile, their competitors are gaining massive advantages through custom AI solutions.
          </div>
        </div>
      </section>

      {/* The Problem Deep Dive */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">The 5 Critical AI Implementation Challenges</h4>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card blue-box problem-card">
              <i className="fas fa-exclamation-triangle fa-2x mb-3"></i>
              <h5>Generic Chatbots That Don't Work</h5>
              <p>Off-the-shelf solutions that can't handle your specific business processes, leading to frustrated customers and wasted resources.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card blue-box problem-card">
              <i className="fas fa-shield-alt fa-2x mb-3"></i>
              <h5>Security & Compliance Concerns</h5>
              <p>Uncertainty about data protection, HIPAA compliance, and intellectual property security slowing AI adoption.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card blue-box problem-card">
              <i className="fas fa-dollar-sign fa-2x mb-3"></i>
              <h5>Hidden Costs & Poor ROI</h5>
              <p>Projects that start small but balloon into expensive, ongoing maintenance challenges with unclear returns.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card blue-box problem-card">
              <i className="fas fa-users fa-2x mb-3"></i>
              <h5>Team Resistance & Poor Adoption</h5>
              <p>AI solutions that don't integrate with existing workflows, leading to low adoption rates and wasted investments.</p>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="card blue-box problem-card">
              <i className="fas fa-clock fa-2x mb-3"></i>
              <h5>Implementation Paralysis</h5>
              <p>Analysis paralysis from too many options, unclear requirements, and lack of local expertise to guide the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Framework */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">The Triangle AI Solution Framework</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card green-box solution-framework-card mb-4">
              <h5 className="mb-3"><i className="fas fa-lightbulb"></i> My Proven 4-Step Process</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6><strong>Step 1: Strategic Assessment</strong></h6>
                  <p>Deep dive into your business processes, data security requirements, and ROI goals. No cookie-cutter solutions.</p>
                </div>
                <div className="col-md-6">
                  <h6><strong>Step 2: Custom Architecture</strong></h6>
                  <p>Design secure, scalable AI solutions using your existing tools and workflows. No rip-and-replace required.</p>
                </div>
                <div className="col-md-6">
                  <h6><strong>Step 3: Secure Implementation</strong></h6>
                  <p>Enterprise-grade security with self-hosted options, HIPAA compliance, and data protection built-in.</p>
                </div>
                <div className="col-md-6">
                  <h6><strong>Step 4: Team Enablement</strong></h6>
                  <p>Comprehensive training, documentation, and ongoing support to ensure successful adoption and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section - Enhanced */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Why Triangle Businesses Trust My Expertise</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-code fa-2x mb-3"></i>
              <h5>12+ Years Technical Excellence</h5>
              <p>Enterprise-grade software engineering with production AI systems serving millions of users. No junior-level mistakes.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-shield-alt fa-2x mb-3"></i>
              <h5>Security-First Architecture</h5>
              <p>Specialized in HIPAA-compliant, SOC2-ready AI systems. Your data security is non-negotiable.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
              <h5>Local Triangle Expertise</h5>
              <p>Serving Wake Forest, Raleigh, Durham, and Cary with hands-on support. No offshore teams or timezone issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Deep Dive */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Advanced AI Technical Stack</h4>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card blue-box technical-card">
              <h5><i className="fas fa-brain"></i> LLM Technologies</h5>
              <ul>
                <li>ChatGPT API & Custom GPTs</li>
                <li>Claude AI (Anthropic)</li>
                <li>Gemini (Google)</li>
                <li>Mistral AI & Open Source</li>
                <li>Custom Fine-tuning</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box technical-card">
              <h5><i className="fas fa-database"></i> RAG & Vector Systems</h5>
              <ul>
                <li>Pinecone Vector Database</li>
                <li>Weaviate & Chroma</li>
                <li>Custom Embeddings</li>
                <li>Semantic Search</li>
                <li>Context Engineering</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card golden-box technical-card">
              <h5><i className="fas fa-cloud"></i> Infrastructure & Security</h5>
              <ul>
                <li>AWS, Azure, GCP</li>
                <li>Docker & Kubernetes</li>
                <li>HIPAA Compliance</li>
                <li>SOC2 Security</li>
                <li>Self-Hosted Options</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card green-box technical-card">
              <h5><i className="fas fa-cogs"></i> Integration & Automation</h5>
              <ul>
                <li>Slack, Discord, Teams</li>
                <li>HubSpot, Salesforce</li>
                <li>Zapier & Webhooks</li>
                <li>Custom APIs</li>
                <li>Workflow Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Case Studies */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Proven Results Across Triangle Industries</h4>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card golden-box case-study-card">
              <h5><i className="fas fa-hospital"></i> Healthcare Nonprofit</h5>
              <p><strong>Challenge:</strong> Manual patient intake process taking 45 minutes per client</p>
              <p><strong>Solution:</strong> HIPAA-compliant AI chatbot with RAG knowledge base</p>
              <p><strong>Result:</strong> 80% reduction in intake time, 95% client satisfaction</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box case-study-card">
              <h5><i className="fas fa-store"></i> Local Restaurant Chain</h5>
              <p><strong>Challenge:</strong> Inconsistent customer service across 3 locations</p>
              <p><strong>Solution:</strong> Branded AI chatbot trained on menu and policies</p>
              <p><strong>Result:</strong> 40% increase in online orders, 60% fewer support calls</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card blue-box case-study-card">
              <h5><i className="fas fa-church"></i> Triangle Church</h5>
              <p><strong>Challenge:</strong> Overwhelmed staff handling member questions</p>
              <p><strong>Solution:</strong> Internal knowledge chatbot with event management</p>
              <p><strong>Result:</strong> 70% reduction in repetitive questions, improved engagement</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card green-box case-study-card">
              <h5><i className="fas fa-building"></i> Manufacturing Company</h5>
              <p><strong>Challenge:</strong> Complex technical support overwhelming engineers</p>
              <p><strong>Solution:</strong> Technical documentation RAG system</p>
              <p><strong>Result:</strong> 50% faster issue resolution, 30% cost savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Business Impact */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Measurable Business Impact</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card green-box roi-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Typical ROI Metrics</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6><strong>Cost Reduction</strong></h6>
                  <ul>
                    <li>30-60% reduction in customer service costs</li>
                    <li>40-70% faster issue resolution</li>
                    <li>50-80% reduction in repetitive tasks</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6><strong>Revenue Impact</strong></h6>
                  <ul>
                    <li>25-45% increase in lead conversion</li>
                    <li>20-40% improvement in customer satisfaction</li>
                    <li>15-35% increase in online sales</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3"><strong>Average ROI Timeline:</strong> 6-12 months for most implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Why Choose Local Triangle Expertise?</h4>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card blue-box comparison-card">
              <h5><i className="fas fa-times-circle text-danger"></i> Generic AI Platforms</h5>
              <ul>
                <li>❌ No custom training on your data</li>
                <li>❌ Generic responses that don't match your brand</li>
                <li>❌ Limited integration options</li>
                <li>❌ No local support or training</li>
                <li>❌ Hidden costs and usage limits</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card golden-box comparison-card">
              <h5><i className="fas fa-check-circle text-success"></i> My Custom Solutions</h5>
              <ul>
                <li>✅ Trained specifically on your business data</li>
                <li>✅ Matches your exact brand voice and personality</li>
                <li>✅ Integrates with your existing tools and workflows</li>
                <li>✅ Local Triangle area support and training</li>
                <li>✅ Transparent pricing with no hidden fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">Experience the Difference</h4>
        <div className="text-center my-4">
          <p className="mb-4">See how a custom AI assistant trained on real business data handles complex interactions. Notice the consistent brand voice, security features, and seamless integration capabilities.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            <i className="fas fa-play"></i> Try the Live Demo
          </a>
          <p className="mt-3 text-secondary">No registration required - experience the technology firsthand</p>
        </div>
      </section>

      {/* Investment & Pricing Transparency */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Transparent Investment & Timeline</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box pricing-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Project-Based Pricing</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6><strong>Small Business Solutions</strong></h6>
                  <p>$5K-15K for essential AI automation and customer support chatbots</p>
                  <ul>
                    <li>Custom chatbot training</li>
                    <li>Website integration</li>
                    <li>Basic analytics</li>
                    <li>30-day support</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6><strong>Enterprise Solutions</strong></h6>
                  <p>$15K-50K+ for comprehensive AI platforms with advanced features</p>
                  <ul>
                    <li>Multi-platform integration</li>
                    <li>Advanced RAG systems</li>
                    <li>Custom API development</li>
                    <li>Ongoing optimization</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3"><strong>Timeline:</strong> 2-6 weeks depending on complexity. Most projects deliver ROI within 6-12 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Risk-Free Implementation</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card green-box risk-card">
              <i className="fas fa-shield-alt fa-2x mb-3"></i>
              <h5>Security Guarantee</h5>
              <p>Self-hosted options available. Your data never leaves your control. HIPAA and SOC2 compliance built-in.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card green-box risk-card">
              <i className="fas fa-handshake fa-2x mb-3"></i>
              <h5>Performance Guarantee</h5>
              <p>If your AI solution doesn't meet agreed performance metrics, I'll optimize it at no additional cost.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card green-box risk-card">
              <i className="fas fa-graduation-cap fa-2x mb-3"></i>
              <h5>Adoption Guarantee</h5>
              <p>Comprehensive training and support to ensure your team successfully adopts and uses the AI solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-purple text-center">For Employers: Senior AI Developer Available</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box employer-card mb-4">
              <h5 className="mb-3"><i className="fas fa-briefcase"></i> Senior AI Development Expertise</h5>
              <p><strong>Available for:</strong> Full-time positions, contract work, or consulting projects in the Triangle area</p>
              <div className="row">
                <div className="col-md-6">
                  <h6><strong>Technical Skills</strong></h6>
                  <ul>
                    <li>Production RAG systems</li>
                    <li>LLM integration & fine-tuning</li>
                    <li>Vector database architecture</li>
                    <li>AI/ML pipeline development</li>
                    <li>Cloud infrastructure (AWS/Azure/GCP)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6><strong>Business Value</strong></h6>
                  <ul>
                    <li>12+ years software engineering</li>
                    <li>Enterprise security expertise</li>
                    <li>Local Triangle area knowledge</li>
                    <li>Proven ROI delivery</li>
                    <li>Team leadership experience</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3"><strong>Interested in hiring?</strong> Let's discuss how my AI expertise can accelerate your team's capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple CTAs */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready to Transform Your Business with AI?</h4>
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
            <div className="row mt-4">
              <div className="col-md-4 mb-3">
                <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn btn-outline-primary btn-lg w-100">
                  <i className="fas fa-play"></i> Try the Demo
                </a>
                <p className="mt-2 text-secondary">Experience the technology</p>
              </div>
              <div className="col-md-4 mb-3">
                <a href="/novice-to-navigator" className="btn btn-outline-success btn-lg w-100">
                  <i className="fas fa-graduation-cap"></i> Learn about AI
                </a>
                <p className="mt-2 text-secondary">33-article education series</p>
              </div>
              <div className="col-md-4 mb-3">
                <a href="/sitemap" className="btn btn-outline-info btn-lg w-100">
                  <i className="fas fa-sitemap"></i> View our Sitemap
                </a>
                <p className="mt-2 text-secondary">Browse all pages and services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Why Triangle Businesses Choose Me</h4>
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="card golden-box trust-card text-center">
              <i className="fas fa-clock fa-2x mb-3"></i>
              <h5>Fast Implementation</h5>
              <p>2-6 weeks from concept to deployment</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card purple-box trust-card text-center">
              <i className="fas fa-shield-alt fa-2x mb-3"></i>
              <h5>Security First</h5>
              <p>HIPAA compliant, SOC2 ready</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card golden-box trust-card text-center">
              <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
              <h5>Local Support</h5>
              <p>Triangle area expertise & availability</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card purple-box trust-card text-center">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h5>Proven ROI</h5>
              <p>6-12 month average payback period</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
