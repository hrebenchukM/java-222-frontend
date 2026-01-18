import React, { useState } from 'react';
import { Sliders, Bookmark, Plus } from 'lucide-react';
import '../VacanciesSidebar/VacanciesSidebar.css';
import PostJobModal from '../Modals/PostJobModal';
import VacancyFiltersModal from '../Modals/VacancyFiltersModal/VacancyFiltersModal';

const VacanciesSidebar = () => {
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [activeView, setActiveView] = useState('parameters');

  const handleApplyFilters = (filters) => {
    console.log('Filters applied:', filters);
  };

  return (
    <>
      <div className="vacancies-sidebar-container">
        <nav className="vacancies-nav">
          <button
            className={`vacancies-nav-item ${activeView === 'parameters' ? 'active' : ''}`}
            onClick={() => { setActiveView('parameters'); setIsFiltersModalOpen(true); }}
          >
            <Sliders size={18} />
            <span>Parameters</span>
          </button>
          <button
            className={`vacancies-nav-item ${activeView === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveView('saved')}
          >
            <Bookmark size={18} />
            <span>My vacancies</span>
          </button>
        </nav>

        <button className="post-vacancy-btn" onClick={() => setIsPostJobModalOpen(true)}>
          <Plus size={18} />
          <span>Post a vacancy</span>
        </button>
      </div>
      <PostJobModal isOpen={isPostJobModalOpen} onClose={() => setIsPostJobModalOpen(false)} />
      <VacancyFiltersModal
        isOpen={isFiltersModalOpen}
        onClose={() => setIsFiltersModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
};

export default VacanciesSidebar;
