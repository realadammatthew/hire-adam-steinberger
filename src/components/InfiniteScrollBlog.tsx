'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { BlogContent } from '@/lib/blogUtils';

interface InfiniteScrollBlogProps {
  allPosts: BlogContent[];
  postsPerPage?: number;
}

export default function InfiniteScrollBlog({ allPosts, postsPerPage = 6 }: InfiniteScrollBlogProps) {
  const [displayedPosts, setDisplayedPosts] = useState<BlogContent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Initialize with first batch of posts
  useEffect(() => {
    const initialPosts = allPosts.slice(0, postsPerPage);
    setDisplayedPosts(initialPosts);
    setHasMore(allPosts.length > postsPerPage);
  }, [allPosts, postsPerPage]);

  const loadMorePosts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simulate async loading for better UX
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = currentPage * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const newPosts = allPosts.slice(startIndex, endIndex);
      
      if (newPosts.length > 0) {
        setDisplayedPosts(prev => [...prev, ...newPosts]);
        setCurrentPage(nextPage);
        setHasMore(endIndex < allPosts.length);
      } else {
        setHasMore(false);
      }
      
      setLoading(false);
    }, 500);
  }, [allPosts, currentPage, postsPerPage, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= 
          document.documentElement.offsetHeight - 1000) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMorePosts]);

  return (
    <div>
      <div className="row justify-content-center g-4">
        {displayedPosts.map((post) => (
          <div key={post.slug} className="col-md-6 col-lg-4">
            <div className="card golden-box solution-card h-100">
              <div className="card-body d-flex flex-column">
                <div className="mb-2">
                  <span className="badge bg-secondary me-2">{post.category}</span>
                  <small className="text-muted">{post.readTime}</small>
                </div>
                <h5 className="fw-bold mb-3">{post.title}</h5>
                <p className="flex-grow-1">{post.description}</p>
                <div className="mt-auto">
                  {post.tags && post.tags.length > 0 && (
                    <div className="mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge bg-light text-dark me-1 mb-1">{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">By {post.author}</small>
                    <small className="text-muted">{new Date(post.publishedDate).toLocaleDateString()}</small>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="btn btn-outline-primary w-100">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Loading more articles...</p>
        </div>
      )}

      {!hasMore && displayedPosts.length > 0 && (
        <div className="text-center my-4">
          <p className="text-muted">You've reached the end of our articles!</p>
        </div>
      )}

      {hasMore && !loading && displayedPosts.length > 0 && (
        <div className="text-center my-4">
          <button 
            className="btn btn-outline-primary" 
            onClick={loadMorePosts}
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}