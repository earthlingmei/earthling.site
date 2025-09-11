import React, { useEffect } from 'react';

function FlashbookPage() {
  useEffect(() => {
    // Open external website in new tab
    window.open('https://venue.ink/@earthling_mei/flash', '_blank');
    
    // Redirect back to homepage after a short delay
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  }, []);

  return (
    <div className="page-container">
      <div className="page-content">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          textAlign: 'center',
          color: 'var(--color-text-primary)',
          fontFamily: 'Hermit, sans-serif'
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Opening Designs...</h1>
            <p style={{ fontSize: '1rem', opacity: 0.8 }}>
              Taking you to the flashbook gallery in a new tab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashbookPage;