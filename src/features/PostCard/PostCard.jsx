import React from 'react';
import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';
import '../PostCard/PostCard.css';

const PostCard = ({ author, title, timeAgo, content, image, likes, onNavigate }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
          alt={author}
          className="post-avatar"
          onClick={() => onNavigate?.('portfolio')}
          style={{ cursor: 'pointer' }}
        />
        <div className="post-info">
          <h4 className="post-author">{author}</h4>
          <p className="post-title">{title}</p>
          <span className="post-time">{timeAgo}</span>
        </div>
      </div>

      <div className="post-content">
        <p>{content}</p>
      </div>

      <div className="post-image">
        <img src={image} alt="Post content" />
      </div>

      <div className="post-actions">
        <button className="action-btn">
          <ThumbsUp size={18} />
          <span>Like</span>
          <span className="action-count">{likes}</span>
        </button>
        <button className="action-btn">
          <MessageCircle size={18} />
          <span>Comment</span>
        </button>
        <button className="action-btn">
          <Share2 size={18} />
          <span>Share</span>
        </button>
        <button className="action-btn">
          <Send size={18} />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
