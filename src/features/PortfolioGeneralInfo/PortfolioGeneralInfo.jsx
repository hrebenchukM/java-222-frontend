import React from 'react';
import { Globe } from 'lucide-react';
import '../PortfolioGeneralInfo/PortfolioGeneralInfo.css';

const PortfolioGeneralInfo = () => {
  return (
    <div className="general-info-card">
      <h2>General Information</h2>
      <p className="general-description">
        Passionate Senior UI/UX Designer | Crafting Engaging and Seamless Experiences
      </p>
      <p className="general-description">
        Hello, I'm Alex, a product and programmer since 2016 designer with a strong enthusiasm for building user-friendly, highly experimental, and functional design experiences. I hold a Bachelor's and currently working abroad. My work focuses on creating design systems, web designing, and finding products efficiently.
      </p>
      <p className="general-description">
        I always try to make the design system a real design product and a user experience in itself. When I create and deliver interfaces, I always strive to not only make it about design and focus in terms of my career as one team (UX design system). If you'd like to discuss about ideas and professional life feedback.
      </p>
      <p className="general-description">
        I believe working good interfaces and the beautiful that would make aesthetic and user-centric and professional in the design industry.
      </p>
      <div className="web-info">
        <Globe size={20} />
        <div className="web-content">
          <p className="web-label">Your urls</p>
          <a href="#" className="web-link">www.davidsdesign.design.com - www.theycoded.LTD.net/thetools</a>
        </div>
        <button className="copy-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="5" y="5" width="9" height="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioGeneralInfo;
