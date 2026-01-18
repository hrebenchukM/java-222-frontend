import React, { useState } from 'react';
import '../PortfolioSections/PortfolioSections.css';

const PortfolioSections = () => {
  const [activeRecommendationTab, setActiveRecommendationTab] = useState('received');

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

  const receivedRecommendations = [
    {
      name: "Sarah Jones",
      title: "Visual Designer at Bright Horizons Design Studio",
      relation: "September 20, 2018, Sarah was a colleague of David at Bright Horizons",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
      content: "I had the pleasure of working with Sarah J. on a complex product redesign project, and I was consistently impressed by her talent, dedication, and collaborative spirit. As a visual designer, Sarah has an extraordinary ability to bring concepts to life with striking visuals that not only captivate users but also align perfectly with the overall product strategy.\n\nWhat sets Sarah apart is her meticulous attention to detail and her passion for storytelling through design. Whether she's crafting a brand identity or developing detailed UI mockups, her work always feels intentional and purposeful. Her ability to translate abstract ideas into cohesive and engaging designs is truly remarkable.\n\nSarah is also an exceptional team player. She communicates her ideas clearly, listens actively to feedback, and always brings a positive attitude to the table. During our collaboration, her ability to work seamlessly with developers, product managers, and other designers helped streamline the design process and ensured the project's success.\n\nI highly recommend Sarah to any organization or team seeking a visual designer who brings both creative vision and a strong sense of execution. She's an invaluable asset to any project, and I'm excited to see all the amazing work she'll continue to create."
    },
    {
      name: "Mark Owens",
      title: "Interaction Designer at NextWave Interfaces",
      relation: "April 15, 2019, Mark worked directly with David at NextWave",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
      content: "Working with Mark R. was an incredible experience that left a lasting impact on our team and the projects we delivered together. As an interaction designer, Mark combines a deep understanding of user behavior with an intuitive sense of how to create seamless, engaging digital experiences.\n\nMark's strength lies in his ability to think holistically about design. He doesn't just focus on individual screens or interactions—he ensures that every detail contributes to a cohesive and meaningful user journey. During our time working together, he took on the challenge of designing complex multi-step workflows, and his solutions consistently struck the perfect balance between usability and elegance.\n\nBeyond his technical expertise, Mark is a fantastic collaborator. He's proactive in identifying potential design challenges early and approaches problem-solving with creativity and enthusiasm. His ability to work closely with developers ensured that his designs were implemented flawlessly, and his openness to feedback made him a joy to work with.\n\nI wholeheartedly recommend Mark to any team looking for a skilled and forward-thinking interaction designer. His work speaks for itself, and his dedication to creating outstanding user experiences is truly inspiring."
    }
  ];

  const givenRecommendations = [
    {
      name: "Emily Parker",
      title: "Product Manager at TechVision Solutions",
      relation: "June 10, 2020, David worked with Emily at TechVision",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
      content: "I had the privilege of working alongside Emily on several high-impact product initiatives, and I can confidently say she is one of the most talented and strategic product managers I've encountered. Emily has an exceptional ability to balance user needs, business objectives, and technical constraints to deliver products that truly make a difference.\n\nHer strategic thinking and data-driven approach helped our team prioritize features effectively and make informed decisions that led to significant improvements in user engagement and satisfaction. Emily's communication skills are outstanding—she can articulate complex ideas clearly to stakeholders at all levels and ensure everyone is aligned on the product vision.\n\nWhat I appreciate most about Emily is her genuine passion for creating user-centric products. She consistently advocates for the user while maintaining a pragmatic approach to product development. Her leadership and collaborative spirit make her an invaluable asset to any product team."
    },
    {
      name: "Alex Thompson",
      title: "Frontend Developer at CodeCraft Labs",
      relation: "January 5, 2021, David collaborated with Alex on multiple projects",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
      content: "Working with Alex has been an absolute pleasure and a tremendous learning experience. As a frontend developer, Alex possesses a rare combination of technical excellence and design sensibility that makes collaboration seamless and highly productive.\n\nAlex's code is clean, maintainable, and performant. He has a deep understanding of modern web technologies and consistently delivers pixel-perfect implementations that bring designs to life exactly as intended. What sets Alex apart is his proactive approach—he often identifies potential improvements or technical challenges early in the process and proposes elegant solutions.\n\nBeyond his technical skills, Alex is a wonderful team player. He's patient, communicative, and always willing to explain technical concepts in a way that non-developers can understand. His enthusiasm for his craft is contagious, and his dedication to quality is evident in everything he builds.\n\nI highly recommend Alex to any team seeking a skilled frontend developer who can bridge the gap between design and implementation while maintaining the highest standards of code quality."
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
          <button
            className={`rec-tab ${activeRecommendationTab === 'received' ? 'active' : ''}`}
            onClick={() => setActiveRecommendationTab('received')}
          >
            Received
          </button>
          <button
            className={`rec-tab ${activeRecommendationTab === 'given' ? 'active' : ''}`}
            onClick={() => setActiveRecommendationTab('given')}
          >
            Given
          </button>
        </div>
        {(activeRecommendationTab === 'received' ? receivedRecommendations : givenRecommendations).map((rec, index) => (
          <div key={index} className="recommendation-entry">
            <div className="rec-header">
              <img
                src={rec.avatar}
                alt={rec.name}
                className="rec-avatar"
              />
              <div className="rec-info">
                <h3>{rec.name}</h3>
                <p className="rec-title">{rec.title}</p>
                <p className="rec-relation">{rec.relation}</p>
              </div>
            </div>
            <div className="rec-content">
              {rec.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
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
