import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { getServiceBySlug } from '@/lib/serviceUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceIndex = services.findIndex(s => s.slug === slug);
  const service = services[serviceIndex];
  
  if (!service) {
    notFound();
  }

  // Get service content from Markdown file
  const serviceContent = getServiceBySlug(slug);
  
  if (!serviceContent) {
    notFound();
  }

  // Previous and next services in the same category
  const sameCategoryServices = services.filter(s => s.category === service.category);
  const currentIndex = sameCategoryServices.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? sameCategoryServices[currentIndex - 1] : null;
  const nextService = currentIndex < sameCategoryServices.length - 1 ? sameCategoryServices[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h1 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>
          {serviceContent.heroTitle}
        </h1>
        <br />
        <h2 className="fw-semibold mb-3 headline-gradient" style={{fontSize: '1.35rem'}}>
          {serviceContent.heroSubtitle}
        </h2>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            {serviceContent.description}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {serviceContent.benefits && serviceContent.benefits.length > 0 && (
        <section className="container my-5">
          <h4 className="fw-bold mb-4 section-headline-gold text-center">Why Choose This Service?</h4>
          <div className="row justify-content-center">
            {serviceContent.benefits.map((benefit, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={`card ${index % 2 === 0 ? 'golden-box' : 'purple-box'} credential-card`}>
                  <i className="fas fa-check-circle fa-2x mb-3"></i>
                  <h5>{benefit}</h5>
                  <p>Expert implementation and ongoing support for optimal results.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features Section */}
      {serviceContent.features && serviceContent.features.length > 0 && (
        <section className="container my-5">
          <h4 className="fw-bold mb-4 section-headline-green text-center">Service Features</h4>
          <div className="row justify-content-center g-4">
            {serviceContent.features.map((feature, index) => (
              <div key={index} className="col-md-6">
                <div className={`card ${index % 2 === 0 ? 'purple-box' : 'golden-box'} solution-card`}>
                  <h5><i className="fas fa-cog"></i> {feature}</h5>
                  <p>Professional implementation and customization for your specific needs.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="article-body mb-5">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {serviceContent.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-gold text-center">See AI in Action</h4>
        <div className="text-center my-4">
          <p className="mb-4">Experience a live demo of a custom AI assistant. See how businesses can leverage AI technology effectively.</p>
          <a href="https://chat.adam.matthewsteinberger.com" target="_blank" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
            Try the Live Demo
          </a>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container my-5">
        <h4 className="fw-bold section-headline-blue text-center">Ready to Get Started?</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">Let&apos;s discuss how AI can transform your business. Schedule a free consultation to explore your options.</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn w-100">
              Schedule Free Consultation
            </a>
            <Link href="/contact" className="btn-custom btn btn-lg fw-bold shadow-lg px-4 py-3 employer-btn w-100 mt-3">
              Contact for Employment
            </Link>
            <p className="mt-3 text-secondary">Serving the Triangle area and beyond with expert AI development services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}