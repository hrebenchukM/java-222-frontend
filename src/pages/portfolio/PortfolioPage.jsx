import React from 'react';
import './PortfolioPage.css';
import PortfolioHeader from '../../features/PortfolioHeader/PortfolioHeader';
import PortfolioGeneralInfo from '../../features/PortfolioGeneralInfo/PortfolioGeneralInfo';
import PortfolioSections from '../../features/PortfolioSections/PortfolioSections';

const PortfolioPage = ({ onNavigate }) => {
  return (

      <main className="main-content">
        <div className="container">
          <div className="portfolio-page">
            <div className="portfolio-content">
              <PortfolioHeader />
              <PortfolioGeneralInfo />
              <PortfolioSections />
            </div>
          </div>
        </div>
      </main>
  );
};

export default PortfolioPage;
