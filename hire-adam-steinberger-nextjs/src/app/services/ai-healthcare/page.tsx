export default function HealthcareAIPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>
              Healthcare AI Solutions
            </h1>
            <h2 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>
              HIPAA-Compliant AI Solutions for Healthcare Providers
            </h2>
            <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
              <div className="alert custom-alert p-4 mb-4 shadow-lg">
                Transform healthcare delivery with secure, compliant AI solutions designed specifically for medical practices, clinics, and healthcare organizations.
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-gold text-center">Why AI for Healthcare?</h3>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-shield-alt fa-2x mb-3"></i>
                  <h5>HIPAA Compliant</h5>
                  <p>Built with healthcare-grade security and privacy standards to protect sensitive patient information</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card purple-box credential-card">
                  <i className="fas fa-clock fa-2x mb-3"></i>
                  <h5>24/7 Patient Support</h5>
                  <p>Provide round-the-clock patient assistance, appointment scheduling, and basic medical information</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card golden-box credential-card">
                  <i className="fas fa-user-md fa-2x mb-3"></i>
                  <h5>Staff Efficiency</h5>
                  <p>Automate routine tasks to free up medical staff for more critical patient care responsibilities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-green text-center">Healthcare AI Services</h3>
            <div className="row justify-content-center g-4">
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-calendar-check"></i> Appointment Scheduling</h5>
                  <p>Intelligent appointment booking systems that understand medical terminology and scheduling requirements</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-question-circle"></i> Patient FAQs</h5>
                  <p>AI-powered patient support that answers common questions about procedures, policies, and general health information</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-file-medical"></i> Medical Documentation</h5>
                  <p>AI assistance for medical documentation, form processing, and administrative tasks</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-bell"></i> Patient Reminders</h5>
                  <p>Automated appointment reminders, medication alerts, and follow-up care notifications</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-chart-line"></i> Health Analytics</h5>
                  <p>AI-powered analytics for patient data insights, treatment outcomes, and practice optimization</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-phone"></i> Telemedicine Support</h5>
                  <p>AI-enhanced telemedicine platforms with intelligent triage and patient screening capabilities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-blue text-center">Healthcare Compliance & Security</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card purple-box knowledge-card mb-4">
                  <h5 className="mb-3"><i className="fas fa-certificate"></i> Built for Healthcare Standards</h5>
                  <p>All healthcare AI solutions are designed with strict compliance requirements in mind:</p>
                  <ul className="mb-4">
                    <li>HIPAA-compliant data handling and storage</li>
                    <li>End-to-end encryption for all patient communications</li>
                    <li>Audit trails and access logging for compliance reporting</li>
                    <li>Secure integration with existing EMR/EHR systems</li>
                    <li>Regular security assessments and updates</li>
                    <li>Staff training on AI system usage and privacy protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 section-headline-gold text-center">Healthcare Use Cases</h3>
            <div className="row justify-content-center g-4">
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-hospital"></i> Medical Practices</h5>
                  <p>Streamline patient communication, appointment management, and administrative tasks for private practices and clinics</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-stethoscope"></i> Specialists</h5>
                  <p>Specialized AI solutions for dermatology, cardiology, orthopedics, and other medical specialties</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card golden-box solution-card">
                  <h5><i className="fas fa-tooth"></i> Dental Practices</h5>
                  <p>AI-powered patient education, appointment scheduling, and treatment plan explanations for dental offices</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card purple-box solution-card">
                  <h5><i className="fas fa-eye"></i> Optometry</h5>
                  <p>Custom AI solutions for vision care practices, including appointment management and patient education</p>
                </div>
              </div>
            </div>
          </section>

          {/* Consultation CTA */}
          <section className="mb-5">
            <h3 className="fw-bold section-headline-blue text-center">Ready to Transform Your Healthcare Practice?</h3>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <p className="mb-4">Let's discuss how AI can enhance your healthcare practice while maintaining the highest standards of patient privacy and care.</p>
                <a 
                  href="https://tidycal.com/realadammatthew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn"
                >
                  Schedule Free Consultation
                </a>
                <p className="mt-3 text-secondary">Serving healthcare providers throughout the Triangle area with HIPAA-compliant AI solutions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 