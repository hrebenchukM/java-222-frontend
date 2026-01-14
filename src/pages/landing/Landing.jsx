import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
    const navigate = useNavigate();

  const categories = [
    'Engineering', 'Business development', 'Finance', 'Administrative Assistant',
    'Retail employee', 'Help Desk', 'Operations', 'Information Technology',
    'Marketing', 'Personnel support', 'Education', 'Sales'
  ];

  const softwareTools = [
    'E-commerce platforms', 'Recruiting Software', 'Software for CRM systems',
    'Social Networking Software', 'HR systems', 'Project Management Software'
  ];

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-header-container">
          <div className="landing-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="white"/>
              <path d="M14 13h-3v14h3v-14zm11 0h-3v4.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V13h-3v4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5V13z" fill="#7C3AED"/>
            </svg>
          </div>
          <div className="landing-header-buttons">
            <button
              className="landing-btn-outline"
              onClick={() => navigate('/auth?mode=signin')}
            >
              Sign In
            </button>
            <button
              className="landing-btn-primary"
              onClick={() => navigate('/auth?mode=signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-hero-container">
          <div className="landing-hero-content">
            <h1 className="landing-hero-title">
              Welcome<br/>
              to the community<br/>
              specialists!
            </h1>
            <button className="landing-hero-google"  onClick={() => navigate('/auth?mode=signin')}>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z"/>
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
              </svg>
              Login with Google
            </button>
            <button
              className="landing-hero-email"
              onClick={() => navigate('/auth?mode=signin')}
            >
              Sign in by email address
            </button>
            <p className="landing-hero-terms">
              By clicking "Continue" to join or sign in, you agree to the terms of the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
            </p>
            <button
              className="landing-hero-join"
              onClick={() => navigate('/auth?mode=signup')}
            >
              Not on LinkedIn? Join now
            </button>
          </div>

          <div className="landing-hero-illustration">
            <svg width="450" height="450" viewBox="0 0 450 450" fill="none">
              <circle cx="225" cy="125" r="50" fill="#F3E8FF"/>
              <path d="M225 100C235 100 245 110 245 125C245 135 240 143 233 147V160C233 165 229 170 225 170C221 170 217 165 217 160V147C210 143 205 135 205 125C205 110 215 100 225 100Z" fill="#2D3748"/>

              <path d="M150 175C150 175 165 165 225 165C285 165 300 175 300 175V380C300 385 295 390 290 390H160C155 390 150 385 150 380V175Z" fill="#7C3AED"/>

              <rect x="175" y="200" width="100" height="8" rx="4" fill="white" opacity="0.7"/>
              <rect x="175" y="220" width="80" height="8" rx="4" fill="white" opacity="0.5"/>

              <rect x="190" y="260" width="70" height="90" rx="8" fill="#E9D5FF"/>
              <circle cx="225" cy="285" r="12" fill="#7C3AED"/>
              <path d="M215 310C215 305 219 301 225 301C231 301 235 305 235 310V320H215V310Z" fill="#7C3AED"/>

              <circle cx="100" cy="250" r="30" fill="#DDD6FE" opacity="0.6"/>
              <circle cx="350" cy="280" r="40" fill="#C4B5FD" opacity="0.5"/>
              <circle cx="380" cy="150" r="25" fill="#E9D5FF" opacity="0.4"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="landing-section-gray">
        <div className="landing-container">
          <h2 className="landing-section-title">
            Find a suitable vacancy or internship
          </h2>
          <div className="landing-categories">
            {categories.map((category, index) => (
              <button key={index} className="category-chip">{category}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section-white">
        <div className="landing-container">
          <h2 className="landing-section-title">
            Post your vacancy so millions of people can see it
          </h2>
          <button className="landing-post-vacancy">Post a vacancy</button>
        </div>
      </section>

      <section className="landing-section-gray">
        <div className="landing-container">
          <div className="landing-software-grid">
            <div className="landing-software-content">
              <h2 className="landing-section-title">Discover the best software tools</h2>
              <p className="landing-software-description">
                Connect with buyers who have first-hand experience to find the best products for you.
              </p>
            </div>
            <div className="landing-software-tags">
              {softwareTools.map((tool, index) => (
                <button key={index} className="software-chip">{tool}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section-purple">
        <div className="landing-container">
          <h2 className="landing-cta-title">
            Connect with your colleagues,<br/>
            classmates and friends on LinkedIn.
          </h2>
        <button
        className="landing-cta-button"
        onClick={() => navigate('/auth?mode=signin')}
        >
        Login
        </button>

        </div>
      </section>

      <footer className="landing-footer">
        <div className="landing-footer-container">
          <div className="landing-footer-columns">
            <div className="landing-footer-column">
              <a href="#">General information</a>
              <a href="#">Careers</a>
              <a href="#">Ad Settings</a>
              <a href="#">Security Center</a>
            </div>
            <div className="landing-footer-column">
              <a href="#">Accessibility</a>
              <a href="#">Privacy and Terms</a>
              <a href="#">Sales Solutions</a>
              <a href="#">Mobile Phone</a>
            </div>
            <div className="landing-footer-column">
              <a href="#">Policies for the Professional Community</a>
              <a href="#">Advertising Solutions</a>
            </div>
          </div>

          <div className="landing-footer-bottom">
            <div className="landing-footer-info">
              <div className="info-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M10 6v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <strong>Questions?</strong>
                  <span>Visit our Help Center.</span>
                </div>
              </div>
              <div className="info-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2L3 7v6c0 3.5 3 6.5 7 7 4-.5 7-3.5 7-7V7l-7-5z" fill="none" stroke="white" strokeWidth="1.5"/>
                </svg>
                <div>
                  <strong>Manage Account and Privacy</strong>
                  <span>Go to settings.</span>
                </div>
              </div>
              <div className="info-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M10 7v5M10 14v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <strong>Recommendation Transparency</strong>
                  <span>Learn more about recommended content.</span>
                </div>
              </div>
            </div>

            <div className="landing-footer-language">
              <label>Language</label>
              <select>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
