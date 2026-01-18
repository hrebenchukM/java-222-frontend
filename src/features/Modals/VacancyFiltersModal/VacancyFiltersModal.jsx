import React, { useState } from 'react';
import './VacancyFiltersModal.css';
import Modal from '../../../app/ui/Modal';

const VacancyFiltersModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    location: [],
    jobType: [],
    experienceLevel: [],
    salaryRange: [0, 300000]
  });

  const locations = ['Remote', 'On-site', 'Hybrid'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  const experienceLevels = ['Entry level', 'Mid-level', 'Senior', 'Lead'];

  const handleLocationChange = (location) => {
    setFilters(prev => ({
      ...prev,
      location: prev.location.includes(location)
        ? prev.location.filter(l => l !== location)
        : [...prev.location, location]
    }));
  };

  const handleJobTypeChange = (type) => {
    setFilters(prev => ({
      ...prev,
      jobType: prev.jobType.includes(type)
        ? prev.jobType.filter(t => t !== type)
        : [...prev.jobType, type]
    }));
  };

  const handleExperienceChange = (level) => {
    setFilters(prev => ({
      ...prev,
      experienceLevel: prev.experienceLevel.includes(level)
        ? prev.experienceLevel.filter(l => l !== level)
        : [...prev.experienceLevel, level]
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      location: [],
      jobType: [],
      experienceLevel: [],
      salaryRange: [0, 300000]
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Filter Vacancies">
      <div className="vacancy-filters-modal">
        <div className="filter-section">
          <h3>Location</h3>
          <div className="filter-options">
            {locations.map(location => (
              <label key={location} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.location.includes(location)}
                  onChange={() => handleLocationChange(location)}
                />
                <span>{location}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>Job Type</h3>
          <div className="filter-options">
            {jobTypes.map(type => (
              <label key={type} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.jobType.includes(type)}
                  onChange={() => handleJobTypeChange(type)}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>Experience Level</h3>
          <div className="filter-options">
            {experienceLevels.map(level => (
              <label key={level} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.experienceLevel.includes(level)}
                  onChange={() => handleExperienceChange(level)}
                />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>Salary Range</h3>
          <div className="salary-range">
            <div className="salary-inputs">
              <input
                type="number"
                value={filters.salaryRange[0]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  salaryRange: [parseInt(e.target.value) || 0, prev.salaryRange[1]]
                }))}
                placeholder="Min"
              />
              <span>to</span>
              <input
                type="number"
                value={filters.salaryRange[1]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  salaryRange: [prev.salaryRange[0], parseInt(e.target.value) || 300000]
                }))}
                placeholder="Max"
              />
            </div>
            <p className="salary-info">Annual salary in thousand dollars</p>
          </div>
        </div>

        <div className="filter-actions">
          <button className="filter-btn-secondary" onClick={handleReset}>
            Reset All
          </button>
          <button className="filter-btn-primary" onClick={handleApply}>
            Apply Filters
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VacancyFiltersModal;
