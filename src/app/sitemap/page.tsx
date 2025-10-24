import Link from 'next/link';
import MultipleCTAs from '@/components/MultipleCTAs';

export default function SitemapPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>Sitemap</h2>
      </section>

      {/* Main Services */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-home fa-2x mb-3"></i>
              <h5>Main Landing Page</h5>
              <p>Comprehensive overview of all AI services and expertise.</p>
              <Link href="/" className="btn btn-outline-light mt-3">Visit Main Page</Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-user fa-2x mb-3"></i>
              <h5>About Me</h5>
              <p>Learn about my background, experience, and neurodivergent strengths.</p>
              <Link href="/about" className="btn btn-outline-light mt-3">About Me</Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-envelope fa-2x mb-3"></i>
              <h5>Contact Me</h5>
              <p>Schedule a free consultation to explore your options.</p>
              <Link href="/contact" className="btn btn-outline-light mt-3">Contact Me</Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-tools fa-2x mb-3"></i>
              <h5>My Services</h5>
              <p>Comprehensive overview of all AI services and expertise.</p>
              <Link href="/services" className="btn btn-outline-light mt-3">Browse Services</Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-graduation-cap fa-2x mb-3"></i>
              <h5>Novice to Navigator Series</h5>
              <p>A comprehensive 33-article series to learn about AI chatbots.</p>
              <Link href="/novice-to-navigator" className="btn btn-outline-light mt-3">Start Learning</Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-newspaper fa-2x mb-3"></i>
              <h5>Blog</h5>
              <p>Insights, case studies, and the latest trends in AI technology.</p>
              <Link href="/blog" className="btn btn-outline-light mt-3">Read the Blog</Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-envelope-open-text fa-2x mb-3"></i>
              <h5>Newsletter</h5>
              <p>Stay updated with the latest AI trends and insights.</p>
              <a href="http://eepurl.com/jiYXCQ" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mt-3">Subscribe Now</a>
            </div>
          </div>
        </div>
      </section>

      <MultipleCTAs />
    </main>
  );
} 