'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeServices = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Burger Menu */}
      {isClient && (
        <Menu
          isOpen={isMenuOpen}
          onStateChange={handleStateChange}
          right
          width={'280px'}
          className='burger-menu'
        >
        <Link href='/' className='menu-item' onClick={closeMenu}>
          <i className='fas fa-home me-2'></i>
          Home
        </Link>

        <div className='menu-section'>
          <h6 className='menu-section-title'>Services</h6>
          <Link href='/services/custom-chatbots' className='menu-item submenu-item' onClick={closeMenu}>
            <i className='fas fa-robot me-2'></i>
            Custom Chatbots
          </Link>
          <Link href='/services/llm-development' className='menu-item submenu-item' onClick={closeMenu}>
            <i className='fas fa-brain me-2'></i>
            LLM Development
          </Link>
          <Link href='/services/rag-development' className='menu-item submenu-item' onClick={closeMenu}>
            <i className='fas fa-search me-2'></i>
            RAG Systems
          </Link>
          <Link href='/services' className='menu-item submenu-item' onClick={closeMenu}>
            <i className='fas fa-list me-2'></i>
            All Services
          </Link>
        </div>

        <Link href='/novice-to-navigator' className='menu-item' onClick={closeMenu}>
          <i className='fas fa-graduation-cap me-2'></i>
          Learn AI
        </Link>

        <Link href='/contact' className='menu-item' onClick={closeMenu}>
          <i className='fas fa-envelope me-2'></i>
          Contact
        </Link>
        </Menu>
      )}

      {/* Main Navigation Bar */}
      <nav className='navbar fixed-top main-navbar'>
        <div className='container-fluid'>
          <Link href='/' className='navbar-brand d-flex align-items-center'>
            <Image
              src='/profile-picture.jpg'
              alt='Adam Matthew Steinberger'
              width={40}
              height={40}
              className='rounded-circle me-2'
              priority
            />
            <span className='brand-text'>Adam Matthew Steinberger</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='desktop-nav d-none d-lg-flex'>
            <div className='nav-list'>
              <Link href='/' className='nav-link-desktop'>Home</Link>

              <div className='dropdown-wrapper' onMouseLeave={closeServices}>
                <button
                  className='nav-link-desktop dropdown-btn'
                  onClick={toggleServices}
                >
                  Services
                  <i className={`fas fa-chevron-down ms-1 ${isServicesOpen ? 'rotate' : ''}`}></i>
                </button>
                {isServicesOpen && (
                  <div className='dropdown-menu-custom'>
                    <Link href='/services/custom-chatbots' className='dropdown-item-custom' onClick={closeServices}>Custom Chatbots</Link>
                    <Link href='/services/llm-development' className='dropdown-item-custom' onClick={closeServices}>LLM Development</Link>
                    <Link href='/services/rag-development' className='dropdown-item-custom' onClick={closeServices}>RAG Systems</Link>
                    <div className='dropdown-divider-custom'></div>
                    <Link href='/services' className='dropdown-item-custom' onClick={closeServices}>All Services</Link>
                  </div>
                )}
              </div>

              <Link href='/novice-to-navigator' className='nav-link-desktop'>Learn AI</Link>
              <Link href='/contact' className='nav-link-desktop'>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <header className='resume-header'>
        <div className='container py-5'>
          <div className='row align-items-center'>
            <div className='col-md-3 text-center mb-4 mb-md-0'>
              <Image
                src='/profile-picture.jpg'
                alt='Adam Matthew Steinberger - Staff Software Engineer and AI Solutions Architect'
                width={200}
                height={200}
                className='profile-large rounded-circle shadow'
                priority
              />
            </div>
            <div className='col-md-9'>
              <h1 className='display-4 fw-bold mb-2'>Adam Matthew Steinberger</h1>
              <h2 className='h4 text-muted mb-3'>Staff Software Engineer & AI Solutions Architect</h2>
              <p className='lead mb-4'>Transforming businesses with cutting-edge AI solutions and custom chatbot development in Greenville, SC and the Upstate region.</p>

              <div className='contact-info d-flex flex-wrap gap-3 mb-4'>
                <a
                  href='https://www.openstreetmap.org/relation/193989'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary btn-sm'
                >
                  <i className='fas fa-map-marker-alt me-1'></i>
                  Greenville, SC
                </a>
                <a
                  href='tel:+18645174117'
                  className='btn btn-outline-primary btn-sm'
                >
                  <i className='fas fa-phone me-1'></i>
                  (864) 517-4117
                </a>
                <a
                  href='mailto:adam@matthewsteinberger.com'
                  className='btn btn-outline-primary btn-sm'
                >
                  <i className='fas fa-envelope me-1'></i>
                  Email
                </a>
              </div>

              <div className='social-links d-flex gap-2'>
                <a
                  href='https://linkedin.com/in/realadammatthew/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary btn-sm'
                >
                  <i className='fab fa-linkedin me-1'></i>
                  LinkedIn
                </a>
                <a
                  href='https://github.com/realadammatthew'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-dark btn-sm'
                >
                  <i className='fab fa-github me-1'></i>
                  GitHub
                </a>
                <a
                  href='https://x.com/realadammatthew'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-info btn-sm'
                >
                  <i className='fab fa-x-twitter me-1'></i>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
