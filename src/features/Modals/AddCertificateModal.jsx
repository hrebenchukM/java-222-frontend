import React, { useState } from 'react';
import Modal from '../../app/ui/Modal';

const AddCertificateModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    issueMonth: '',
    issueYear: '',
    expiryMonth: '',
    expiryYear: '',
    credentialId: '',
    credentialUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Certificate added:', formData);
    onClose();
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Adding a license or certificate">
      <form onSubmit={handleSubmit}>
        <div className="form-hint">Mandatory field</div>

        <div className="form-group">
          <label className="form-label required">Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Name: for example microsoft certification"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label required">Organization that issued the certificate</label>
          <input
            type="text"
            className="form-input"
            placeholder="For example: Microsoft"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Date of issue</label>
            <select
              className="form-select"
              value={formData.issueMonth}
              onChange={(e) => setFormData({ ...formData, issueMonth: e.target.value })}
            >
              <option value="">Month</option>
              {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date of issue</label>
            <select
              className="form-select"
              value={formData.issueYear}
              onChange={(e) => setFormData({ ...formData, issueYear: e.target.value })}
            >
              <option value="">Year</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Expiry date</label>
            <select
              className="form-select"
              value={formData.expiryMonth}
              onChange={(e) => setFormData({ ...formData, expiryMonth: e.target.value })}
            >
              <option value="">Month</option>
              {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Expiry date</label>
            <select
              className="form-select"
              value={formData.expiryYear}
              onChange={(e) => setFormData({ ...formData, expiryYear: e.target.value })}
            >
              <option value="">Year</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Accreditation ID</label>
          <input
            type="text"
            className="form-input"
            value={formData.credentialId}
            onChange={(e) => setFormData({ ...formData, credentialId: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">URL - organization address</label>
          <input
            type="url"
            className="form-input"
            value={formData.credentialUrl}
            onChange={(e) => setFormData({ ...formData, credentialUrl: e.target.value })}
          />
        </div>

        <div className="form-group">
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Skills</h3>
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
            Link at least 1 skill to this license or certificate. It will also appear in the Skills section of your profile.
          </p>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddCertificateModal;
