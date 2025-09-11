import React, { useEffect } from 'react';

function FlashbookPage() {
  useEffect(() => {
    // Redirect immediately to external website
    window.location.href = 'https://venue.ink/@earthling_mei/flash';
  }, []);

  return null;
}

export default FlashbookPage;