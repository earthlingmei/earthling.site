import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlashbookPage from './pages/FlashbookPage';
import TattoosPage from './pages/TattoosPage';
import AboutPage from './pages/AboutPage';
import BookPage from './pages/BookPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flashbook" element={<FlashbookPage />} />
        <Route path="/tattoos" element={<TattoosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;