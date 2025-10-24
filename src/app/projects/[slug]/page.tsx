import { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projectUtils';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const projectData = projects.find(p => p.slug === slug);

  if (!project || !projectData) {
    return {
      title: 'Project Not Found | Adam Matthew Steinberger',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | Adam Matthew Steinberger Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Adam Matthew Steinberger Projects`,
      description: project.description,
      url: `https://hire.adam.matthewsteinberger.com/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const projectData = projects.find(p => p.slug === slug);

  if (!project || !projectData) {
    return (
      <div className="container py-5 text-center">
        <h1 className="display-4 mb-4">Project Not Found</h1>
        <p className="lead mb-4">The requested project could not be found.</p>
        <Link href="/projects" className="btn btn-primary">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Projects
        </Link>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.category === projectData.category && p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="project-page">
      {/* Hero Section */}
      <section className="project-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span className="text-muted">{projectData.category}</span>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {project.title}
                  </li>
                </ol>
              </nav>

              <h1 className="display-4 fw-bold mb-3">{project.heroTitle || project.title}</h1>
              <h2 className="h3 text-muted mb-4">{project.heroSubtitle || project.subtitle}</h2>
              <p className="lead">{project.description}</p>
            </div>
            <div className="col-lg-4">
              <div className="project-meta-card">
                <div className="meta-item">
                  <strong>Category:</strong>
                  <span className="badge bg-primary ms-2">{projectData.category}</span>
                </div>
                <div className="meta-item">
                  <strong>Duration:</strong>
                  <span className="ms-2">{project.duration}</span>
                </div>
                <div className="meta-item">
                  <strong>Status:</strong>
                  <span className={`status-badge status-${project.status} ms-2`}>
                    <i className="fas fa-circle me-1"></i>
                    {project.status}
                  </span>
                </div>
                {project.technologies && (
                  <div className="meta-item">
                    <strong>Technologies:</strong>
                    <div className="technologies mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge me-1 mb-1">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="project-summary py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="summary-card">
                <h3 className="summary-title">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Challenge
                </h3>
                <p>{project.challenge}</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="summary-card">
                <h3 className="summary-title">
                  <i className="fas fa-lightbulb me-2"></i>
                  Solution
                </h3>
                <p>{project.solution}</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="summary-card">
                <h3 className="summary-title">
                  <i className="fas fa-trophy me-2"></i>
                  Results
                </h3>
                <p>{project.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="project-content">
                <div className="markdown-content">
                  <ReactMarkdown
                    components={{
                    h1: ({children}) => <h2 className="section-headline-blue mb-4">{children}</h2>,
                    h2: ({children}) => <h3 className="h4 fw-bold mb-3 mt-4">{children}</h3>,
                    h3: ({children}) => <h4 className="h5 fw-bold mb-3 mt-3">{children}</h4>,
                    p: ({children}) => <p className="mb-3">{children}</p>,
                    ul: ({children}) => <ul className="mb-3">{children}</ul>,
                    ol: ({children}) => <ol className="mb-3">{children}</ol>,
                    code: ({children, ...props}) => {
                      const isInline = !props.className;
                      return isInline
                        ? <code className="bg-light px-1 rounded">{children}</code>
                        : <pre className="bg-light p-3 rounded overflow-auto"><code>{children}</code></pre>;
                    },
                    blockquote: ({children}) => (
                      <blockquote className="blockquote border-start border-primary border-3 ps-3 my-3">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {project.content}
                </ReactMarkdown>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-sidebar">
                {/* Technical Details */}
                <div className="sidebar-section mb-4">
                  <h4 className="sidebar-title">Technical Details</h4>
                  <div className="technical-details">
                    <div className="detail-item">
                      <strong>Tech Stack:</strong>
                      <p className="small mt-1">{project.techStack}</p>
                    </div>
                    <div className="detail-item">
                      <strong>Architecture:</strong>
                      <p className="small mt-1">{project.architecture}</p>
                    </div>
                    <div className="detail-item">
                      <strong>Key Learnings:</strong>
                      <p className="small mt-1">{project.lessons}</p>
                    </div>
                  </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                  <div className="sidebar-section">
                    <h4 className="sidebar-title">Related Projects</h4>
                    <div className="related-projects">
                      {relatedProjects.map((relatedProject) => (
                        <Link
                          key={relatedProject.slug}
                          href={`/projects/${relatedProject.slug}`}
                          className="related-project-link"
                        >
                          <div className="related-project-card">
                            <h5 className="related-project-title">{relatedProject.title}</h5>
                            <p className="related-project-description">
                              {relatedProject.description.substring(0, 100)}...
                            </p>
                            <span className="badge bg-secondary">{relatedProject.category}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="project-cta py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-headline-blue mb-4">Interested in Similar Work?</h2>
              <p className="lead mb-4">
                I&apos;d love to discuss how I can help you achieve similar results for your organization.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <i className="fas fa-envelope me-2"></i>
                  Get In Touch
                </Link>
                <Link href="/projects" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-arrow-left me-2"></i>
                  View All Projects
                </Link>
                <Link href="/services" className="btn btn-custom btn-lg">
                  <i className="fas fa-cogs me-2"></i>
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}