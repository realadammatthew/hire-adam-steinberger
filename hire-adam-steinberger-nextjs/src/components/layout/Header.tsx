import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="position-relative">
      <div className="header-intro-bg position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto d-flex align-items-center">
              <div className="d-flex gap-4">
                <div className="text-center">
                  <Image
                    src="/profile-picture.jpg"
                    alt="Adam Matthew Steinberger - Senior Software Engineering Consultant specializing in AI and Cloud Development"
                    width={120}
                    height={120}
                    className="profile shadow"
                    priority
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="p-4 bg-transparent">
                    <h1 className="fw-bold mb-1 text-light">Adam Matthew Steinberger</h1>
                    <h2 className="h5 mb-1">Senior Software Engineering Consultant</h2>
                    <h3 className="h6 mb-3">Backend, Cloud &amp; AI Software Architecture and Development</h3>
                    <div className="header-contact-block">
                      <div className="d-flex flex-wrap gap-2">
                        <a 
                          href="https://www.google.com/maps/place/City+of+Wake+Forest,+NC,+USA" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-light" 
                          data-bs-toggle="tooltip" 
                          data-bs-placement="bottom" 
                          data-bs-title="Wake Forest, NC USA"
                        >
                          <i className="fas fa-map-marker-alt"></i>
                        </a>
                        <a 
                          href="tel:+18645174117" 
                          className="btn btn-light" 
                          data-bs-toggle="tooltip" 
                          data-bs-placement="bottom" 
                          data-bs-title="+1-864-517-4117"
                        >
                          <i className="fas fa-phone"></i>
                        </a>
                        <a 
                          href="mailto:adam@matthewsteinberger.com" 
                          className="btn btn-light" 
                          data-bs-toggle="tooltip" 
                          data-bs-placement="bottom" 
                          data-bs-title="adam@matthewsteinberger.com"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                        <a 
                          href="https://github.com/realadammatthew" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline-light" 
                          data-bs-toggle="tooltip" 
                          data-bs-placement="bottom" 
                          data-bs-title="GitHub"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a 
                          href="https://x.com/realadammatthew" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline-light" 
                          data-bs-toggle="tooltip" 
                          data-bs-placement="bottom" 
                          data-bs-title="X (Twitter)"
                        >
                          <i className="fab fa-x-twitter"></i>
                        </a>
                        <a 
                          href="https://coff.ee/realadammatthew" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline-warning" 
                          data-bs-toggle="tooltip" 
                          data-bs-placement="bottom" 
                          data-bs-title="Buy Me a Coffee"
                        >
                          <i className="fas fa-coffee"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        id="img-banner-bg"
        src="/banner.png"
        alt="Professional software development and AI consulting services banner"
        className="banner"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </header>
  )
} 