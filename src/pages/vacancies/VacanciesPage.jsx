
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';
import VacanciesSidebar from '../../features/VacanciesSidebar/VacanciesSidebar';
import VacancyCard from '../../features/VacancyCard/VacancyCard';

import './VacanciesPage.css';

const VacanciesPage = ({ onNavigate }) => {
  const bestVacancies = [
    {
      company: 'classpass',
      logo: 'https://images.pexels.com/photos/6476590/pexels-photo-6476590.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      position: 'Walmart',
      location: 'Denison, Al',
      salary: '145/year - 225/year',
      posted: '2 weeks ago',
      status: 'Be among the candidates'
    },
    {
      company: 'Airtable',
      logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      position: 'Walmart',
      location: 'Las Vegas, NM',
      salary: '155/year - 215/year',
      posted: '2 weeks ago',
      status: 'Be among the candidates'
    },
    {
      company: 'Wealthsimple',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      position: 'Varsity Tutors, a Nardy Company United States (Remote)',
      location: '',
      salary: '205/year - 285/year',
      posted: '2 weeks ago',
      status: 'Be among the candidates'
    }
  ];

  const jobSearchQueries = [
    'maketing manager',
    'hr',
    'legal',
    'sales',
    'google',
    'analyst',
    'amazon'
  ];

  const graphicDesignerJobs = [
    {
      company: 'Dribbble',
      logo: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      position: 'Dribbble',
      location: 'United States (Remote)'
    },
    {
      company: 'Freshworks',
      logo: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      position: 'Freshworks',
      location: 'Florianópolis, Santa Catarina, Brazil (Remote)'
    }
  ];

  return (
    <>
      <main className="main-content">
        <div className="container">
          <div className="vacancies-grid">
            <aside className="vacancies-sidebar">
              <VacanciesSidebar />
            </aside>

            <section className="vacancies-main">
              <div className="vacancies-section">
                <div className="section-header">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <h2 className="section-title">Selection of the best vacancies</h2>
                      <p className="section-subtitle">
                        Based on your profile, settings and activity, such as applications submitted, searches and saves
                      </p>
                    </div>
                    
                  </div>
                </div>

                <div className="vacancies-list">
                  {bestVacancies.map((vacancy, index) => (
                    <VacancyCard key={index} {...vacancy} />
                  ))}
                </div>

                <button className="show-all-btn">
                  Show all
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="vacancies-section">
                <div className="section-header-inline">
                  <h3 className="section-title-small">Recommended job search queries</h3>
                  <button className="dismiss-btn">×</button>
                </div>

                <div className="search-queries">
                  {jobSearchQueries.map((query, index) => (
                    <button key={index} className="query-chip">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {query}
                    </button>
                  ))}
                </div>
              </div>

              <div className="vacancies-section">
                <div className="section-header">
                  <h3 className="section-title-job">Graphic designer</h3>
                  <p className="section-location">Casas Adobes, Arizona, United States (within 25 miles)</p>
                </div>

                <div className="job-list">
                  {graphicDesignerJobs.map((job, index) => (
                    <div key={index} className="job-item">
                      <div className="job-info">
                        <img src={job.logo} alt={job.company} className="job-logo" />
                        <div className="job-details">
                          <h4 className="job-company">{job.company}</h4>
                          <p className="job-location">{job.location}</p>
                        </div>
                      </div>
                      <button className="dismiss-btn">×</button>
                    </div>
                  ))}
                </div>

                <button className="show-all-btn">
                  Show all
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </section>

            <aside className="vacancies-messages">
              <MessagesPanel onNavigate={onNavigate} />
            </aside>
          </div>
        </div>
      </main>
      
      </>
  );
};

export default VacanciesPage;
