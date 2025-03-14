import React from 'react';
import './Careers.css';
import { Helmet } from 'react-helmet';
const Careers = () => {
  return (
    <>
    <Helmet>
                <title> Careers - 3C IT Solutions & Telecoms (India) Private Limited</title>
                <meta charSet='utf-8' />
                <link rel="canonical" href="https://www.3citsolution.com/3cit" />
            </Helmet>
    
    
    <div className="carriar-container">
      <div className="carriar-top">
        <h1>Career</h1>
      </div>

      <div className="carriar-down">
        <div className="carriar-content">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            {/* Add recent posts content here */}
          </div>
          <div className="recent-comments">
            <h2>Recent Comments</h2>
            <p>No comments to show.</p>
          </div>
        </div>

        <aside>
          <div className="archives">
            <h2>Archives</h2>
            <p>No archives to show.</p>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <p>No categories</p>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
};

export default Careers;
