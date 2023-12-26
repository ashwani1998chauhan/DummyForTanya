
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
    
      <header className="header">
        <h1 className="title">Welcome to Our Amazing Website!</h1>
        <p className="subtitle">Discover a World of Excitement and Innovation</p>
      </header>

      <section className="content">
        <p className="description">
          At our website, we strive to provide you with an exceptional online experience.
          Whether you're here to explore our products, connect with us, or simply enjoy
          the content, we're delighted to have you on board.
        </p>

        <div className="highlights">
          <div className="highlight-item">
            <h2>Quality Products</h2>
            <p>Explore our curated selection of high-quality products designed to meet your needs.</p>
          </div>
          <div className="highlight-item">
            <h2>Engaging Content</h2>
            <p>Immerse yourself in engaging content that informs, entertains, and inspires.</p>
          </div>
          <div className="highlight-item">
            <h2>Contact Us</h2>
            <p>Have questions or feedback? Feel free to reach out to us through our Contact Us page.</p>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default Home;
