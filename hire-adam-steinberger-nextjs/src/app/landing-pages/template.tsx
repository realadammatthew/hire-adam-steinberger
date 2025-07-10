import { Metadata } from 'next'

interface LandingPageProps {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
  twitterTitle: string
  twitterDescription: string
  canonicalUrl: string
  structuredData: any
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  localExpertiseTitle: string
  localExpertiseCards: Array<{
    icon: string
    title: string
    description: string
    className: string
  }>
  servicesTitle: string
  servicesCards: Array<{
    icon: string
    title: string
    description: string
    className: string
  }>
  successStoriesTitle: string
  successStoriesContent: string
  successStoriesList: string[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonText: string
  ctaSubtext?: string
}

export function generateMetadata(props: LandingPageProps): Metadata {
  return {
    title: props.title,
    description: props.description,
    keywords: props.keywords,
    authors: [{ name: 'Adam Matthew Steinberger' }],
    creator: 'Adam Matthew Steinberger',
    publisher: 'Adam Matthew Steinberger LLC',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://hire.adam.matthewsteinberger.com'),
    alternates: {
      canonical: props.canonicalUrl,
    },
    openGraph: {
      title: props.ogTitle,
      description: props.ogDescription,
      url: `https://hire.adam.matthewsteinberger.com${props.canonicalUrl}`,
      siteName: 'Hire Adam Matthew Steinberger - Triangle Area AI Expert',
      images: [
        {
          url: '/social-preview.png',
          width: 1200,
          height: 630,
          alt: 'Adam Matthew Steinberger - Triangle Area AI Expert',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: props.twitterTitle,
      description: props.twitterDescription,
      images: ['/social-preview.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'G-P4CX07CNRW',
    },
    other: {
      'application/ld+json': JSON.stringify(props.structuredData),
    },
  }
}

export default function LandingPageTemplate(props: LandingPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="container text-center my-5" style={{ marginTop: '0 !important', paddingTop: '0 !important' }}>
        <h2 className="fw-bold headline-gradient" style={{ fontSize: '2.7rem' }}>{props.heroTitle}</h2>
        <h3 className="fw-semibold mb-3 headline-gradient" style={{ fontSize: '1.35rem' }}>{props.heroSubtitle}</h3>
        <div className="mx-auto mb-4" style={{ maxWidth: '700px' }}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            {props.heroDescription}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-gold text-center">{props.localExpertiseTitle}</h4>
        <div className="row justify-content-center">
          {props.localExpertiseCards.map((card, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className={`card ${card.className} credential-card`}>
                <i className={`${card.icon} fa-2x mb-3`}></i>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-green text-center">{props.servicesTitle}</h4>
        <div className="row justify-content-center g-4">
          {props.servicesCards.map((card, index) => (
            <div key={index} className="col-md-6">
              <div className={`card ${card.className} solution-card`}>
                <h5><i className={card.icon}></i> {card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container my-5">
        <h4 className="fw-bold mb-4 section-headline-blue text-center">{props.successStoriesTitle}</h4>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box knowledge-card mb-4">
              <h5 className="mb-3"><i className="fas fa-star"></i> Local Expertise You Can Trust</h5>
              <p>{props.successStoriesContent}</p>
              <ul className="mb-4">
                {props.successStoriesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
        <h4 className="fw-bold section-headline-blue text-center">{props.ctaTitle}</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="mb-4">{props.ctaDescription}</p>
            <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
               className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 consultation-btn">
              {props.ctaButtonText}
            </a>
            {props.ctaSubtext && (
              <p className="mt-3 text-secondary">{props.ctaSubtext}</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
} 