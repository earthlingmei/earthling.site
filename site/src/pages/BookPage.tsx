import React, { useEffect } from 'react';

function BookPage() {
  useEffect(() => {
    // Redirect immediately to external website
    window.location.href = 'https://venue.ink/@earthling_mei';
  }, []);

  return null;
}

export default BookPage;