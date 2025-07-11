import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import MultipleCTAs from '@/components/MultipleCTAs';

export default function ServicesPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="fw-bold headline-gradient text-center mb-5">AI Development Services</h1>
          <p className="lead text-center mb-5">
            Comprehensive AI development services tailored for Triangle area businesses. 
            From custom chatbots to enterprise AI solutions, I help businesses leverage AI technology effectively.
          </p>

          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-5">
              <h2 className="fw-bold section-headline-gold mb-4">{category.title}</h2>
              <p className="text-secondary mb-4">{category.description}</p>
              
              <div className="row g-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="col-md-6 col-lg-4">
                    <div className="card solution-card h-100">
                      <div className="card-body">
                        <h5 className="fw-bold mb-3">{service.title}</h5>
                        <p className="text-secondary mb-3">{service.description}</p>
                        <Link 
                          href={`/services/${service.slug}`} 
                          className="btn btn-outline-primary btn-sm"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <MultipleCTAs />
        </div>
      </div>
    </div>
  );
} 