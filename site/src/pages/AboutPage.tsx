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
          <h1 className="page-title">ABOUT</h1>
        </header>

        {/* About content */}
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
              alt="Earthling Mei" 
            />
          </div>
          
          <div className="about-text">
            <p>
              Welcome to my world of ink and artistry. I'm Mei, a tattoo artist passionate about 
              creating meaningful, beautiful tattoos that tell your unique story.
            </p>
            <p>
              With years of experience in fine line work, blackwork, and custom designs, I specialize 
              in creating pieces that are both timeless and deeply personal. Every tattoo is a 
              collaboration between artist and client, resulting in something truly special.
            </p>
            <p>
              When I'm not tattooing, you can find me sketching new designs, exploring nature for 
              inspiration, or working on my latest flash sheets. I believe that great tattoos come 
              from understanding both the technical craft and the emotional significance of the art.
            </p>
            <p>
              Ready to start your tattoo journey? I'd love to hear your ideas and help bring your 
              vision to life.
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
        </div>
      </div>
    </div>
  );
}

export default AboutPage;