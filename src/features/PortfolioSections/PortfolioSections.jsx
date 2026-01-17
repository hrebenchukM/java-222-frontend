import React from 'react';
import '../PortfolioSections/PortfolioSections.css';

const PortfolioSections = () => {
  const experiences = [
    {
      position: "Lead UI/UX Designer",
      company: "CD Project Red • Full-time",
      period: "Jan 2018 - Oct 2021 • 3 years 10 months",
      location: "San Francisco, California, US",
      logoClass: "red-logo",
      responsibilities: [
        "Created and optimized responsive web and app interfaces, boosting mobile user adoption by 40%.",
        "Led user testing initiatives and spearheaded iterations, resulting in a 20% reduction in customer friction and improved conversion rates.",
        "Spearheaded the development of innovative design prototypes, enhancing stakeholder approval processes.",
        "Influenced user-centric design strategies through research of products, strengthening brand identity and usability.",
        "Contributed to digital product improvements, increasing customer retention by 15% over six quarters.",
        "Formed collaborative partnerships with developers and business stakeholders to drive innovative design strategies aligned with organizational goals and stakeholder satisfaction."
      ]
    },
    {
      position: "Senior UI/UX Designer",
      company: "Build.co Illustration Platform • Full-time",
      period: "Dec 2016 - Jan 2018 • 2 years",
      location: "New Work",
      logoClass: "black-logo",
      responsibilities: [
        "Designed and launched a user-friendly mobile platform, innovating customer satisfaction rates by 30%.",
        "Analyzed user feedback and interaction, improving interface designs leading to highly user-popular and intuitive workflows.",
        "Developed high-fidelity prototypes and interactive wireframes for versatile scenarios and streamline team collaboration.",
        "Coordinated design reviews and usability design updates, ensuring visual consistency across multiple products.",
        "Led a digital platform interface redesign reducing by 30% and increasing access conversion times.",
        "Contributed with cross-functional teams for product capabilities promoting cutting-edge products and experience team development."
      ]
    },
    {
      position: "Junior Designer",
      company: "Sony • Internship",
      period: "Dec 2013 - May 2015 • 1 year 6 months",
      location: "Internet State",
      logoClass: "sony-logo",
      responsibilities: [
        "Designed mobile web and desktop applications, influencing user engagement by 25%.",
        "Conducted user research and usability testing, influencing user experiences from data-driven insights.",
        "Created wireframes, prototypes, and design systems for consistent and efficient workflows.",
        "Led the redesign of the flagship app, driving a 30% increase in active users.",
        "Contributed user experiences with collaboration of product designers with business objectives, ensuring seamless transitions",
        "Collaborated with developers and stakeholders to deliver design work with business objectives ensuring smooth project execution and delivering high-quality user experiences."
      ]
    }
  ];

  return (
    <>
      <div className="experience-section">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            <div className={`company-logo ${exp.logoClass}`}>
              {exp.logoClass === 'sony-logo' ? (
                <span className="sony-text">SONY</span>
              ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
                  <path d={exp.logoClass === 'red-logo' ? 'M8 16L16 8L24 16L16 24L8 16Z' : null} />
                  <rect x="8" y="8" width="16" height="16" fill={exp.logoClass === 'black-logo' ? 'white' : 'none'} />
                </svg>
              )}
            </div>
            <div className="experience-details">
              <h3>{exp.position}</h3>
              <p className="company-name">{exp.company}</p>
              <p className="experience-date">{exp.period}</p>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-list">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <button className="show-more-button">Show more</button>
      </div>

      <div className="education-section">
        <h2>Education</h2>
        <div className="education-entry">
          <div className="education-logo">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#DC2626" strokeWidth="2"/>
              <path d="M24 12L16 20H20V32H28V20H32L24 12Z" fill="#DC2626"/>
            </svg>
          </div>
          <div className="education-details">
            <h3>Select University</h3>
            <p className="education-degree">Bachelor's Degree in UI/UX Design</p>
            <p className="education-date">1988-1994 • May 2003</p>
          </div>
        </div>
        <button className="show-more-button">Show more</button>
      </div>

      <div className="certificates-section">
        <h2>Certificates and licenses</h2>
        <div className="certificate-entry">
          <div className="certificate-logo black-bg">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
              <path d="M18 24L24 18L30 24L24 30L18 24Z"/>
            </svg>
          </div>
          <div className="certificate-details">
            <h3>UI/UX Complete Certificate</h3>
            <p className="certificate-issuer">Course Design Academy</p>
            <p className="certificate-date">Issued May 2015 • Expiring May 2020</p>
          </div>
          <button className="certificate-button">Certificate</button>
        </div>
        <button className="show-more-button">Show more</button>
      </div>

      <div className="recommendations-section">
        <h2>Recommendations</h2>
        <div className="recommendations-tabs">
          <button className="rec-tab active">Received</button>
          <button className="rec-tab">Given</button>
        </div>
        <div className="recommendation-entry">
          <div className="rec-header">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
              alt="Jonathan Mitchell"
              className="rec-avatar"
            />
            <div className="rec-info">
              <h3>Jonathan Mitchell</h3>
              <p className="rec-title">Creative Director at Dropbox Studios - Head of Visual Design</p>
              <p className="rec-relation">September 20, 2018, Jonathan Mitchell was senior to David in different companies</p>
            </div>
          </div>
          <div className="rec-content">
            <p>I've had the pleasure of collaborating with David across several projects, and I can confidently say he's one of the most talented and dedicated UX designers I've worked with. David consistently brings innovative approaches, excellent execution, and positive attitude to every project he touches.</p>
          </div>
        </div>
        <button className="show-more-button">Show more</button>
      </div>

      <div className="languages-section">
        <h2>Languages</h2>
        <div className="language-entry">
          <div className="language-info">
            <h3>English</h3>
            <p className="language-level">Professional level of proficiency • sufficient for work</p>
          </div>
        </div>
        <div className="language-entry">
          <div className="language-info">
            <h3>German</h3>
            <p className="language-level">Native language or bilingual fluency</p>
          </div>
        </div>
        <button className="show-more-button">Show more</button>
      </div>
    </>
  );
};

export default PortfolioSections;
