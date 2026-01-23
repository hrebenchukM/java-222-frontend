import React, { useState } from 'react';
import { Image, Calendar, Star } from 'lucide-react';
import Modal from '../../app/ui/Modal';
import { useContext } from 'react';
import AppContext from '../../features/appContext/AppContext';


const CreatePostModal = ({ isOpen, onClose, user, onPostCreated }) => {

  const [content, setContent] = useState('');
const { request } = useContext(AppContext);
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      await request(
        'api://post',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            content
          })
        },
        true
      );
    onClose();
    setContent('');
    onPostCreated?.();
  }
  catch (err) {
    alert(err?.data || 'Failed to create post');
  }
};


  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create a post">
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <img
          src={
            user?.avatar ||
            'https://api.dicebear.com/7.x/avataaars/svg?seed=default'
          }
          alt={user?.name}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />

          <span style={{ fontWeight: 600, fontSize: '16px' }}>{user?.name}</span>
        </div>

        <div className="form-group">
          <textarea
            className="form-textarea"
            placeholder="What do you want to talk about?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ minHeight: '150px', border: 'none', background: '#f3f4f6', fontSize: '16px' }}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
          <button
            type="button"
            style={{
              width: '48px',
              height: '48px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '24px'
            }}
          >
            <Image size={28} color="#6b7280" />
          </button>
          <button
            type="button"
            style={{
              width: '48px',
              height: '48px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '24px'
            }}
          >
            <Calendar size={28} color="#6b7280" />
          </button>
          <button
            type="button"
            style={{
              width: '48px',
              height: '48px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '24px'
            }}
          >
            <Star size={28} color="#6b7280" />
          </button>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">Publish</button>
        </div>
      </form>
    </Modal>
  );
};

export default CreatePostModal;
