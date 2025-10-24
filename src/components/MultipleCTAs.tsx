import Link from 'next/link';

export default function MultipleCTAs() {
  return (
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
              <Link href="/contact" 
                 className="btn-custom btn btn-lg fw-bold shadow-lg px-4 py-3 employer-btn w-100">
                <i className="fas fa-envelope"></i> Contact for Employment
              </Link>
              <p className="mt-2 text-secondary">For employers looking to hire AI talent</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn btn-outline-primary btn-lg w-100">
                <i className="fas fa-play"></i> Try the Demo
              </a>
              <p className="mt-2 text-secondary">Experience the technology</p>
            </div>
            <div className="col-md-6 mb-3">
              <Link href="/novice-to-navigator" className="btn btn-outline-primary btn-lg w-100" style={{border: '2px solid #bfdbfe'}}>
                <i className="fas fa-graduation-cap"></i> Learn about AI
              </Link>
              <p className="mt-2 text-secondary">33-article education series</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Link href="/blog" className="btn btn-outline-primary btn-lg w-100" style={{border: '2px solid #bfdbfe'}}>
                <i className="fas fa-newspaper"></i> Read the Blog
              </Link>
              <p className="mt-2 text-secondary">AI insights & case studies</p>
            </div>
            <div className="col-md-6 mb-3">
              <Link href="/services" className="btn btn-outline-primary btn-lg w-100" style={{border: '2px solid #bfdbfe'}}>
                <i className="fas fa-tools"></i> My Services
              </Link>
              <p className="mt-2 text-secondary">Browse all of my services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 