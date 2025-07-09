import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Sample flash designs - replace with your actual images
const flashDesigns = [
  'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616404/pexels-photo-1616404.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616405/pexels-photo-1616405.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616406/pexels-photo-1616406.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616407/pexels-photo-1616407.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616408/pexels-photo-1616408.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616409/pexels-photo-1616409.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616410/pexels-photo-1616410.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616411/pexels-photo-1616411.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616412/pexels-photo-1616412.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616413/pexels-photo-1616413.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616414/pexels-photo-1616414.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616415/pexels-photo-1616415.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616416/pexels-photo-1616416.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616417/pexels-photo-1616417.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616418/pexels-photo-1616418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616419/pexels-photo-1616419.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616420/pexels-photo-1616420.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616421/pexels-photo-1616421.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616422/pexels-photo-1616422.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616423/pexels-photo-1616423.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616424/pexels-photo-1616424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616425/pexels-photo-1616425.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  'https://images.pexels.com/photos/1616426/pexels-photo-1616426.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
];

function FlashbookPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        {/* Header */}
        <header className="page-header">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>
          <h1 className="page-title">FLASHBOOK</h1>
        </header>

        {/* Book button - top left */}
        <div className="button-container-left">
          <Link to="/book" className="action-button">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <span className="button-text">BOOK A TATTOO</span>
            <div className="highlight-overlay"></div>
          </Link>
        </div>

        {/* Flash grid */}
        <div className="flash-grid">
          {flashDesigns.map((image, index) => (
            <div
              key={index}
              className="flash-item"
            >
              <img src={image} alt={`Flash design ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Book button - bottom right */}
        <div className="button-container-right">
          <Link to="/book" className="action-button">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <span className="button-text">BOOK A TATTOO</span>
            <div className="highlight-overlay"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlashbookPage;