import Link from 'next/link';
import { Metadata } from 'next';
import { projects, projectCategories } from '@/data/projects';

export const metadata: Metadata = {
  title: 'AI Development Projects | Adam Matthew Steinberger Portfolio',
  description: 'Explore Adam Matthew Steinberger\'s portfolio of AI development projects including enterprise solutions, RAG chatbots, and open-source tools.',
  openGraph: {
    title: 'AI Development Projects | Adam Matthew Steinberger Portfolio',
    description: 'Explore Adam Matthew Steinberger\'s portfolio of AI development projects including enterprise solutions, RAG chatbots, and open-source tools.',
    url: 'https://hire.adam.matthewsteinberger.com/projects',
  },
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const projectsByCategory = projectCategories.map(category => ({
    category,
    categoryDescription: projects.find(p => p.category === category)?.categoryDescription || '',
    projects: projects.filter(project => project.category === category)
  }));

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">AI Development Projects</h1>
          <p className="lead mb-4">
            Explore my portfolio of innovative AI solutions across enterprise, non-profit, and open-source projects.
            Each project showcases cutting-edge technology and real-world impact.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects py-5">
        <div className="container">
          <h2 className="section-headline-blue text-center mb-5">Featured Projects</h2>
          <div className="row">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="col-lg-4 col-md-6 mb-4">
                <div className="project-card h-100">
                  <div className="project-card-body">
                    <div className="project-category mb-2">
                      <span className="badge bg-primary">{project.category}</span>
                    </div>
                    <h3 className="project-title mb-3">
                      <Link href={`/projects/${project.slug}`} className="text-decoration-none">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="project-description mb-3">{project.description}</p>
                    <div className="project-meta mb-3">
                      {project.technologies && (
                        <div className="technologies mb-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="tech-badge me-1">{tech}</span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="tech-badge">+{project.technologies.length - 3} more</span>
                          )}
                        </div>
                      )}
                      <div className="project-details">
                        <span className="duration me-3">
                          <i className="fas fa-clock me-1"></i>
                          {project.duration}
                        </span>
                        <span className={`status status-${project.status}`}>
                          <i className="fas fa-circle me-1"></i>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <Link href={`/projects/${project.slug}`} className="btn btn-outline-primary">
                      View Project <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="projects-by-category py-5">
        <div className="container">
          <h2 className="section-headline-blue text-center mb-5">All Projects by Category</h2>

          {projectsByCategory.map(({ category, categoryDescription, projects: categoryProjects }) => (
            <div key={category} className="category-section mb-5">
              <div className="category-header mb-4">
                <h3 className="category-title">{category}</h3>
                <p className="category-description text-muted">{categoryDescription}</p>
              </div>

              <div className="row">
                {categoryProjects.map((project) => (
                  <div key={project.slug} className="col-lg-6 col-md-12 mb-4">
                    <div className="project-card-horizontal">
                      <div className="project-card-body">
                        <h4 className="project-title mb-2">
                          <Link href={`/projects/${project.slug}`} className="text-decoration-none">
                            {project.title}
                          </Link>
                        </h4>
                        <p className="project-description mb-3">{project.description}</p>
                        <div className="project-meta">
                          {project.technologies && (
                            <div className="technologies mb-2">
                              {project.technologies.slice(0, 4).map((tech, index) => (
                                <span key={index} className="tech-badge me-1">{tech}</span>
                              ))}
                            </div>
                          )}
                          <div className="project-details d-flex justify-content-between align-items-center">
                            <div>
                              <span className="duration me-3">
                                <i className="fas fa-clock me-1"></i>
                                {project.duration}
                              </span>
                              <span className={`status status-${project.status}`}>
                                <i className="fas fa-circle me-1"></i>
                                {project.status}
                              </span>
                            </div>
                            <Link href={`/projects/${project.slug}`} className="btn btn-sm btn-outline-primary">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h2 className="section-headline-blue mb-4">Ready to Start Your AI Project?</h2>
          <p className="lead mb-4">
            Let&apos;s discuss how I can help bring your AI vision to life with proven expertise and innovative solutions.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-envelope me-2"></i>
              Get In Touch
            </Link>
            <Link href="/services" className="btn btn-outline-primary btn-lg">
              <i className="fas fa-cogs me-2"></i>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}