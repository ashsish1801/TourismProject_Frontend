import React from 'react';
import '../styles/Banner.css';
import v3 from '../assets/v3.mp4'

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
        </div>
        {/* <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div> */}
      </nav>
      <video 
        className="banner-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={v3} type="video/mp4" />
      </video>
      <div className="banner-content">
        <h1>Welcome to Our Site</h1>
        <p>Discover amazing content and experiences</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default VideoBanner;

