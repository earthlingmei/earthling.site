import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="app-container">
      {/* Animated background elements */}
      <div className="background-animation">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`comet comet-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="content-wrapper">
        {/* Header */}
        <header className="header">
          <h1 className="title">EARTHLING_MEI</h1>
        </header>
        
        {/* Grid of boxes */}
        <main className="grid-container">
          <div className="box-grid">
            <Link to="/flashbook" className="nav-box">
              <div className="bracket bracket-tl"></div>
              <div className="bracket bracket-tr"></div>
              <div className="bracket bracket-bl"></div>
              <div className="bracket bracket-br"></div>
              <span className="box-text">FLASHBOOK</span>
              <div className="highlight-overlay"></div>
            </Link>
            <Link to="/tattoos" className="nav-box">
              <div className="bracket bracket-tl"></div>
              <div className="bracket bracket-tr"></div>
              <div className="bracket bracket-bl"></div>
              <div className="bracket bracket-br"></div>
              <span className="box-text">TATTOOS</span>
              <div className="highlight-overlay"></div>
            </Link>
            <Link to="/about" className="nav-box">
              <div className="bracket bracket-tl"></div>
              <div className="bracket bracket-tr"></div>
              <div className="bracket bracket-bl"></div>
              <div className="bracket bracket-br"></div>
              <span className="box-text">ABOUT</span>
              <div className="highlight-overlay"></div>
            </Link>
            <Link to="/book" className="nav-box">
              <div className="bracket bracket-tl"></div>
              <div className="bracket bracket-tr"></div>
              <div className="bracket bracket-bl"></div>
              <div className="bracket bracket-br"></div>
              <span className="box-text">BOOK</span>
              <div className="highlight-overlay"></div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;