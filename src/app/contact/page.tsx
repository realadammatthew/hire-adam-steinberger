import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Get In Touch</h1>
            <p className="lead">
              Ready to start your AI project? Let&apos;s discuss how I can help bring your vision to life.
            </p>
          </div>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-calendar-alt fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Schedule a Call</h5>
                  <p className="card-text">
                    Book a free consultation to discuss your project requirements and timeline.
                  </p>
                  <a 
                    href="https://tidycal.com/realadammatthew" 
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Email Directly</h5>
                  <p className="card-text">
                    Send me a direct email for quick questions or detailed project discussions.
                  </p>
                  <a 
                    href="mailto:adam@matthewsteinberger.com" 
                    className="btn btn-outline-primary"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-comments fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Try My Chatbot</h5>
                  <p className="card-text">
                    Experience my AI chatbot technology firsthand to see what&apos;s possible.
                  </p>
                  <a 
                    href="https://chat.adam.matthewsteinberger.com" 
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Chatbot
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <h2 className="h3">Or Send Me a Message</h2>
            <p className="text-muted">
              Fill out the form below and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 