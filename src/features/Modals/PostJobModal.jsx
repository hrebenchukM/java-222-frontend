import React, { useState } from 'react';
import Modal from '../../app/ui/Modal';

const PostJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    workplaceType: 'On-site',
    location: '',
    jobType: 'Full time',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Post a job now">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Job title</label>
          <input
            type="text"
            className="form-input"
            placeholder="Add the job you are hiring for"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-input"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Job type</label>
          <select
            className="form-select"
            value={formData.workplaceType}
            onChange={(e) => setFormData({ ...formData, workplaceType: e.target.value })}
          >
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Region of vacancies</label>
          <input
            type="text"
            className="form-input"
            placeholder="Odesa, Odessa, Ukraine"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Job type</label>
          <select
            className="form-select"
            value={formData.jobType}
            onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
          >
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Job description</label>
          <textarea
            className="form-textarea"
            placeholder="Describe the role, responsibilities, and requirements..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            style={{ minHeight: '150px' }}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">Place now</button>
        </div>
      </form>
    </Modal>
  );
};

export default PostJobModal;
