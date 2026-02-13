import React from 'react';
import './Blog.css';

const Blog = () => {
  // Simulirani podaci za blog postove
  const posts = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      excerpt: "Learn how to use useState and useEffect to manage state and component lifecycle in a modern way.",
      date: "Oct 19 2025",
      category: "Development"
    },
    {
      id: 2,
      title: "The Future of Web Design",
      excerpt: "Exploring new trends in web design, including Glassmorphism, Neumorphism, and minimalist approaches.",
      date: "Nov 05, 2025",
      category: "Design"
    },
    {
      id: 3,
      title: "Why JavaScript is Still King?",
      excerpt: "Analysis of JavaScript popularity in 2024 and why it dominates frontend and backend development.",
      date: "Nov 20, 2025",
      category: "Tech"
    },
    {
      id: 4,
      title: "Performance Optimization",
      excerpt: "Tips and tricks on how to speed up your web application and improve user experience.",
      date: "Dec 01, 2025",
      category: "Performance"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      excerpt: "When to use Grid, and when Flexbox? Detailed comparison of two most powerful CSS layout systems.",
      date: "Dec 15, 2025",
      category: "CSS"
    },
    {
      id: 6,
      title: "Digital Marketing for Developers",
      excerpt: "How to promote your projects and build a personal brand in the digital world.",
      date: "Dec 28, 2025",
      category: "Marketing"
    }
  ];

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Latest news, tutorials, and stories from the world of technology.</p>
      </div>
      
      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <div className="blog-card-footer">
              <button className="read-more-btn">Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;