import React from 'react';
import { Image, Video, Calendar } from 'lucide-react';
import '../CreatePost/CreatePost.css';

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="create-post-input">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
          alt="Profile"
          className="create-post-avatar"
        />
        <input
          type="text"
          placeholder="Start your post"
          className="create-post-textbox"
        />
      </div>

      <div className="create-post-actions">
        <button className="post-action-btn">
          <Image size={20} color="#7C3AED" />
          <span>Photo</span>
        </button>
        <button className="post-action-btn">
          <Video size={20} color="#7C3AED" />
          <span>Video</span>
        </button>
        <button className="post-action-btn">
          <Calendar size={20} color="#7C3AED" />
          <span>Event</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
