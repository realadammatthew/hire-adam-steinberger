import Link from 'next/link';

export default function AITutoringPage() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h2 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>AI Solutions for Tutoring</h2>
        <br />
        <h3 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>Personalized Learning & Educational Enhancement</h3>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Specialized AI solutions for tutoring and educational organizations in the Triangle area. From personalized learning and adaptive tutoring to student assessment and educational analytics. Built for learning enhancement and educational success.
          </div>
        </div>
      </section>

      {/* Tutoring AI Solutions */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Tutoring AI Solutions</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-graduation-cap fa-2x mb-3"></i>
              <h5>Personalized Learning</h5>
              <p>AI-powered personalized learning paths and adaptive tutoring</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card purple-box credential-card">
              <i className="fas fa-clipboard-check fa-2x mb-3"></i>
              <h5>Student Assessment</h5>
              <p>Intelligent student assessment and progress tracking</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card golden-box credential-card">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h5>Educational Analytics</h5>
              <p>AI-powered educational analytics and learning insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring AI Services */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">Tutoring AI Services</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-graduation-cap"></i> Personalized Learning</h5>
              <p>AI-powered personalized learning paths with adaptive tutoring and curriculum optimization.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-clipboard-check"></i> Student Assessment</h5>
              <p>Intelligent student assessment with progress tracking and performance analytics.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-chart-line"></i> Educational Analytics</h5>
              <p>AI-powered educational analytics with learning insights and performance measurement.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-users"></i> Tutor Support</h5>
              <p>AI-powered tutor support with lesson planning and student progress monitoring.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-book"></i> Content Creation</h5>
              <p>AI-powered educational content creation with curriculum development and lesson planning.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-clock"></i> Scheduling Optimization</h5>
              <p>AI-powered scheduling optimization with tutor-student matching and availability management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Benefits */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Tutoring Benefits</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-graduation-cap"></i> Tutoring Transformation</h5>
              <p>Comprehensive AI solutions designed specifically for tutoring and educational challenges:</p>
              <ul className="mb-4">
                <li><strong>Learning Outcomes:</strong> 40% improvement in learning outcomes with AI personalization</li>
                <li><strong>Student Engagement:</strong> 60% increase in student engagement with AI adaptive learning</li>
                <li><strong>Assessment Accuracy:</strong> 50% improvement in assessment accuracy with AI evaluation</li>
                <li><strong>Tutor Efficiency:</strong> 45% improvement in tutor productivity with AI assistance</li>
                <li><strong>Progress Tracking:</strong> Real-time progress tracking with AI analytics</li>
                <li><strong>Content Quality:</strong> 35% improvement in content quality with AI creation</li>
                <li><strong>Scheduling Efficiency:</strong> 70% improvement in scheduling efficiency with AI optimization</li>
                <li><strong>Scalability:</strong> AI systems that grow with your tutoring business and student base</li>
              </ul>
              <p>All tutoring AI solutions include comprehensive training, support, and educational optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Use Cases */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">Tutoring AI Use Cases</h4>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-calculator"></i> Math Tutoring</h5>
              <p>Mathematics tutoring automation, problem-solving assistance, and concept explanation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-language"></i> Language Learning</h5>
              <p>Language learning automation, conversation practice, and grammar assistance.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-flask"></i> Science Tutoring</h5>
              <p>Science tutoring automation, experiment guidance, and concept visualization.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-book-open"></i> Reading & Writing</h5>
              <p>Reading comprehension, writing assistance, and literary analysis support.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card golden-box solution-card">
              <h5><i className="fas fa-code"></i> Computer Science</h5>
              <p>Programming tutoring, coding assistance, and computer science education.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card purple-box solution-card">
              <h5><i className="fas fa-chart-bar"></i> Test Prep</h5>
              <p>Standardized test preparation, practice exams, and performance analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See Tutoring AI in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience tutoring AI capabilities in action. Try the live demo to see personalized learning and educational enhancement.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Tutoring Investment */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">Tutoring AI Investment</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-chart-line"></i> Tutoring Pricing</h5>
              <p>Tutoring AI solutions are priced based on organization size and complexity:</p>
              <ul className="mb-4">
                <li><strong>Individual Tutors:</strong> $5K-15K for essential tutoring AI tools</li>
                <li><strong>Small Centers (2-10 tutors):</strong> $15K-40K for comprehensive tutoring AI</li>
                <li><strong>Medium Centers (10-30 tutors):</strong> $40K-100K for enterprise tutoring AI</li>
                <li><strong>Large Centers (30+ tutors):</strong> $100K-300K+ for multi-location tutoring AI</li>
                <li><strong>Specialized Solutions:</strong> $10K-25K for specific tutoring automation needs</li>
              </ul>
              <p>All tutoring AI solutions include comprehensive training, support, and educational optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container my-5">
        <div className="text-center">
          <h4 className="fw-bold mb-4 section-headline-gold">Ready to Transform Your Tutoring?</h4>
          <p className="mb-4">Let&apos;s discuss how AI can enhance your tutoring and educational services.</p>
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