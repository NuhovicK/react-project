import React, { useState } from 'react';
import './AdminRoom.css';

const AdminRoom = ({ posts, onAddPost, onDeletePost }) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;
    
    onAddPost({
      title: newPostTitle || "Admin Announcement",
      content: newPostContent
    });
    setNewPostContent("");
    setNewPostTitle("");
  };

  return (
    <div className="admin-room-container">
      <div className="admin-header">
        <h1>🛡️ Admin Room</h1>
        <p>Control panel for managing community content.</p>
      </div>

      {/* Forma za brzo dodavanje */}
      <div className="admin-controls">
        <h3>Add New Post</h3>
        <form onSubmit={handleSubmit} className="admin-post-form">
          <input 
            type="text" 
            placeholder="Title (optional)" 
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            className="admin-input"
          />
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Post content..."
            className="admin-textarea"
          />
          <button type="submit" className="admin-add-btn">Post as Admin</button>
        </form>
      </div>

      {/* Lista postova za brisanje */}
      <div className="admin-posts-list">
        <h3>Manage Posts ({posts.length})</h3>
        {posts.map(post => (
          <div key={post.id} className="admin-post-item">
            <div className="admin-post-info">
              <span className="admin-post-id">#{post.id}</span>
              <div className="admin-post-details">
                <strong>{post.author}</strong>
                <span className="admin-post-title">{post.title}</span>
                <p className="admin-post-preview">{post.content.substring(0, 60)}...</p>
              </div>
            </div>
            <button 
              className="admin-delete-btn"
              onClick={() => onDeletePost(post.id)}
              title="Delete Post"
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRoom;