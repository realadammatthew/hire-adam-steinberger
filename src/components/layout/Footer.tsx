import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="trust-badge">
              <i className="fas fa-lock"></i>
              <span>SSL Secured</span>
            </div>
          </div>
          <div className="col-auto">
            <div className="trust-badge">
              <i className="fas fa-headset"></i>
              <span>Live Support</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <a href="https://tidycal.com/realadammatthew" className="fw-bold">Schedule a Free Consultation</a>
            &nbsp;|&nbsp;
            <Link href="/contact" className="fw-bold">Contact for Employment</Link>
            &nbsp;|&nbsp;
            <a href="https://chat.adam.matthewsteinberger.com" className="fw-bold">Try the Chatbot Demo</a>
            &nbsp;|&nbsp;
            <Link href="/novice-to-navigator" className="fw-bold">Learn about AI</Link>
            &nbsp;|&nbsp;
            <a href="http://eepurl.com/jiYXCQ" className="fw-bold">Get the Newsletter</a>
            &nbsp;|&nbsp;
            <Link href="/sitemap" className="fw-bold">View the Sitemap</Link>
          </div>
          <div className="col-auto">
            <a href="https://www.linkedin.com/in/realadammatthew/" className="fw-bold">LinkedIn</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/realadammatthew" className="fw-bold">GitHub</a>
            &nbsp;|&nbsp;
            <a href="https://x.com/realadammatthew" className="fw-bold">X/Twitter</a>
            &nbsp;|&nbsp;
            <a href="https://coff.ee/realadammatthew" className="fw-bold">Buy me a Coffee</a>
          </div>
        </div>
        <div className="mt-3">
          © Copyright {new Date().getFullYear()} <Link href="/">Adam Matthew Steinberger LLC</Link>. All Rights Reserved.
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            FEIN: 33-2687374
          </div>
        </div>
      </div>
    </footer>
  )
} 