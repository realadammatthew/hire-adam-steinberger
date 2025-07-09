import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { extractArticleContent } from '@/lib/articleUtils';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  // For now, let's include the content for the first article directly
  // In a real implementation, you'd load this from a database or file system
  const articleContent = params.slug === 'what-is-ai-really' ? {
    title: 'What Is AI, Really?',
    content: `
      <p>Let's cut through the noise.</p>

      <h2 id="everyday-ai" className="fw-bold section-headline-blue">🤖 The Everyday Meaning of AI</h2>
      
      <p>At its core, <strong>AI simply means machines doing things we normally associate with human intelligence</strong>. That could be recognizing your face in a photo, suggesting your next movie, helping you navigate traffic, or chatting with you online.</p>
      
      <p>A good rule of thumb:</p>
      
      <div className="knowledge-card-enhanced">
        <p><em>If a computer is doing something that would normally require a human brain — like learning, planning, or solving problems — it's probably using some form of AI.</em></p>
      </div>
      
      <p>You don't need to imagine a robot with feelings. Most AI today doesn't "think" like humans. Instead, it <em>mimics</em> smart behavior using code and math.</p>
      
      <p>For example:</p>
      
      <ul>
        <li>Your email spam filter "learns" what junk looks like.</li>
        <li>Siri "understands" your question and gives a relevant response.</li>
        <li>Netflix "guesses" what you'd like to watch next.</li>
      </ul>
      
      <p>They're not conscious — just well-trained at specific tasks.</p>

      <h2 id="what-is-ai" className="fw-bold section-headline-gold">🔍 So, What <em>Is</em> AI?</h2>
      
      <p>Artificial Intelligence (AI) is a field within computer science focused on building <strong>systems that can simulate aspects of human intelligence</strong>. This includes tasks like:</p>
      
      <ul>
        <li>Learning from data</li>
        <li>Making decisions</li>
        <li>Understanding language</li>
        <li>Recognizing images</li>
        <li>Planning and reasoning</li>
      </ul>
      
      <p>More formally, AI is often defined as:</p>
      
      <div className="quote-card">
        <blockquote>"The capability of a machine to imitate intelligent human behavior."</blockquote>
      </div>
      
      <p>Or, in the words of the field's founder, <strong>John McCarthy</strong>, it's:</p>
      
      <div className="quote-card">
        <blockquote>"The science and engineering of making intelligent machines."</blockquote>
      </div>
      
      <p>But that definition is broad, and intentionally so — because AI itself covers a huge range of technologies.</p>

      <h2 id="four-ways" className="fw-bold section-headline-green">🧠 Four Ways People Think About AI</h2>
      
      <p>According to researchers <strong>Stuart Russell and Peter Norvig</strong>, there are four main ways AI has been defined:</p>
      
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="grid-card">
            <h5><i className="fas fa-brain"></i> Thinking Humanly</h5>
            <p>Mimicking how humans think (cognitive modeling)</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="grid-card">
            <h5><i className="fas fa-user"></i> Acting Humanly</h5>
            <p>Behaving like a person (e.g., passing the Turing Test)</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="grid-card">
            <h5><i className="fas fa-cogs"></i> Thinking Rationally</h5>
            <p>Using logic to reason correctly</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="grid-card">
            <h5><i className="fas fa-target"></i> Acting Rationally</h5>
            <p>Choosing actions that maximize outcomes</p>
          </div>
        </div>
      </div>
      
      <p>Most AI systems today aim to <em>act rationally</em>. That means they aren't trying to be human — just to achieve goals effectively.</p>

      <h2 id="tldr" className="fw-bold section-headline-gold">TL;DR: What is AI, Really?</h2>
      
      <div className="knowledge-card-enhanced">
        <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
          <li>AI is not a robot or a sci-fi villain — it's a toolbox for solving problems.</li>
          <li>It allows machines to do things like learn, decide, recognize, and automate.</li>
          <li>Most AI today is "narrow" — excellent at one task, not general thinking.</li>
          <li>Myths often distract us from AI's real potential and real risks.</li>
          <li>Whether you're a startup or a solo founder, AI tools — especially AI <strong>chatbots</strong> — are more accessible than ever.</li>
        </ul>
      </div>
    `,
    audioFile: '01-what-is-ai-really.wav',
    meta: {
      date: 'July 4, 2025',
      section: 'Section 1: Understanding the Basics of AI',
      readTime: '8 min read'
    }
  } : null;

  if (!articleContent) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1>{article.title}</h1>
            <p>Article content coming soon...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = articles.findIndex(a => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="enhanced-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/novice-to-navigator">Novice to Navigator</a></li>
              <li className="breadcrumb-item active" aria-current="page">{articleContent.title}</li>
            </ol>
          </nav>
          
          {/* Article Title */}
          <h1 className="fw-bold headline-gradient mb-3">{articleContent.title}</h1>
          
          {/* Meta Info */}
          <div className="article-meta">
            <span><i className="fas fa-calendar-alt"></i>{articleContent.meta.date}</span>
            <span><i className="fas fa-book-open"></i>{articleContent.meta.section}</span>
            <span><i className="fas fa-clock"></i>{articleContent.meta.readTime}</span>
          </div>
          
          {/* Audio Player */}
          {articleContent.audioFile && (
            <div className="article-header">
              <p><strong>Listen to this article:</strong></p>
              <audio controls>
                <source src={`/audio/${articleContent.audioFile}`} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          
          {/* Article Content */}
          <article 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: articleContent.content }}
          />
          
          {/* Navigation */}
          <div className="article-navigation">
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-start">
                <a href="/novice-to-navigator" className="btn btn-outline-primary">
                  <i className="fas fa-arrow-left me-2"></i>Back to Series
                </a>
              </div>
              <div className="text-end">
                {nextArticle && (
                  <a href={`/novice-to-navigator/${nextArticle.slug}`} className="btn btn-outline-primary">
                    Next: {nextArticle.title}<i className="fas fa-arrow-right ms-2"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
} 