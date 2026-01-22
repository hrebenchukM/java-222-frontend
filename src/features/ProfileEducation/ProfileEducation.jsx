import { useState } from 'react';
import { Plus, Edit, Briefcase } from 'lucide-react';
import '../ProfileEducation/ProfileEducation.css';
import AddEducationModal from '../Modals/AddEducationModal';
import AddCertificateModal from '../Modals/AddCertificateModal';
import { fileUrl } from '../../shared/api/files';

const ProfileEducation = ({ items = [], reload }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const hasEducation = items.length > 0;

  return (
    <>
      <div className="education-card">

        {/* ===== HEADER ===== */}
        <div className="section-header">
          <h2>Education</h2>
          <div className="section-actions">
            <button
              className="icon-button"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={18} />
            </button>
            <button className="icon-button">
              <Edit size={18} />
            </button>
          </div>
        </div>

        {/* ===== EMPTY STATE ===== */}
        {!hasEducation && (
          <div className="education-empty">
            No education added
          </div>
        )}

        {/* ===== LIST ===== */}
        {items.map(block => {
          if (!block.education) return null;

          return (
            <div
              key={block.education.id}
              className="education-item"
            >

              <div className="education-logo">
                {block.academy?.logoUrl
                  ? (
                    <img
                      src={fileUrl(block.academy.logoUrl)}
                      alt={block.academy?.name}
                      className="university-img"
                    />
                  )
                  : <Briefcase size={24} />
                }
              </div>

              <div className="education-content">
                <h3>{block.education.institution}</h3>

                <p>
                  {block.education.degree}
                  {block.education.fieldOfStudy &&
                    ` · ${block.education.fieldOfStudy}`}
                </p>

                <p className="education-date">
                  {block.education.startDate}
                  {' – '}
                  {block.education.endDate ?? 'Now'}
                </p>
              </div>

            </div>
          );
        })}

        {/* ===== ACTIONS ===== */}
        <div className="education-actions">
          <button
            className="btn-add"
            onClick={() => setIsCertificateModalOpen(true)}
          >
            Add certificate
          </button>
        </div>

      </div>

      {/* ===== MODALS ===== */}
      <AddEducationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdded={reload}
      />

      <AddCertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />
    </>
  );
};

export default ProfileEducation;
