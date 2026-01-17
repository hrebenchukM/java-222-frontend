import React, { useState } from 'react';
import Modal from '../../app/ui/Modal';

const AddEducationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    field: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Education added:', formData);
    onClose();
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Adding education">
      <form onSubmit={handleSubmit}>
        <div className="form-hint">Mandatory field</div>

        <div className="form-group">
          <label className="form-label required">School</label>
          <input
            type="text"
            className="form-input"
            placeholder="For example: MIT"
            value={formData.school}
            onChange={(e) => setFormData({ ...formData, school: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Degree</label>
          <input
            type="text"
            className="form-input"
            placeholder="For example: Bachelor's"
            value={formData.degree}
            onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Field of study</label>
          <input
            type="text"
            className="form-input"
            placeholder="For example: Computer Science"
            value={formData.field}
            onChange={(e) => setFormData({ ...formData, field: e.target.value })}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Start date</label>
            <select
              className="form-select"
              value={formData.startMonth}
              onChange={(e) => setFormData({ ...formData, startMonth: e.target.value })}
            >
              <option value="">Month</option>
              {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">&nbsp;</label>
            <select
              className="form-select"
              value={formData.startYear}
              onChange={(e) => setFormData({ ...formData, startYear: e.target.value })}
            >
              <option value="">Year</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">End date</label>
            <select
              className="form-select"
              value={formData.endMonth}
              onChange={(e) => setFormData({ ...formData, endMonth: e.target.value })}
            >
              <option value="">Month</option>
              {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">&nbsp;</label>
            <select
              className="form-select"
              value={formData.endYear}
              onChange={(e) => setFormData({ ...formData, endYear: e.target.value })}
            >
              <option value="">Year</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            placeholder="Describe your education..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddEducationModal;
