import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-container">
        <span className="toggle-icon sun-icon">☀️</span>
        <div className={`toggle-slider ${theme === 'dark' ? 'dark' : ''}`}>
          <div className="toggle-button"></div>
        </div>
        <span className="toggle-icon moon-icon">🌙</span>
      </div>
      <span className="toggle-label">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
