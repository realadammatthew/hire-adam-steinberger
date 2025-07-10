'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkzqgly");
  
  if (state.succeeded) {
    return (
      <div className="alert alert-success text-center" role="alert">
        <h4 className="alert-heading">Thank you!</h4>
        <p>Your message has been sent successfully. I&apos;ll get back to you soon!</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Contact Me</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} className="needs-validation" noValidate style={{ position: 'relative', zIndex: 10 }}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    autoComplete="name"
                    style={{ 
                      position: 'relative', 
                      zIndex: 10, 
                      pointerEvents: 'auto',
                      userSelect: 'text'
                    }}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    className="form-control"
                    required
                    autoComplete="email"
                    style={{ 
                      position: 'relative', 
                      zIndex: 10, 
                      pointerEvents: 'auto',
                      userSelect: 'text'
                    }}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="form-control"
                    required
                    autoComplete="off"
                    style={{ 
                      position: 'relative', 
                      zIndex: 10, 
                      pointerEvents: 'auto',
                      userSelect: 'text'
                    }}
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Please describe your project or inquiry..."
                    style={{ 
                      position: 'relative', 
                      zIndex: 10, 
                      pointerEvents: 'auto',
                      userSelect: 'text'
                    }}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-danger small"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="btn btn-primary btn-lg py-3"
                  >
                    {state.submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {state.errors && Object.keys(state.errors).length > 0 && (
                  <div className="alert alert-danger mt-3" role="alert">
                    <strong>Error:</strong> Please check the form and try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 