import './Splash.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      navigate('/landing');
    }, 5000);

    return () => clearTimeout(t);
  }, []);


  return (
    <div className="splash-page">
      <div className="splash-content">
        <div className="splash-illustration">
          <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="300" y="50" width="80" height="80" rx="8" fill="#7C3AED" />
            <rect x="210" y="50" width="80" height="80" rx="8" fill="#A78BFA" opacity="0.6" />
            <rect x="390" y="50" width="80" height="80" rx="8" fill="#A78BFA" opacity="0.6" />
            <rect x="480" y="50" width="80" height="80" rx="8" fill="#C4B5FD" opacity="0.4" />

            <rect x="300" y="140" width="80" height="80" rx="8" fill="#A78BFA" opacity="0.6" />
            <rect x="390" y="140" width="80" height="80" rx="8" fill="#C4B5FD" opacity="0.4" />
            <rect x="480" y="140" width="80" height="80" rx="8" fill="#E9D5FF" opacity="0.3" />

            <rect x="390" y="230" width="80" height="80" rx="8" fill="#A78BFA" opacity="0.6" />
            <rect x="300" y="230" width="80" height="80" rx="8" fill="#C4B5FD" opacity="0.4" />
            <rect x="480" y="230" width="80" height="80" rx="8" fill="#7C3AED" />

            <circle cx="340" cy="200" r="80" fill="none" stroke="#7C3AED" strokeWidth="3" opacity="0.5" />

            <circle cx="420" cy="280" r="15" fill="#10B981" />
            <path d="M412 280L418 286L432 272" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

            <g transform="translate(120, 150)">
              <circle cx="40" cy="40" r="35" fill="white" stroke="#7C3AED" strokeWidth="3" />
              <circle cx="40" cy="30" r="12" fill="#7C3AED" />
              <path d="M18 60C18 50 28 42 40 42C52 42 62 50 62 60" fill="#7C3AED" />
            </g>

            <rect x="45" y="290" width="60" height="8" rx="4" fill="#7C3AED" opacity="0.3" />
            <rect x="45" y="305" width="40" height="8" rx="4" fill="#7C3AED" opacity="0.3" />

            <rect x="500" y="320" width="50" height="8" rx="4" fill="#7C3AED" opacity="0.3" />
            <rect x="500" y="335" width="35" height="8" rx="4" fill="#7C3AED" opacity="0.3" />
          </svg>
        </div>

        <h1 className="splash-title">Linkedin Analogue</h1>

        <div className="splash-search">
          <input type="text" placeholder="Search professionals..." readOnly />
          <div className="search-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#9CA3AF" strokeWidth="2"/>
              <path d="M12.5 12.5L16.5 16.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
