import React, { useState } from 'react';
import { Sliders, Bookmark, Plus } from 'lucide-react';
import '../VacanciesSidebar/VacanciesSidebar.css';
import PostJobModal from '../Modals/PostJobModal';

const VacanciesSidebar = () => {
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);

  return (
    <>
    <div className="vacancies-sidebar-container">
      <nav className="vacancies-nav">
        <a href="#" className="vacancies-nav-item active">
          <Sliders size={18} />
          <span>Parameters</span>
        </a>
        <a href="#" className="vacancies-nav-item">
          <Bookmark size={18} />
          <span>My vacancies</span>
        </a>
      </nav>

    <button className="post-vacancy-btn" onClick={() => setIsPostJobModalOpen(true)}>
          <Plus size={18} />
          <span>Post a vacancy</span>
        </button>
      </div>
      <PostJobModal isOpen={isPostJobModalOpen} onClose={() => setIsPostJobModalOpen(false)} />
       
    </>
  );
};

export default VacanciesSidebar;
