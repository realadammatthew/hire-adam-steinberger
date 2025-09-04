import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='position-relative'>
      <div className='header-intro-bg position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-auto d-flex align-items-center'>
              <div className='d-flex gap-4'>
                <div className='text-center'>
                  <Link href='/'>
                    <Image
                      src='/profile-picture.jpg'
                      alt='Adam Matthew Steinberger - Staff Software Engineer and AI Solutions Architect'
                      width={120}
                      height={120}
                      className='profile shadow'
                      priority
                    />
                  </Link>
                </div>
                <div className='flex-grow-1'>
                  <div className='p-4 bg-transparent'>
                    <h1 className='fw-bold mb-1 text-light'>
                      Adam Matthew Steinberger
                    </h1>
                    <h2 className='h5 mb-1'>
                      Staff Software Engineer and AI Solutions Architect
                    </h2>
                    <br />
                    <div className='header-contact-block'>
                      <div className='d-flex flex-wrap gap-2'>
                        <a
                          href='https://www.openstreetmap.org/relation/193989'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='Greenville, SC USA'
                        >
                          <i className='fas fa-map-marker-alt'></i>
                        </a>
                        <a
                          href='tel:+18645174117'
                          className='btn btn-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='+1-864-517-4117'
                        >
                          <i className='fas fa-phone'></i>
                        </a>
                        <a
                          href='mailto:adam@matthewsteinberger.com'
                          className='btn btn-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='adam@matthewsteinberger.com'
                        >
                          <i className='fas fa-envelope'></i>
                        </a>
                        <a
                          href='https://linkedin.com/in/realadammatthew/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-outline-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='LinkedIn'
                        >
                          <i className='fab fa-linkedin'></i>
                        </a>
                        <a
                          href='https://github.com/realadammatthew'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-outline-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='GitHub'
                        >
                          <i className='fab fa-github'></i>
                        </a>
                        <a
                          href='https://x.com/realadammatthew'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-outline-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='X (Twitter)'
                        >
                          <i className='fab fa-x-twitter'></i>
                        </a>
                        <a
                          href='https://instagram.com/realadammatthew/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-outline-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='Instagram'
                        >
                          <i className='fab fa-instagram'></i>
                        </a>
                        <a
                          href='https://facebook.com/adammatthewsteinberger'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-outline-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='Facebook'
                        >
                          <i className='fab fa-facebook'></i>
                        </a>
                        <a
                          href='https://www.youtube.com/@AdamMatthewSteinberger'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-outline-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='YouTube'
                        >
                          <i className='fab fa-youtube'></i>
                        </a>
                        <a
                          href='https://github.com/realadammatthew/resume/raw/main/adam-steinberger-resume.pdf'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-light'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          data-bs-title='Download Resume'
                        >
                          <i className='fas fa-file-alt'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        id='img-banner-bg'
        src='/banner.png'
        alt='Adam Matthew Steinberger: Staff Software Engineer and AI Solutions Architect'
        className='banner'
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </header>
  );
}
