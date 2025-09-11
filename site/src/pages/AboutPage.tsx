import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        {/* Header */}
        <header className="page-header">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>
          <h1 className="page-title">ABOUT MEI</h1>
        </header>

        {/* About content */}
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://raw.githubusercontent.com/earthlingmei/earthling.site/main/assets/images/About_me.JPG" 
              alt="Earthling Mei" 
            />
          </div>
          
          <div className="about-text">
            <p>
              Hi, I'm Mei, short for Mei-Ling. As your fellow earthling, I see myself as a creator
              rather than just one thing. But for the intents and purposes of this webstie, I am a tattoo artist.
            </p>
            <p>
              I am a self taught artist. I started with the handpoke technique and have in the last year started using a rotary gun. 
              My specialisation is floral and abstract things. I try to stick to that brief but I'm a free spirit. 
              My background in horticulture and my 10 year long carrier in Landscape Architecture is rooted in my love for
              plants and nature. That's a motif I will carry with me through everything I do. 
            </p>
            <p>
              When I'm not tattooing, you can find me sketching new designs, taking long walks in nature and
              living a life that feel fulling and in which I can see growth. 
            </p>
            <p>
              Send me your tattoo ideas and let's have chat. 
              My DM's on Instagram are always open. 
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="about-actions">
          <a href="https://venue.ink/@earthling_mei" target="_blank" rel="noopener noreferrer" className="action-button">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <span className="button-text">BOOK A SESSION</span>
            <div className="highlight-overlay"></div>
          </a>
          
          <a href="https://venue.ink/@earthling_mei/flash" target="_blank" rel="noopener noreferrer" className="action-button">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <span className="button-text">VIEW DESIGNS</span>
            <div className="highlight-overlay"></div>
          </a>
          
          <a href="https://instagram.com/earthling_mei" target="_blank" rel="noopener noreferrer" className="action-button instagram-button">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <span className="button-text">FOLLOW ON INSTAGRAM</span>
            <div className="highlight-overlay"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;