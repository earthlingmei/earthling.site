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
            Hi, I’m Mei, short for Mei-Ling.
As your fellow Earthling, I see myself as more of a creator than just one thing. But for the purpose of this space, I’m a tattoo artist.
I’m self-taught. I began with handpoke tattoos about 3 years ago now and over the past year, I’ve been working with a rotary machine. 
My work leans toward florals, botanical and abstract forms, though I like to stay free-spirited in what I create.
My roots are in plants and nature, I studied horticulture and spent 10 years as a dedicated landscape architect.
</p>
<p>
  That love for the natural world runs through everything I make, whether it’s a tattoo, a drawing, or a side project.

            </p>
            <p>
            When I’m not tattooing, you’ll probably find me sketching, wandering outside, or simply trying to live a life 
            </p>
            <p>
            If you have a tattoo idea in mind, I’d love to hear it. My DMs on Instagram are always open.
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