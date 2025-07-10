import Link from 'next/link';

export default function AIHealthcarePage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>AI Solutions for Healthcare</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>HIPAA-Compliant Healthcare Automation & Patient Care Enhancement</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Specialized HIPAA-compliant AI solutions for healthcare organizations in the Triangle area. From patient engagement and appointment scheduling to medical documentation and healthcare automation. Built with healthcare security and compliance standards.
          </div>
        </div>
      </section>

      {/* Healthcare AI Solutions */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Healthcare AI Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-user-md fa-2x mb-3"></i>
              <h5>Patient Engagement</h5>
              <p>HIPAA-compliant patient communication and engagement automation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-calendar-check fa-2x mb-3"></i>
              <h5>Appointment Scheduling</h5>
              <p>Intelligent appointment scheduling and patient management systems</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-file-medical fa-2x mb-3"></i>
              <h5>Medical Documentation</h5>
              <p>AI-powered medical documentation and clinical note assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare AI Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Healthcare AI Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-user-md"></i> Patient Engagement AI</h5>
              <p>HIPAA-compliant patient communication with appointment reminders and health education.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-calendar-check"></i> Appointment Scheduling</h5>
              <p>Intelligent appointment scheduling with patient preferences and provider availability.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-file-medical"></i> Medical Documentation</h5>
              <p>AI-powered medical documentation with clinical note assistance and coding support.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-pills"></i> Medication Management</h5>
              <p>AI-powered medication tracking, reminders, and drug interaction checking.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Health Analytics</h5>
              <p>AI-driven health analytics with patient outcome tracking and predictive insights.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-shield-alt"></i> HIPAA Compliance</h5>
              <p>Comprehensive HIPAA compliance with data encryption and security monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Healthcare Industry Benefits</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-heartbeat"></i> Healthcare Transformation</h5>
              <p>Comprehensive AI solutions designed specifically for healthcare challenges and patient care:</p>
              <ul className="mb-4">
                <li><strong>Patient Experience:</strong> 50% improvement in patient satisfaction with AI-powered engagement</li>
                <li><strong>Appointment Efficiency:</strong> 40% reduction in no-shows with intelligent scheduling</li>
                <li><strong>Documentation Time:</strong> 60% reduction in documentation time with AI assistance</li>
                <li><strong>Care Coordination:</strong> 35% improvement in care coordination with AI automation</li>
                <li><strong>Medication Safety:</strong> 45% reduction in medication errors with AI checking</li>
                <li><strong>Operational Efficiency:</strong> 30% reduction in administrative overhead through AI</li>
                <li><strong>HIPAA Compliance:</strong> 100% HIPAA compliance with comprehensive security measures</li>
                <li><strong>Scalability:</strong> AI systems that grow with your healthcare organization</li>
              </ul>
              <p>All healthcare AI solutions include comprehensive HIPAA compliance and security measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Use Cases */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Healthcare AI Use Cases</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-stethoscope"></i> Primary Care</h5>
              <p>Patient intake automation, appointment scheduling, and preventive care reminders.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-tooth"></i> Dental Practices</h5>
              <p>Dental appointment management, treatment planning, and patient education.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-eye"></i> Specialty Practices</h5>
              <p>Specialty-specific patient management, treatment tracking, and outcome monitoring.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-hospital"></i> Hospitals</h5>
              <p>Patient flow management, bed allocation, and clinical decision support.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-home"></i> Home Health</h5>
              <p>Remote patient monitoring, care coordination, and medication management.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-brain"></i> Mental Health</h5>
              <p>Mental health screening, appointment scheduling, and crisis intervention support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See Healthcare AI in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience healthcare AI capabilities in action. Try the live demo to see patient engagement and appointment scheduling.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Healthcare Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Healthcare AI Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Healthcare Industry Pricing</h5>
              <p>Healthcare AI solutions are priced based on practice size and complexity:</p>
              <ul className="mb-4">
                <li><strong>Small Practices (1-5 providers):</strong> $15K-35K for essential healthcare AI</li>
                <li><strong>Medium Practices (6-20 providers):</strong> $35K-75K for comprehensive healthcare AI</li>
                <li><strong>Large Practices (20+ providers):</strong> $75K-150K+ for enterprise healthcare AI</li>
                <li><strong>Hospitals & Health Systems:</strong> $100K-300K+ for hospital-wide AI systems</li>
                <li><strong>Specialized Solutions:</strong> $25K-50K for specific healthcare automation needs</li>
              </ul>
              <p>All healthcare AI solutions include comprehensive HIPAA compliance and security measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container my-5">
        <div className="text-center">
          <h4 className="fw-bold mb-4 section-headline-gold">Ready to Transform Your Healthcare Organization?</h4>
          <p className="mb-4">Let&apos;s discuss how AI can enhance your healthcare operations and patient care.</p>
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