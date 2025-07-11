import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import MultipleCTAs from '@/components/MultipleCTAs';
import styles from './ServicePage.module.css';

export default function ServicesPage() {
  return (
    <div className={styles.servicePageBg}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className={styles.headline}>AI Development Services</h1>
            <p className="lead text-center mb-5" style={{fontSize: '1.25rem', lineHeight: 1.7}}>
              Comprehensive AI development services tailored for Triangle area businesses.<br/>
              From custom chatbots to enterprise AI solutions, I help businesses leverage AI technology effectively.
            </p>

            {serviceCategories.map((category, index) => (
              <div key={index} className={styles.section}>
                <h2 className={styles.sectionTitle + ' section-headline-gold'}>{category.title}</h2>
                <p className="text-secondary mb-4" style={{fontSize: '1.1rem'}}>{category.description}</p>
                <div className="row g-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="col-md-6 col-lg-4">
                      <div className={styles.card + ' card solution-card h-100'}>
                        <div className="card-body d-flex flex-column">
                          <h5 className={styles.cardTitle}>{service.title}</h5>
                          <p className={styles.cardText + ' flex-grow-1'}>{service.description}</p>
                          <Link 
                            href={`/services/${service.slug}`} 
                            className="btn btn-outline-primary btn-sm mt-auto fw-bold px-3 py-2"
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
    </div>
  );
} 