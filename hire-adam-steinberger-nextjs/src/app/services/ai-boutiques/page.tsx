import Link from 'next/link';

export default function AIBoutiquesPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>AI Solutions for Boutiques</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Retail Automation & Customer Experience Enhancement</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Specialized AI solutions for boutiques and small retail businesses in the Triangle area. From customer service chatbots and inventory management to personalized recommendations and retail automation. Built for small business budgets and growth goals.
          </div>
        </div>
      </section>

      {/* Boutique AI Solutions */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Boutique AI Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-headset fa-2x mb-3"></i>
              <h5>Customer Service</h5>
              <p>AI-powered customer service chatbots and personalized shopping assistance</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-boxes fa-2x mb-3"></i>
              <h5>Inventory Management</h5>
              <p>Intelligent inventory tracking, automated reordering, and stock optimization</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-star fa-2x mb-3"></i>
              <h5>Personalized Recommendations</h5>
              <p>AI-driven product recommendations and customer personalization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique AI Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Boutique AI Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-headset"></i> Customer Service AI</h5>
              <p>AI-powered customer service chatbots with product knowledge and personalized assistance.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-boxes"></i> Inventory Management</h5>
              <p>Intelligent inventory tracking with automated reordering and stock optimization systems.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-star"></i> Personalized Recommendations</h5>
              <p>AI-driven product recommendations based on customer preferences and purchase history.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Sales Analytics</h5>
              <p>AI-powered sales analytics with customer behavior insights and trend analysis.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-bullhorn"></i> Marketing Automation</h5>
              <p>AI-powered marketing automation with personalized campaigns and customer engagement.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-cogs"></i> Operations Automation</h5>
              <p>Retail operations automation with scheduling, task management, and efficiency optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Retail Business Benefits</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-shopping-bag"></i> Boutique Business Transformation</h5>
              <p>Comprehensive AI solutions designed specifically for boutique and small retail challenges:</p>
              <ul className="mb-4">
                <li><strong>Customer Experience:</strong> 24/7 customer service with AI chatbots and personalized assistance</li>
                <li><strong>Inventory Efficiency:</strong> 30% reduction in stockouts with AI-powered inventory management</li>
                <li><strong>Sales Growth:</strong> 25% increase in average order value with personalized recommendations</li>
                <li><strong>Operational Efficiency:</strong> 40% reduction in administrative tasks through AI automation</li>
                <li><strong>Customer Retention:</strong> 35% improvement in customer loyalty with personalized experiences</li>
                <li><strong>Marketing ROI:</strong> 50% increase in marketing effectiveness with AI-driven campaigns</li>
                <li><strong>Cost Reduction:</strong> 20% reduction in operational costs through AI automation</li>
                <li><strong>Scalability:</strong> AI systems that grow with your boutique and customer base</li>
              </ul>
              <p>All boutique AI solutions include comprehensive training, support, and small business optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Use Cases */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Boutique AI Use Cases</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-tshirt"></i> Fashion Boutiques</h5>
              <p>Style recommendations, size matching, and fashion trend analysis for clothing stores.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-gem"></i> Jewelry Stores</h5>
              <p>Jewelry recommendations, customization options, and luxury customer service automation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-home"></i> Home Decor</h5>
              <p>Interior design recommendations, room matching, and home decor personalization.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-birthday-cake"></i> Gift Shops</h5>
              <p>Gift recommendations, occasion matching, and personalized gift suggestions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-spa"></i> Beauty & Wellness</h5>
              <p>Beauty product recommendations, skin care matching, and wellness consultation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-book"></i> Specialty Bookstores</h5>
              <p>Book recommendations, reading lists, and literary customer service automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See Boutique AI in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience boutique AI capabilities in action. Try the live demo to see customer service and product recommendations.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Boutique Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Boutique AI Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Small Business Pricing</h5>
              <p>Boutique AI solutions are priced based on business size and budget constraints:</p>
              <ul className="mb-4">
                <li><strong>Small Boutiques (1-3 employees):</strong> $3K-8K for essential AI automation</li>
                <li><strong>Medium Boutiques (4-10 employees):</strong> $8K-20K for comprehensive AI systems</li>
                <li><strong>Large Boutiques (10+ employees):</strong> $20K-40K for enterprise boutique AI platforms</li>
                <li><strong>Specialized Solutions:</strong> $5K-15K for specific boutique automation needs</li>
                <li><strong>Monthly Options:</strong> Flexible monthly payment plans for small business budgets</li>
              </ul>
              <p>All boutique AI solutions include comprehensive training, support, and small business optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container my-5">
        <div className="text-center">
          <h4 className="fw-bold mb-4 section-headline-gold">Ready to Transform Your Boutique?</h4>
          <p className="mb-4">Let&apos;s discuss how AI can enhance your boutique and customer experience.</p>
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