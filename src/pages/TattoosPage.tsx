import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram } from 'lucide-react';

// Instagram feed component - this would connect to Instagram API
function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder images while Instagram API is not connected
  const placeholderImages = [
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
  ];

  useEffect(() => {
    // This is where you would fetch from Instagram API
    // For now, using placeholder images
    const fetchInstagramPosts = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real implementation, you would:
        // 1. Use Instagram Basic Display API
        // 2. Or use a service like Instagram Feed API
        // 3. Or use a third-party service like Juicer.io
        
        setPosts(placeholderImages);
        setLoading(false);
      } catch (err) {
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="flash-grid">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="flash-item">
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'rgba(255,255,255,0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.5)'
            }}>
              Loading...
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255,255,255,0.7)' }}>
        <p>{error}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          Showing placeholder images. Connect Instagram API to display live feed.
        </p>
      </div>
    );
  }

  return (
    <div className="flash-grid">
      {posts.map((image, index) => (
        <div key={index} className="flash-item">
          <img src={image} alt={`Instagram post ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

function TattoosPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        {/* Header */}
        <header className="page-header">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>
          <h1 className="page-title">TATTOOS</h1>
        </header>

        {/* Instagram button - top left */}
        <div className="button-container-left">
          <a 
            href="https://instagram.com/earthling_mei" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-button"
          >
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <Instagram size={16} className="button-icon" />
            <span className="button-text">VIEW ON INSTAGRAM</span>
            <div className="highlight-overlay"></div>
          </a>
        </div>

        {/* Instagram feed */}
        <InstagramFeed />

        {/* Note about Instagram integration */}
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.9rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '2rem'
        }}>
          <p>
            To connect your live Instagram feed, you'll need to set up the Instagram Basic Display API 
            or use a service like Juicer.io or SnapWidget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TattoosPage;