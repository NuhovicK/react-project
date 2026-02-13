import React, { useState } from 'react'; // useState nam treba samo za formu
import './Community.css';

const Community = ({ posts, onAddPost }) => {
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    onAddPost({ content: newPost });
    setNewPost("");
  };

  return (
    <div className="community-container">
      <div className="community-header">
        <h1>Community</h1>
        <p>Connect, discuss, and share knowledge with other developers.</p>
      </div>

      <div className="create-post-section">
        <form onSubmit={handlePostSubmit} className="post-form">
          <textarea 
            placeholder="What's on your mind today?" 
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="post-input"
          />
          <button type="submit" className="post-btn">Post</button>
        </form>
      </div>

      <div className="posts-feed">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <span className="post-avatar">{post.avatar}</span>
              <div className="post-info">
                <span className="post-author">{post.author}</span>
                <div className="post-tags">
                  {post.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
                </div>
              </div>
            </div>
            <div className="post-body">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
            <div className="post-footer">
              <button className="action-btn">❤️ {post.likes}</button>
              <button className="action-btn">💬 {post.comments}</button>
              <button className="action-btn share-btn">🔗 Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;